import requests
import json
import gradio as gr

# URL for the model API
url = "http://localhost:11434/api/generate"

# Headers for the API request
headers = {
    'content-Type': 'application/json',
}

# Initial conversation history
conversation_history = []

# System prompt to set the behavior of the chatbot
system_prompt = "You are an AI assistant that provides helpful, concise, and accurate information."  # Customize this as needed

# Function to generate a response from the model
def response_generator(prompt):
    # Add the user's prompt to the conversation history
    conversation_history.append(prompt)
    
    # Prepare the complete prompt with system instructions
    complete_prompt = system_prompt + "\n" + "\n".join(conversation_history)

    # Prepare the data payload for the API request
    data = {
        "model": "llama3.1",
        "stream": False,
        "prompt": complete_prompt
    }

    # Send a POST request to the model API
    response = requests.post(url, headers=headers, data=json.dumps(data))

    # Handle the response from the API
    if response.status_code == 200:
        response_text = response.text
        data = json.loads(response_text)
        true_response = data["response"]
        
        # Add the model's response to the conversation history
        conversation_history.append(true_response)
        return true_response
    else:
        print("Error:", response.status_code, response.text)
        return None

# Gradio interface to interact with the chatbot
iface = gr.Interface(fn=response_generator,
                     inputs=gr.Textbox(lines=2, placeholder="Ask Me Anything"),
                     outputs="text"
)

# Launch the Gradio interface
iface.launch()
