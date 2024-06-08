import json
import gpt_response_generator
import intent_classification
from gpt_response_generator import GPTResponseGenerator
from langchain.callbacks.manager import CallbackManagerForLLMRun
from langchain_core.language_models.llms import LLM
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory


#Load json embedded dataset
rag_embedded_dataset =  r"C:\Users\HP\naibot\RAG_data\rag_embedded_dataset.json"
with open(rag_embedded_dataset, 'r') as file:
    rag_embedded_dataset = json.load(file)

#Load Langchain Memory Buffer 

def gpt_rag_response(gpt_prompt, rag_embedded_dataset = rag_embedded_dataset):
    # predict intent
    user_intent = intent_classification.predict_intent(gpt_prompt)
    print(f"User intent is: {user_intent}")
    for intent in rag_embedded_dataset["intents"]:
        if user_intent == intent['tag']:
            if user_intent == "general_intent":
                gpt_answer = gpt_response_generator.generate_text(gpt_prompt)
                rag_answer = "none"
                return gpt_answer, rag_answer
            elif user_intent == "not_allowed":
                gpt_answer = "none"
                rag_answer = intent['responses'][0]
                return gpt_answer, rag_answer
            else:
                gpt_answer = gpt_response_generator.generate_text(gpt_prompt)
                rag_answer = intent['responses'][0]
                return gpt_answer, rag_answer