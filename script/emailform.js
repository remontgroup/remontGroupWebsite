document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('form[name="form"]').addEventListener("submit", function(event) {
        event.preventDefault();

        // Retrieve form values
        const formData = {
            FNAME: document.getElementById("name-3b9a").value,
            EMAIL: document.getElementById("email-3b9a").value,
            PHONE: document.getElementById("phone-0efa").value,
            MESSAGE: document.getElementById("message-3b9a").value,
            from_name: "Omer Aksan" // Replace with your actual name
        };

        // Send email using EmailJS send method
        emailjs.send("service_ga007un", "template_osjwb1i", formData)
            .then(response => {
                console.log("Email sent successfully!", response.status, response.text);
                alert("Message sent successfully!");
            })
            .catch(error => {
                console.error("Email sending failed:", error);
                alert("Message failed to send. Please try again later.");
            });
    });
});
