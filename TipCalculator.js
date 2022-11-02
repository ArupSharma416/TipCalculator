function calculateTip(){
    
    let billAmt=document.getElementById("billamount").value;
    let serviceQ=document.getElementById("service").value;
    let peopleNum=document.getElementById("peopleamt").value;



if (billAmt === "" || serviceQ == 0) {
    alert("Please enter values");
    return;
  }

  if (peopleNum === "" || peopleNum <= 1 ||peopleNum==1) {
    peopleNum=1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }
  var total = (billAmt * serviceQ) / peopleNum;
  
  total = Math.round(total * 100) / 100;
  
  total = total.toFixed(2);
  
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}


function onClickHandler(event){
    let list=document.getElementById("calculate");
    calculateTip(list);
}