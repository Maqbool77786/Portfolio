// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});

// Add a click effect to the "Contact Me" button
const contactButton = document.querySelector('.btn');

if (contactButton) {
  contactButton.addEventListener('click', () => {
    alert('Thank you for reaching out!');
  });
} else {
  console.error('Button with class `.btn` not found!');
}


// Dynamic greeting based on the time of day
const heroSection = document.getElementById('hero');

// Create greeting paragraph
const greeting = document.createElement('p');
const hour = new Date().getHours();

// Set greeting text based on the time of day
if (hour < 12) {
    greeting.textContent = 'Good Morning!';
} else if (hour < 18) {
    greeting.textContent = 'Good Afternoon!';
} else {
    greeting.textContent = 'Good Evening!';
}

// Find the existing <h1> and <p> tags in the heroSection
const h1 = heroSection.querySelector('h1');
const p = heroSection.querySelector('p');

// Insert the greeting between the <h1> and <p> tags
heroSection.insertBefore(greeting, p); // Inserts the greeting before the <p> element

