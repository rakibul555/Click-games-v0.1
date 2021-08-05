
// Javascript DOM

// Button cration
const buttons = document.querySelectorAll('.btn');
buttons.forEach(index => {
    index.addEventListener('click', (e) =>{
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let eleCreate = document.createElement('span')
        eleCreate.style.left = x + 'px';
        eleCreate.style.top = y + 'px';

        index.appendChild(eleCreate);

        setTimeout(() =>{
            eleCreate.remove()
        }, 1000)
    })
})



// Games project 01
//Dom calling for games button
const btnStart = document.querySelector('button[name=start]');
const btnClick = document.querySelector('button[name=click]');
const result = document.querySelector('#result');

const winScor = 10; //Win score
let count = 0; //Count veriable


// btn start
btnStart.addEventListener('click', () =>{
    const start = () =>{

        count = 0; // Count start from 0
        result.textContent = count; // Displaying clickable our count number
        btnClick.removeAttribute('disabled');
    }

    start(); 
    
    //start function
    const startCounting = () =>{
        setTimeout(() =>{
            if(isWin()){
                result.textContent = 'You Win!'; // Displing if you win
            }else{
                result.textContent = 'You Loss!' //Displing if you loss
            }

            btnClick.setAttribute('disabled', true)// click btn disabled
        }, 2000)
    }

    


    startCounting(); // counting function calling

    const isWin = () =>{
        if(count < winScor){
            return false;
        }else{
            return true;
        }
    }



})


    //btn click
btnClick.addEventListener('click', () =>{
    count++; // increase count one by one
    result.textContent = count;
})












