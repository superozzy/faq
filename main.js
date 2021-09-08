// var accordion = document.getElementById("arrowDown");
// var answer = document.getElementsByClassName("answer");
var accordion= document.querySelectorAll(".accordion");


// 
for ( var i =0; i<accordion.length;i++){
 accordion[i].addEventListener("click",function(){
    this.classList.toggle("active");

    var  answer = this.nextElementSibling;


    if (answer.style.display === "block") {

        answer.style.display = "none";
      }
       else {

        answer.style.display = "block";
      }


    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
})
 
} 


 