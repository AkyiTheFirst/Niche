const navbar = document.querySelector(".nav-bar");
const navLogo = document.querySelector(".nav-logo");
const navBtn = document.querySelector(".nav-btn");

const modalOpenBtn = document.querySelector(".nav-btn");
const modal = document.querySelector("#modal");
const modalCloseBtn = document.querySelector(".modal-btn");

const form = document.querySelector("form");
const userName = document.querySelector("#name");
const userPhone = document.querySelector("#phone");
const userMail = document.querySelector("#email");
const bussinessName = document.querySelector("#bussiness-name");
const bussinessType = document.querySelector("#bussiness-type");
const bussinessLocation = document.querySelector("#location");
const msg = document.querySelector("#proposal");
const message = document.querySelector("#message");

//opening and closing modal
modalOpenBtn.addEventListener("click", ()=>{
    modal.showModal();
})
modalCloseBtn.addEventListener("click", () => {
    modal.close();
})

//coding nav bar
document.addEventListener("scroll", ()=>{
    if(window.scrollY < 20){
        navbar.classList.remove("nav-on-scroll");
        navLogo.classList.remove("nav-logo-remove");
        navBtn.classList.remove("nav-btn-on-scroll");
    }
    else{
        navbar.classList.add("nav-on-scroll");
        navLogo.classList.add("nav-logo-remove");
        navBtn.classList.add("nav-btn-on-scroll");
    }
})

//form handling
form.addEventListener("submit", (event)=>{
    event.preventDefault();

    const currentUser = {
        id : Math.floor(Math.random() * 2000),
        name : userName.value,
        phone : userPhone.value,
        email : userMail.value,
        bussiness : bussinessName.value,
        type : bussinessType.value,
        location : bussinessLocation.value,
        description : msg.value
    };//evantually will be stored in database

    console.log(currentUser);
    showMessage("Success! We will contact you shortly!");
    form.reset();
})

function showMessage(textMsg){ 
    message.classList.add("message");
    message.innerHTML = textMsg;
    setTimeout(() => {
        message.innerHTML = "";
        message.classList.remove("message");
    }, 3000);
}