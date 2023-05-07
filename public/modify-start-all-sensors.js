$(document).on("click", "#startAllSensors", function(obj) {        
    var token = sessionStorage.getItem('token');
    var JSONHeader = new Object();
    var JSONBody = new Object();
    var JSONIdentity = new Object();

    JSONHeader.operation = "Update-Sensor"      
    JSONHeader.data = JSONBody          
    JSONBody.status = true;
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