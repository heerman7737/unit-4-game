let goalNum;
let currNum;
let wins=0;
let losses=0;
let isDone=false;
let value1;
let value2;
let value3;
let value4;
const init=() =>{
   //reset current guess value

   currNum=0;
    isDone=false;
   //new random number to approach

   goalNum=30+Math.floor(Math.random()*100)+1;

   //reset goalNum and currNum display to initial state

   document.querySelector('#goalNum').textContent=`We need ${goalNum}`;
   document.querySelector('#currNum').textContent=`Score: ${currNum}`;

   //clear btn div
   document.querySelector('#buttons').innerHTML='';
 }
 value1=Math.floor(Math.random()*20)+1;
 value2=Math.floor(Math.random()*20)+1;
 value3=Math.floor(Math.random()*20)+1;
 value4=Math.floor(Math.random()*20)+1;
 const Num = num  =>{
    if(!isDone){
        currNum+=num
        document.querySelector('#currNum').textContent=`Score: ${currNum}`;
        if(currNum===goalNum){
            document.querySelector('#result').textContent="You win"
           wins++
           document.querySelector('#win').textContent=`Wins:${wins}`
            isDone=true
        }
        else if(currNum>goalNum){
            document.querySelector('#result').textContent="Loser"
            losses++
            document.querySelector('#loses').textContent=`Loses: ${losses}`
            isDone=true


      }
    }
}
init(true)