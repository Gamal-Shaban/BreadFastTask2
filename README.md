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
  - `constants`: file to store any kind of constant that you have.
  - `navigation`: Folder to store the navigators.
  - `screens`: Folder that contains all your application screens/features.
    - `Screen`: Each screen should be stored inside its folder and inside it a file for its code and a separate one for the styles and tests.
      - `index.js`
      - `Screen.styles.js`
      - `Screen.test.js`
  - `test-utils`: Folder to store tests-related utilities and components.
  - `appCotainer.js`: Main component that starts your whole app.
  - `theme`: Folder to store all the styling concerns related to the application theme.
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

| Android | IOS |
|---|---|
| ![Screenshot_1656776100](https://user-images.githubusercontent.com/17288652/177007040-05a5581c-e1dd-44e4-bbc0-2d1197db09ea.png) |![Simulator Screen Shot - iPhone 13 - 2022-07-02 at 17 34 39](https://user-images.githubusercontent.com/17288652/177007054-16a98839-d21c-49eb-b257-c94da0d858ac.png) |

| Android | IOS |
|---|---|
| ![Screenshot_1656776104](https://user-images.githubusercontent.com/17288652/177007076-146ed799-506d-4b48-9b71-493eff9adc09.png) | ![Simulator Screen Shot - iPhone 13 - 2022-07-02 at 17 34 43](https://user-images.githubusercontent.com/17288652/177007081-f360e4d3-4871-4659-b253-f097a51dc86a.png)|

| Android | IOS |
|---|---|
| ![Screenshot_1656774976](https://user-images.githubusercontent.com/17288652/177006393-ef20dfdd-0677-4446-83e7-4393a8d5c062.png) |![Simulator Screen Shot - iPhone 13 - 2022-07-02 at 17 16 10](https://user-images.githubusercontent.com/17288652/177006399-f349b267-c873-446b-9b5e-83e65f6c1e33.png)|




