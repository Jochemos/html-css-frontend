window.onload = function() {

    document.getElementById("button_1").style.color = "#0062a0";
    document.getElementById("button_1").style.borderBottom = "2px solid #0062a0";
    document.getElementById("button_2").style.cursor = "pointer";

    document.getElementById('button_1').onclick = function() {
      document.getElementById("button_1").style.color = "#0062a0";
      document.getElementById("button_1").style.borderBottom = "2px solid #0062a0";
      document.getElementById("button_2").style.color = "#6c7694";
      document.getElementById("button_2").style.borderBottom = "none";
      document.getElementById("button_2").style.cursor = "pointer";
      document.getElementById("button_1").style.cursor = "default";
      document.getElementById("section_lessons").style.display = "flex";
      document.getElementById("filters").style.visibility = "visible";
      document.getElementById("events").style.visibility = "hidden";
    };
    document.getElementById('button_2').onclick = function() {
      document.getElementById("button_2").style.color = "#0062a0";
      document.getElementById("button_2").style.borderBottom = "2px solid #0062a0";
      document.getElementById("button_1").style.color = "#6c7694";
      document.getElementById("button_1").style.borderBottom = "none";
      document.getElementById("button_1").style.cursor = "pointer";
      document.getElementById("button_2").style.cursor = "default";
      document.getElementById("section_lessons").style.display = "none";
      document.getElementById("filters").style.visibility = "hidden";
      document.getElementById("events").style.visibility = "visible";
    };
};
