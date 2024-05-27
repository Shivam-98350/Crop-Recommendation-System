from flask import Flask, render_template, request, jsonify
import numpy as np
import pickle
import warnings
from flask_cors import CORS

warnings.filterwarnings('ignore')

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the pickled model and scaler
with open('rsf-model.pkl', 'rb') as file:
    model = pickle.load(file)
with open('label_encoder.pkl', 'rb') as file:
    scaler = pickle.load(file)
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/predict', methods=['POST'])
def predict():
  pass

@app.route('/output', methods=['GET'])
def output():
  pass

if __name__ == '__main__':
    app.run()
