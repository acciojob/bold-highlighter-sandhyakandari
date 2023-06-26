function highlight() {
    //Write your code here
 let stro=document.getElementsByTagName("strong");
  let len=stro.length;
  for(let i=0;i<len;i++){
   stro[i].style.color="green";
  }
}


function return_normal() {
 let stro=document.getElementsByTagName("strong");
  let len=stro.length;
  for(let i=0;i<len;i++){
   stro[i].style.color="black";
  }
}
