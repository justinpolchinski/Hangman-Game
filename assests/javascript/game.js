console.log("Justin is testing link");

//var animalNames = ["snake", "alligator", "crocodile", "turtle", "lizard", "cat", "dog", "squirrel", "bobcat"];
var animalNames = [ "fjbhkifk"];
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
function setGuessesZero(){
    removeGuessA = 0;
    removeGuessB = 0;
    removeGuessC = 0;
    removeGuessD = 0;
    removeGuessE = 0;
    removeGuessF = 0;
    removeGuessG = 0;
    removeGuessH = 0;
    removeGuessI = 0;
    removeGuessJ = 0;
    removeGuessK = 0;
    // removeGuessL = 0;
    // removeGuessM = 0;
    // removeGuessN = 0;
    // removeGuessO = 0;
    // removeGuessP = 0;
    // removeGuessQ = 0;
    // removeGuessR = 0;
    // removeGuessS = 0;
    // removeGuessT = 0;
    // removeGuessU = 0;
    // removeGuessV = 0;
    // removeGuessW = 0;
    // removeGuessX = 0;
    // removeGuessY = 0;
    // removeGuessZ = 0;

}
function imageCycle(){
    if (guessesLeft==15){
        document.getElementById("hangingManImg").src='assests/images/hangingMan01.png';
        
       } 
        if (guessesLeft==14){
            document.getElementById("hangingManImg").src='assests/images/hangingMan02.png';
            
           } 
           if (guessesLeft==13){
            document.getElementById("hangingManImg").src='assests/images/hangingMan03.png';
            
           } 
           if (guessesLeft==12){
            document.getElementById("hangingManImg").src='assests/images/hangingMan04.png';
            
           } 
           if (guessesLeft==11){
            document.getElementById("hangingManImg").src='assests/images/hangingMan05.png';
            
           } 
           if (guessesLeft==10){
            document.getElementById("hangingManImg").src='assests/images/hangingMan06.png';
            
           } 
           if (guessesLeft==9){
            document.getElementById("hangingManImg").src='assests/images/hangingMan07.png';
           
           } 
           if (guessesLeft==8){
            document.getElementById("hangingManImg").src='assests/images/hangingMan08.png';
            
           } 
           if (guessesLeft==7){
            document.getElementById("hangingManImg").src='assests/images/hangingMan09.png';
            
           } 
           if (guessesLeft==6){
            document.getElementById("hangingManImg").src='assests/images/hangingMan10.png';
            
           } 
           if (guessesLeft==5){
            document.getElementById("hangingManImg").src='assests/images/hangingMan11.png';
            
           } 
           if (guessesLeft==4){
            document.getElementById("hangingManImg").src='assests/images/hangingMan12.png';
            
           } 
           if (guessesLeft==3){
            document.getElementById("hangingManImg").src='assests/images/hangingMan13.png';
            
           } 
           if (guessesLeft==2){
            document.getElementById("hangingManImg").src='assests/images/hangingMan14.png';
            
           } 
           if (guessesLeft==1){
            document.getElementById("hangingManImg").src='assests/images/hangingMan15.png';
            
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
        guessesLeft = guessesLeft-1;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        removeGuessA+=1;
        console.log("guess A: "+ removeGuessA)
        // if (guessesLeft == 14){
        //     document.getElementById("hangingManImg").src='assests/images/hangingMan05.png';
        // }
        
    
   
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
}
    if (guessesLeft == 0){
        timesLost-=1;
        document.getElementById("losses").innerHTML = "Losses: " + timesLost;
        guessesLeft = 15;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        removeArray(animalX);
        answerString = [];
        buttonsBack();
        setGuessesZero();
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
        setGuessesZero();
        logArray(animalX);
        
    }
    imageCycle();
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
}
    if (guessesLeft == 0){
        timesLost-=1;
        document.getElementById("losses").innerHTML = "Losses: " + timesLost;
        guessesLeft = 15;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        removeArray(animalX);
        answerString = [];
        buttonsBack();
        setGuessesZero();
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
        setGuessesZero();
        logArray(animalX);
        
    }
    imageCycle();
}
//change letter below
var removeGuessC = 0;
//change letter below
function letterC(){
    //change letter below
    document.getElementById("C").style.display="none";
    //change letter below
    if (removeGuessC<1){
        guessesLeft= guessesLeft-1;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        //CHANGE LETTER BELOW        
        removeGuessC+=1;
          
        
    
   
    for (var i=0; i<animalX.length; i++){
    var idIndex = 'id'+i;
    var idChar = document.getElementById("id" + i).innerText;
    var idChar2 = document.getElementById("id"+ i);
    //CHANGE LETTER BELOW
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
}
    if (guessesLeft == 0){
        timesLost-=1;
        document.getElementById("losses").innerHTML = "Losses: " + timesLost;
        guessesLeft = 15;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        removeArray(animalX);
        answerString = [];
        buttonsBack();
        setGuessesZero();
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
        setGuessesZero();
        logArray(animalX);
        
    }
    imageCycle();
}
//NEXT LETTER______________________________________________________________
//change letter below
var removeGuessD = 0;
//change letter below
function letterD(){
    //change letter below
    document.getElementById("D").style.display="none";
    //change letter below
    if (removeGuessD<1){
        guessesLeft= guessesLeft-1;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        //CHANGE LETTER BELOW        
        removeGuessD+=1;
          
        
    
   
    for (var i=0; i<animalX.length; i++){
    var idIndex = 'id'+i;
    var idChar = document.getElementById("id" + i).innerText;
    var idChar2 = document.getElementById("id"+ i);
    //CHANGE LETTER BELOW
    var letter = 'd';
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
}
    if (guessesLeft == 0){
        timesLost-=1;
        document.getElementById("losses").innerHTML = "Losses: " + timesLost;
        guessesLeft = 15;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        removeArray(animalX);
        answerString = [];
        buttonsBack();
        setGuessesZero();
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
        setGuessesZero();
        logArray(animalX);
        
    }
    imageCycle();
}
//LETTER END/////////////////////////////////////////////////////

//NEXT LETTER______________________________________________________________
//change letter below
var removeGuessE = 0;
//change letter below
function letterE(){
    //change letter below
    document.getElementById("E").style.display="none";
    //change letter below
    if (removeGuessE<1){
        guessesLeft= guessesLeft-1;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        //CHANGE LETTER BELOW        
        removeGuessE+=1;
          
        
    
   
    for (var i=0; i<animalX.length; i++){
    var idIndex = 'id'+i;
    var idChar = document.getElementById("id" + i).innerText;
    var idChar2 = document.getElementById("id"+ i);
    //CHANGE LETTER BELOW
    var letter = 'e';
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
}
    if (guessesLeft == 0){
        timesLost-=1;
        document.getElementById("losses").innerHTML = "Losses: " + timesLost;
        guessesLeft = 15;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        removeArray(animalX);
        answerString = [];
        buttonsBack();
        setGuessesZero();
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
        setGuessesZero();
        logArray(animalX);
        
    }
    imageCycle();
}
//LETTER END/////////////////////////////////////////////////////

//NEXT LETTER______________________________________________________________
//change letter below
var removeGuessF = 0;
//change letter below
function letterF(){
    //change letter below
    document.getElementById("F").style.display="none";
    //change letter below
    if (removeGuessF<1){
        guessesLeft= guessesLeft-1;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        //CHANGE LETTER BELOW        
        removeGuessF+=1;
          
        
    
   
    for (var i=0; i<animalX.length; i++){
    var idIndex = 'id'+i;
    var idChar = document.getElementById("id" + i).innerText;
    var idChar2 = document.getElementById("id"+ i);
    //CHANGE LETTER BELOW
    var letter = 'f';
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
}
    if (guessesLeft == 0){
        timesLost-=1;
        document.getElementById("losses").innerHTML = "Losses: " + timesLost;
        guessesLeft = 15;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        removeArray(animalX);
        answerString = [];
        buttonsBack();
        setGuessesZero();
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
        setGuessesZero();
        logArray(animalX);
        
    }
    imageCycle();
}
//LETTER END/////////////////////////////////////////////////////

//NEXT LETTER______________________________________________________________
//change letter below
var removeGuessG = 0;
//change letter below
function letterG(){
    //change letter below
    document.getElementById("G").style.display="none";
    //change letter below
    if (removeGuessG<1){
        guessesLeft= guessesLeft-1;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        //CHANGE LETTER BELOW        
        removeGuessG+=1;
          
        
    
   
    for (var i=0; i<animalX.length; i++){
    var idIndex = 'id'+i;
    var idChar = document.getElementById("id" + i).innerText;
    var idChar2 = document.getElementById("id"+ i);
    //CHANGE LETTER BELOW
    var letter = 'g';
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
}
    if (guessesLeft == 0){
        timesLost-=1;
        document.getElementById("losses").innerHTML = "Losses: " + timesLost;
        guessesLeft = 15;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        removeArray(animalX);
        answerString = [];
        buttonsBack();
        setGuessesZero();
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
        setGuessesZero();
        logArray(animalX);
        
    }
    imageCycle();
}
//LETTER END/////////////////////////////////////////////////////

//NEXT LETTER______________________________________________________________
//change letter below
var removeGuessH = 0;
//change letter below
function letterH(){
    //change letter below
    document.getElementById("H").style.display="none";
    //change letter below
    if (removeGuessH<1){
        guessesLeft= guessesLeft-1;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        //CHANGE LETTER BELOW        
        removeGuessH+=1;
          
        
    
   
    for (var i=0; i<animalX.length; i++){
    var idIndex = 'id'+i;
    var idChar = document.getElementById("id" + i).innerText;
    var idChar2 = document.getElementById("id"+ i);
    //CHANGE LETTER BELOW
    var letter = 'h';
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
}
    if (guessesLeft == 0){
        timesLost-=1;
        document.getElementById("losses").innerHTML = "Losses: " + timesLost;
        guessesLeft = 15;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        removeArray(animalX);
        answerString = [];
        buttonsBack();
        setGuessesZero();
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
        setGuessesZero();
        logArray(animalX);
        
    }
    imageCycle();
}
//LETTER END/////////////////////////////////////////////////////

//NEXT LETTER______________________________________________________________
//change letter below
var removeGuessI = 0;
//change letter below
function letterI(){
    //change letter below
    document.getElementById("I").style.display="none";
    //change letter below
    if (removeGuessI<1){
        guessesLeft= guessesLeft-1;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        //CHANGE LETTER BELOW        
        removeGuessI+=1;
          
        
    
   
    for (var i=0; i<animalX.length; i++){
    var idIndex = 'id'+i;
    var idChar = document.getElementById("id" + i).innerText;
    var idChar2 = document.getElementById("id"+ i);
    //CHANGE LETTER BELOW
    var letter = 'i';
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
}
    if (guessesLeft == 0){
        timesLost-=1;
        document.getElementById("losses").innerHTML = "Losses: " + timesLost;
        guessesLeft = 15;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        removeArray(animalX);
        answerString = [];
        buttonsBack();
        setGuessesZero();
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
        setGuessesZero();
        logArray(animalX);
        
    }
    imageCycle();
}

//LETTER END/////////////////////////////////////////////////////

//NEXT LETTER______________________________________________________________
//change letter below
var removeGuessJ = 0;
//change letter below
function letterJ(){
    //change letter below
    document.getElementById("J").style.display="none";
    //change letter below
    if (removeGuessJ<1){
        guessesLeft= guessesLeft-1;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        //CHANGE LETTER BELOW        
        removeGuessJ+=1;
          
        
    
   
    for (var i=0; i<animalX.length; i++){
    var idIndex = 'id'+i;
    var idChar = document.getElementById("id" + i).innerText;
    var idChar2 = document.getElementById("id"+ i);
    //CHANGE LETTER BELOW
    var letter = 'j';
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
}
    if (guessesLeft == 0){
        timesLost-=1;
        document.getElementById("losses").innerHTML = "Losses: " + timesLost;
        guessesLeft = 15;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        removeArray(animalX);
        answerString = [];
        buttonsBack();
        setGuessesZero();
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
        setGuessesZero();
        logArray(animalX);
        
    }
    imageCycle();
}

//LETTER END/////////////////////////////////////////////////////

//NEXT LETTER______________________________________________________________
//change letter below
var removeGuessK = 0;
//change letter below
function letterK(){
    //change letter below
    document.getElementById("K").style.display="none";
    //change letter below
    if (removeGuessK<1){
        guessesLeft= guessesLeft-1;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        //CHANGE LETTER BELOW        
        removeGuessK+=1;
          
        
    
   
    for (var i=0; i<animalX.length; i++){
    var idIndex = 'id'+i;
    var idChar = document.getElementById("id" + i).innerText;
    var idChar2 = document.getElementById("id"+ i);
    //CHANGE LETTER BELOW
    var letter = 'k';
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
}
    if (guessesLeft == 0){
        timesLost-=1;
        document.getElementById("losses").innerHTML = "Losses: " + timesLost;
        guessesLeft = 15;
        document.getElementById("guessCount").innerHTML = guessesLeft;
        removeArray(animalX);
        answerString = [];
        buttonsBack();
        setGuessesZero();
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
        setGuessesZero();
        logArray(animalX);
        
    }
    imageCycle();
}

//LETTER END/////////////////////////////////////////////////////

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