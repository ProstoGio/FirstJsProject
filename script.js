const button = document.getElementById("scam");
button.addEventListener("click", function(){
  document.getElementById("getscammed").innerHTML="LMAO Get Scammed! 🫵😂";
  document.getElementById("anotherscam").innerHTML="Alright my bad. Now I'm dead serious. click on this -> <button id='rickroll'>Click on me sweetie!</button>";
  
  const button1 = document.getElementById("rickroll");
  button1.addEventListener("click", function(){
    document.getElementById("rickrolled").innerHTML="GET RICK ROLLED IN 2026 LOL!! <iframe width='560' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
  });
  
});

