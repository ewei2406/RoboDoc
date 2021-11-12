# RoboDoc
Submitted to: HackDuke 2021

Try it here!
https://eweirobodoc.herokuapp.com/

## Inspiration
The process for self-diagnosis on google is tedious, and especially for those with less sufficient google skills (older generations), it may be easy to fall prey to misinformation.

## What it does
RoboDoc is a simple web app that takes user input, applies basic languages processing, and returns what it believes the symptoms might match with. 

## How I built it
- [Trained a Keras model](training/model_training.ipynb) on the [Columbia Disease-Symptom Knowledge Database](https://people.dbmi.columbia.edu/~friedma/Projects/DiseaseSymptomKB/index.html): 
  > Knowledge database of disease-symptom associations generated by an automated method based on information in textual discharge summaries of patients at New York Presbyterian Hospital admitted during 2004.

- Symptom-text conversion using (Unified Medical Language System) [UMLS](https://www.nlm.nih.gov/research/umls/index.html). 

- [Backend](backend) built in Node.js with Express.

- Keras model weights served from backend and loaded on client-end using TensorflowJS to reduce server load.

- [Frontend](frontend) build using React.

- App deployed on Heroku.
