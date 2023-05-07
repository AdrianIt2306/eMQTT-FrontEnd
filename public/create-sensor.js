$(function(){
    $("#btn-create-sensor").on("click", function(event){
    var JSONHeader = new Object();
    var JSONBody = new Object();
    var JSONIdentity = new Object();

    let sensor_alias = $("#create-name").val();
    let sensor_topic = $("#create-topic").val();
    let ip_create = $("#ip_2").val();
    let sensor_name_create = $("#create-type option:selected").text();
    
    var select = document.getElementById('create-type');
    var value = select.options[select.selectedIndex].value;
    let randomness_2 = $("#randomness_2 option:selected").text();
    let slider_2 = $("#output_2").text();

    JSONHeader.operation = "Create-Sensor"      
    JSONHeader.data = JSONBody
    JSONBody.sensorname = sensor_name_create;
    JSONBody.randomness = randomness_2;
    JSONBody.frequency = slider_2;
    JSONBody.alias= sensor_alias;
    JSONBody.topic = sensor_topic;
    JSONBody.ip = ip_create;
    JSONBody.type = value;
    console.log(JSON.stringify(JSONHeader));
    var token = sessionStorage.getItem('token');

    $.ajax({
      type: 'POST',
      headers: {
      "Authorization": "Bearer " + token
    },
      url: 'http://localhost:3000/api/create-sensor',
      data: JSON.stringify(JSONHeader),
      contentType: "application/json; charset=utf-8",
      success: function(data, textStatus, xhr) {
        console.log(xhr.status);
        alert('Sensor created successfully');
      },
      complete: function(xhr, textStatus) {
        console.log(xhr.status);
        location.reload();              
      }
    });

      });
  });