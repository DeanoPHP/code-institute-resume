function sendMail(contactForm) {
    emailjs.send("service_n6idi3p", "resume ", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );

    contactForm.reset()
    return false;  // To block from loading a new page
}