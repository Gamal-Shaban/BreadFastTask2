# Breadfast Mobile Task


## Write a sample social mobile application that contains 3 screens:
 - Splash screen
 - Home (List of posts)
 - Post details

Post card should contains:
 - User Name
 - User Avatar
 - Title
 - Content
 
Post details page should contains:
 - User Name
 - User Avatar
 - Title
 - Content

Comment card should contains:
 - User Name
 - User Avatar
 - Content
 
 ## Base dependencies

- [axios](https://github.com/axios/axios) for networking.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [@reduxjs/toolkit](https://redux-toolkit.js.org/) for state management.
- [jest](https://facebook.github.io/jest/)  for testing.


## Installation and Setup Instructions

Clone down this repository. You will need `node` and `yarn` installed globally on your machine.  

Installation:

`yarn install`

`npx pod install`

`npx react-native run-ios` OR `npx react-native run-android`

# Folder structure

- `src`: This folder is the main container of all the code inside your application.
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
  - `navigation`: Folder to store the navigators.
  - `screens`: Folder that contains all your application screens/features.
    - `Screen`: Each screen should be stored inside its folder and inside it a file for its code and a separate one for the styles and tests.
      - `index.js`
      - `Screen.styles.js`
      - `Screen.test.js`
  - `test-utils`: Folder to store tests-related utilities and components.
  - `appCotainer.js`: Main component that starts your whole app.
  - `theme`: Folder to store all the styling concerns related to the application theme.
    - `colors`
    - `images`
  - `utils`: folder contain responsiveUtils file.
  - `types`: file contain all interface types in app
  - `index.js`: Entry point of your application as per React-Native standards.
  - `redux`: This folder contains .
    - slices: 
      - appStateSlice
      - postsSlice
      - postDetailsSlice
    - store
    - storeInitialState
    
## global state
      
- I use redux toolkit it contain slices folder every slice you can make any api request and 
      changge data in store from reduce in slice
      

## Screen Shots

| IOS | ADROID |
|---|---|
| ![Simulator Screen Shot - iPhone 13 - 2022-07-29 at 16 11 04](https://user-images.githubusercontent.com/17288652/181779322-b77a0a8e-9fae-430a-b12e-bb3b48726146.png) | ![Screenshot_1659104024](https://user-images.githubusercontent.com/17288652/181779215-50a0d678-aa5a-41a1-965d-1c66decc91fb.png)|

| IOS | ADROID |
|---|---|
| ![Simulator Screen Shot - iPhone 13 - 2022-07-29 at 16 10 57](https://user-images.githubusercontent.com/17288652/181779402-cd165e3d-a42e-4640-bf63-590e53401a2b.png) |  ![Screenshot_1659104014](https://user-images.githubusercontent.com/17288652/181779466-ae5fd786-8937-4eed-b867-9884474d8ee3.png)|



| IOS | ADROID |
|---|---|
| ![Simulator Screen Shot - iPhone 13 - 2022-07-29 at 16 10 53](https://user-images.githubusercontent.com/17288652/181779583-3775b198-1ae3-4446-b2c1-f74afd948a85.png) | ![Screenshot_1659104011](https://user-images.githubusercontent.com/17288652/181779607-9e411aba-8cc7-4ea3-b10d-9ada93861923.png)|




