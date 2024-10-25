const handleSubmit = async (event) => {
    // Prevent form from submitting default
    event.preventDefault(); 

    // Extract fields from the form, and
    
    const formData = {
        name: document.getElementById('restaurant-name').value,
        number: document.getElementById('phone-number').value,
        address: document.getElementById('address').value,
        photo: document.getElementById('photoURL').value,
    };

    // send a request to create a new restaurant


    try {
        // Send a POST request to create a new restaurant
        const response = await fetch('/createRestaurant', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData), // Convert form data to JSON string
        });

        // Check if the request was successful
        if (response.ok) {
            console.log('Restaurant created successfully!');
            // Redirect to the restaurants page to view the new entry
            window.location.href = '/restaurants';
        } else {
            console.error('Failed to create restaurant:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
    

document.addEventListener('DOMContentLoaded', () => {
    // Select the form by its ID
    const form = document.getElementById('new-restaurant');

    // Add event listener to the form for submit events
    if (form) {
        form.addEventListener('submit', handleSubmit);
    } else {
        console.error('Form not found');
    }
});