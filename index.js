let count = 0;

const counter = document.getElementById('counter')
counter.innerText = count;

function incrementCount(){
    count += 1;
    counter.innerText = count;
}

function decrementCount(){
    count -= 1;
    counter.innerText = count;
}

function resetCount(){
    count = 0;
    counter.innerText = count;
}