# Book & Reviews Search App

Check it out : https://sunny-meerkat-1ca451.netlify.app/

# Technologies Used

  - HTML
  - CSS
  - JavaScript
* 
  - Remix Icon library's CSS file
  - New York Times API : https://developer.nytimes.com/docs/books-product/1/routes/reviews.json/get 
  - CSS keyframes.


# New York Times Book Reviews Search

This project allows you to search for a book name and its reviews from the New York Times API using the author's name.

The user can choose an author name an input it in the provided field. After clicking the "Search" button, the app fetches the data from the New York Times API and displays the book reviews, if available.

# How it works - Explain the technical details

An event listenr was set up when the page loads. This was done to prevent the default form submission to the server, avoiding page reloading.
The user input (author's name) is fetched from the input field.
Using the fetch function, a network request is made to the New York Times API, searching for book reviews based on the author's name.
The response is parsed as JSON.
If the API response status is "OK" and there are reviews available for the author, they are displayed on the page.
If there are no reviews found for the given author, a corresponding message is displayed.
The rotating star animation is implemented using CSS keyframes.
For social media Icons + links were implementing using the Remix Icon library's CSS file. Remix Icon is a popular open-source icon library that provides a vast collection of icons for use in web development projects.

# Explain the technical challenges
- Getting the right data through the API - In 2021, the New York Times decided to no longer support personal use of their API, resulting in the removal of their API Tool.

- Creating the logic to retrieve the author's book and review through the reviews path.
  
# Explain which improvements you might make
- Add links to the online stores that are selling the book.
- Style the results on the page by adding an image of the book cover.
- Save searches in the database to track user behavior.


# How to use
Go to the provided link: https://sunny-meerkat-1ca451.netlify.app/
Enter the name of the author in the "Author" text input field and press the "Search" button


# Folder Structure
The project consists of the following files:
    - **style.css:** The CSS file containing the styles for the web page elements
    - **index.html**: The HTML file containing the structure of the web page
    - **app.js:** The JavaScript file containing the logic for fetching data from the New York Times API and displaying the book reviews


# Additional Features
The web page also includes links to the following social media platforms:
    Instagram
    Facebook
    Twitter




