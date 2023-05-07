
//Use this code if button is appended in the DOM
$(document).on('click','#btnSubmit',function(){
    let uid = $("#email_1").val();
    let password = $("#password_1").val();

    var JSONIdentity = new Object();
    JSONIdentity.username = uid;
    JSONIdentity.password = password;

    console.log(JSONIdentity);

    $.ajax({
                    type: 'POST',
                    url: 'http://localhost:3000/api/login',
                    data: JSON.stringify(JSONIdentity),
                    contentType: "application/json; charset=utf-8",
      
                    success: function(data, textStatus, xhr) {
                    let tokenAPI = xhr.responseJSON.token;
                    let uid = xhr.responseJSON.user.id;
                    sessionStorage.setItem("token", tokenAPI);
                    sessionStorage.setItem("uid", uid);
                    alert((xhr.responseJSON.msg));    
                    window.location.href = "/executions/";
                    },
                    complete: function(xhr, textStatus) {          
                } 
});
});
