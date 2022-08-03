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

- View completed task from all users

<img width="1427" alt="Screen Shot 2022-08-03 at 11 53 44 AM" src="https://user-images.githubusercontent.com/95829246/182654319-ac9bcffc-768b-4293-b3eb-341ddf986695.png">

- Create category and task

<img width="448" alt="Screen Shot 2022-08-03 at 11 54 12 AM" src="https://user-images.githubusercontent.com/95829246/182654339-5777571f-d4e7-4e6e-8ee9-bc23d549481c.png">

<img width="1400" alt="Screen Shot 2022-08-03 at 11 54 25 AM" src="https://user-images.githubusercontent.com/95829246/182654364-f6811e02-1b40-4bde-97a0-24da33f40fec.png">

- View and Update incomplete and completed tasks

<img width="496" alt="Screen Shot 2022-08-03 at 11 55 24 AM" src="https://user-images.githubusercontent.com/95829246/182654478-3a4959a9-f5b1-435c-8a96-8eb714174f74.png">

<img width="698" alt="Screen Shot 2022-08-03 at 11 55 31 AM" src="https://user-images.githubusercontent.com/95829246/182654488-edb98699-fd09-4cde-9602-9420bebd64a1.png">

<img width="438" alt="Screen Shot 2022-08-03 at 11 55 42 AM" src="https://user-images.githubusercontent.com/95829246/182654503-4b3094ac-528c-4bc4-a668-4ad909576088.png">



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
![image](https://user-images.githubusercontent.com/92604480/163756036-6a075466-7410-4a22-aa6d-8325a83b058f.png)

### Front End Overview
The front end was structured using PUGjs while utilizing HTML and CSS to style. It also showcases DOM manipulation elements that allow the page to be responsive to the user input. These features include viewing the user's Duckit lists, incompleted Duckit tasks and completed Duckit tasks, as well as editing and deleting Duckit lists and Duckit tasks.

### Back End Overview
The back end was built using Express, a collection of routes that serves information to the client and intercats with our databse.

We also used Sequelize, an ORM, to interact with our database by generating our models and applying necessary associations to allow data sharing between tables. Then seeded data to display features for demonstration purposes.

### Conclusion
Duckit List was created with great teamwork in collaboration between an amazing group of people.

The following stages are to implement the "follows", "likes" and "comments" features to allow users to interact with one another and gain inspirations for their next adventure!
