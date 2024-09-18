document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    if(name && email) {
        document.getElementById("formResponse").textContent = `Thank you, ${name}. We will contact you at ${email} soon.`;
    } else {
        document.getElementById("formResponse").textContent = "Please fill out both fields.";
    }
});
