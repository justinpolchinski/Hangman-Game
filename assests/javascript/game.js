console.log("Justin is testing link");

//var animalNames = ["snake", "alligator", "crocodile", "turtle", "lizard", "cat", "dog", "squirrel", "bobcat"];
var animalNames = [ "baaaab"];
console.log(animalNames);


var animalX = animalNames[Math.floor((Math.random() * animalNames.length-1) + 1)];
//console.log(animalX);
document.getElementById("secretWord").innerHTML = animalX;
function logArray(list){
    for(var j = 0; j<list.length; j++){
        console.log(list[j]);
        var newDiv = document.createElement("div"+j);
        var newId = newDiv.setAttribute('id', "id" +j);
        var displayNone = document.getElementById("id"+ j);
var node = document.createTextNode(list[j]);
newDiv.appendChild(node);
var element = document.getElementById("secretWord");
element.appendChild(newDiv);

var displayNone = document.getElementById("id"+ j).style.cssText = "background: blue; color:blue;\
  border-bottom: 2px solid black; padding: 10% font-size: 20px; margin: 5px; ";
  
  
     }
    }
function removeArray(list){
    for (var i = 0; i<list.length; i++){
        var parent = document.getElementById("secretWord");
        var child = document.getElementById("id"+ i);
        parent.removeChild(child);
    }
}
function buttonsBack(){
    var everyLetter= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i<everyLetter.length; i++){
        document.getElementById(everyLetter[i]).style.display="block";
        
    }

}
logArray(animalX);
var timesWon = 0;
var timesLost = 0;
var answerString = [];
var guessesLeft = 15;
document.getElementById("guessCount").innerHTML = guessesLeft;

var removeGuessA = 0;
function letterA(){
    document.getElementById("A").style.display="none";
    if (removeGuessA<1){
        guessesLeft= guessesLeft-1;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        removeGuessA+=1;
        
    }
   
    for (var i=0; i<animalX.length; i++){
    var idIndex = 'id'+i;
    var idChar = document.getElementById("id" + i).innerText;
    var idChar2 = document.getElementById("id"+ i);
    var letter = 'a';
    console.log('checking: ' + idChar);
    
    
    if (idChar == letter){        
        idChar2.style.cssText= "color:red; border-bottom: 2px solid black; font-size: 30px;";
          
        answerString.splice(i,0,letter);
        console.log("making answer: " +answerString);

    }
    else{
        console.log("oops");
    }
    
    }
    if (guessesLeft == 0){
        timesLost-=1;
        document.getElementById("losses").innerHTML = "Losses: " + timesLost;
        guessesLeft = 15;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        removeArray(animalX);
        answerString = [];
        buttonsBack();
        logArray(animalX);
        
    }
    if (answerString.length == animalX.length){
        timesWon +=1;
        document.getElementById("wins").innerHTML = "Wins: " + timesWon;
        guessesLeft = 15;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        removeArray(animalX);
        answerString = [];
        buttonsBack();
        logArray(animalX);
        
    }
    // else{
    //     continue;
    // }
}
var removeGuessB = 0;
function letterB(){
    document.getElementById("B").style.display="none";
    if (removeGuessB<1){
        guessesLeft= guessesLeft-1;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        removeGuessB+=1;
        
    }
   
    for (var i=0; i<animalX.length; i++){
    var idIndex = 'id'+i;
    var idChar = document.getElementById("id" + i).innerText;
    var idChar2 = document.getElementById("id"+ i);
    var letter = 'b';
    console.log('checking: ' + idChar);
    
    
    if (idChar == letter){        
        idChar2.style.cssText= "color:red; border-bottom: 2px solid black; font-size: 30px;";
        
        answerString.splice(i,0,letter);
        console.log("making answer: " +answerString);             
    }
    else{
        console.log("oops");

    }
    
    }
    if (guessesLeft == 0){
        timesLost-=1;
        document.getElementById("losses").innerHTML = "Losses: " + timesLost;
        guessesLeft = 15;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        removeArray(animalX);
        answerString = [];
        buttonsBack();
        logArray(animalX);
        
    }
    if (answerString.length == animalX.length){
        timesWon +=1;
        document.getElementById("wins").innerHTML = "Wins: " + timesWon;
        guessesLeft = 15;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        removeArray(animalX);
        answerString = [];
        buttonsBack();
        logArray(animalX);
        
    }
   
}
//change to next letter here!
var removeGuessC = 0;
//change to next letter here!
function letterC(){
    //change to next letter here!
    document.getElementById("C").style.display="none";
    //change to next letter here!
    if (removeGuessC<1){
        guessesLeft= guessesLeft-1;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        //change to next letter here!
        removeGuessC+=1;
        
    }
   
    for (var i=0; i<animalX.length; i++){
    var idIndex = 'id'+i;
    var idChar = document.getElementById("id" + i).innerText;
    var idChar2 = document.getElementById("id"+ i);
    //change to next letter here!
    var letter = 'c';
    console.log('checking: ' + idChar);
    
    
    if (idChar == letter){        
        idChar2.style.cssText= "color:red; border-bottom: 2px solid black; font-size: 30px;";
        
        answerString.splice(i,0,letter);
        console.log("making answer: " +answerString);             
    }
    else{
        console.log("oops");

    }
    
    }
    if (guessesLeft == 0){
        timesLost-=1;
        document.getElementById("losses").innerHTML = "Losses: " + timesLost;
        guessesLeft = 15;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        removeArray(animalX);
        answerString = [];
        buttonsBack();
        logArray(animalX);
        
    }
    if (answerString.length == animalX.length){
        timesWon +=1;
        document.getElementById("wins").innerHTML = "Wins: " + timesWon;
        guessesLeft = 15;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        removeArray(animalX);
        answerString = [];
        buttonsBack();
        logArray(animalX);
        
    }
   
}


// var newDiv = document.createElement("div");
// var node = document.createTextNode("Checking: " + animalX);
// newDiv.appendChild(node);
// var element = document.getElementById("secretWord");
// element.appendChild(newDiv);;



// var guessesLeft = 15;
// document.getElementById("guessCount").innerHTML = guessesLeft;
// function letterA(){
//     var letter = "a"
//     console.log("letter is: " + letter);
//     document.getElementById("A").style.display="none";
//     guessesLeft= guessesLeft-1;
//     document.getElementById("guessCount").innerHTML = guessesLeft;
//     function logArray(list){
//             var correctLetter ='';
//             var space = '';
//         for(var j = 0; j<list.length; j++){
            
//             console.log(list[j]);
//             if (animalX[j].includes('a')){
//                 console.log("Got it:" + animalX[j]);
//                 document.getElementById("secretWord").innerHTML = animalX[j];
//                 correctLetter += 'a';  
//                 console.log(correctLetter);
//             }
//             else{
//                 console.log("nope");
//                 space += ' '; 
//             }
            
//         }
        
//     }
    
//     logArray(animalX);
// }

//     if (animalX[j]==letter){
//         console.log("Got it:" + animalX[j]);
//     }
//     else{
//         console.log("nope");
//     }
    
// }
// function logArray(list){
//     for(var j = 0; j<list.length; j++){
//         console.log(list[j]);
//     }
// }
//logArray(animalX);
// function animalXIncludes() {
    
//     var animalXChar = animalX.includes(letter);
//     document.getElementById("secretWord").innerHTML = animalXChar;
// }

//document.onkeyup = function(event)
//document.querySelector("#")