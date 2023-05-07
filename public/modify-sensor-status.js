$(document).on("click", ".status-cursor-alert", function(obj) {
    var token = sessionStorage.getItem('token');
    var status_sensor_modal = $(this)[0].classList[3]
    var status_id_modal = $(this)[0].id
    $("#header_status").html("Change status of sensor: "+status_id_modal)

    $("#btn-sensor-status").on("click", function(event){
      var JSONHeader = new Object();
      var JSONBody = new Object();
      var JSONIdentity = new Object();

      JSONHeader.operation = "Update-Sensor"      
      JSONHeader.data = JSONBody
      JSONBody.sensortoken = status_id_modal;
      JSONBody.status = $('#flexSwitchCheckChecked').prop('checked');
      console.log(JSON.stringify(JSONHeader))

      $.ajax({
        type: 'POST',
        headers: {
        "Authorization": "Bearer " + token
      },
        url: 'http://localhost:3000/api/change-sensor-status',
        data: JSON.stringify(JSONHeader),
        contentType: "application/json; charset=utf-8",
        success: function(data, textStatus, xhr) {
          console.log(xhr.status);
          alert('Status updated correctly');
        },
        complete: function(xhr, textStatus) {
          console.log(xhr.status);
          location.reload();              
        }
      });

        });

  });