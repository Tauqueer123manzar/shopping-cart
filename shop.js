console.log("Hello");
let cloths=document.getElementById("cloths");
let Blogs=document.getElementById("Blogs");
let reviews=document.getElementById("reviews");
let Contact=document.getElementById("Contact");

cloths.addEventListener("click",function(){
    cloths.style.color="red";
    Blogs.style.color="black";
    reviews.style.color="black";
    Contact.style.color="black";
})
Blogs.addEventListener("click",function(){
    cloths.style.color="black";
    Blogs.style.color="red";
    reviews.style.color="black";
    Contact.style.color="black";
})
reviews.addEventListener("click",function(){
    cloths.style.color="black";
    Blogs.style.color="black";
    reviews.style.color="red";
    Contact.style.color="black";
})
Contact.addEventListener("click",function(){
    cloths.style.color="black";
    Blogs.style.color="black";
    reviews.style.color="black";
    Contact.style.color="red";
})
let login=document.getElementById("login");
login.addEventListener("click",function(){
    let loginpage=document.querySelector(".loginpage").style.display="block";
})
let loged=document.getElementById("loged");
loged.addEventListener("click",function(){
    let email=document.getElementById("email");
    let pass=document.getElementById("pass");
    if( email.value==" " || pass.value==" "){
           alert("please Enter Email and password");
    }else{
        alert("You Loged in");
        document.querySelector(".loginpage").style.display="none";s
    }
})

let submit=document.getElementById("submit");
submit.addEventListener("click",function(){
    let name=document.getElementById("name");
    let password=document.getElementById("password");
    if(name.value==" " || password.value==" "){
        alert("please Enter name and password");
    }else{
        alert(name .value+ " Thanks for connecting");
        document.querySelector(".contactpage").style.display="none";
    }
})
