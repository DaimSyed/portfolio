const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navbarLink = document.querySelectorAll(".navbar-link");
const progressBar = document.querySelector(".progress-bar-wrapper");

let navbarTop = navbar.offsetTop;
let progresPer = [90, 85, 60, 80, 50]

window.addEventListener("scroll", () => {
    mainFn()
});


const mainFn = ()=>{
    if (window.pageYOffset >= navbarTop) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    
      sections.forEach((section, i) => {
        if (window.pageYOffset >= section.offsetTop - 20) {
          navbarLink.forEach((nav) => {
            nav.classList.remove("change");
          });
          navbarLink[i].classList.add("change");
        }
      });
    
      if(window.pageYOffset + window.innerHeight >= progressBar.offsetTop ){
          document.querySelectorAll('.progress-percent').forEach((per, i)=>{
            per.style.width = `${progresPer[i]}%`
            per.previousElementSibling.firstElementChild.textContent = progresPer[i]
          })
      }
}

mainFn()

window.addEventListener('resize', ()=>{
    window.location.reload()
})