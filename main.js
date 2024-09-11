// JavaScript for Event Management System

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Dynamic Content Loading (Optional)
// Load different event details dynamically without reloading the page
document.addEventListener('DOMContentLoaded', function() {
    const eventCards = document.querySelectorAll('.event-card a');
    const eventDetailsSection = document.querySelector('.event-details');

    eventCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const eventId = this.getAttribute('data-event-id');
            loadEventDetails(eventId);
        });
    });

    function loadEventDetails(eventId) {
        // Example dynamic content loading
        // In a real application, you might fetch data from a server using AJAX
        const eventDetails = {
            1: {
                title: "Event 1 Title",
                date: "August 30, 2024",
                location: "Online",
                description: "Description for Event 1."
            },
            2: {
                title: "Event 2 Title",
                date: "September 15, 2024",
                location: "New York, NY",
                description: "Description for Event 2."
            },
            // Add more event details here
        };

        const event = eventDetails[eventId];
        if (event) {
            eventDetailsSection.innerHTML = `
                <h3>${event.title}</h3>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p>${event.description}</p>
            `;
        }
    }
});

// Example: Form Validation Function (To be linked with register.html)
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const event = document.getElementById("event").value;

    if (!name || !email || !phone || !event) {
        alert("All fields must be filled out");
        return false;
    }

    // Further validation logic can be added here
    return true;
}

// Add more JavaScript functions as needed for your project

