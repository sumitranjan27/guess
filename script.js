// console.log(document.querySelector('.message').textContent="hey buddy,you are the winner")
// document.querySelector(".guess").value="20";
//addEventlistner is used to check event suchas single click or double click or something else
//click means single click on check button
let num = Math.floor(Math.random()*20) + 1;//Math.floor is used to get whole no.
let score =10;
let highscore=0;

document.querySelector('.check').addEventListener('click',function(){

    const guess= parseInt( document.querySelector('.guess').value);
// console.log(typeof(guess))
//guess means no value so it will be always false and if statement will never run so we use !guess so that statement will become true and if statement will run
if(score===0){
    document.querySelector('.message').textContent='you lose';
    document.querySelector('body').style.backgroundColor="red";
}
else{
if(!guess) {
    document.querySelector('.message').textContent='No number....please enter number';}
else if(guess===num){
    document.querySelector('.message').textContent='congo buddy';
    document.querySelector('body').style.backgroundColor='green';
    document.querySelector('.number').textContent=num;
    if(score>highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
    }
}
else if(guess>num && guess-num> 10){
    document.querySelector('.message').textContent='too high';
    score--;
    document.querySelector('.score').textContent= score;
}
else if(guess>num && guess-num< 10){
    document.querySelector('.message').textContent='high';
    score--;
    document.querySelector('.score').textContent= score;
}
else if(guess<num && num - guess> 10){
    document.querySelector('.message').textContent='too low';
    score--;
    document.querySelector('.score').textContent=score;
}
else if(guess<num && num-guess< 10){
    document.querySelector('.message').textContent= 'low';
    score--;
    document.querySelector('.score').textContent= score;
}

}
});
document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.guess').value=null;
    score=10;
    document.querySelector('.score').textContent= 10;
    document.querySelector('.message').textContent='Start guessing....'
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor='#222';
    num = Math.floor(Math.random()*20) + 1;
});