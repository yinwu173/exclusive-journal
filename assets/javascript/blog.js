// for the blog and listing them
// for the back button
function backButton() {
    window.history.back()
};

const blogList = document.querySelector('blog-list');

function renderBlog() {
    // get stored data from local storage
    // use JSON.parse() to convert text to javascript object
    const storedBlogEntries = JSON.parse(localStorage.getItem('blogEntries'));
    // if there is stored blog entries 
    if (storedBlogEntries.length > 0) {

    } else {
        
    }
}

renderBlog();