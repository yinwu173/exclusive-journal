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
    // in order to stor in local storage, it needs to be simple data type so we used JSON
    localStorage.setItem('blogDetail', JSON.stringify(blogDetail));
});





// step 3: cuntion one, take in the inputs and localStorage.setItem(). Once down, need to flow
// to next function whichis another page - blog page (redirected). In the same function, a rule: if
// empty "return" - prompted with an alert.