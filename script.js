document.addEventListener("DOMContentLoaded", function() {
    const appointmentForm = document.getElementById("appointmentForm");
    const confirmationDiv = document.getElementById("confirmation");

    appointmentForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Retrieve user input
        const name = document.getElementById("name").value;
        const doctor = document.getElementById("doctor").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        // Create a confirmation message
        const confirmationMessage = `
            Thank you, ${name}!
            Your appointment with ${doctor} on ${date} at ${time} has been booked successfully.
        `;

        // Display the confirmation message
        confirmationDiv.innerHTML = confirmationMessage;

        // Clear the form
        appointmentForm.reset();
    });
});
