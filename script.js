let menu = document.querySelector("#menu-bar");
let navBar = document.querySelector(".navbar");

/* Toggle menu*/ 
menu.onclick = () =>{
    menu.classList.toggle("fa-times");
    navBar.classList.toggle("active");
}

windows.onscroll = () =>{
    menu.classList.remove("fa-times");
    navBar.classList.remove("active");   

   if(window.scrollY > 60){
       document.querySelector("#scrollTop").classList.add("active")
   }
   else{
    document.querySelector("#scrollTop").classList.remove("active")
   }

}

