
//Use this code if button is appended in the DOM
$(document).on('click','#btnSubmit',function(){
    let name = $("#name_1").val();
    let username = $("#username_1").val();
    let password = $("#password_1").val();
    let password_repeat = $("#password_1").val();
    let role = $("#role_1").val();
    let email = $("#email_1").val();
    let occupation = $("#occupation_1").val();

    var JSONIdentity = new Object();
    JSONIdentity.name = name;
    JSONIdentity.username = username;
    JSONIdentity.password = password;
    JSONIdentity.password_repeat = password_repeat;
    JSONIdentity.email = email;
    JSONIdentity.occupation = occupation;

    console.log(JSONIdentity);

    $.ajax({
                    type: 'POST',
                    url: 'http://localhost:3000/api/sign-up',
                    data: JSON.stringify(JSONIdentity),
                    contentType: "application/json; charset=utf-8",
      
                    success: function(data, textStatus, xhr) {
                    alert((xhr.responseJSON.msg));    
                    window.location.href = "/login/";
                    },
                    complete: function(xhr, textStatus) {          
                } 
});
});
