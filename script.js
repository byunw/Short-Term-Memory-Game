
//document.getElementById("combination").innerHTML="alex1425";

//10 combinations to show
//var combination=["qwer90vd","ddfnvkei123","dfvinwe92","dnkfdnfkd","89df0212","dfdwe335","opwes22","hohodcw26","gjtunb9f","aleeex"];


//test case
var combination=["alex","byun","david","daniel"]


function show_disappear(i){

    if(i<0)return;
    
    document.getElementById("combination").innerHTML=combination[i];
    
    //wait for 3 seconds and make the combination disappear
    setTimeout(function(){
        document.getElementById("combination").innerHTML="";    
    },3000);

    //wait for 7 seconds to call itself which will again change combi to the next one
    setTimeout(function(){
        show_disappear(--i);
    },7000);




}

show_disappear(3);


