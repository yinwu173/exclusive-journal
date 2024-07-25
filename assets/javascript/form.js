// step 1: global variables will go here, targeting the inputs and the button
const textInput = document.querySelector('#text-input');
const submitBtn = document.querySelector('#submit');


// step 2: create event listener for the submit button, listener sends to function one
textInput.addEventListener('submit', function (event) {
    event.preventDefault();

    // get the input values
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // check if any of the forms are empty
    if (!username || !title || !content) {
        // prevent the form for resubmitting and clearing the inputed data
        event.preventDefault()
        
        // if empty, prompt an alert
        alert("Please fill in all sections of the form.");
        return;
    }

    // another object to get the input with values
    const blogDetail = {
        username: username,
        title: title,
        content: content,
    };

    // step 3: store inputs to local storage
    const storedBlogDetail = JSON.parse(localStorage.getItem('storedBlogDetail')) || [];
    // adds to the original array
    storedBlogDetail.push('blogDetail');

    // in order to store in local storage, it needs to be simple data type so we used JSON
    // sets submission to local storage
    localStorage.setItem('blogDetail', JSON.stringify(blogDetail));


    // when submit button is clicked, it will redirect me to the blog page
    window.location.href = 'blog.html'
});