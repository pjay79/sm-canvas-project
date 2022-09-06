# 🧠 See-Mode Front-End Tech Task

## Think about the following

- Does my submission reflect my work?

  - yes, but further refinements around the use of Canvas and Fabric are possible as this is something I have not used extensively before, eg how to best update the objects on a canvas and how and when to clear and reload the canvas efficiently

- Is my solution scalable?

  - structure of the code allows for further additions to the project in an organised way
  - with large amount of findings futher optimisations may be required, see below
  - would need to build and deploy to a CDN eg AWS Cloudfront/S3 and then assess what the amount of users are and what the frequency of data access is, as well as the volume of data that is being retrieved at any one time and what services we are calling downstream and how scalable they are (eg are there any api use restrictions / request limits etc)

- How can I improve my submission?
  - better use of Fabric library to render and update objects on Canvas in most efficient way
  - in a real-world situation we would look at optimising for performance when dealing with a large amount of findings by using useCallback to memoize a function, or useMemo to memoize a result or restrict unnecessary rendering of a component
  - enhance types and remove uses of "any"
  - add tests using react-testing-library
  - consider using themes via styled-components
  - integrate with a service like Sentry to check for any client side / api errors or crashes
  - add in data validation and handle situations where data received has missing properties
  - add loading and error handling to components and pages to show loading spinner or error message in the ui where needed, and global react error boundary
  - enhance overall ui styling, browser compatibility, and handle responsiveness

## About the solution

In this solution I decided to use Context to share data across the Canvas and Table components, there may be better approaches and reasons to use Redux where the state logic is more complicated. I had added unique id's to each finding in the data but in a real-world situation we would hopefully have an id already for each finding.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm install`

Install the projects dependencies. Our boilerplate uses [fabric.js](https://github.com/fabricjs/fabric.js) to simplify the Canvas usage.

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
