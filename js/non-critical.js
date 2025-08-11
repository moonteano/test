// Non-critical JavaScript loaded after page load
(function() {
    'use strict';
    
    // Enhanced animations and interactions
    const addEnhancedInteractions = () => {
        // Smooth scrolling for anchor links
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
        
        // Parallax effect for hero section
        const hero = document.querySelector('.hero');
        if (hero) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                hero.style.transform = `translateY(${rate}px)`;
            });
        }
        
        // Form enhancements
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                // Add loading state
                const submitBtn = form.querySelector('[type="submit"]');
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.textContent = 'Loading...';
                }
            });
        });
    };
    
    // Analytics and tracking (placeholder)
    const initAnalytics = () => {
        // Google Analytics or other tracking code would go here
        console.log('Analytics initialized');
    };
    
    // Third-party integrations
    const loadThirdPartyScripts = () => {
        // Load non-essential third-party scripts
        const scripts = [
            // Add any third-party script URLs here
        ];
        
        scripts.forEach(src => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            document.head.appendChild(script);
        });
    };
    
    // Initialize non-critical features
    setTimeout(() => {
        addEnhancedInteractions();
        initAnalytics();
        loadThirdPartyScripts();
    }, 1000);
})();