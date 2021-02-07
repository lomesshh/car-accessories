function checkPass()
{
   
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    var name =  document.getElementById('name');
    var phoneno =  document.getElementById('phoneno');
    var email =  document.getElementById('email');


    var message = document.getElementById('confirmMessage');
   
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
   


    if(name==""||phoneno==""||email==""||pass1==""||pass2=="")
     {
     alert("please fill all the field")
     } 
    
    if(pass1==pass2)
   {   
   alert("Registration Sucessfull");
   }
 
   if(pass1!=pass2)
   { 
   alert("password do not match");}
   }
  
}

     
     

