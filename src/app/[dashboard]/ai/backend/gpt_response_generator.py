# gpt_response_generator.py

from transformers import GPT2LMHeadModel, GPT2Tokenizer
import torch



class GPTResponseGenerator:
    def __init__(self, model_dir):
        """
        Initialize the GPTResponseGenerator with a specified model directory.
        
        :param model_dir: The directory containing the fine-tuned model and tokenizer.
        """
        self.tokenizer = GPT2Tokenizer.from_pretrained(model_dir)
        self.model = GPT2LMHeadModel.from_pretrained(model_dir)
        self.model.eval()  # Set the model to evaluation mode

    def generate_response(self, prompt, max_length=50, num_return_sequences=1):
        """
        Generate a response given an input prompt.
        
        :param prompt: The input text prompt.
        :param max_length: The maximum length of the generated response.
        :param num_return_sequences: The number of responses to generate.
        :return: List of generated responses.
        """
        inputs = self.tokenizer.encode(prompt, return_tensors='pt')
        outputs = self.model.generate(
            inputs, 
            max_length=max_length, 
            num_return_sequences=num_return_sequences,
            no_repeat_ngram_size=2,  # Avoid repeating n-grams
            early_stopping=True  # Stop early if end-of-sequence token is produced
        )

        responses = [self.tokenizer.decode(output, skip_special_tokens=True) for output in outputs]
        return responses

if __name__ == "__main__":
    model_dir = r'C:\Users\HP\naibot\Finetuned_output'
    generator = GPTResponseGenerator(model_dir)
 
