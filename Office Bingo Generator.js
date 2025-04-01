// Office Bingo Generator JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const cardTitleInput = document.getElementById('cardTitle');
    const cardTitleDisplay = document.getElementById('cardTitleDisplay');
    const freeSpaceTextInput = document.getElementById('freeSpaceText');
    const bingoGrid = document.getElementById('bingoGrid');
    const generateBtn = document.getElementById('generateBtn');
    const regenerateBtn = document.getElementById('regenerateBtn');
    const customItemInput = document.querySelector('.custom-item-input');
    const addCustomItemBtn = document.getElementById('addCustomItem');
    const customItemsList = document.getElementById('customItemsList');
    const themeButtons = document.querySelectorAll('.theme-btn');
    const printBtn = document.getElementById('printBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const shareBtn = document.getElementById('shareBtn');
    const resetBtn = document.getElementById('resetBtn');
    
    // Bingo cell emojis
    const cellEmojis = {
        general: ['💼', '📎', '☕', '🖨️', '📋', '📱', '💻', '🗄️', '📞', '🔒', '📈', '📝', '🕰️', '🧠', '🚽', '🧹', '🗑️', '🪑', '🖊️', '🖥️', '⌨️', '🖱️', '📊', '📓'],
        meetings: ['🗣️', '💤', '⏰', '📅', '👥', '🎤', '📊', '💭', '🤔', '🙄', '💡', '📝', '📢', '🔇', '🙋', '👨‍💼', '🧑‍💼', '👩‍💼', '📽️', '🧩', '🎯', '📣', '🤡', '🎪'],
        remote: ['🏠', '👖', '🛌', '🐱', '🐶', '🔇', '📶', '👋', '🎧', '📹', '🏃', '🚪', '🍔', '👶', '🧘', '📵', '🧺', '🧹', '📲', '🔋', '🌦️', '📻', '📺', '🛋️'],
        corporate: ['💰', '📊', '📈', '📉', '🤝', '🤖', '🔄', '⚙️', '🧠', '🎯', '🔍', '💡', '🚀', '🎖️', '📑', '🏆', '🧿', '🔮', '⏳', '🧩', '🎪', '🎭', '🔥', '💎']
    };
    
    // Bingo items by theme
    const bingoItems = {
        general: [
            "\"Let's circle back on this\"",
            "Someone unmutes to say \"sorry, I was on mute\"",
            "Printer jams when you're in a hurry",
            "Someone microwaves fish in the breakroom",
            "Email with no context, just \"Thoughts?\"",
            "Conference room double-booked",
            "Accidentally replied-all to company email",
            "IT sends mandatory password reset",
            "Someone asks \"Can everyone see my screen?\"",
            "Coffee machine is mysteriously empty",
            "That one coworker who types aggressively",
            "Meeting runs over by 15+ minutes",
            "Internet connection issues",
            "Someone says \"We should take this offline\"",
            "Colleague takes credit for your work",
            "All-company email about kitchen cleanliness",
            "Calendar notification for meeting you forgot",
            "The office temperature is all wrong",
            "Can't remember if you muted yourself",
            "Accidentally joining the wrong meeting",
            "Someone sneezes loudly near your desk",
            "Running into your boss in the bathroom",
            "Pretending to take notes but actually browsing online",
            "Post-lunch food coma",
            "Team building activity you secretly hate",
            "Awkward small talk in elevator",
            "Someone eating loudly during calls",
            "Watching the clock for exactly 5:00 PM",
            "Mandatory fun event",
            "Fire drill during important call",
            "Free food email causes stampede"
        ],
        meetings: [
            "\"Can everyone see my screen?\"",
            "\"Sorry, I was on mute\"",
            "\"Let's take this offline\"",
            "Someone joins 10+ minutes late",
            "Dog/child/spouse interruption",
            "Technical difficulties for 5+ minutes",
            "\"We're waiting for a few more people\"",
            "Meeting that could've been an email",
            "Awkward silence after a question",
            "\"I'll just share my screen...\"",
            "Someone eating with unmuted microphone",
            "Participant clearly not paying attention",
            "Explaining to someone what was just explained",
            "Camera accidentally turned on",
            "Someone asking \"can you go back a slide?\"",
            "Surprise guest joins the call",
            "\"I think you're still muted\"",
            "\"Can everyone hear me?\"",
            "Meeting runs over scheduled time",
            "Awkward video freezes",
            "Person who talks too much",
            "Person who never talks",
            "\"I have hard stop at...\"",
            "\"Let me just add one more thing\"",
            "Background noise someone won't mute",
            "Pretending your internet cut out",
            "\"Let's go around the room and share...\"",
            "Meeting about planning another meeting",
            "Person typing loudly during meeting",
            "Someone screen sharing sensitive info by accident"
        ],
        remote: [
            "Pants optional meeting",
            "Pet makes surprise appearance",
            "Delivery interruption",
            "\"Can everyone see my screen?\"",
            "WiFi drops during presentation",
            "Forgot to mute while eating",
            "Family member walks in during call",
            "Background noise you can't identify",
            "Camera accidentally on in embarrassing moment",
            "Pretending your connection is bad to leave meeting",
            "Working from bed but hiding it",
            "Forgetting what day it is",
            "Neighbor starts loud construction",
            "Multiple days without leaving home",
            "Shower becoming optional",
            "Setting alarm 5 minutes before meeting",
            "VPN connection issues",
            "Awkward virtual happy hour",
            "Someone clearly working from bathroom",
            "Notifications going off during presentation",
            "Forgetting to charge laptop",
            "Wearing professional top with pajama bottoms",
            "Weird echo on conference call",
            "Talking to pets more than humans",
            "\"You're still muted\"",
            "Pretending to have childcare emergency",
            "Eating lunch during important meeting",
            "Virtual background fails/glitches",
            "Accidentally unmuted private conversation"
        ],
        corporate: [
            "\"Let's circle back\"",
            "\"Touch base\"",
            "\"Move the needle\"",
            "\"Think outside the box\"",
            "\"Synergy\"",
            "\"Low-hanging fruit\"",
            "\"Deep dive\"",
            "\"Action item\"",
            "\"Bandwidth\"",
            "\"Take this offline\"",
            "\"It's on my radar\"",
            "\"Leverage\"",
            "\"Scalable solution\"",
            "\"Paradigm shift\"",
            "\"Ballpark figure\"",
            "\"Best practices\"",
            "\"Value-add\"",
            "\"Pain point\"",
            "\"Close the loop\"",
            "\"Deliverable\"",
            "\"Core competency\"",
            "\"Drill down\"",
            "\"Bleeding edge\"",
            "\"Thought leadership\"",
            "\"Growth hacking\"",
            "\"Agile methodology\"",
            "\"On the same page\"",
            "\"Hit the ground running\"",
            "\"Give 110%\"",
            "\"Reach out\""
        ]
    };
    
    // Current state variables
    let currentTheme = 'general';
    let customItems = [];
    let markedCells = [];
    let winningLines = [];
    
    // Initialize the page
    updateCardTitle();
    selectTheme('general');
    
    // Event listeners
    cardTitleInput.addEventListener('input', updateCardTitle);
    generateBtn.addEventListener('click', generateBingoCard);
    regenerateBtn.addEventListener('click', shuffleBingoItems);
    addCustomItemBtn.addEventListener('click', addCustomItem);
    customItemInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addCustomItem();
        }
    });
    printBtn.addEventListener('click', printBingoCard);
    downloadBtn.addEventListener('click', downloadAsImage);
    shareBtn.addEventListener('click', shareBingoCard);
    resetBtn.addEventListener('click', resetBingoCard);
    
    // Handle theme selection
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            selectTheme(theme);
        });
    });
    
    // Functions
    function updateCardTitle() {
        cardTitleDisplay.textContent = cardTitleInput.value || 'Corporate Survival Bingo';
    }
    
    function selectTheme(theme) {
        currentTheme = theme;
        
        // Update active button
        themeButtons.forEach(button => {
            if (button.getAttribute('data-theme') === theme) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
    
    function addCustomItem() {
        const customText = customItemInput.value.trim();
        if (customText && customText.length > 0) {
            // Add to customItems array if not already there
            if (!customItems.includes(customText)) {
                customItems.push(customText);
                renderCustomItems();
                customItemInput.value = '';
                customItemInput.focus();
            } else {
                shake(customItemInput);
                customItemInput.value = '';
            }
        }
    }
    
    function removeCustomItem(index) {
        customItems.splice(index, 1);
        renderCustomItems();
    }
    
    function renderCustomItems() {
        customItemsList.innerHTML = '';
        
        customItems.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'custom-item';
            itemElement.innerHTML = `
                <span>${item}</span>
                <button class="custom-item-remove" data-index="${index}">×</button>
            `;
            customItemsList.appendChild(itemElement);
            
            // Add event listener to remove button
            itemElement.querySelector('.custom-item-remove').addEventListener('click', function() {
                removeCustomItem(this.getAttribute('data-index'));
            });
        });
    }
    
    function generateBingoCard() {
        clearWinningLines();
        markedCells = [];
        renderBingoGrid();
        animateCardGeneration();
    }
    
    function shuffleBingoItems() {
        clearWinningLines();
        renderBingoGrid();
        animateCardGeneration();
    }
    
    function renderBingoGrid() {
        bingoGrid.innerHTML = '';
        
        // Get 24 random items from the current theme (excluding center free space)
        const allItems = [...bingoItems[currentTheme]];
        
        // Add custom items to the pool
        allItems.push(...customItems);
        
        // Shuffle array
        const shuffledItems = shuffleArray(allItems);
        
        // Take 24 items
        const selectedItems = shuffledItems.slice(0, 24);
        
        // Insert free space in the middle (index 12)
        selectedItems.splice(12, 0, freeSpaceTextInput.value || 'FREE SPACE');
        
        // Create grid cells
        for (let i = 0; i < 25; i++) {
            const cell = document.createElement('div');
            cell.className = 'bingo-cell';
            cell.setAttribute('data-index', i);
            
            // Check if this is the free space (middle cell, index 12)
            if (i === 12) {
                cell.classList.add('free-space');
                cell.setAttribute('data-marked', 'true');
                markedCells.push(i);
            }
            
            // Add emoji to each cell based on theme
            const emoji = cellEmojis[currentTheme][i % cellEmojis[currentTheme].length];
            
            cell.innerHTML = `
                <div class="bingo-cell-inner">
                    <div class="cell-emoji">${emoji}</div>
                    <div class="cell-text">${selectedItems[i]}</div>
                </div>
            `;
            
            // Add click event listener for marking cells
            cell.addEventListener('click', function() {
                toggleCellMark(this);
            });
            
            bingoGrid.appendChild(cell);
        }
    }
    
    function toggleCellMark(cell) {
        const index = parseInt(cell.getAttribute('data-index'));
        
        if (cell.classList.contains('marked')) {
            // Unmark cell
            cell.classList.remove('marked');
            cell.setAttribute('data-marked', 'false');
            
            // Remove from marked cells array
            const idx = markedCells.indexOf(index);
            if (idx > -1) {
                markedCells.splice(idx, 1);
            }
        } else {
            // Mark cell
            cell.classList.add('marked');
            cell.setAttribute('data-marked', 'true');
            
            // Add to marked cells array
            markedCells.push(index);
            
            // Add marking sound effect
            playMarkedSound();
        }
        
        // Check for winning lines
        checkForBingo();
    }
    
    function checkForBingo() {
        clearWinningLines();
        
        // All possible winning lines (rows, columns, diagonals)
        const winningPatterns = [
            // Rows
            [0, 1, 2, 3, 4],
            [5, 6, 7, 8, 9],
            [10, 11, 12, 13, 14],
            [15, 16, 17, 18, 19],
            [20, 21, 22, 23, 24],
            // Columns
            [0, 5, 10, 15, 20],
            [1, 6, 11, 16, 21],
            [2, 7, 12, 17, 22],
            [3, 8, 13, 18, 23],
            [4, 9, 14, 19, 24],
            // Diagonals
            [0, 6, 12, 18, 24],
            [4, 8, 12, 16, 20]
        ];
        
        // Check each pattern
        winningPatterns.forEach(pattern => {
            if (pattern.every(index => markedCells.includes(index))) {
                // We have a bingo!
                winningLines.push(pattern);
                highlightWinningLine(pattern);
            }
        });
        
        // If we have a bingo, show celebration
        if (winningLines.length > 0) {
            celebrateBingo();
        }
    }
    
    function highlightWinningLine(pattern) {
        pattern.forEach(index => {
            const cell = document.querySelector(`.bingo-cell[data-index="${index}"]`);
            cell.classList.add('winning-line');
        });
    }
    
    function clearWinningLines() {
        winningLines = [];
        document.querySelectorAll('.winning-line').forEach(cell => {
            cell.classList.remove('winning-line');
        });
        
        // Also remove any celebration effects
        removeConfetti();
    }
    
    function celebrateBingo() {
        // Add confetti animation
        createConfetti();
        
        // Play celebration sound
        playWinSound();
        
        // Show congratulations message
        setTimeout(() => {
            if (winningLines.length > 0) {
                const messageLines = [
                    "BINGO! Time to update your resume!",
                    "BINGO! Consider this your sign to quit!",
                    "BINGO! Your workplace is officially ridiculous!",
                    "BINGO! Did you win or lose at life though?",
                    "BINGO! Screenshot this and send it to HR!"
                ];
                
                alert(messageLines[Math.floor(Math.random() * messageLines.length)]);
            }
        }, 800);
    }
    
    function createConfetti() {
        // First, remove any existing confetti
        removeConfetti();
        
        // Create confetti container
        const confettiContainer = document.createElement('div');
        confettiContainer.className = 'confetti-container';
        confettiContainer.style.position = 'absolute';
        confettiContainer.style.top = '0';
        confettiContainer.style.left = '0';
        confettiContainer.style.width = '100%';
        confettiContainer.style.height = '100%';
        confettiContainer.style.pointerEvents = 'none';
        confettiContainer.style.zIndex = '100';
        confettiContainer.style.overflow = 'hidden';
        
        // Add confetti pieces
        const colors = ['#E63946', '#457B9D', '#F4A261', '#2A9D8F', '#FFD700'];
        
        for (let i = 0; i < 150; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            confetti.style.position = 'absolute';
            confetti.style.width = `${Math.random() * 10 + 5}px`;
            confetti.style.height = `${Math.random() * 10 + 10}px`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.top = `-20px`;
            confetti.style.opacity = '0';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            // Randomize animation
            const duration = Math.random() * 3 + 2; // 2-5 seconds
            const delay = Math.random() * 1; // 0-1 second delay
            
            confetti.style.animation = `confettiFall ${duration}s ${delay}s forwards`;
            
            confettiContainer.appendChild(confetti);
        }
        
        // Add confetti animation style
        const style = document.createElement('style');
        style.textContent = `
            @keyframes confettiFall {
                0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        // Add to the bingo card container
        const bingoCardContainer = document.getElementById('bingoCardContainer');
        bingoCardContainer.style.position = 'relative';
        bingoCardContainer.appendChild(confettiContainer);
        
        // Auto-remove after animation completes
        setTimeout(() => {
            removeConfetti();
        }, 6000);
    }
    
    function removeConfetti() {
        const confetti = document.querySelector('.confetti-container');
        if (confetti) {
            confetti.remove();
        }
    }
    
    function playMarkedSound() {
        // Simple sound effect for marking cells
        try {
            const audio = new Audio('data:audio/mp3;base64,SUQzAwAAAAAAI1RJVDIAAAAZAAAAbWVkaWEuaW9zaW5vLmNvbQBUWFhYAAAAEwAAAw==');
            audio.volume = 0.2;
            audio.play().catch(e => console.log('Audio play failed:', e));
        } catch (e) {
            console.log('Audio creation failed:', e);
        }
    }
    
    function playWinSound() {
        // Simple sound effect for winning
        try {
            const audio = new Audio('data:audio/mp3;base64,SUQzAwAAAAAAI1RJVDIAAAAZAAAAbWVkaWEuaW9zaW5vLmNvbQBUWFhYAAAAEwAAAw==');
            audio.volume = 0.3;
            audio.play().catch(e => console.log('Audio play failed:', e));
        } catch (e) {
            console.log('Audio creation failed:', e);
        }
    }
    
    function animateCardGeneration() {
        const cells = document.querySelectorAll('.bingo-cell');
        
        // First hide all cells
        cells.forEach(cell => {
            cell.style.opacity = '0';
            cell.style.transform = 'scale(0.5)';
        });
        
        // Animate them in one by one
        cells.forEach((cell, index) => {
            setTimeout(() => {
                cell.style.transition = 'all 0.3s ease-out';
                cell.style.opacity = '1';
                cell.style.transform = 'scale(1)';
            }, index * 30); // staggered animation
        });
    }
    
    function printBingoCard() {
        window.print();
    }
    
    function downloadAsImage() {
        const element = document.getElementById('bingoCardContainer');
        
        // Make sure html2canvas is loaded
        if (typeof html2canvas === 'undefined') {
            alert("Image export library not loaded. Please try again or use the Print option.");
            return;
        }
        
        // Create the image
        html2canvas(element, {
            allowTaint: true,
            useCORS: true,
            scale: 2, // Better resolution
            backgroundColor: null
        }).then(canvas => {
            // Create download link
            const link = document.createElement('a');
            link.download = `${cardTitleInput.value || 'Office-Bingo'}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        }).catch(err => {
            console.error('Error generating image:', err);
            alert("Failed to generate image. Please try the Print option instead.");
        });
    }
    
    function shareBingoCard() {
        // Create modal for sharing options
        const modal = document.createElement('div');
        modal.className = 'share-modal';
        
        modal.innerHTML = `
            <div class="share-modal-content">
                <button class="share-modal-close">&times;</button>
                <h3 class="share-modal-title">Share Your Bingo Card</h3>
                <div class="share-options">
                    <button class="button button-small" id="shareTwitterBtn">Twitter</button>
                    <button class="button button-small" id="shareFacebookBtn">Facebook</button>
                    <button class="button button-small" id="shareEmailBtn">Email</button>
                    <button class="button button-small" id="shareWhatsappBtn">WhatsApp</button>
                </div>
                <p>Or copy this link:</p>
                <div class="share-link-container">
                    <input type="text" class="share-link-input" readonly value="https://shouldiquitmyjob.today/office-bingo.html">
                    <button class="copy-link-btn">Copy</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Show modal with animation
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
        
        // Close button functionality
        modal.querySelector('.share-modal-close').addEventListener('click', () => {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.remove();
            }, 300);
        });
        
        // Copy link button
        modal.querySelector('.copy-link-btn').addEventListener('click', function() {
            const input = modal.querySelector('.share-link-input');
            input.select();
            document.execCommand('copy');
            
            this.textContent = 'Copied!';
            setTimeout(() => {
                this.textContent = 'Copy';
            }, 2000);
        });
        
        // Social sharing buttons
        const shareText = `I just created my "${cardTitleInput.value || 'Office Bingo'}" card! Will I get BINGO today?`;
        const shareUrl = 'https://shouldiquitmyjob.today/office-bingo.html';
        
        modal.querySelector('#shareTwitterBtn').addEventListener('click', () => {
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
        });
        
        modal.querySelector('#shareFacebookBtn').addEventListener('click', () => {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
        });
        
        modal.querySelector('#shareEmailBtn').addEventListener('click', () => {
            window.location.href = `mailto:?subject=${encodeURIComponent('Check out my Office Bingo card!')}&body=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
        });
        
        modal.querySelector('#shareWhatsappBtn').addEventListener('click', () => {
            window.open(`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`, '_blank');
        });
    }
    
    function resetBingoCard() {
        // Clear all marked cells except free space
        document.querySelectorAll('.bingo-cell').forEach(cell => {
            const index = parseInt(cell.getAttribute('data-index'));
            if (index !== 12) { // Not the free space
                cell.classList.remove('marked');
                cell.setAttribute('data-marked', 'false');
            }
        });
        
        // Reset marked cells array to only include free space
        markedCells = [12];
        
        // Clear any winning lines
        clearWinningLines();
    }
    
    // Helper functions
    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
    
    function shake(element) {
        element.classList.add('shake');
        setTimeout(() => {
            element.classList.remove('shake');
        }, 500);
    }
    
    // Generate initial bingo card on page load
    generateBingoCard();
});