/* This file should contain definitions for deleteRestaurantCard,
    and js to attach it as a handler per card.
    const { restart } = require("nodemon");
  */  

function deleteItem(restaurantId) {
    // fetch restauraunt to delet by id
    fetch (`/api/restaurants/${restaurantId}`, {method: 'DELETE'})
        .then(() => {
            // reload page when button clicked
            window.location.reload();
        })
        // catch error
        .catch(error => {
             console.error('Error deleting items', error)
        });
}


document.addEventListener("DOMContentLoaded", function() {
    // select all delete buttons
    const deleteButtons = document.querySelectorAll('.delete');
   console.log(deleteButtons);
   // add a click event listener to each button
    deleteButtons.forEach((button) => {
        button.addEventListener('click', function() {
            // set restaurant ID to the data-id attribute
            const restaurantId = this.closest('.restaurant').getAttribute('data-id');
            console.log(restaurantId);
            // call deleteRestaurantCard when button is clicked
            deleteItem(restaurantId);
        });
    });
});
