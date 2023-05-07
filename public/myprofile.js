$(function() {
    //hide first div or remove after append using `$(".card:first").remove()`
    var token = sessionStorage.getItem('token');
    $.ajax({
      type: "GET",
      dataType: 'json',
      headers: {
        "Authorization": "Bearer " + token
      },
      url: "http://localhost:3000/api/profile",
      success: function(result) {
        console.log(result);
        $("#uidname").html(result.data[0].username)
        $("#uname_profile").html("@"+result.data[0].username)
        $("#occupation_profile").html(result.data[0].occupation)
        $("#fname_profile").html(result.data[0].name)
        $("#email_profile").html(result.data[0].email)
        $("#last_profile  ").html(result.data[0].last_login)
        $("#created_profile").html(result.data[0].created)
        $("#api_profile").html(result.keys[0].value)
         $("#status_profile").html(result.data[0].id)
        // if(result.data[0].status==1){
        //   $("#status_profile").html("Active")
        // }else{
        //   $("#status_profile").html("Inactive")
        // }
        var placeholder_bar = document.getElementById("identiconPlaceholder");
        placeholder_bar.innerHTML = jdenticon.toSvg(result.data[0].username, 60);
        var placeholder_info = document.getElementById("identiconPlaceholder_info");
        placeholder_info.innerHTML = jdenticon.toSvg(result.data[0].username, 200);

        for (let index = 0; index < result.authz.length; index++) {
          const catalogue = result.authz[index];
          container = document.getElementById("container")

          div_row_main=document.createElement("div");
          div_col_sm_3 = document.createElement("div");
          p_mb_0 = document.createElement("p");
          div_col_sm_9 = document.createElement("div");
          p_text_muted_mb_0 = document.createElement("p");
          hr_separator = document.createElement("hr");

          div_row_main.className="row"
          div_col_sm_3.className="col-sm-3";
          p_mb_0.className="mb-0";
          div_col_sm_9.className="col-sm-9";
          p_text_muted_mb_0.className=="text-muted mb-0";

          container.appendChild(div_row_main);
          div_row_main.appendChild(div_col_sm_3)
          div_row_main.appendChild(div_col_sm_9)
          div_col_sm_3.appendChild(p_mb_0)
          div_col_sm_9.appendChild(p_text_muted_mb_0)
          container.appendChild(hr_separator)

          if(catalogue.status==1){
            status_table = "Active"
          }else{
            status_table = "Inactive"
          }

          p_mb_0.innerText = catalogue.name;
          p_text_muted_mb_0.innerText = status_table;
        }
        console.log(result.data[0].role)
        // if(result.data[0].role == 'R1'){
        //   adm_lst = document.getElementById("_lst")

        //   li_adm = document.createElement("li");
        //   a_adm = document.createElement("a");
        //   span_admico = document.createElement("span");
        //   span_adm = document.createElement("span");
          
        //   adm_lst.appendChild(li_adm)
        //   li_adm.appendChild(a_adm)
        //   a_adm.appendChild(span_admico)
        //   a_adm.appendChild(span_adm)
  
        //   a_adm.setAttribute('href', '/management');
        //   a_adm.setAttribute('class', 'active');
        //   span_admico.setAttribute('class','las la-tools');
        //   span_adm.innerText="Management";  
        // }
      },
      complete: function(xhr, textStatus) {
        if (xhr.status == 401) {
          alert((xhr.responseJSON.msg));
          window.location.href = "/login";
        }
      }
    });
  });