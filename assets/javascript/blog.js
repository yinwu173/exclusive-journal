// for the blog and listing them
// for the back button
function backButton() {
    window.history.back()
};

const blogList = document.querySelector('blog-list');

function renderBlog() {
    // get stored data from local storage
    const storedBlogDetail = JSON.parse(localStorage.getItem('storedBlogDetail')) || [];
}