## EASYCOOK

EasyCook is an app offering simple recipes from ingredients available in my food cupboard and fridge.

It's an app that I intend for private use, also the list of ingredients and recipes are very personal and not very detailed. But in a second step, it will be possible to enrich the data.

Stack : PHP, Symfony, APIPlatform, JS, React, Redux

- easyCookAPI
- easyCookFront

### Minimum Valuable Product

#### Homepage :
Title and description of the app.

- two areas giving access to two search mode : by ingredients, or by food cupboard

The ingredient search mode is a quick way to use the app : it's a search input that leads to the results page.

#### Page search by food cupboard

Interface to select all the ingredients available :

- buttons to click with the name of each group of ingredients : fruits and vegetables, meat, seafood...

- When clicking on a group, the sub-groups appear : vegetables, meat, poultry, fish...

- When clicking on a sub-group, the picture of each ingredient and its name appear.

- When clicking on an ingredient, it changes its appareance to indicate that it is selected.

- When submitting, with the selected ingredients, it leads to the results page.

#### Results page :

- list of recipe results with for each a picture and title that lead to the recipe page

#### Recipe page :

- Title, picture, ingredients list and steps of the recipe
Button to return to homepage

### Version 2

### Sign up page

- form to sign up


### Sign in page

- form to sign in

#### Homepage

- a button to access our profile

#### Profile page

- area that lead to the function "change user data"

- area that lead to the function "manage my favourites"

- area that lead to the function "manage my food cupboard"

#### Page "change user datas"

- form to change the user name and email

#### Page "manage my favourites"

- List of ma favourites recipes, with the picture and name like on results page, plus a small heart icone

- When clicking on a recipe, it leads to the recipe page.

- When clicking on a heart icone colorful (favourite), it deletes the recipe from the favourites list.

#### Page "manage my cupboard"

- Same interface than page "search by food cupboard", but any modification of this list is saved with the user's profile (it records in bdd "profile_product" table).

#### Page "search by food cupboard"

- When user is authenticated, if there are favourite products in his profile, it appears in this page by default.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
