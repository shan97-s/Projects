var difficulty;
var db;
var frame=document.querySelector(".o");

var size=8;
var dec=(size<=8) ? 0.75:0.5;
var ships=(size*size)*dec;
var r=document.querySelector("#in");
var r1;
var cannbls=5;
var bxnm;

var usrscr=0;
var mchscr=0;
let arr = [];

difficulty=document.createElement("fieldset");
frame.appendChild(difficulty);
db=document.createElement("select")
db.setAttribute("onchange","func()")
db.innerHTML=`<option>Beginner</option><option>Advanced</option>`
difficulty.appendChild(db);
db.children[0].setAttribute("value","0");
document.querySelector("select").value=""
var door=false;
db=document.createElement("span");
difficulty.appendChild(db);
function func(){
  door=true;
  document.querySelector("select").disabled="enable"
  if(document.querySelector("select").value=="0")
  size=4;
  else
  size=16;
}

while(arr.length < ships){
let r = Math.floor(Math.random() * size*size) + 1;
if(arr.indexOf(r) === -1) arr.push(r);
      }
console.log(arr);
for(let f=0;f<size;f++){
     
r1=document.createElement("div");
r1.className="r1";
r1.style.height=(size>8)?"6.25%":"12.9%";
    frame.appendChild(r1);
  for(let i=1;i<=size;i++){
      bxnm=i+(f*size);
      var x=0;
    while(x<arr.length){
    if(arr[x]==bxnm){
    r1.innerHTML+=`<form class="box${bxnm}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M192 32c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32V64h48c26.5 0 48 21.5 48 48V240l44.4 14.8c23.1 7.7 29.5 37.5 11.5 53.9l-101 92.6c-16.2 9.4-34.7 15.1-50.9 15.1c-19.6 0-40.8-7.7-59.2-20.3c-22.1-15.5-51.6-15.5-73.7 0c-17.1 11.8-38 20.3-59.2 20.3c-16.2 0-34.7-5.7-50.9-15.1l-101-92.6c-18-16.5-11.6-46.2 11.5-53.9L96 240V112c0-26.5 21.5-48 48-48h48V32zM160 218.7l107.8-35.9c13.1-4.4 27.3-4.4 40.5 0L416 218.7V128H160v90.7zM306.5 421.9C329 437.4 356.5 448 384 448c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 501.7 417 512 384 512c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 437.2 165.1 448 192 448c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"/></svg></form>`
    break;
    }
   
    x++;
  }
  if( arr[x]!=bxnm){
    r1.innerHTML+=`<form class="box${bxnm}"></form>`
    }
}
   if(f==size-1){
       alert(document.querySelector(".box64").innerHTML);
   }
  //r.innerHTML+=`<div class="break"><div/>`
}


// functioning of the game
document.querySelectorAll("form").forEach(form => form.addEventListener('click',clickfunc))
var op;
var cs;



function clickfunc(event){
 if(door==true && cannbls!=0)
  if (event.target.innerHTML!=""){
    op=event.target.children[0].style.opacity;
    cs=event.target.children;
    console.log(event.target.children[0])
    if((event.target.children[0].style.visibility != 'visible') && (event.target.children[0].style.opacity!="0")){
    event.target.children[0].style.visibility = 'visible'
    console.log(typeof parseFloat(event.target.children[0].style.opacity));
    console.log(event.target.children[0].style.opacity);
    usrscr+=5;
    cannbls--;
    document.querySelector("span").innerHTML="You hit the ship and "+cannbls+" cannonballs are left";
    alert(cannbls)
    //console.log('opacity', window.getComputedStyle(cs).opacity);
     }
  else if(event.target.children[0].style.opacity != "0.8"){
    event.target.children[0].style.opacity="0.8"
    console.log(typeof event.target.children[0].style.opacity);
    usrscr++;
    cannbls--;
    document.querySelector("span").innerHTML="You hit the ship and "+cannbls+" cannonballs are left";
    //alert(cannbls)
  } 
   else if(event.target.children[0].style.opacity == "0.8"){

    event.target.children[0].style.opacity="0.0"
    usrscr++;
    cannbls--;
    document.querySelector("span").innerHTML="You hit the ship and "+cannbls+" cannonballs are left";
    alert(cannbls+ " opacity "+event.target.children[0].style.opacity)
   }
    if(cannbls==0){
    document.querySelector("span").innerHTML="Your scrore is "+usrscr;
  }
    //console.log(event.target.i.sytle.visibility)
  }
  else{
console.log("missed the hit");
event.target.innerHTML="missed the hit"
cannbls--;
document.querySelector("span").innerHTML="You missed the hit";
alert(cannbls)
  }
 
}