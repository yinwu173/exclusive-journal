# A Personal Blog

## About the Project

* This project aims to create a personal blog where the user can showcase their thoughts and experiences.

## Acceptance Criteria

* It is done once the user is presented with the landing page containing a form with labels for username, blog title, and blog content when the page is loaded. 

* It is done when the blog post data is stored to localStorage once the user submits the form. 

* It is done once the user is redirected to the posts page when the form submits. 

* It is done once the user is presented with a message that prompts them to complete the form if they try to submit a form without a username, title, or content.

* It is done when the user is presented with a header, with a light mode/dark mode toggle, and a "Back" button when they view the posts page.

* It is done once the page content’s styles update to reflect the selection when the user clicks the light mode/dark mode toggle. 

* It is done once the user is redirected back to the landing page where they can input more blog entries when the “Back” button is clicked. 

* It is done once the user is presented with a list of blog posts that are pulled from localStorage when they view the main content.

* It is done once the user is presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content when they view the localStorage.

* It is done once the user can see the title, the content, and the author of the post when they take a closer look at a single blog entry in the list. 

* It is done once the user is presented with a link to the developer’s portfolio once the footer is viewed. 

### Hints

* In order to store data to our localStorage, we should use localStorage.setItem(). Since localStorage may only store string items, we will need to stringify the object utilizing JSON.stringify method. Finally, to retrieve the data from localStorage, use the getItem() and JSON.parse method.

## Screenshot of Application

*

## Link to Deployed Application

* https://yinwu173.github.io/exclusive-journal/

## Acknowledgement and Resources

* [Toggle Button](https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp)

* [Input Form](https://www.w3schools.com/tags/tag_label.asp)

* [Text Over Image](https://www.w3schools.com/howto/howto_css_image_text.asp)

* [Redirect to Another Page](https://www.w3schools.com/howto/howto_js_redirect_webpage.asp)

* [Alert() Method](https://www.w3schools.com/jsref/met_win_alert.asp)

* Received help from Xpert learning assistant for the code on line 16 of form.js. If the username, title, or content input boxes are left blank, the user will be prompted with an alert. User will not be able to proceed to the next page 

* [Go Back Button](https://www.w3schools.com/js/tryit.asp?filename=tryjs_history_back) 

* [How to Use localStorage](https://www.freecodecamp.org/news/use-local-storage-in-modern-applications/) 