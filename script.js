// Menu Filtering Logic (Modules 6-7)
const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('btn-dark', 'text-white'));
        button.classList.add('btn-dark', 'text-white');

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

// Form Validation Logic (Modules 6-7)
document.getElementById('inquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('userName').value;
    const feedback = document.getElementById('formFeedback');
    
    feedback.classList.remove('d-none');
    feedback.className = "mt-3 text-success fw-bold";
    feedback.textContent = `Thank you, ${name}! Your inquiry for Jyoti Bakery & Juice has been received.`;
    this.reset();
});
