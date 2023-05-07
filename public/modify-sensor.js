$(document).on("click", ".card-text", function(obj) {
    var sensortag = $(this).text();
    $("#header_temperature").html(sensortag)
    var slider_1 = document.getElementById("range_1");
    var output_2 = document.getElementById("output_1");
    output_2.innerHTML = slider_1.value;
    slider_1.oninput = function() {
      output_2.innerHTML = this.value;
    }
    $("#btn-submit-1").on("click", function() {
      var JSONHeader = new Object();
      var JSONBody = new Object();
      var JSONIdentity = new Object();
      let preheader = $("#header_temperature").text()
      let midheader = preheader.split("-");
      let tokensensor_1 = midheader[1].trim();
      let name_1_update = $("#name_1").val();
      let ip_1_update = $("#ip_1").val();
      let voltag1_1 = $("#voltage_1 option:selected").text();
      let adc_1 = $("#adc_1 option:selected").text();
      let randomness_1 = $("#randomness_1 option:selected").text();
      let slider_1 = $("#output_1").text();
      JSONHeader.operation = "Update"
      JSONHeader.identity = JSONIdentity
      JSONIdentity.token = tokensensor_1
      JSONIdentity.data = JSONBody
      JSONBody.name = name_1_update;
      JSONBody.ip = ip_1_update;
      JSONBody.voltage = voltag1_1;
      JSONBody.adc = adc_1;
      JSONBody.randomness = randomness_1;
      JSONBody.loop = slider_1;
      //console.log(JSON.stringify(JSONHeader))
      $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/datasynth',
        data: JSON.stringify(JSONHeader),
        contentType: "application/json; charset=utf-8",
        success: function(data, textStatus, xhr) {
          console.log(xhr.status);
          alert('Data update successfully');
        },
        complete: function(xhr, textStatus) {
          console.log(xhr.status);
          location.reload();
        }
      });
    });
  });