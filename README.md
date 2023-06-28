# messaging-app2
[Click Here](https://messaging-app-gurg.onrender.com/) to visit Messaging App

# About
I have created a messaging app allowing users to message each other in real-time utilising the socket.io framework. Originally, I tried creating my app with a React frontend however I didn’t understand React as well as I thought I did and was having massive troubles trying to get it to work the way I wanted it to, so Tuesday morning (today is Thursday morning) I decided to scrap what I had and recreate my app as a Express Single Page Application.

Here is the previous project: https://github.com/AntalThomas/messaging-app


# How to Use
1.	A user will login or create an account.
2.	Once logged in all other created users will be shown.
3.	The user can choose somebody on the screen or search for their specific friend in the input.
4.	Once a user has found the friend, they want to talk to they click on their name.
5.	Any previous messages between the user and the friend are loaded.
6.	The user can start messaging the friend.
7.	If the friend is logged in too they can open the chat with the user.
8.	In real-time the user and the friend will be able to send messages to each other.
9.	Users are then able to log out by clicking the back arrow button then the logout button.

# Technology/Modules Used
- HTML/CSS
- Javascript
- Express
- Node.js
- Socket.io
- PSQL
- Render

## Wireframes 
![](./Wireframes/Sign%20Up%20Wireframe.png)
![](./Wireframes/Login%20Wireframe.png)
![](./Wireframes/All%20chats%20Wireframe.png)
![](./Wireframes/Inside%20a%20chat%20Wireframe.png)

# Bugs
Currently when a user first creates their account the state isn't updated until they login and out again.
If no chats are found "undefined" is shown on the screen. ✅
User name is not shown when you go inside a chat or on messages sent.
Sockets haven't been set up so messaging isn't in realtime. ✅
If you reload the page the user is logged out.
Sometimes all the messages between 2 users aren't being retrieved by the SQL command.
When inside a chat the friends name and icon isn't shown.
The users icon doesn't show in front of the message they sent.

# Struggles
If I could redo it again I would prefer to not use React. I am just not experienced enough with it. If I just went with a SPA just using NodeJS and Express I would've had a smoother development experience.
User authentication and use of async/await functions was a massive issue for me early on. *Before I changed completely*

I struggled so much I decided to start again and just recreate the app as an Express SPA without React.

It wasn't really that hard in the end to get socket.io to work for me, the hard part was just getting it to work in the way I wanted it to.

I at some point was resetting the friends id to nothing which was causing so many problems and I didn't realise for a couple days unfortunately so hopefully thats solved many of my issues.

# Future Features
- Most recent message sent shown when choosing friend.
- Bubble showing that the recent message has been unread.
- Edit/Delete messages already sent.
- Group Chats.

# Resources used
https://legacy.reactjs.org/docs/handling-events.html
https://stackoverflow.com/questions/44221250/redirecting-to-a-page-after-submitting-form-in-html
https://fontjoy.com/
https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/
https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
https://socket.io/ 
https://stackoverflow.com/questions/58378007/adding-socket-io-to-an-existing-express-project-with-react-on-the-front 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim 
https://stackoverflow.com/questions/270612/scroll-to-bottom-of-div
https://www.youtube.com/watch?v=li7FzDHYZpc
https://www.youtube.com/watch?v=zWSvb5t_zH4