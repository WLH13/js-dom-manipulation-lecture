let count = 0;
const counter = document.getElementById('counter')
counter.innerText = count;

const clearButton = document.getElementById('clear')
clearButton.addEventListener('click', function(){
    console.log('Count Cleared!')
})


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

function resetCount(){
    count = 0;
    counter.innerText = count;
    counter.style = 'color: white';
}


function changeUsername(){
    const userName = document.getElementById('username')
    let nameInput = document.getElementById('nameInput').value;
    userName.innerHTML = `${nameInput}'s Counter`;
}
