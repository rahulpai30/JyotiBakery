// Dynamic Category Filtering
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

// Form Logic
document.getElementById('inquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('userName').value;
    const feedback = document.getElementById('formFeedback');
    feedback.classList.remove('d-none');
    feedback.className = "mt-3 text-success fw-bold";
    feedback.textContent = `Thanks, ${name}! Your inquiry has been sent to Jyoti Bakery.`;
    this.reset();
});
