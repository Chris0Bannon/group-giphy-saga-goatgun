# Project Title

This app allows a user to search the giphy data base for gifs.  A user can favorite the search results and see their favorites on a favorite view.  Favorites can also be categorized into preset or user made categories. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

Needed software

```
node.js
SQL
Postico
```

### Installing

Fork and Clone
```
npm install
```
Create database "giphy_search_favorites" and add tables "favorite" and "category" (see database.sql file).
There are also some INSERT INTO sample queries for each table provided in the database.sql file that you can run to add starting data.
```
You will need to create a .env file in the project folder and enter an API_KEY (not provided)
```
npm run server
npm run client
```

## Using the App
The app will open on the Search page. Enter search criteria, then click the submit button.
Next to the search result, click the I Love It button to save as a Favorite.

Click Categories in the nav bar to see the available categories.
To Add a category, simply enter the new category into the input field, then click Add.
Click Delete to remove an existing category,
Click Edit to update an existing category. The current name will appear in the input field. Change the value, then click Add.

Click Favorites in the nav bar to see your saved GIFs.
The current category, if applicable, will appear next to the GIF.
In the Change Category column, select a category in the dropdown, then click Add Category.
Click Remove to delete a GIF from favorites.

## Built With

* React
* Redux
* Redux-saga
* Postgresql
* Material-UI


## Authors

Wherewolfe35
AHoldahl
Chris0Bannon
maddisonbruckelmyer01

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc


