
let randomGame = ['rock', 'Papper', 'Scissors'];
let randomNumber = 0;
let generateRandom = document.querySelector('button');
generateRandom.addEventListener('click',()=>{
        //let randomGame = ['rock', 'Papper', 'Scissors'];
        randomNumber = randomGame[Math.floor(Math.random()*randomGame.length)];
        console.log(randomNumber);

});
//let randomGame = ['rock', 'Papper', 'Scissors'];

//let randomNumber = randomGame[Math.floor(Math.random()*randomGame.length)];
//console.log(randomNumber);

let getrock = document.querySelector('.rock');
getrock.addEventListener('mouseover',()=>{
        if(randomNumber=='Papper'){
        console.log('u lost');
        document.querySelector('.rock').style.backgroundColor = 'red';
        }
        else if (randomNumber=='rock'){
                console.log('it is draw');
        }
        else //(randomNumber=='Scissors')
        {
                console.log('u won');

                document.querySelector('.rock').style.backgroundColor = 'green';
        

        }
    
});

let getPapper = document.querySelector('.Papper');
getPapper.addEventListener('mouseover', ()=>{
        if (randomNumber=='Papper'){
                
                console.log('it is a draw');
        }
        else if (randomNumber=='rock'){
                console.log('u won');

                document.querySelector('.Papper').style.backgroundColor = 'green';
        
        }
        else{
                console.log('u lost');
                document.querySelector('.Papper').style.backgroundColor = 'red';
        }

});

let getScissors = document.querySelector('.Scissors');
getScissors.addEventListener('mouseover',()=>{
        if(randomNumber=='Scissors'){
                console.log('it is a draw');
        }
        else if (randomNumber=='Papper'){
                console.log('u won');
                document.querySelector('.Scissors').style.backgroundColor = 'green';

        }
        else {
                console.log('u lost');
                document.querySelector('.Scissors').style.backgroundColor = 'red';
        }
});