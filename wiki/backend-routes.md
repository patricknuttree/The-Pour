Backend Routes

- Sign Up:
  - Creates a user in the database.
    - Post/

- Login:
  - Allows a user passage through the gatewall.
   - Post/

- Log Out:
  - Allows a user to end their session.
    - Delete/

- Profile:
  - Retrieves the users profile.
    - Get/:id

- User Whiskeys:
  - Retrieves the whiskeys tied to the user from the data base.
    - Get/:id/whiskeys

- Create a user whiskey:
  - Adds a new whiskey to the database tied to the user.
    - Post/create/whiskey

- Update a user Whiskey:
  - Updates a whiskey within the database under a users profile.
    - Put/edit/:id

- Removing a whiskey:
  - Deletes a users whiskey review from the database.
    - Delete/edit/:id
    
- Delete a variation:
  - This will dynamically delete a variation from a user reviewed whiskey page and from the database. 
    - DELETE/whiskey/:id/variation/:id




