let count = 0;
// Above we are declaring our count variable to use in our HTML. This will keep track
// of what are count is currently at.


const counter = document.getElementById('counter')
counter.innerText = count;
//Here we are declaring a variable called 'counter', and setting it equal to the 
//p element where we want to put our count. Then we are setting the innerText of that 
//element to equal our count variable above.


const clearButton = document.getElementById('clear')
clearButton.addEventListener('click', function(){
    console.log('Count Cleared!')
})
//Here we are targeting our 'clear' button and adding an event listener to it that 
//will console log 'Count Cleared' every time the clear button is clicked.


function incrementCount(){
    count++;
    if(count < 0){
        counter.style = 'color: #FF3333';
    } else if(count > 0){
        counter.style = 'color: #46FF33';
    } else {
        counter.style = 'color: white';
    }
    counter.innerText = count;
}
//The incrementCount function is adding one to our count variable, and then checking
//if that number is positive or negative. If it is positive, the numbers style is 
//changed so that it is green, if it's negative to red, and if it's 0 to white. After 
//that it sets the innerText of our counter element to the new count value.


function decrementCount(){
    count--;
    if(count < 0){
        counter.style = 'color: #FF3333';
    } else if(count > 0){
        counter.style = 'color: #46FF33';
    } else {
        counter.style = 'color: white';
    }
    counter.innerText = count;
}
//The decrementCount function decrements our count, and completes the same color change 
//functionality that the incrementCount function does. Likewise, it changes the 
//innerText of the counter element to the new count value.


function resetCount(){
    count = 0;
    counter.style = 'color: white';
    counter.innerText = count;
}
//The resetCount function reassigns the count variable to 0, and changes color of the 
//counter elements text to white, and reassigns the counter element back to 0.


function changeUsername(){
    const userName = document.getElementById('username')
    let nameInput = document.getElementById('nameInput');
    if(nameInput.value){
        userName.innerHTML = `${nameInput.value}'s Counter`;
        nameInput.value = ''
    } else {
        alert('Please enter your name')
    }
}
//The changeUsername function targets both the element with the id 'username', and the 
//input element with the id 'nameInput'. If there is something typed into the input(
//giving it a value), it will then set the userName elements innerHTML to that value, 
//and reset the input to be empty. If nothing is typed into the input, a window alert 
//pops up, prompting the user to type in their name.