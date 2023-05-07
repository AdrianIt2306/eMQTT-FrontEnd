$(function() {
    //hide first div or remove after append using `$(".card:first").remove()`
    var token = sessionStorage.getItem('token');
    $.ajax({
      type: "GET",
      dataType: 'json',
      headers: {
        "Authorization": "Bearer " + token
      },
      url: "http://localhost:3000/api/executions",
      success: function(result) {


        for (let index = 0; index < result.executions.length; index++) {
          const sensors = result.executions[index];
          const execution = result.executions[index];

          console.log(sensors)
          
          var execution_status = execution.status;
          
          if (execution_status == 0) {
            span_status_type.className = "status-cursor-alert las la-check start"
          } else if (execution_status == 1) {
            span_status_type.className = "status-cursor-alert las la-sync start"
          }else if (execution_status == 2) {
            span_status_type.className = "status-cursor-alert las la-clock cycle"
          } else {
            span_status_type.className = "las la-upload stop"
          }             
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
  });