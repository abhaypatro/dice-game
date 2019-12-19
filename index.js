randomNumber1=Math.floor(Math.random()*6)+1;
randomNumber2=Math.floor(Math.random()*6)+1;
// alert(randomNumber1);
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
if(randomNumber1===randomNumber2)
{
  document.querySelector("h1").innerHTML="Draw";
}
else
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML=" <img class='image'src='https://img.icons8.com/doodle/96/000000/flag--v1.png'> Player 1 Wins !!";
}
else
{
    document.querySelector("h1").innerHTML=" <img class='image'src='https://img.icons8.com/doodle/96/000000/flag--v1.png'> Player 2 Wins !!";
}
