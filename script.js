// script.js
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Here you can perform authentication, for this example, let's just log the credentials
    console.log("Username:", username);
    console.log("Password:", password);
  
    // Simulating successful registration
    // You can replace this with your actual authentication logic
    setTimeout(function() {
      alert("Successfully registered!");
      // Clear input fields
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    }, 1000); // Delay for demonstration purpose, you can remove this line in actual implementation
  });
  