//hover a column of pacakage and change the color to gray
var classes = ["package1", "package2", "package3","cell"]; //list of your classes
var elms = {};
var n = {}, nclasses = classes.length;
function changeColorHover(classname, color) {
    var curN = n[classname];
    for(var i = 0; i < curN; i ++) {
        elms[classname][i].style.backgroundColor = color;
    }
}
for(var k = 0; k < nclasses; k ++) {
    var curClass = classes[k];
    elms[curClass] = document.getElementsByClassName(curClass);
    n[curClass] = elms[curClass].length;
    var curN = n[curClass];
    for(var i = 0; i < curN; i ++) {
        elms[curClass][i].onmouseover = function() {
            changeColorHover(this.className, "#DFE4EA");
        };
        elms[curClass][i].onmouseout = function() {
            changeColorHover(this.className, "white");
        };
    }
};
//TODO click is not wor properly not select all the column 
//click a column select a package change color of column to blue and text to white
// var classesSelected = ["package1", "package2", "package3","cell"]; //list of your classes
// var elmsSelected = {};
// var nSelected = {}, nclassesSelected = classesSelected.length;
// function changeColorClicked(classname) {
//     var color1=elmsSelected[classname][i].style.backgroundColor;
//     var color2 ="white"
//     var curNSelected = nSelected[classname];
//     for(var i = 0; i < curNSelected; i ++) {
//         var color1=elmsSelected[classname][i].style.backgroundColor;
//         var color2=curNSelected[classname][i].style.color;
//         if(color1=="white" && color2=="blue")
//         {
//             color1="blue";
//             color2="white";
//             elmsSelected[classname][i].style.backgroundColor =color2 ;
//             curNSelected[classname][i].style.color= color1;
//         }
//         else{
//             color1="white";
//             color2="ble";
//         elmsSelected[classname][i].style.backgroundColor = color1;
//         curNSelected[classname][i].style.color= color2;
//         }
//     }
// }
// for(var k = 0; k < nclassesSelected; k ++) {
//     var curClassSelected = classesSelected[k];
//     elmsSelected[curClassSelected] = document.getElementsByClassName(curClassSelected);
//     nSelected[curClassSelected] = elmsSelected[curClassSelected].length;
//     var curNSelected = nSelected[curClassSelected];
//     for(var i = 0; i < curNSelected; i ++) {
//         elmsSelected[curClassSelected][i].onclick = function() {
//             changeColorClicked(this.className);
//         };

//     }
// };
//TODO there is bug in case click column here
function changeBackGround(selector)
{
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "blue";
    }
}