# Travel Project

##Overview
This project requires you to create a Travel project uses various webpack features, and 
also incorporate the API and post/update skills 
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls
- Post the data from API calls to the server 
- Update the UI using the server data object

Instructions
- to run with webpack dev server, type "npm run build-dev-server"
- to build in dev mode, type "npm run build-dev" (if for some reason you do not want to trigger the dev server)
- to build in production mode, type "npm run build-prod"
- to run the app on port 8082, type "npm run start"
- to run jest, type "npm run test"

## Special Installation notes:
- Since this project uses some webpack 4 features which are depreciated, 
to ensure it works for you, you should use "npm i --leacy-peer-deps".
- Also, I have a git ignore .env file which I stored my API key. You should
go to http://api.geonames.org, https://api.weatherbit.io, and https://pixabay.com to grab your own API key.
- Once you get your API key, replace the key value in .env.example and rename it to
.env

##Technology Used
Javascript, html, css, webpack

##Author
Tsai-Ting Wang

##Credits
Base Version is provided by Udacity

