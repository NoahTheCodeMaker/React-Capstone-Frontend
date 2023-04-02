# This Repository was for my successful attempt to learn React.js
I wanted to create a frontend for the flask API that I had to built to get my Udacity Nanodegree, and this was the result of my testing!

## Running Locally
To run this frontend, stand up the backend, and then run the following commands in the root folder. (Assuming you already have Node installed, which can be found at https://nodejs.org/en/download")
```
npm install
npm start
```

## Permissions
As pretty much all of the API Interactions require permissions, if you want to test out the interactions, you can simply remove the permission declaration in the requires_auth decorator in the backend, and this will allow you to use the endpoints as long as you have created an account by using the login button on the account page

## Running on Mac
I tested this on mac and it seems to give a lot of errors whenever using localhost:5000 for the flask API. After researching on this, it seems to be caused by an "Airplay Receiver listening on Port 5000". To resolve this issue, you can either change the port which the flask API is running on with flask run -p NNNN and change all API calls in the frontend, or disable the AirPlay receiver in settings. See the apple forum below on this issue.
https://developer.apple.com/forums/thread/693768

## React StrictMode
As I was testing with this app, I realized that many of my API calls using the UseEffect React Hook were doubled. This was troubling to me for optimization reasons (not because it really matters because this app is purely for me and for fun, but more for me as a developer). After some digging, I found out that this is because of React StrictMode, which causes UseEffect to "run one extra development-only setup+cleanup cycle before the first real setup." After removing React StrictMode, the API calls only happen once. This is also the reason that the alerts come up twice while using any endpoints that use the UseEffect React Hook. See the following link for more information: https://react.dev/reference/react/useEffect