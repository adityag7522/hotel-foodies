// const text=document.querySelector(".fancy").textContent;
// // const strText=text.textContent;
// const splitText=text.split("");
// for(var i=0; i=splitText.length;i++){
//   text.innerHTML+="<span>"+splitText[i]+"</span>"
// }
// let char=0;
// let timer=setInterval(ontick,50);

// function ontick(){
//   const span=text.queryselectorAll('span')[char];
//   span.classList.add('fade')
//   char++; 
//   if(char===splitText){
//     complete();
//     return;
//   }
// }
// function complete(){
//   clearInterval(timer);
// }







function trans(){
  $(".client").slideUp().slideDown();
//   $("h1").css("color","white");
//   $("h1").css("color","blue");
   $("h1").css("color","yellow");
}

 setInterval(trans,2000);

