let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};


// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("fa-moon")) {
    darkmode.classList.replace("fa-moon", "fa-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("fa-sun", "fa-moon");
    document.body.classList.remove("active");
  }
};



// ---------------------------------typing animation-------------------------

let typed = new Typed(".typing",{
  strings:["","Tika Ram Khojwar","Tika Ram Khojwar"],
  typeSpeed:300,
  BackSpeed:60,
  loop:true
})


// -----------------------------navbar -----------------------
const nav = document.querySelector(".navbar")
const navList = nav.querySelectorAll("li")
  
for (let i = 0; i < navList.length; i++) {
  const a = navList[i].querySelector("a")
  a.addEventListener("click", function() {
    for(let j=0; j<navList.length; j++) {
      navList[j]. querySelector("a").classList.remove("active")
    }
    this.classList.add("active")
  })
  
}
