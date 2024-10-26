<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['FNAME']);
    $email = htmlspecialchars($_POST['EMAIL']);
    $phone = htmlspecialchars($_POST['PHONE']);
    $message = htmlspecialchars($_POST['MESSAGE']);

    // Validate form data
    if (!empty($name) && !empty($email) && !empty($phone) && !empty($message)) {
        // Prepare email headers and body
        $to = "bekapirmat@gmail.com"; // Your email address
        $subject = "New Customer from website.";
        $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";
        $headers = "From: $email";

        // Send the email
        if (mail($to, $subject, $body, $headers)) {
            // Success message
            echo "<div class='u-form-send-success'>Thank you! Your message has been sent.</div>";
        } else {
            // Error sending email
            echo "<div class='u-form-send-error'>Unable to send your message. Please try again later.</div>";
        }
    } else {
        // Validation failed
        echo "<div class='u-form-send-error'>Please fill in all fields correctly.</div>";
    }
} else {
    // Not a POST request
    echo "<div class='u-form-send-error'>Invalid request method.</div>";
}
?>
