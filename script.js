// Dynamic Category Filtering (Modules 6 & 7)
const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active styling from all buttons
        filterButtons.forEach(btn => btn.classList.remove('btn-dark', 'text-white', 'active'));
        
        // Add active styling to the clicked button
        button.classList.add('btn-dark', 'text-white', 'active');

        const filter = button.getAttribute('data-filter');

        menuItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// Form Validation and Submission Handling (Module 7)
document.getElementById('inquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('userName').value;
    const contact = document.getElementById('userContact').value;
    const size = document.getElementById('cakeSize').value;
    const description = document.getElementById('customDesc').value;
    const feedback = document.getElementById('formFeedback');
    
    // Simple validation
    if (name.length < 2 || contact.length < 5) {
        feedback.classList.remove('d-none');
        feedback.className = "mt-3 text-danger fw-bold";
        feedback.textContent = "Please enter valid contact details.";
    } else {
        feedback.classList.remove('d-none');
        feedback.className = "mt-3 text-success fw-bold p-2 border border-success rounded";
        feedback.textContent = `Success! Thank you, ${name}. Your custom inquiry for a ${size} order has been received. We will contact you at ${contact} to finalize the details.`;
        
        // Reset the form
        this.reset();
    }
});
