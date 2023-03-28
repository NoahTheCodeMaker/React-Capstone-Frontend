# This Repository was for my successful attempt to learn React.js
I wanted to create a frontend for the flask API that I had to built to get my Udacity Nanodegree, and this was the result of my testing!
## Running Locally
To run this frontend, stand up the backend, and then run the following commands in the root folder. (Assuming you already have Node Package Manager installed)
```
npm install
npm start
```
## Permissions
As pretty much all of the API Interactions require permissions, if you want to test out the interactions, you can simply remove the permission declaration in the requires_auth decorator in the backend, and this will allow you to use the endpoints as long as you have created an account by using the login button on the account page
## Running on Mac
I tested this on mac and it seems to give a lot of errors whenever using localhost:5000 for the flask API. After researching on this, it seems to be caused by an "Airplay Receiver listening on Port 5000". To resolve this issue, you can either change the port which the flask API is running on with flask run -p NNNN and change all API calls in the frontend, or disable the AirPlay receiver in settings. See the apple forum below on this issue.
https://developer.apple.com/forums/thread/693768