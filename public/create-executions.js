$(function() {
    //hide first div or remove after append using `$(".card:first").remove()`
    var token = sessionStorage.getItem('token');
    var fuser = document.querySelector('.user-wrapper');

    $.ajax({
      type: "GET",
      dataType: 'json',
      headers: {
        "Authorization": "Bearer " + token
      },
      url: "http://localhost:3000/api/executions",
      success: function(result) {
        $("#uidname").html(result.username)
        var placeholder = document.getElementById("identiconPlaceholder");
        placeholder.innerHTML = jdenticon.toSvg(result.username, 60);

        for (let index = 0; index < result.executions.length; index++) {
          const sensors = result.executions[index];
          const execution = result.executions[index];
          console.log(sensors)          
          var name_execution = execution.name;
          var execution_status = execution.status;
          var type_execution = execution.type;
          var execution_token = execution.token;
          var execution_dataset = execution.dataset;
          var start_execution = execution.start_timestamp;
          var finished_execution = execution.end_timestamp;
          //console.log(item.sensors);
          container = document.getElementById("cards")
          div_card_single = document.createElement("div")
          div_card_status = document.createElement("div")
          h1_cardstatus = document.createElement("h1")
          a_card_status = document.createElement("a")
          span_card_status = document.createElement("span")
          div_status_type = document.createElement("div")
          span_status_type = document.createElement("span")
          a_status_ref = document.createElement("a")
          span_icon_kind = document.createElement("span")
          span_status_icon = document.createElement("span")
          span_scheduledstart = document.createElement("span")
          span_scheduledfinished = document.createElement("span")
          a_download_link = document.createElement("a")          
          if (execution_status == 0 && execution_dataset==1) {
            var download_dataset = 'http://localhost:3001/results/'+execution_token+'.csv'
            span_status_type.className = "status-cursor-alert las la-check start"
            a_download_link.setAttribute('href',download_dataset)
            a_download_link.setAttribute('target', '_blank');

          } else if (execution_status == 1) {
            span_status_type.className = "las la-sync start"
          }else if (execution_status == 2) {
            span_status_type.className = "las la-clock cycle"
          }else if (execution_status == 3) {
            span_status_type.className = "las la-upload cycle"
          }  else {
            span_status_type.className = "las la-spinner cycle"
          }
          div_card_single.className = "card-single"
          h1_cardstatus.className = "card-status"
          span_status_icon.className = 'status'
          h1_cardstatus.innerText = name_execution;        
          span_scheduledstart.innerText = "\n "+"Started : " + start_execution;
          span_scheduledfinished.innerText = "\n "+"Finished : " + finished_execution;
          h1_cardstatus.setAttribute('id',execution_token)
          container.appendChild(div_card_single)
          div_card_single.appendChild(div_card_status)
          div_card_status.appendChild(h1_cardstatus)
          div_card_status.appendChild(a_card_status)
          a_card_status.appendChild(span_card_status)
          a_card_status.appendChild(span_scheduledstart)
          a_card_status.appendChild(span_scheduledfinished)
          div_card_single.appendChild(div_status_type)                          
          div_status_type.appendChild(span_icon_kind) 
          div_status_type.appendChild(a_download_link)
          a_download_link.appendChild(span_status_type)     
               
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