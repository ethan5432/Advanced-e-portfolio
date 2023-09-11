// template_o6t2c4f
// service_wkyckfs
// pdN7W2O2Lnz6u0z7C

function contact(event) {
     event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector("modal__overlay--success");
    loading.classList += " modal__overlay--visible";
 emailjs.sendForm(
      `service_wkyckfs`,
      `template_o6t2c4f`,
      event.target,
      `pdN7W2O2Lnz6u0z7C`
 ).then(() => {
         loading.classList.remove("modal__overlay--visible");
         success.classList += " modal__overlay--visible"; 
 }).catch(() => {
     loading.classList.remove("modal__overlay--visible");
     alert(
         "The email service is temporarily unavailable. Please contact me directly using Ethan.Nirenberg@gmail.com"
     );
    })
}

// let isModalOpen = false;
function toggleModal() {
    console.log('toggleModal()')
//     if (isModalOpen) {
//         return document.body.classList.remove("modal--open")
//     }
   
//       isModalOpen = !isModalOpen;
//     document.body.classList += " modal--open";
}