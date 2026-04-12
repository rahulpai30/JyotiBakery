// JavaScript for Menu Filtering (Module 6 & 7)
const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from buttons
        filterButtons.forEach(btn => btn.classList.remove('active', 'btn-dark'));
        button.classList.add('active', 'btn-dark');

        const filterValue = button.getAttribute('data-filter');

        menuItems.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// JavaScript for Form Validation (Module 7)
const inquiryForm = document.getElementById('inquiryForm');
const feedback = document.getElementById('formFeedback');

inquiryForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('userName').value;
    
    if (name.length < 3) {
        feedback.textContent = "Please enter a valid name (at least 3 characters).";
        feedback.className = "mt-3 text-danger";
        feedback.classList.remove('d-none');
    } else {
        feedback.textContent = `Thank you, ${name}! Your inquiry for Jothy Bakery has been sent.`;
        feedback.className = "mt-3 text-success fw-bold";
        feedback.classList.remove('d-none');
        inquiryForm.reset();
    }
});
