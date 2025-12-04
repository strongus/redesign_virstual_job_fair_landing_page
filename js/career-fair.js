/* ==========================================================================
   Career Fair Landing Pages - Shared JavaScript
   Used by both virtual and in-person career fair pages
   ========================================================================== */

// ==========================================================================
// Modal Functionality
// ==========================================================================

const modal = document.getElementById('registrationModal');
const quickRegisterBtn = document.getElementById('quickRegisterBtn');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalOptionCards = document.querySelectorAll('[data-modal-close]');

function openModal() {
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

if (quickRegisterBtn) {
    quickRegisterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });
}

if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

modalOptionCards.forEach(card => {
    card.addEventListener('click', () => {
        closeModal();
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        closeModal();
    }
});

// ==========================================================================
// Countdown Timer (Virtual Events)
// Only runs if data-countdown-date attribute is present on a chip
// ==========================================================================

function updateCountdown() {
    const countdownChip = document.querySelector('.md-chip[data-countdown-date]');
    if (!countdownChip) return;

    const eventDate = new Date(countdownChip.dataset.countdownDate).getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        countdownChip.innerHTML = `<span class="material-icons" style="font-size: 18px;">schedule</span> ${days} Days, ${hours} Hours Left`;
    }
}

// Initialize countdown if element exists
if (document.querySelector('.md-chip[data-countdown-date]')) {
    updateCountdown();
    setInterval(updateCountdown, 60000);
}

// ==========================================================================
// Animated Counter (Virtual Events)
// Only runs if data-counter-target attribute is present on a chip
// ==========================================================================

function animateCounter() {
    const counterChip = document.querySelector('.md-chip[data-counter-target]');
    if (!counterChip) return;

    const target = parseInt(counterChip.dataset.counterTarget, 10);
    const label = counterChip.dataset.counterLabel || 'Registered';
    const startValue = Math.max(0, target - 30); // Start 30 below target

    let count = startValue;
    const increment = 1;
    const delay = 100;

    const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target;
            clearInterval(timer);
        }
        counterChip.textContent = `${count} ${label}`;
    }, delay);
}

window.addEventListener('load', animateCounter);

// ==========================================================================
// Smooth Scroll
// ==========================================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
