# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > Kids.js is the module that executes our event. In Kids.js we use the method addEventListener to attach an event handler to an element and run a function to execute a our "click" event. In this case, our function compares a dataset with a targeted click. If the clicked data-set is strictly equal to our data-set our window alert runs and read correctly.
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > If it was outside of the for..of loop the function would not have a kid to pass through as an argument. one of the two parameters nessecary for the `findCelebrityMatch()` to run properly. we need `findCelebrityMatch()` to correctly pair a kid to a celebrity, to then be correctly displayed in our browser.
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   In our case, we displayed sports in our browser using a template literal that inserts a data-type we set to be the sport a celebrity plays. there were a few ways to do this. I chose to keep it simple. 
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > main js. is not only our hub for invoking our main functions but also our bridge from javascript to html. First, we import our modules and functions to envoke. We declare maincontainer and set it equal to a querySelector which provides a link to an html id (container) from our <main> in index.html. Next we declare the variable applicationHTML and set it to our contents of our desired container in index.html. Those contents include different html elements used for titles and envoking our functions used to create the data to display in the browser. thoses functions are "kids(), celebrities() and Pairings(). Finally using innerHtml we link together our queryselector varible to the contents of our <main> (applicationHTML) to be displayed in the browser.