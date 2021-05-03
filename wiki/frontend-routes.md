Front End Routes

- /
  - Gatewall Page:
    - This page displays the login, signup and Demo buttons.
      -GET/

- /signup
  - Sign up page: This page displays a signup form. 
    - GET/signup
    - POST/signup

- /login
  - Login Page: This page displays the login form.
    - GET/login
    - POST/login

- /profile/:id
  - Profile Page: This page displays the Nav Bar and users current logged Whiskeys. Users can travel from here to create a whiskey or update a whiskey.
    - GET/Profile/:id

- /whiskey/create/whiskey
  - Create Whiskey Form: This page will display the form for creating a whiskey. 
    - GET/create/whiskey
    - POST/create/whiskey

- /edit/:id(whiskey id)
  - Whiskey review page: This page will display the nav bar and the users current review. This page will also hold a delete button to delete the users created whiskey. 
    - GET/Whiskey/:id
    - DELETE/Whiskey/:id

- /about
  - This page will display the nav bar and developer contact information for The Pour. 
    - GET/about




