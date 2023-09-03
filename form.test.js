// Import the functions or modules responsible for form handling and validation
import { validateForm } from './form.js'; // Replace with actual imports

// Mock the form element and its elements
document.body.innerHTML = `
<form id="order" method="POST" class="flex flex-col items-start justify-center bg-white p-6 m-4">
                    
                    <div class="flex flex-col items-start">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required class="border-2 border-[#F4B400] border-solid w-[400px] text-[18px]">
                    </div>
                    
                    <div class="flex flex-col items-start">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required class="border-2 border-[#F4B400] border-solid w-[400px] text-[18px]">
                    </div>
                    
                    <div class="flex flex-col items-start">
    
                        <label for="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" required class="border-2 border-[#F4B400] border-solid w-[400px] text-[18px]">
                    </div>
                    
                    <div class="flex justify-center">
    
                        <div class="flex flex-col items-start">
                            <label for="date">Date:</label>
                            <input type="date" id="date" name="date" required class="border-2 border-[#F4B400] border-solid w-[150px] text-[18px] mr-[100px]">
                        </div>
                        
                        <div class="flex flex-col items-start">
                            <label for="time">Time:</label>
                            <input type="time" id="time" name="time" required class="border-2 border-[#F4B400] border-solid w-[150px] text-[18px]">
                        </div>
                    </div>
    
                    <div class="flex flex-col items-start">
    
                        <label for="party-size">Party Size:</label>
                        <input type="number" id="party-size" name="party-size" min="1" required class="border-2 border-[#F4B400] border-solid w-[400px] text-[18px]">
                    </div>
    
                    <div class="flex flex-col items-start">
                        <label for="special-requests">Special Requests (optional):</label>
                    <textarea id="special-requests" name="special-requests" rows="4" cols="50" class="border-2 border-[#F4B400] border-solid w-[400px] text-[18px]"></textarea>
                    </div>

                    <div class="flex justify-center items-center w-full">

                        <button type="submit" class="py-2 px-4 bg-[#F4B400] rounded-3xl mt-8">Submit Reservation</button>
                    </div>
                </form>
`;


describe('Form Validation', () => {
    test('validateForm should return true for valid inputs', () => {
        document.getElementById('name').value = 'John Doe';
        document.getElementById('email').value = 'johndoe@example.com';

        expect(validateForm()).toBe(true);
    });

    test('validateForm should return false for invalid inputs', () => {
        document.getElementById('name').value = ''; // Empty name field
        document.getElementById('email').value = 'invalid-email'; // Invalid email format

        expect(validateForm()).toBe(false);
    });
});
