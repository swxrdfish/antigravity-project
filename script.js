/**
 * ============================================================================
 * THEME SWITCHING LOGIC
 * ============================================================================
 * This block handles the dark/light mode toggle. It uses local storage to
 * persist the user's preference across page reloads.
 */

// Select the theme toggle button from the DOM
const themeToggle = document.getElementById('theme-toggle');

// Function to set the theme based on provided name
const setTheme = (theme) => {
    // Set the data-theme attribute on the root element
    document.documentElement.setAttribute('data-theme', theme);
    // Save the theme name to local storage
    localStorage.setItem('theme', theme);
};

// Check for saved theme in local storage or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

// Add click event listener to the toggle button
themeToggle.addEventListener('click', () => {
    // Determine the current theme
    const currentTheme = document.documentElement.getAttribute('data-theme');
    // Switch to the opposite theme
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

/**
 * ============================================================================
 * SMOOTH SCROLLING FOR NAVIGATION LINKS
 * ============================================================================
 * This block intercepts clicks on internal links to provide a smooth animated
 * scroll to the target section.
 */

// Select all links that point to an ID on the current page
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Prevent default browser jump behavior
        e.preventDefault();
        
        // Get the target element ID from the href attribute
        const targetId = link.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Scroll to the target element
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/**
 * ============================================================================
 * REVEAL ON SCROLL ANIMATION
 * ============================================================================
 * This block uses the Intersection Observer API to detect when section elements
 * enter the viewport and adds an 'active' class to trigger CSS animations.
 */

// Options for the intersection observer
const observerOptions = {
    threshold: 0.1 // Trigger when 10% of the element is visible
};

// Callback function to run when intersection state changes
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add a class that we'll use in CSS for animation
            entry.target.classList.add('reveal-active');
            // Unobserve the element once it has been revealed
            observer.unobserve(entry.target);
        }
    });
};

// Initialize the observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe all sections and specific components
const revealElements = document.querySelectorAll('.section-padding, .project-card, .about-grid');
revealElements.forEach(el => {
    // Set initial state for animations
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
});

// Add CSS logic for the reveal effect dynamically (to keep CSS clean)
const style = document.createElement('style');
style.textContent = `
    .reveal-active {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);
