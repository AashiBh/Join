array=[];
function submit(){
   var IDS;
   for(var i=1; i<=6; i++){
     IDS=document.getElementById("name_of_the_student_" + i).value;  
     array.push(IDS);
    }
    console.log(array);
    var MARLENE=array.join(".");
    document.getElementById("display_name").innerHTML=MARLENE;
}

