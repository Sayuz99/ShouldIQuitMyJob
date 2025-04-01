// badge-navbar.js - Place this in your root directory and include on all pages
document.addEventListener('DOMContentLoaded', function() {
    const employeeBadge = document.getElementById('employeeBadge');
    const badgeIcon = document.querySelector('.badge-icon');
    const themeToggle = document.getElementById('themeToggle');
    
    // Fix 1: Handle theme consistency
    // Check for saved theme preference and apply it on page load
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    if (savedTheme) {
        document.body.classList.add('dark-theme');
        // Ensure all theme toggles are synchronized
        const themeToggles = document.querySelectorAll('input[id="themeToggle"]');
        themeToggles.forEach(toggle => {
            toggle.checked = true;
        });
    }
    
    // Fix 2: Better badge expansion mechanics with proper overlay prevention
    employeeBadge.addEventListener('click', function(e) {
        // Don't toggle if clicking on a link or the theme toggle
        if (e.target.closest('.clearance-link') || e.target.closest('.switch')) {
            return;
        }
        
        // Improved toggle with better animation control
        if (!this.classList.contains('expanded')) {
            // Before expanding, make sure it's visible
            this.style.overflow = 'hidden';
            this.classList.add('expanding');
            
            setTimeout(() => {
                this.classList.add('expanded');
                this.classList.remove('expanding');
                // After expansion animation completes, allow scrolling if needed
                setTimeout(() => {
                    this.style.overflow = 'auto';
                }, 300);
            }, 300);
        } else {
            // When collapsing, immediately hide overflow to prevent display bugs
            this.style.overflow = 'hidden';
            this.classList.remove('expanded');
        }
    });
    
    // Fix 3: Close badge when clicking outside (improved version)
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.employee-badge') && employeeBadge.classList.contains('expanded')) {
            employeeBadge.style.overflow = 'hidden';
            employeeBadge.classList.remove('expanded');
        }
    });
    
    // Fix 4: Better theme toggle with synchronized controls
    // This ensures all theme toggles (in navbar and in settings panel) stay in sync
    const handleThemeToggle = function(event) {
        const isDarkMode = event.target.checked;
        
        // Apply or remove dark theme
        if (isDarkMode) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
        
        // Store preference
        localStorage.setItem('darkMode', isDarkMode);
        
        // Sync all theme toggles on the page
        const themeToggles = document.querySelectorAll('input[id="themeToggle"]');
        themeToggles.forEach(toggle => {
            toggle.checked = isDarkMode;
        });
    };
    
    // Apply theme toggle handlers to all theme toggle inputs
    const themeToggles = document.querySelectorAll('input[id="themeToggle"]');
    themeToggles.forEach(toggle => {
        toggle.addEventListener('change', handleThemeToggle);
    });
    
    // Fix 5: Add badge jiggle animation for better interactivity
    if (badgeIcon) {
        badgeIcon.addEventListener('mouseover', function() {
            this.style.transform = 'translate(-50%, -50%) rotate(5deg)';
            setTimeout(() => {
                this.style.transform = 'translate(-50%, -50%) rotate(-5deg)';
            }, 150);
            setTimeout(() => {
                this.style.transform = 'translate(-50%, -50%) rotate(0)';
            }, 300);
        });
    }
    
    // Fix 6: Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.clearance-link');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        // More reliable current page detection
        if (href === currentPage || 
            (currentPage.includes(href) && href !== 'index.html') ||
            (currentPage === '' && href === 'index.html')) {
            
            link.classList.add('active');
            
            // Add verification checkmark to active page icon
            const icon = link.querySelector('.clearance-icon');
            if (icon && !icon.querySelector('.badge-verification')) {
                const verifiedBadge = document.createElement('span');
                verifiedBadge.className = 'badge-verification';
                verifiedBadge.textContent = '✓';
                verifiedBadge.style.position = 'absolute';
                verifiedBadge.style.bottom = '-2px';
                verifiedBadge.style.right = '-2px';
                verifiedBadge.style.fontSize = '0.7rem';
                verifiedBadge.style.backgroundColor = 'var(--primary)';
                verifiedBadge.style.color = 'white';
                verifiedBadge.style.borderRadius = '50%';
                verifiedBadge.style.width = '12px';
                verifiedBadge.style.height = '12px';
                verifiedBadge.style.display = 'flex';
                verifiedBadge.style.alignItems = 'center';
                verifiedBadge.style.justifyContent = 'center';
                verifiedBadge.style.lineHeight = '1';
                
                icon.style.position = 'relative';
                icon.appendChild(verifiedBadge);
            }
        }
    });
    
    // Fix 7: Randomize the emoji in the badge photo
    const emojis = ['😎', '🤓', '🧐', '😏', '😊', '🙂', '🤔', '😴', '🥸', '😇'];
    const badgePhotoEmoji = document.querySelector('.badge-photo-emoji');
    
    if (badgePhotoEmoji) {
        // Use a consistent emoji per session or generate a new one
        const sessionEmoji = sessionStorage.getItem('badgeEmoji') || 
                            emojis[Math.floor(Math.random() * emojis.length)];
        
        // Store the emoji for consistent experience across pages
        sessionStorage.setItem('badgeEmoji', sessionEmoji);
        badgePhotoEmoji.textContent = sessionEmoji;
        
        // Occasionally change the emoji when badge is expanded (with small chance)
        employeeBadge.addEventListener('click', function() {
            if (Math.random() > 0.9) { // Reduced frequency to 10% chance
                const newEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                badgePhotoEmoji.textContent = newEmoji;
                sessionStorage.setItem('badgeEmoji', newEmoji);
            }
        });
    }
    
    // Fix 8: Ensure proper z-index and positioning for the badge
    employeeBadge.style.zIndex = '1000';
    
    // Fix 9: Handle window resize to prevent badge from going off-screen
    function adjustBadgePosition() {
        // If the badge is expanded and would go off-screen, adjust position
        if (employeeBadge.classList.contains('expanded')) {
            const badgeRect = employeeBadge.getBoundingClientRect();
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            
            // Check if badge goes off right edge of screen
            if (badgeRect.right > windowWidth) {
                employeeBadge.style.right = '20px';
                employeeBadge.style.left = 'auto';
            }
            
            // Check if badge goes off bottom of screen
            if (badgeRect.bottom > windowHeight) {
                // If badge is too tall, make it scrollable
                if (badgeRect.height > windowHeight - 40) {
                    employeeBadge.style.maxHeight = (windowHeight - 40) + 'px';
                    employeeBadge.style.overflowY = 'auto';
                } else {
                    // Otherwise, adjust position to fit
                    employeeBadge.style.bottom = '20px';
                    employeeBadge.style.top = 'auto';
                }
            }
        }
    }
    
    // Add resize event listener
    window.addEventListener('resize', adjustBadgePosition);
    
    // Initial adjustment
    adjustBadgePosition();
});