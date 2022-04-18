<h1 align= "center" dir="auto">
  🐣 Welcome to Duckit List! 🐣
</h1>
<h5 align= "center" dir="auto">
  Creators:
      <a href="https://github.com/celestewinterton">Celeste Winterton</a>
      ,
      <a href="https://github.com/Shin-Jae">Jae Shin</a>
      ,
      <a href="https://github.com/Joon-Bae">Joon Bae</a>
      ,
      <a href="https://github.com/vee-alianza">Vee Alianza</a>
      </br>
      <a href="https://duckit-list.herokuapp.com/">» Live Link «</a>
</h5>


## YOLO
Anything is posisble, especially when you write it down. With Duckit List, you can create, view, update and share your bucket lists of adventures, travels, life-long goals and many more!

<h4 align= "center" dir="auto">
  <a href="https://github.com/Shin-Jae/Duckit-List/wiki">» Explore the Wiki «</a>
</h4>

### Table of Contents
- [Key Features](#Key-Features)
- [Technologies](#technologies)
- [Overview of application architecture](#overview-of-application-architecture)

### Key Features
Utilizes API routes to render elements, such as, updating and removing a user's Duckit lists and Duckit tasks
### Technologies
#### Frontend
- JavaScript
- PUGjs
- CSS
#### Backend
- Sequelize(PosgreSQL)
- Express
- cookie-parser/csurf
- bcrypt.js
#### Deployed on
- Heroku
### Overview of application architecture



### Front End Overview
The front end was structured using PUGjs while utilizing HTML and CSS to style. It also showcases DOM manipulation elements that allow the page to be responsive to the user input. These features include viewing the user's Duckit lists, incompleted Duckit tasks and completed Duckit tasks, as well as editing and deleting Duckit lists and Duckit tasks.

### Back End Overview
The back end was built using Express, a collection of routes that serves information to the client and intercats with our databse.

We also used Sequelize, an ORM, to interact with our database by generating our models and applying necessary associations to allow data sharing between tables. Then seeded data to display features for demonstration purposes.

### Conclusion
Duckit List was created with great teamwork in collaboration between an amazing group of people.

The following stages are to implement the "follows", "likes" and "comments" features to allow users to interact with one another and gain inspirations for their next adventure!
