from flask import Flask, render_template, request, jsonify
from gpt_response_generator import GPTResponseGenerator
from flask_cors import CORS

# App instance
app = Flask(__name__)

CORS(app)


@app.route('/')
def index():
    return render_template('page.tsx')


@app.route('/api/get', methods=['GET'])
def get_bot_response():
    message = request.args.get('msg')
    response = ""
    if message:
        gpt_answer, rag_answer = GPTResponseGenerator.gpt_rag_response(message)
        if gpt_answer == "none":
            response = rag_answer
            return response
        elif rag_answer == "none":
            response = gpt_answer
            return response
        elif gpt_answer and rag_answer:
            response = gpt_answer + " " + rag_answer
            return response


if __name__ == "__main__":
    app.run(debug=True, port=8080)