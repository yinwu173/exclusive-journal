// step 1: global variables will go here, targeting the inputs and the button
const textInput = document.querySelector('#text-input');
const submitBtn = document.querySelector('#submit');


// step 2: create event listener for the submit button, listener sends to function one
submitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const blogDetail = {
        username: username.value,
        title: title.value,
        content: content.value,
    };

    // check if any of the forms are empty
    if (!username || !title || !content) {
        // prevent the form for resubmitting and clearing the inputed data
        event.preventDefault()
        
        // if empty, prompt an alert
        alert("Please fill in all sections of the form.");
        return;
    }

    // in order to store in local storage, it needs to be simple data type so we used JSON
    // sets submission to local storage
    localStorage.setItem('blogDetail', JSON.stringify(blogDetail));


    // when submit button is clicked, it will redirect me to the blog page
    window.location.href = 'blog.html'
});