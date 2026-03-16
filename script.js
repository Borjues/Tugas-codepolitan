document.addEventListener('DOMContentLoaded', () => {
  // Simple interaction for neobrutalist buttons
  const buttons = document.querySelectorAll('.neo-button');
  
  buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
      button.style.transform = 'translate(2px, 2px)';
      button.style.boxShadow = '2px 2px 0px 0px rgba(0,0,0,1)';
    });

    button.addEventListener('mouseup', () => {
      button.style.transform = 'translate(-4px, -4px)';
      button.style.boxShadow = '10px 10px 0px 0px rgba(0,0,0,1)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = '';
      button.style.boxShadow = '';
    });
  });

  // Adding entry animation to the cards
  const cards = document.querySelectorAll('.neo-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });

  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
  });

  // Hide Intro Sequence after 3.2 seconds
  setTimeout(() => {
    const intro = document.getElementById('cyber-intro');
    if (intro) {
      intro.classList.add('hide');
      document.body.style.overflow = 'auto'; // Restore scroll
    }
  }, 3200);

  // Lock scroll initially
  document.body.style.overflow = 'hidden';
});
