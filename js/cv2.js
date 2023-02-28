
document.getElementById("myBtn").addEventListener("click", function() {
    alert("Instagran Miltonfox-ok");
  });

  document.getElementById("myBtn1").addEventListener("click", function() {
    alert(" Linkedin Miltonfox-ok");
  });

  document.getElementById("myBtn2").addEventListener("click", function() {
    alert("Facebook Miltonfox-ok");
  });
  function mouseDown() {
  document.getElementById("myP").style.color = "red";
  }
  function mouseUp() {
    document.getElementById("myP").style.color = "blue";
  }

  document.getElementById("demo").onmouseenter = function mouseEnter(){
  document.getElementById("demo").style.color = "blue";
}

document.getElementById("demo").onmouseleave =  function mouseLeave() {
    document.getElementById("demo").style.color = "black";
  }
  document.getElementById("demo1").onmouseenter = function mouseEnter(){
    document.getElementById("demo1").style.color = "red";
  }
  
  document.getElementById("demo1").onmouseleave =  function mouseLeave() {
      document.getElementById("demo1").style.color = "black";
    }