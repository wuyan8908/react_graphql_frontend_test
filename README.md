## Intro

This is a Readme file for React frontend development task. 

1. To test the project in localhost. Please follow the code bellow:  
  `git clone https://github.com/wuyan8908/react_graphql_frontend_test.git`
  - Open Terminal and Change to project folder using the command bellow:
    - `yarn install`
  - To test in localhost using in the `@app` folder:
    - `yarn start`

## Task intro

1. Create a page to perform the todo function.
2. Implement the basic layout with side menu on the left and todo function on the right.
3. Create `useQueries` to implement GraphQL api.
4. Added `create`, `complete` function for the frontend. 

## Technology Used

1. Using 'urql' graphql libaray.
2. Using 'react-router-dom' to set up routes.
3. Using chakra-ui/react ui framework for UI implement.

## Project structure intro

- '@app' folder: All the required files store in this folder.
  - client: This the folder that frontend task mainly focused on. 
    - src:
      - compoents: all the react compents store here.
         - About: About page
         - App: App.js
         - Content: main content of the page
         - Home: home page
         - SideBar: side menu
         - Todo: todo function and graphql query.

