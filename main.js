document.addEventListener('DOMContentLoaded', () => {
    const reservationForm = document.getElementById('reservation-form');
    const parkingSpots = document.querySelectorAll('.spot');

    reservationForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting

        const spotNumber = parseInt(document.getElementById('spot-number').value);
        const selectedSpot = parkingSpots[spotNumber - 1]; // Get the selected spot (0-indexed)

        if (selectedSpot.classList.contains('available')) {
            // If the spot is available, reserve it
            selectedSpot.classList.remove('available');
            selectedSpot.classList.add('reserved');
            alert(`Spot ${spotNumber} has been reserved!`);
        } else {
            // If the spot is already reserved
            alert(`Spot ${spotNumber} is already reserved. Please choose another spot.`);
        }

        // Clear the input field
        reservationForm.reset();
    });
});
    
    