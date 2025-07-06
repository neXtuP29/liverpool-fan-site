/// Mobile menu toggle
document.getElementById('navToggle').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('show');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.news__item, .match, .legend');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animation
window.addEventListener('load', function() {
    const elements = document.querySelectorAll('.news__item, .match, .legend');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    animateOnScroll();
});

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);

// Form validation for contact page
if(document.querySelector('.contact-form')) {
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if(name === '' || email === '' || message === '') {
            alert('Пожалуйста, заполните все поля формы');
            return;
        }
        
        if(!validateEmail(email)) {
            alert('Пожалуйста, введите корректный email');
            return;
        }
        
        // Here you would typically send the form data to the server
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
        this.reset();
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

