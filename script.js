function love(){
  var name1= document.getElementById("name1").value;
 var name2= document.getElementById("name2").value;
 var res= Math.floor(Math.random()*100);
 var par= document.getElementById("par");
 par.innerHTML="The Love b/w" +name1+" "+name2+" "+res+"%";
 if(res>=80){
  par.innerHTML="MARRIAGE IS FIXED";
 }else if(res>=60){
 par.innerHTML="GOOD PAIR";
 }else if(res>=40){
 par.innerHTML="50-50";
 }else if(res>=28){
 par.innerHTML="TRY AGAIN";
 }else{
 par.innerHTML="HARGIZ NAIII";
 

 }
}
