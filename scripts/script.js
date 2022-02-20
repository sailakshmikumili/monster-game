let monsterHealth=document.getElementById("monster_health");
let playerHealth=document.getElementById("player_health");

const lifeChance=document.getElementById("life_chance");
const attackBtn=document.getElementById("btnAttack");
const strongBtn=document.getElementById("btnStrong");
const healBtn=document.getElementById("btnHeal");
const resetBtn=document.getElementById("btnReset");


const playerAttackValue=10;
const monsterAttackValue=10;
const strongAttackValue=11;
const healPlayer=15;
const resetGame=100;

let chosenMaxLife=100;
let currentMonsterHealth=chosenMaxLife;
let currentPlayerHealth=chosenMaxLife;

function dealMonsterDamage(playerAttackValue){
    const damage=Math.random()*playerAttackValue;
    monsterHealth.value = +monsterHealth.value-damage;
    return damage;
    
}
function dealPlayerDamage(monsterAttackValue){
    const damage=Math.random()*monsterAttackValue;
    playerHealth.value = +playerHealth.value-damage;   
    return damage;
}
function dealMonsterDamage(strongAttackValue){
    const damage=Math.random()*strongAttackValue;
   monsterHealth.value = +monsterHealth.value-damage;    
    return damage;
}
function dealPlayerHeal(healPlayer){
    const damage=Math.random()*healPlayer;
    playerHealth.value= +playerHealth.value+damage;
    return damage;
}

function attackHandler(){
const  monsterDamage = dealMonsterDamage(playerAttackValue);
currentMonsterHealth -= monsterDamage;   

const  playerDamage = dealPlayerDamage(monsterAttackValue);
currentPlayerHealth -= playerDamage;  

if(currentMonsterHealth <=0 && currentPlayerHealth>=0){
    alert('you won the game')
}
else if(currentPlayerHealth <=0 && currentMonsterHealth>=0){
    alert('you lost the game')
}
else if(currentPlayerHealth <=0 && currentMonsterHealth <=0){
    alert('you draw the game')
}
}
function strongAttackHandler(){

    const  monsterDamage = dealMonsterDamage(strongAttackValue);
    currentMonsterHealth -= monsterDamage;   
    
    const  playerDamage = dealPlayerDamage(monsterAttackValue);
    currentPlayerHealth -= playerDamage;  
    
    if(currentMonsterHealth <=0 && currentPlayerHealth>=0){
        alert('you won the game')
    }
    else if(currentPlayerHealth <=0 && currentMonsterHealth>=0){
        alert('you lost the game')
    }
    else if(currentPlayerHealth <=0 && currentMonsterHealth <=0){
        alert('you draw the game')
    }
}

function healHandler(){   
const playerDamage= dealPlayerHeal(healPlayer);
currentPlayerHealth += playerDamage;
}
function resetHandler(){
monsterHealth.value=resetGame;
playerHealth.value=resetGame;
currentPlayerHealth=resetGame;
currentMonsterHealth=resetGame;
}

attackBtn.addEventListener('click', attackHandler)
strongBtn.addEventListener('click', strongAttackHandler)
healBtn.addEventListener('click',healHandler)
resetBtn.addEventListener('click',resetHandler)
