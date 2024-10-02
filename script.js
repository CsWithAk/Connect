// script.js
/*========Contact form Function!=========*/

document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("jFLEDGn_skCFjSsIR"); 
   // Replace with your EmailJS user ID

    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_df3xcvu', 'template_fyfoc7d', form) //Replace with your EmailJS Service id and template id 
            .then(function(response) {
                document.getElementById('responseMessage').textContent = 'Message sent successfully!';
                alert('Thank you for reaching out! We will get back to you soon.');
                form.reset();
            }, function(error) {
                document.getElementById('responseMessage').textContent = 'Error sending message. Please try again.';
            });
    });
});



//Create your account on Emailjs.com
//create a public key or user id
//create a service id 
//create a template id 



//Team AK
//INSTAGRAM - amit_0_prajapati
