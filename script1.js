let userChoice = 0;
let compChoice = 0;
let dun = true;
//let clickofUser = document.querySelector('.r');
const clickofUser1 = document.querySelectorAll('.r');
//let choice = document.
let game = document.querySelector('.in');
const decisionDraw = (gh,randomNumber1)=>{
    console.log('The computer selected', randomNumber1);
    if (gh===randomNumber1){
        //console.log(randomNumber1);
        game.innerText = 'Draw';
    }
        else{
            dun = false;
            decisionLost(dun,gh,randomNumber1);
            //decisionWin(dun,gh,randomNumber1);

        }


}

const decisionLost = (dun,gh,randomNumber1)=>{
    if (dun===false){
        if(gh ==='rock' && randomNumber1 === 'papper'){
            game.innerText = 'You Lost';
        }
        else if (gh==='papper' && randomNumber1==='scissors'){
            game.innerText = 'You Lost';
        }
        else if (gh==='scissors' && randomNumber1==='rock'){
            game.innerText = 'You Lost';
        }
        else{
            game.innerText = 'You Won';
        }

    }
}

//const decisionWin = (dun,gh,randomNumber)=>{
    //if (dun===false){
        //if(gh==='')
    //}
//}

const compchoice1 =(gh)=>{
    //console.log(gh);
    const selection = ['rock','papper', 'scissors'];
    compChoice = Math.floor(Math.random()*selection.length);
    const randomNumber1 =selection[compChoice];
    decisionDraw(gh,randomNumber1);

}

clickofUser1.forEach((r)=>{
    //console.log(r);
    r.addEventListener('click',()=>{
        
        //console.log('you clicked', r);
        const gh = r.getAttribute('id');
        console.log('You clicked', gh);
        compchoice1(gh);
    })
});
    