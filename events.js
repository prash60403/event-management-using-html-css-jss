// JavaScript for Event Management System - Events Page

// Example: Filtering Events by Category
document.addEventListener('DOMContentLoaded', function() {
    const filterSelect = document.getElementById('event-category');
    const eventCards = document.querySelectorAll('.event-card');

    filterSelect.addEventListener('change', function() {
        const selectedCategory = this.value;

        eventCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                card.style.display = 'inline-block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Example: Display Event Details on Click
document.querySelectorAll('.event-card .btn').forEach(button => {
    button.addEventListener('click', function() {
        const eventId = this.getAttribute('href').split('event=')[1];
        showEventDetails(eventId);
    });
});

function showEventDetails(eventId) {
    // Example function to show event details
    // You could replace this with code to load details from a server or show a modal
    alert(`Event details for Event ID: ${eventId}`);
}
