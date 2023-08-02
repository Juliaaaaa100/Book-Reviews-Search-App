// setting up an event listener for the load event of the window => the load event is triggered when when the entire page has finsihedd loading

window.onload = (e) => {
    // select the form element and listen to the submit event
    document.querySelector('#form').addEventListener('submit', (e) => {
    // the form submisin to the server is blocked until the data is fetched - prevents reloading the page over and over again
      e.preventDefault()
      const userInput = document.querySelector('input[type="text"]').value
    // console.log(userInput)


    document.querySelector.add

    // using FETCH the built-in function that allows me to make a network request and fetch data from the New York Times API - remote server => it returns a promise => then a Response Object
      fetch(`https://api.nytimes.com/svc/books/v3/reviews.json?author=${encodeURIComponent(userInput)}&api-key=AmXVIP0Low9IeBe3Tv5eEGFyfUMSDJxl`)   // encodeURIComponent() function encodes a URI by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character => basically it prevents potential issues with the request due to naming  
      
      //if successful parse the response as json
        .then((data) => {
            return data.json()
        }, (err) => {
                console.log(err, 'An error occurred while fetching data')
        }) .then((data) => {
          const resultsContainer = document.querySelector('#results')
          resultsContainer.innerHTML = '' // after successully parsing the json data the code retrives the html element with the id results and sets it to an empty strig in order to clear any previous content
  
          if (data.status === 'OK' && data.num_results > 0) {
            // if both conditions are true, then it means that there are reviews available 
            const reviews = data.results // create variable to hold the array of reviews
            for (let i = 0; i < reviews.length; i++){
            const review = reviews[i]
            const reviewElement = document.createElement('div') // creates a new div element as a container for the review's info
            reviewElement.classList.add('review') // useful for styling purposes

            const titleElement = document.createElement('p')
            titleElement.textContent = `Book Title: ${review.book_title}`
            reviewElement.appendChild(titleElement)

            // const authorElement = document.createElement('p')
            // authorElement.textContent = `Author: ${review.book_author}`
            // reviewElement.appendChild(authorElement)

            const summaryElement = document.createElement('p')
            summaryElement.textContent = `Book Review: ${review.summary}`
            reviewElement.appendChild(summaryElement)

            const linkElement = document.createElement('a')
            linkElement.href = review.url
            linkElement.textContent = 'Read the full review'
            reviewElement.appendChild(linkElement)

            resultsContainer.appendChild(reviewElement)
        }
          } else {
            resultsContainer.innerHTML = 'No reviews found for this author.'
            // resultsContainer.classList.add('error-animation')
          }
        })
    const carteInchisa = document.querySelector('.carte_inchisa')
    const carteDeschisa = document.querySelector('.carte_deschisa')
    carteInchisa.style.display = 'none' // Hide the closed book image
    carteDeschisa.style.display = 'block' // Show the open book image

        
    })
    }
 
  







// window.onload = (e) => {
//     document.querySelector('form').addEventListener('submit', (e) => {
//         e.preventDefault()

//         const userInput = document.querySelector('input[type="text"]').value 
//         console.log(userInput)
    //     fetch(`https://api.nytimes.com/svc/books/v3/reviews.json?author=${userInput}&api-key=AmXVIP0Low9IeBe3Tv5eEGFyfUMSDJxl`).
    //     then((data)=>{
    //         return data.json()
    //     }, (err) => {
    //         console.log(err, 'ERROR')
    //     }).then((data) => {
    //         document.querySelector('#Title').innerHTML = data.results[0].book_title
    //         document.querySelector('#Author').innerHTML = data.results[0].book_author
    // })
//   })
// }

// window.onload = (e) => {
//     document.querySelector('form').addEventListener('submit', (e) => {
//         e.preventDefault()

//         const userInput = document.querySelector('input[type="text"]').value 
//         console.log(userInput)
//         fetch(`https://api.nytimes.com/svc/books/v3/reviews.json?author=${userInput}&api-key=AmXVIP0Low9IeBe3Tv5eEGFyfUMSDJxl`).
//         then((data)=>{
//             return data.json()
//         }, (err) => {
//             console.log(err, 'ERROR')
//         }).then((data) => {
//             document.querySelector('#Title').innerHTML = data.title
//             document.querySelector('#Author').innerHTML = data.author
//     })
//   })
// }


// const apiKey = 'AmXVIP0Low9IeBe3Tv5eEGFyfUMSDJxl';

// // Get the author's name from the user
// const authorName = prompt('Enter the name of the author:');

// if (authorName) {
//   const apiUrl = `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?author=${authorName}&api-key=${apiKey}`;

//  
//     });
// } else {
//   console.log('Author name not entered.');
// }







