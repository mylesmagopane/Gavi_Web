const scriptURL = 'https://script.google.com/macros/s/AKfycbxPsV3SMiCN72UgnKYsS_TfEvqOnYE3bZEEhEecgY0UhEurxEMpSnyFxVtkOdA61Px1IA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
const popup = document.getElementById("popup")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        popup.style.display = "unset"
        msg.innerHTML = "Message sent Successfully"
        setTimeout(function(){
            msg.innerHTML = ""
            popup.style.display = "none"
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})


// emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID

//   document.getElementById("contact-form").addEventListener("submit", function(event) {
//     event.preventDefault();

//     var templateParams = {
//       from_name: document.getElementById("name").value,
//       from_email: document.getElementById("email").value,
//       message: document.getElementById("message").value
//     };

//     // Send the email via EmailJS
//     emailjs.send("service_n7woq7i", "YOUR_TEMPLATE_ID", templateParams)
//       .then(function(response) {
//         alert("Message sent successfully!");
//       }, function(error) {
//         alert("Failed to send message: " + error.text);
//       });
//   });
