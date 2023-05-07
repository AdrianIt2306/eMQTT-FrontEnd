$(document).on('show.bs.modal', '#modal-create-execution', function(e) {

  var token = sessionStorage.getItem('token');
  $.ajax({
      type: "GET",
      dataType: 'json',
      headers: {
          "Authorization": "Bearer " + token
      },
      url: "http://localhost:3000/api/sensor-info",
      success: function(result) {
          for (let index = 0; index < result.sensors.length; index++) {
              const sensors = result.sensors[index];
              console.log(sensors)
              $('#mysensors').append($('<option></option>').attr('value', sensors.token).text(sensors.sensoralias));
          }
      },
      complete: function(xhr, textStatus) {
          console.log(xhr.status)
          if (xhr.status == 401) {
              alert((xhr.responseJSON.msg));
              window.location.href = "/login";
          }
      }
  });

  const arraysensors = [];

  $("#add-execution-sensor").on("click", function() {
      let sensorname = $("#mysensors option:selected").text();
      let sensortoken = $("#mysensors option:selected").val();
      console.log(sensorname)
      console.log(sensortoken)
      if (!arraysensors.includes(sensortoken)) {
          arraysensors.push(sensortoken);
          var paragraph = document.getElementById("message-text");
          paragraph.textContent += sensorname + " ";
      }
      console.log(arraysensors);
  });

  $("#btn-create-execution").on("click", function() {
    var JSONHeader = new Object();
    var JSONBody = new Object();
    var JSONIdentity = new Object();

    let execution_name = $("#execution-name").val();
    let start_time = $("#start-execution-date").val();
    let start_hour = $("#start-execution-hour").val();
    let end_time = $("#end-execution-date").val();
    let end_hour = $("#end-execution-hour").val();

    JSONHeader.operation = "Create-Execution"      
    JSONHeader.data = JSONBody
    JSONBody.execution_name = execution_name;
    JSONBody.simulation_start_time = start_time + " " + start_hour;
    JSONBody.simulation_end_time = end_time + " " + end_hour;
    JSONBody.simulation_sensor = arraysensors


    console.log(JSON.stringify(JSONHeader));

    $.ajax({
        type: 'POST',
        headers: {
        "Authorization": "Bearer " + token
      },
        url: 'http://localhost:3000/api/executions',
        data: JSON.stringify(JSONHeader),
        contentType: "application/json; charset=utf-8",
        success: function(data, textStatus, xhr) {
          console.log(xhr.status);
          alert('Execution created successfully');
        },
        complete: function(xhr, textStatus) {
          console.log(xhr.status);
          location.reload();              
        }
      });

});
});