

var combination=["qwer90vd","ddfnvkei123","dfvinwe92","dnkfdnfkd","89df0212","dfdwe335",
"opwes22","hohodcw26","gjtunb9f","aleeex"];
var score=0;

function show_disappear(i){

    if(i<0){

        document.getElementById("user-score").innerHTML="Final Score: "+score.toString();
        document.getElementById("button").remove();
        document.getElementById("refresh").innerHTML="To restart the game, click the refresh button!";
        return;

    }
    document.getElementById("combination").innerHTML=combination[i];

    setTimeout(function(){
        
        document.getElementById("combination").innerHTML="";
        document.getElementById("instruction").innerHTML="You got 10 seconds to type what you memorized in the following answer box:";
        var input=document.createElement("input");
        input.id="answer";
        input.type="text";
        document.getElementById("form").appendChild(input);
        
    },3000);


    setTimeout(function(){
        
        document.getElementById("instruction").innerHTML="";        
        user_input=document.getElementById("answer").value;
        if(combination[i]==user_input){
            score=score+1;
        }
        var list=document.getElementById("form");
        list.removeChild(document.getElementById("answer"));
        i=i-1;
        show_disappear(i);

    },10000);
    

}

function start(){

    show_disappear(9);

}








