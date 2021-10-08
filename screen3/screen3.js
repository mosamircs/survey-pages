// var hidden = document.getElementsByClassName("hidden");
// hidden.addEventListner("click",function(){
// hidden.style.display = 'block';
// });
// var hidden = document.getElementsByClassName("clicked")
// hidden.addEventListener("click",showStuff)
// function showStuff() {
//     document.getElementsByClassName("hidden").style.display = 'block';
// }
// function showHidden(){
//     var radio = document.getElementsByClassName("clicked");
    
//     var hidden = document.getElementsByClassName("hidden");
//     hidden.style.display("block");
//     console.log(hidden.style.display);

//     if(radio.checked==true){
        
//         console.log(hidden.style.display);
//     }
// }
// if (document.getElementsByClassName('clicked').checked) {
//     // document.getElementsByClassName('hidden').style.display = 'block';
//    document.getElementsByClassName('hidden').style.display="block";
// }
//TODO show hiding isn't working properly
// function demoDisplay() {
//     document.getElementById("myP1").style.display = "none";
//   }
  
//   function Visibilityelements() {
//     document.getElementById("radio1").style.display = "block";
//     document.getElementById("radio2").style.display = "block";
//     document.getElementById("radio3").style.display = "block";   
//     document.getElementById("radio4").style.display = "block";
//     document.getElementById("radio5").style.display = "block";
//     document.getElementById("radio6").style.display = "block";
//     document.getElementById("radio7").style.display = "block";
//     document.getElementById("radio8").style.display = "block";
//     document.getElementById("radio9").style.display = "block";
//    // document.getElementById(elementID).style.display = "block";
//   }
  function showHidden(cellID0,cellID1,cellID2,cellID3,cellID4,cellID5,cellID6,cellID7,cellID8,cellID9,cellID10,cellID11,cellID12,cellID13,cellID14,cellID15,cellID16,cellID17,cellID18,cellID19,cellID20,cellID21,cellID22,cellID23,cellID24,cellID25,cellID26,cellID27,cellID28,cellID29,cellID30) {
    var MyList=[cellID0,cellID1,cellID2,cellID3,cellID4,cellID5,cellID6,cellID7,cellID8,cellID9,cellID10,cellID11,cellID12,cellID13,cellID14,cellID15,cellID16,cellID17,cellID18,cellID19,cellID20,cellID21,cellID22,cellID23,cellID24,cellID25,cellID26,cellID27,cellID28,cellID29,cellID30];  
    for (const element of MyList) {
        var x = document.getElementById(element);
        if (x.style.display === 'none') {
          x.style.display = 'block';
        } else {
          x.style.display = 'none';
        }
    }
  }
  //NOW it's working showing hidden elements but 
  //TODO style is distructed