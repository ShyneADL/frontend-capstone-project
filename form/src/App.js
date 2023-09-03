import React, { useState } from 'react';

function App() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        partySize: '',
    });

    const [validationErrors, setValidationErrors] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        partySize: '',
    });

    // Helper function to validate email
    const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    // Helper function to validate phone number
    const isValidPhoneNumber = (phone) => {
        const phonePattern = /^\d{10}$/; // Assumes 10-digit phone numbers
        return phonePattern.test(phone);
    };

    // Event handler for form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Event handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        const {
            name,
            email,
            phone,
            date,
            time,
            partySize,
        } = formData;

        // Validate the form inputs
        const newValidationErrors = {
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            partySize: '',
        };

        if (name === '') {
            newValidationErrors.name = 'Please enter your name.';
        }

        if (email === '') {
            newValidationErrors.email = 'Please enter your email.';
        } else if (!isValidEmail(email)) {
            newValidationErrors.email = 'Please enter a valid email address.';
        }

        if (phone === '') {
            newValidationErrors.phone = 'Please enter your phone number.';
        } else if (!isValidPhoneNumber(phone)) {
            newValidationErrors.phone = 'Please enter a valid phone number.';
        }

        if (date === '') {
            newValidationErrors.date = 'Please select a date.';
        }

        if (time === '') {
            newValidationErrors.time = 'Please select a time.';
        }

        if (partySize === '') {
            newValidationErrors.partySize = 'Please select a party size.';
        }

        // Update the state with the validation errors
        setValidationErrors(newValidationErrors);

        // Check if there are any validation errors
        if (Object.values(newValidationErrors).every((error) => error === '')) {
            // Form is valid, you can submit the data here
            // Add your submission logic or API call
            alert('Form submitted successfully!');
        } else {
            // Form has validation errors, do not submit
            alert('Form has errors. Please check the fields.');
        }
    };
  return (
    <div class="flex justify-center items-center w-full" >
            <div class="flex flex-col justify-center items-center w-full m-2">

                <h1 class="text-white text-[28px] lg:text-[44px] font-bold ">Table Booking for Little Lemon</h1>
                <p class="text-[rgba(255,255,255,0.8)] text-center text-[22px] lg:text-[28px] font-[600]">Please fill out the form to reserve a table at our restaurant.</p>

                <form onSubmit={handleSubmit} id="order" method="POST" class="flex flex-col items-start justify-center bg-white p-6 mt-4 md:w-[500px] w-[300px]">
                    
                    <div class="flex flex-1 flex-col items-start">
                        <label for="name">Name:</label>
                        <input type="text" 
                        id="name"
                        name="name"
                        required
                        class="border-2 border-[#F4B400] border-solid md:w-[452px] w-[252px] text-[18px]"
                        value={formData.name}
                        onChange={handleInputChange}/>
                        <span className="error">{validationErrors.name}</span>
                    </div>
                    
                    <div class="flex flex-1 flex-col items-start">
                        <label for="email">Email:</label>
                        <input type="email" 
                        id="email" 
                        name="email" required 
                        class="border-2 border-[#F4B400] border-solid md:w-[452px] w-[252px] text-[18px]" 
                        value={formData.email}
                        onChange={handleInputChange}/>
                        <span className="error">{validationErrors.email}</span>
                    </div>
                    
                    <div class="flex flex-1 flex-col items-start">
    
                        <label for="phone">Phone Number:</label>
                        <input type="tel" 
                        id="phone" 
                        name="phone" required 
                        class="border-2 border-[#F4B400] border-solid md:w-[452px] w-[252px] text-[18px]" 
                        value={formData.phone}
                        onChange={handleInputChange}/>
                        <span className="error">{validationErrors.phone}</span>
                    </div>
                    
                    <div class="flex flex-1 justify-center md:flex-row flex-col">
    
                        <div class="flex flex-col items-start">
                            <label for="date">Date:</label>
                            <input type="date" 
                            id="date" 
                            name="date" required 
                            class="border-2 border-[#F4B400] border-solid md:w-[178px] w-[252px] text-[18px] md:mr-[96px]" 
                            value={formData.date}
                            onChange={handleInputChange}/>
                            <span className="error">{validationErrors.date}</span>
                        </div>
                        
                        <div class="flex flex-1 flex-col items-start">
                            <label for="time">Time:</label>
                            <input type="time" 
                            id="time" 
                            name="time" required 
                            class="border-2 border-[#F4B400] border-solid md:w-[178px] w-[252px] text-[18px]" 
                            value={formData.time}
                            onChange={handleInputChange}/>
                            <span className="error">{validationErrors.time}</span>
                        </div>
                    </div>
    
                    <div class="flex flex-1 flex-col items-start">
    
                        <label for="party-size">Party Size:</label>
                        <input type="number" 
                        id="party-size" 
                        name="party-size" 
                        min="1" required 
                        class="border-2 border-[#F4B400] border-solid md:w-[452px] w-[252px] text-[18px]" 
                        value={formData.partySize}
                        onChange={handleInputChange}/>
                        <span className="error">{validationErrors.partySize}</span>
                    </div>
    
                    <div class="flex flex-1 flex-col items-start">
                        <label for="special-requests">Special Requests (optional):</label>
                    <textarea id="special-requests" name="special-requests" rows="4" cols="50" class="border-2 border-[#F4B400] border-solid md:w-[452px] w-[252px] text-[18px]"></textarea>
                    </div>

                    <div class="flex justify-center items-center w-full">

                        <button type="submit" class="py-2 px-4 bg-[#F4B400] rounded-3xl mt-8">Submit Reservation</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default App