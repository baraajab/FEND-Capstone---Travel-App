# Udacity Project:  
Author: "Baraa Jabareen"  age : 22
# Evaluate a news article with Natural Language Processing

## What We will be building

We are going to develop a web tool that enables users to perform Natural Language Processing on articles or blogs from various websites. By leveraging the Aylien API, we can create a simple web interface to interact with their NLP system. This tool will provide valuable insights about the article, such as whether the content is subjective (opinion-based) or objective (fact-based) and determine its overall sentiment—positive, neutral, or negative.

For the backend, we will use Node.js and Express to handle the web server and routing, while Webpack will be our chosen build tool. With Webpack, we will configure the application for both development and production environments, each with its own set of tools and commands.

Additionally, we will incorporate Jest to test our routes and other JavaScript functions within the application.

# @@ this commons from the udacity project i take it from githup.
# Project Instructions

This repo is your starter code for the project. It is the same as the starter code we began with in lesson 2. Install and configure Webpack just as we did in the course. Feel free to refer to the course repo as you build this one, and remember to make frequent commits and to create and merge branches as necessary!

The goal of this project is to give you practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

On top of that, I want to introduce you to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called Aylien has put a public facing API in front of their NLP system. We will use it in this project to determine various attributes of an article or blog post.

## Getting started

It would probably be good to first get your basic project setup and functioning. Follow the steps from the course up to Lesson 4 but don't add Service Workers just yet. We won't need the service workers during development and having extra caches floating around just means there's more potential for confusion. So, fork this repo and begin your project setup.

Remember that once you clone, you will still need to install everything:

`cd` into your new folder and run:
- `npm install`

### Step 1: Signup for an API key

**For the MeaningCloud API**: You can find the API [here](https://www.meaningcloud.com/developer/sentiment-analysis). Once you create an account with MeaningCloud, you will be given a license key to start using the API. This API does not require an SDK, so you can skip ahead to step 4 in the instructions. but i dont know why this web is not work i mean (www.meaningcloud.com).

## Run project
Below shows how to run in development and production mode.
### run in development mode
To start the webpack dev server at port 8080

` $ npm run build-dev`

### run in production mode
Generate the dist files and then start server at port 8000

` $ npm run build-prod`

` $ npm run start`

## Configs
Here, we have two webpack config files for both development mode(`webpack.dev.js`) and production mode(`webpack.prod.js` )

We also have a `package.json` to manage dependencies


## API
from meaning cloude we take the api :
1-url
2-key


## Testing

Testing is done with Jest. To run test, use the command 

`npm run test`. 




### Home page

It is a single page web app. It has a single form input field that accepts user input(URL), then runs a check to make sure it is a valid URL. If it is not a valid URL, the following message will be displayed;

### Invalid URL message

give the errors by use code .

### API response

The page built for this project is a simple one. It has a form with a single filed which receives an input. This input is checked for valid url. A helpful error message is displayed for invalid url. If the url is valid, then an api call is performed and the result displayed on the page.

