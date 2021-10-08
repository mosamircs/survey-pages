function enableTextInput(checkBoxID,textBoxID){
    var checkBoxID = document.getElementById(checkBoxID);
    if(checkBoxID.checked==true){
        document.getElementById(textBoxID).disabled=false;
        document.getElementById(textBoxID).style.background="#fff";
    }
}
//TODO if the total percentage !=100the front color will be red
document.querySelectorAll(".input-style").array.forEach(element => {
    if(element.disabled=false){
            counter+=parseInt(element.value);
            if(counter<100){
            document.getElementById("textChangeColor").color="red";
            //TODO there is here bug on showing counter 
            }
    }
});

//TODO if in column 1 cell 5 or 6 or 7 selected unselect the others     
var checkBox1=document.getElementById("checkBox1");
var checkBox2=document.getElementById("checkBox2");
var checkBox3=document.getElementById("checkBox3");
var checkBox4=document.getElementById("checkBox4");
var checkBox5=document.getElementById("checkBox5");
var checkBox6=document.getElementById("checkBox6");
var checkBox7=document.getElementById("checkBox7");
if(checkBox5.checked==true || checkBox6.checked==true || checkBox7.checked==true){
    checkBox4.checked=false;
    checkBox3.checked=false;
    checkBox2.checked=false;
    checkBox1.checked=false;l
} 
//TODO there is bug on changing case on check 5,6,7