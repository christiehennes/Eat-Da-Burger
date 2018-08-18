# Eat Da Burger

[Deployed on Heroku](https://whispering-forest-52131.herokuapp.com/)

## Instructions

* Enter a burger name in the input field to add it to the list of edible burgers
* When you devour a burger, it will be added to the list on the right side to show what you have eaten
* Repeat this as many times as you want! 


## Project Design

* This app uses node.js, express, handlebars, and mysql to display and data, interact with it, and update it
* This app uses ORM to structure the content, controllers, models, views, etc
* The database is initalized with a few different burger options to begin, both the schema and seed files are included on GitHub
* This app used node, express, handlebars to render the views, and mysql to store the data 
* Every time a new burger is added, it gets added to the database with a flag whether it has been eaten 
* Handlebars renders two different lists of burgers, those that can be eaten and those that can't
* Every interaction uses a series of methods from the modal and controller files to make the app add and update data correctly
