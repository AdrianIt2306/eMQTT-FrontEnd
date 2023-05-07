$(function() {
    //hide first div or remove after append using `$(".card:first").remove()`
    var token = sessionStorage.getItem('token');
    $.ajax({
      type: "GET",
      dataType: 'json',
      headers: {
        "Authorization": "Bearer " + token
      },
      url: "http://localhost:3000/api/sensor-info",
      success: function(result) {
        $("#uidname").html(result.username)
        var placeholder = document.getElementById("identiconPlaceholder");
        placeholder.innerHTML = jdenticon.toSvg(result.username, 60);
        for (let index = 0; index < result.sensors.length; index++) {
          const sensors = result.sensors[index];
          console.log(sensors)
          var sensoralias = sensors.sensoralias;
          var sensorname = sensors.name;
          var sensorstatus = sensors.status;
          var sensorrunning = sensors.running;
          var typesensor = sensors.type;
          var tokensensor = sensors.token;
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
          if (sensorstatus == 1 && sensorrunning ==1) {
            span_status_type.className = "status-cursor-alert las la-sync start"
          } else if (sensorstatus == 1 && sensorrunning ==0) {
            span_status_type.className = "status-cursor-alert las la-check cycle"
          }else if (sensorstatus == 0 && sensorrunning ==0) {
            span_status_type.className = "status-cursor-alert las la-ambulance stop"
          } else {
            span_status_type.className = "las la-exclamation stop"
          }
          switch (typesensor) {
            case 1:
              span_icon_kind.className = "las la-temperature-high"
              break;
            case 2:
              span_icon_kind.className = "las la-magnet"
              break;
            case 3:
              span_icon_kind.className = "las la-radiation-alt"
              break;
            default:
              break;
          }
          div_card_single.className = "card-single"
          h1_cardstatus.className = "card-status"
          span_card_status.className = "card-text"
          span_status_icon.className = 'status'
          h1_cardstatus.innerText = sensoralias;
          span_card_status.innerText = sensorname + " - " + tokensensor;
          span_status_type.setAttribute('data-bs-toggle', 'modal');
          span_status_type.setAttribute('data-bs-target', '#modal-status-sensor');
          span_card_status.setAttribute('data-bs-toggle', 'modal');
          span_card_status.setAttribute('data-bs-target', '#myModal');
          span_status_type.setAttribute('id',tokensensor)
          container.appendChild(div_card_single)
          div_card_single.appendChild(div_card_status)
          div_card_status.appendChild(h1_cardstatus)
          div_card_status.appendChild(a_card_status)
          a_card_status.appendChild(span_card_status)
          div_card_single.appendChild(div_status_type)                          
          div_status_type.appendChild(span_icon_kind) 
          div_status_type.appendChild(span_status_type)
                        
        }
      },
      complete: function(xhr, textStatus) {
        if (xhr.status == 401) {
          alert((xhr.responseJSON.msg));
          window.location.href = "/login";
        }
      }
    });
  });