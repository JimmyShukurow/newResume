var id1 = null;
var id2 = null;
var id3 = null;
var id4 = null;
var id5 = null;
var id6 = null;
var radius = Math.sqrt(2) * 120;  
var oneDegree = Math.PI / 180;

var forexport = {
     menuOpen() {
        let xStart = 100;
        let yStart = 100;
        let startAngle = Math.PI / 6;
        let intervalAngle = Math.PI / 3;
        var elem1 = document.getElementById('menu1'); 
        var elem2 = document.getElementById('menu2'); 
        var elem3 = document.getElementById('menu3'); 
        var elem4 = document.getElementById('menu4'); 
        var elem5 = document.getElementById('menu5'); 
        var elem6 = document.getElementById('menu6'); 
        var angle = 0;
        clearInterval(id1);
        clearInterval(id2);
        clearInterval(id3);
        clearInterval(id4);
        clearInterval(id5);
        clearInterval(id6);
        id1 = setInterval(frame1, 1);
        id2 = setInterval(frame2, 1);
        id3 = setInterval(frame3, 1);
        id4 = setInterval(frame4, 1);
        id5 = setInterval(frame5, 1);
        id6 = setInterval(frame6, 1);

        
        function frame1() {
          if (angle >= startAngle) {
            clearInterval(id1);
          } else {
            angle = angle + oneDegree;
            elem1.style.top = (yStart + radius*Math.cos(angle)) + "px"; 
            elem1.style.left = (xStart + radius*Math.sin(angle))+"px"; 
          }
        }
        function frame2() {
          if (angle >= (startAngle +intervalAngle)) {
            clearInterval(id2);
          } else {
            angle = angle + oneDegree;
            elem2.style.top = (yStart + radius*Math.cos(angle)) + "px"; 
            elem2.style.left = (xStart + radius*Math.sin(angle))+"px"; 
          }
        }
        function frame3() {
          if (angle >= (startAngle + 2*intervalAngle)) {
            clearInterval(id3);
          } else {
            angle = angle + oneDegree;
            elem3.style.top = (yStart + radius*Math.cos(angle)) + "px"; 
            elem3.style.left = (xStart + radius*Math.sin(angle))+"px"; 
          }
        }
        function frame4() {
          if (angle >=  startAngle + 3*intervalAngle) {
            clearInterval(id4);
          } else {
            angle = angle + oneDegree;
            elem4.style.top = (yStart + radius*Math.cos(angle)) + "px"; 
            elem4.style.left = (xStart + radius*Math.sin(angle))+"px"; 
          }
        }
        function frame5() {
          if (angle >= startAngle + 4*intervalAngle) {
            clearInterval(id5);
          } else {
            angle = angle + oneDegree;
            elem5.style.top = (yStart + radius*Math.cos(angle)) + "px"; 
            elem5.style.left = (xStart + radius*Math.sin(angle))+"px"; 
          }
        }
        function frame6() {
            if (angle  >=  startAngle + 5*intervalAngle) {
              clearInterval(id6);
            } else {
              angle = angle + oneDegree;
              elem6.style.top = (yStart + radius*Math.cos(angle)) + "px"; 
              elem6.style.left = (xStart + radius*Math.sin(angle))+"px"; 
            }
          }
      }
}



  export default forexport