

var combination=["qwer90vd","ddfnvkei123","dfvinwe92","dnkfdnfkd","89df0212","dfdwe335","opwes22","hohodcw26","gjtunb9f","aleeex"];
var score=0;


function show_disappear(i){

    if(i<0){

        document.getElementById("user-score").innerHTML="Final Score: "+score.toString();
        document.getElementById("button").remove();
        return;

    }

    document.getElementById("combination").innerHTML=combination[i];
    
    setTimeout(function(){
        
        document.getElementById("combination").innerHTML="";
        document.getElementById("instruction").innerHTML="You got 10 seconds to type what you memorized in the following answer box:";
        var input=document.createElement("input");
        input.type="text";
        input.id="answer";
        document.getElementById("form").appendChild(input);


    },3000);

    setTimeout(function(){

        document.getElementById("instruction").innerHTML="";
        user_input=document.getElementById("answer").value;

        //test if what user has typed is equal to what was just shown
        //Need to think about which input is finally taken as input
        //For example, it has to be the correct password just once any time
        //regardless of the final answer
        //One way is to think of only taking the input when the enter key is pressed
        //In other words, take what is in the input form when the enter key is pressed 

        if(combination[i]==user_input){
            score=score+1;
        }
        


    
        else{
            score=score+0;
        }

        var list=document.getElementById("form");
        list.removeChild(document.getElementById("answer"));
        show_disappear(--i);

    },10000);
    

}

function start(){

    show_disappear(9);

}








