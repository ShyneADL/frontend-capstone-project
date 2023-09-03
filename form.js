    // Function to validate the form
    function validateForm() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const partySize = document.getElementById("party-size").value;
        
        // Simple validation checks
        if (name === "") {
            alert("Please enter your name.");
            return false;
        }
        
        if (email === "") {
            alert("Please enter your email.");
            return false;
        } else if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return false;
        }
        
        if (phone === "") {
            alert("Please enter your phone number.");
            return false;
        } else if (!isValidPhoneNumber(phone)) {
            alert("Please enter a valid phone number.");
            return false;
        }
        
        if (date === "") {
            alert("Please select a date.");
            return false;
        }
        
        if (time === "") {
            alert("Please select a time.");
            return false;
        }
        
        if(partySize === "") {
            alert("Please select a party size.")
            return false
        }
        return true;
    }
