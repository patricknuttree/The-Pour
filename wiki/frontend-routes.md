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
  - Profile Page: This page displays the Nav Bar and users current logged Whiskeys.
    - GET/Profile/:id

- /whiskey/create
  - Create Whiskey Form: This page will display the form for creating a whiskey. 
    - GET/whiskey/create
    - POST/whiskey/create

- /whiskey/:id
  - Whiskey review page: This page will display the nav bar and the users review of the whiskey along with variations. This page will hold a button to create a variation. The variations display on this page will also have a delete button on each variation. This page will also hold a delete button to delete the users created whiskey. 
    - GET/Whiskey/:id
    - POST/Whiskey/:id/delete
    - POST/variation/:id/delete

- /whiskey/:id/update
  - Whiskey review update: This page will display the nav bar and the whiskey create form but populated with the users current review in the fields available for edit.
    - GET/Whiskey/:id/update
    - PUT/Whiskey/:id/update

- whiskey/:id/variation/create
  - This page will display the nav bar and the variation creation form.
    - GET/variation/create
    - POST/variation/create

- /about
  - This page will display the nav bar and developer contact information for The Pour. 
    - GET/about




