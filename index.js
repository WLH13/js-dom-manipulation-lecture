let count = 0;
const counter = document.getElementById('counter')
counter.innerText = count;

function incrementCount(){
    count++;
    if(count < 0){
        counter.style = 'color: red';
    } else if(count > 0){
        counter.style = 'color: green';
    } else {
        counter.style = 'color: black';
    }
    counter.innerText = count;
}

function decrementCount(){
    count--;
    if(count < 0){
        counter.style = 'color: red';
    } else if(count > 0){
        counter.style = 'color: green';
    } else {
        counter.style = 'color: black';
    }
    counter.innerText = count;
}

function resetCount(){
    count = 0;
    counter.innerText = count;
    counter.style = 'color: black';
}