# New York Times Book Reviews Search

Check it out : https://sunny-meerkat-1ca451.netlify.app/

New York Times API : https://developer.nytimes.com/docs/books-product/1/routes/reviews.json/get 

Testing the API: 
Eg: Michelle Obama
https://api.nytimes.com/svc/books/v3/reviews.json?author=Michelle%20Obama&api-key=AmXVIP0Low9IeBe3Tv5eEGFyfUMSDJxl

<img width="1282" alt="Screenshot 2023-08-01 at 02 25 45" src="https://github.com/Juliaaaaa100/Book-Finder-App/assets/119536668/945d52cc-6881-458a-a2c9-caa980ba41d2">

# New York Times Book Reviews Search

This project allows you to search for a book name and its reviews from the New York Times API using the author's name.

The user can input an author's name in the provided text field, and upon clicking the "Search" button, the application fetches data from the API and displays the book reviews, if available.

# How it works

When the page loads, it sets up an event listener for the form submit event.
When the form is submitted, the default form submission to the server is prevented, avoiding page reloading.
The user input (author's name) is fetched from the input field.
Using the fetch function, a network request is made to the New York Times API, searching for book reviews based on the author's name.
The response is parsed as JSON.
If the API response status is "OK" and there are reviews available, the reviews are displayed on the page.
If there are no reviews found for the given author, a corresponding message is displayed.
The page also includes a rotating star animation.

# How to use
Go to the provided link: https://sunny-meerkat-1ca451.netlify.app/
Enter the name of the author in the "Author" text input field.
Click the "Search" button.
The book reviews, if available, will be displayed below the form.

# Technologies Used
HTML
CSS
JavaScript

# Folder Structure
The project consists of the following files:
- **index.html**: The HTML file containing the structure of the web page.
- **style.css:** The CSS file containing the styles for the web page elements.
- **app.js: **The JavaScript file containing the logic for fetching data from the New York Times API and displaying the book reviews.

# Note
The rotating star animation is implemented using CSS keyframes.

# Additional Features
The web page also includes links to the following social media platforms:
Instagram
Facebook
Twitter

![Screenshot 2023-08-02 at 20 21 01](https://github.com/Juliaaaaa100/Book-Finder-App/assets/119536668/ab849902-1c67-4b91-9d4e-934afa1039c2)


