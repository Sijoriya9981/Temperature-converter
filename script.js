
let btn  = document.getElementById('submit');
btn.addEventListener("click",function(){

  let option1 = document.getElementById('option1').value;
let option2 = document.getElementById('option2').value;
let answer = document.getElementById('answer');

let inputvalue = document.getElementById('input').value;
  answer.innerHTML = +"";



  if(inputvalue=="")
{
  alert("Enter Value");
  location.reload();
}

else if (option1=="Fahrenheit")
{
  if(option2=="Fahrenheit")
  {
      let temp = Number.parseInt(inputvalue)*1;
      answer.innerHTML = temp.toFixed(3)  + `F`;
  }
  else if(option2=="Celsius")
  {
    let temp =(( Number.parseInt(inputvalue)- 32) * 5)/9;
      answer.innerHTML = temp.toFixed(3)  + `&deg; C`;
  }
  else if(option2=="Kelvin")
  {
    let temp =((( Number.parseInt(inputvalue)- 32) * 5)/9)+ 273.15;
      answer.innerHTML = temp.toFixed(3)  + `K`;
  }
}
else if(option1=="Celsius")
{
  if(option2=="Fahrenheit")
  {
    let temp =(( Number.parseInt(inputvalue) *9)/5)+32;
      answer.innerHTML = temp.toFixed(3)  + `F`;
  }
  else if(option2=="Celsius")
  {
    let temp = Number.parseInt(inputvalue)*1;
      answer.innerHTML = temp.toFixed(3)  + `&deg; C`;

  }
  else if(option2=="Kelvin")
  {
    let temp = Number.parseInt(inputvalue)+ 273.15;
      answer.innerHTML = temp.toFixed(3)  + `K`;
  }

}
else if(option1=="Kelvin")
{

  if(option2=="Fahrenheit")
  {
    let temp =((( Number.parseInt(inputvalue)  -273.15 ) *9)/5)+32;
      answer.innerHTML = temp.toFixed(3)  + `F`;
     
  }
  else if(option2=="Celsius")
  {
    let temp =Number.parseInt(inputvalue) -273.15;
      answer.innerHTML = temp.toFixed(3)  + `&deg; C`;
  }
  else if(option2=="Kelvin")
  {
    let temp = Number.parseInt(inputvalue)*1;
      answer.innerHTML = temp.toFixed(3)  + `K`;
  }
}

});





 

