let state = false;
var submit_form = document.getElementById("form");

submit_form.onsubmit=function(e)
{
    e.preventDefault();
    if(required("uid")&& required("pass")&& required("name")&& required("country")
    &&required("zip")&& required("email")&& required("sex")&& required("lan"))
    {
        if(state){
            alert("Form Submited!");
            submit_form.reset();
        }
        else{
            alert("Fill the required fields.")
        }

    }
    else{
        alert('Check Form fill the required fields')
    }
}



function required(id){
    let checkElement = document.getElementById(id).value.length>0;
    if(checkElement){
        return true;
    }
    else{
        document.getElementById("e"+id).innerHTML="This field is required";
        return false;
    }

}



function valid(id){
    let ele=document.getElementById(id);
    let err = document.getElementById("e"+id);

    if(id=="uid"){
        let min=5;
        let max=12;
        let msg="User id should be between "+min+" and"+ max +" characters";
    limitchars(ele,err,min,max,msg);
    }
    else if(id==="pass"){
        let min=7;
        let max=12;
        let msg="Password should be between "+min+" and"+ max +" characters";
    limitchars(ele,err,min,max,msg);
}
else if(id==="name"){
    
    alphabets(ele,err);
}
else if(id==='country'){
    if(ele.value.length>0){
        err.innerHTML=""
    }
}
else if(id==="email"){
        
    email(ele,err);
}
else if(id==="zip"){
        
    numbers(ele,err);
}
else if(id==='sex'){
    check(id);
}
else if(id=='lan'){
    check(id);
}

}
function limitchars(ele,err,min,max,msg){
      
    if(ele.value.length >max||ele.value.length<min) {
        ele.value="";
        err.innerHTML = msg;
      
          state=false;
    }
    else{
        err.innerHTML="";
        state=true;
    }

}


function alphabets(ele,err)
{ 
var letters = /^[A-Za-z ]+$/;
if(ele.value.match(letters))
{
    err.innerHTML="";
    state=true;

}
else
{
    
err.innerHTML='Please input alphabet characters only';
state=false;
}
}

function numbers(ele,err)
{ 
var numbers = /^[0-9]+$/;
if(ele.value.match(numbers))
{
    err.innerHTML="";
    state=true;

}

else
{

err.innerHTML='Please input numbers only';
state=false;
}
}
function email(ele,err)
{ 
 let email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
if(ele.value.match(email))
{
    err.innerHTML="";
    state=true;

}

else
{

err.innerHTML='Please Enter valid email address';
state=false;}
}

function check(id){
    if(document.getElementById(id).checked||document.getElementById(id+'2').checked){
 
        document.getElementById('e'+id).innerHTML="";
        return true;
    }
    else{
   
        document.getElementById('e'+id).innerHTML="Select the option ";
        return false;
    }
}
