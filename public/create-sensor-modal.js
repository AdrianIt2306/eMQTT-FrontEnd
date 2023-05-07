$(document).on("click", "#createSensorModal", function(obj) {
    var slider_2 = document.getElementById("range_2");
    var output_2 = document.getElementById("output_2");
    output_2.innerHTML = slider_2.value;
    slider_2.oninput = function() {
    output_2.innerHTML = this.value;
    }
  }); 