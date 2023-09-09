$(document).ready(function(){
    $("#signup").validate({
        rules:{
            name:{
                required:true,
                minlength:5,
                nospace:true
            },
            email:{
                required:true,
                email:true
            },
            subject:{
                required:true,
                minlength:10
            },
            Message:{
                required:true,
                minlength:50
            }        
        },
        Message:{
            name:{
                required:"Please Enter your name",
                minlength:"Please enter minimum 5 character"
            },
            email:{
                required:"Please Enter Email",
                email:"Enter Valid Email"
            },
            subject:{
                required:"Please Enter Subject",
                minlength:"Please Enter Minimum 10 character"
            },
            Message:{
                required:"Please Enter a Message",
                minlength:"Please Enter Minimum 50 character"
            }
        }
    })
})
