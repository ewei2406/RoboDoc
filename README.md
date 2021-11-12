# RoboDoc

Try it here!
https://hackdukesubmission.herokuapp.com/

## Inspiration
The process for self-diagnosis on google is tedious, and especially for those with less sufficient google skills (older generations), it may be easy to fall prey to misinformation.

## What it does
RoboDoc is a simple web app that takes user input, applies simple languages processing, and returns what it believe the symptoms might match with. 

## How we built it
Trained a Keras model in Google Colab on a disease-symptom database from Columbia; did symptom-text conversion using (Unified Medical Language System) UMLS. Backend build in Node.js and model deployed using Tensorflow.js. Frontend built using React. 

## Source
The React frontend is in branch 'frontend',
The Node.js backend is in branch 'backend'
