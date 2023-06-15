// add class navbarDark on navbar scroll
//tutorial: https://lo-victoria.com/how-to-build-a-contact-form-with-javascript-and-nodemailer 
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

const form = document.getElementById("contact-form"); 

const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();

  let mail = new FormData(form);

  sendMail(mail);
})

const sendMail = (mail) => {
    fetch("/send", {
      method: "post",
      body: mail,
    }).then((response) => {
      return response.json();
    });
  };