**A simple form with Material UI and CSS.
On the UI there is A Payment Button, after clicking that button the dialog box will open which is from Material UI.
Dialog box contain following fields
        ○ To => free text field, accept valid email address
        ○ From => a dropdown box with option [BTC, ETH]
        ○ Amount => Free positive numeric field
        ○ Description => optional field
        ○ Submit Button
        
Submit Button will not be enabled until all mandatory fields are filled which is email and ammount.

On Success - Data will add in db.json file where we can use API also and Displaying Success in Alert and also show error if error api or json is not working.

after cloning the app first you have to insatll the node module, so run this command "npm install".
to run the application use "npm run start:dev" for both react app and json-Server.
to see the error use only "npm start" it show the error because json-server is not running.

[formValidation.webm](https://user-images.githubusercontent.com/94825943/187995107-e0381d5b-a115-42bc-badd-f53d1ce4bf2b.webm)
