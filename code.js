

function colorchange(call) {
  if (call === true) {


    document.body.style.backgroundColor = "#FFF245";
  }
  else {
    document.body.style.backgroundColor = "white";
  }
}

function changelang() {
  document.getElementById("SobreTextoEng").style.visibility = "visible";
  document.getElementById("SobreTextoPt").style.visibility = "hidden";

}
function changelangpt() {
  document.getElementById("SobreTextoPt").style.visibility = "visible";
  document.getElementById("SobreTextoEng").style.visibility = "hidden";

}