$(document).ready(function(){
    $("#usernamevalidation").hide();
    $("#passwordvalidation").hide();
    $("#confirmpasswordvalidation").hide();
    $("#emailvalidation").hide();

    var Error=true;
    var password_error=true;
    var confirm_password_error=true;
    var email_error=true;

    $('#username').keyup(function(){
        username_validation();
    });

    function username_validation(){
        var username_val=$('#username').val();
        if(username_val.length=='')
        {
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username cannot be empty');
            $('#usernamevalidation').css('color','red');
            Error=false;
            return false;            
        }
        else
        {
            $('#usernamevalidation').hide();
            Error=true;            
        }
        if(username_val.length<4)
        {
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username should conation atleast 4 characters');
            $('#usernamevalidation').css('color','red');
            Error=false;
            return false;            
        }
        else
        {
            $('#usernamevalidation').hide();
            Error=true;            
        }
    }

    $('#password').keyup(function(){
        password_validation();
    });
    
// var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{​8,}​)");
// ​var emailregex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){​2,7}​$/;

    // function password_validation(){

    //     var password_val=$('#password').val();
    //     if(password_val.length=='')
    //     {
    //         $('#passwordvalidation').show();
    //         $('#passwordvalidation').html('Password cannot be empty');
    //         $('#passwordvalidation').css('color','red');
    //         password_error=false;
    //         return false;            
    //     }
    //     else
    //     {
    //         $('#passwordvalidation').hide();            
    //     }
    //     if(password_val.length<7)
    //     {
    //         $('#passwordvalidation').show();
    //         $('#passwordvalidation').html('Please length inadeqaute');
    //         $('#passwordvalidation').css('color','red');
    //         password_error=false;
    //         return false;            
    //     }
    //     else
    //     {
    //         $('#passwordvalidation').hide();            
    //     }
    // }
    function password_validation(){
        var password_val = $('#password').val();
        if(password_val.length==''){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Password cannot be empty');
            $('#passwordvalidation').css('color','red');
            password_error = false;
            return false;
        }
        var password1 = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if(!password1.test(password_val)){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Password should contain atleast one lowercase,one uppercase,one numeric and one special character having minimum length 8');
            $('#passwordvalidation').css('color','red');
            password_error = false;
            return false;
        }
        else{
            $('#passwordvalidation').hide();
            password_error=true;
        }
    }

    $('#confirmpassword').keyup(function(){
        confirm_password();
    });

    function confirm_password(){
        var confirm_password_val=$('#confirmpassword').val();
        if(confirm_password_val.length==''){
            $('#confirmpasswordvalidation').show();
            $('#confirmpasswordvalidation').html('Password cannot be empty');
            $('#confirmpasswordvalidation').css('color','red');
            confirm_password_error = false;
            return false;
        }
        else{
            $('#confirmpasswordvalidation').hide();
            confirm_password_error=true;            
        }
        var password_val=$('#password').val();
        if(password_val!=confirm_password_val)
        {
            $('#confirmpasswordvalidation').show();
            $('#confirmpasswordvalidation').html('Password did not match');
            $('#confirmpasswordvalidation').css('color','red');
            confirm_password_error=false;
            return false;
        }
        else{
            $('#confirmpasswordvalidation').hide();
            confirm_password_error=true;            
        }
    }

    $('#email').keyup(function(){
        check_email();
    });

    function check_email(){
        var email_length = $('#email').val().length;
        if(email_length == ''){
            $('#emailValidation').html('Email is required');
            $('#emailValidation').show();
            $('#emailValidation').css('color', 'red');
            email_error = false;
            return false;
        }
        else{
            $('#emailValidation').hide();
            email_error = true;
        }
        // if(email_length < 4){
        //     $('#emailValidation').html('Email must be atleast 4');
        //     $('#emailValidation').css('color', 'red');
        //     $('#emailValidation').show();
        //     email_error = false;
        //     return false;

        // }else{
        //     $('#emailValidation').hide();
        //     email_error = true;
        // }
        // ​var emailregex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){​2,7}​$/;

        var email_val = $('#email').val();
        // var regex = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
        var regex=/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        // ​var regex = new RegExp(/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){​2,7}​$/);
        if(!regex.test(email_val)){
            $('#emailValidation').html('Invalid Email');
            $('#emailValidation').css('color', 'red');
            $('#emailValidation').show();
            email_error = false;
            return false;
        }
        else{
            $('#emailvalidation').hide();
            email_error=true;
        }
    }

    $("#submitvalidation").click(function(){
        username_validation();
        password_validation();
        confirm_password();
        check_email();
        if(Error==true && password_error==true && confirm_password_error==true && email_error==true){
            return true;
        }
        else{
            return false;
        }
    });
});