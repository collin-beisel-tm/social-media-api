# Social Media APi

 ![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)

 ## Table of Contents
  * [Links](#links)
  * [Description](#app-descriptino)
  * [Technologies Used](#technologies-used)
  * [Why I Built](#why-did-i-build-this-project)
  * [What I learned](#what-did-i-learn)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#tests)
  * [User Story](#User-Story)
  * [Acceptance Criteria](#acceptance-criteria)

![Insomnia Screenshot](https://github.com/collin-beisel-tm/social-media-api/blob/main/assets/screenshot.PNG)

## Links
 - Github Repo: https://github.com/collin-beisel-tm/social-media-api
 - Video Demo Pt.1: https://drive.google.com/file/d/17OADTbGVYauUR_c_40xm_-dn_luCgtax/view
 - Video Demo Pt.2: https://drive.google.com/file/d/1XN4mF0joExGtyIuq2VBdiKGrXUs6pKFM/view
## App Description

Social Media API is a set of api endpoints that you can use as the backend for your social media application. It uses mongoDb and Mongoose and would allow your app to create new users, associate friends, create new posts, and comments on those posts.

## Technologies used
- JavaScript
- Node.js
- Express.js
- MongoDb
- Mongoose
- Git/GitHub

## Why did I build this project?
I built this project as a bootcamp assignment. 

## What did I learn?
This project taught me how to use MongoDB and Mongoose to create a back end.

## Installation
 - Navigate to https://github.com/collin-beisel-tm/social-media-api
 - click the download/clone the package
 - Open with your favorite code editor
 - Run NPM i
 - run npm start
 - The app will start
 - Hit routes through postman/insomnia
 - Connect your front end

## license
MIT License

Copyright (c) [2021] [CollinBeisel]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## User Story
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list


