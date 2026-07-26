const music=document.getElementById("music");

let started=false;

document.getElementById("startBtn").onclick=()=>{

if(!started){

music.play();

started=true;

}

document.body.style.transition="1s";

document.body.style.opacity="0";

setTimeout(()=>{

window.location.href="maze.html";

},1000);

};

const stars=document.getElementById("stars");

for(let i=0;i<250;i++){

let star=document.createElement("div");

star.className="star";

let size=Math.random()*3;

star.style.width=size+"px";

star.style.height=size+"px";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*5+"s";

stars.appendChild(star);

}