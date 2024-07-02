# Jot
*JS, MVC, HTML, CSS*

#### Andrew Mason
#### Completed April 2024
#### Live Site: [Jot](https://masonspacestation.github.io/jot/)

***

Jot is a no frills note-taking app.

Users can see all their “jots” and filter them by category if they choose to. Categories are assigned at creation and indicated by color.

### Improved Skills
This app focused a lot on reactivity. Newly created Jots needed to be set to instantly display on screen. Deleted Jots needed to disappear and move the view from the editor to the overview. 

This was done through a combination of listeners and JavaScript triggers.

### Sorting
The user can see all Jots at once or filter them by category. 

All Jots are assigned a category at creation. If no category is selected by the user, they are set to miscellaneous.

### Edit or Delete
My main focus in this app was simplicity. I wanted as few controls as possible to create the most essential functions, along with a simple color to indicate a category instead of different icons or labels.

### Requirements
- Notes can be created, edited, and deleted by the user

- Note creation must include a color picker or minimum 5 color options

- A list of all available notes can be seen, with a numerical count visible

- Clicking on a note from the list brings one note into focus at a time

- Notes have a createdAt timestamp that is set appropriately by the app when created

- Notes have a updatedAt timestamp that is updated appropriately by the app when saved

- Notes persist through local storage
