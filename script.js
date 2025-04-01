// script.js
// Answers array

// Add this variable at the top of your script.js
let buttonCooldown = false;

const answers = [ "YES! Your boss is a literal cartoon villain. 🦹♂️",
            "NO... but start 'accidentally' replying-all to nonsense emails. 📧",
            "YES! The office coffee is 90% regret. ☕",
            "NO... but start charging coworkers for breathing your air. 💸",
            "YES! Your stapler deserves freedom. 🖇️",
            "NO... but practice your evil laugh during Zoom calls. 😈",
            "YES! Your desk plant is plotting your escape. 🌱",
            "NO... but replace all coffee with decaf. Chaos fuels change. ☕",
            "YES! The printer is a sentient enemy. 🖨️",
            "NO... but start referring to yourself in third person. 👑",
            "YES! Your chair is slowly absorbing your soul. 💺",
            "NO... but ask HR for a raise in exposure bucks. 💰",
            "YES! Your coworker's keyboard is 50% crumbs. 🍪",
            "NO... but start taking meetings in a fake mustache. 🕵️♂️",
            "YES! The WiFi password is 'suffering'. 📶",
            "NO... but start answering every email with 'Cool story, bro'. 📨",
            "YES! The break room smells like lost dreams. 🍩",
            "NO... but wear pajamas and say it's 'business casual'. 👕",
            "YES! Your job description includes 'eternal despair'. 📄",
            "NO... but start a podcast during work hours. 🎙️",
            "YES! Your paycheck is just Monopoly money. 🎩",
            "NO... but start a passive-aggressive Post-It note war. 📝",
            "YES! The company motto is 'Embrace the Void'. 🕳️",
            "NO... but time all bathroom breaks with a stopwatch. ⏱️",
            "YES! Your cubicle is slowly shrinking. 📦",
            "NO... but start humming the 'Imperial March' in elevators. 🎶",
            "YES! The HR department is a myth. 👻",
            "NO... but replace your chair with a yoga ball. 🧘♂️",
            "YES! Your desk is made of recycled tears. 😭",
            "NO... but communicate only in Morse code. 🔡",
            "YES! The office WiFi blocks all fun websites. 🚫",
            "NO... but start a rebellion via Slack emojis. 💥",
            "YES! Your stapler has more vacation days than you. 🏖️",
            "NO... but print out memes and call it 'market research'. 🖨️",
            "YES! The fire drill is the highlight of your week. 🔥",
            "NO... but start measuring productivity in cat videos watched. 🐱",
            "YES! Your monitor has seen things it can't unsee. 👀",
            "NO... but start a betting pool on when the CEO will quit. 🎲",
            "YES! The water cooler gossip is about YOU. 💧",
            "NO... but start a fake British accent for no reason. 🇬🇧",
            "YES! The office plants get better healthcare. 🌿",
            "NO... but start referring to meetings as 'time theft'. ⏳",
            "YES! Your ID badge photo haunts your dreams. 👻",
            "NO... but start a side hustle selling office supplies. 💼",
            "YES! The company retreat is mandatory fun. 🏕️",
            "NO... but start writing resignation letters in crayon. 🖍️",
            "YES! Your keyboard only types in sarcasm font. 🎭",
            "NO... but start answering calls with 'Ahoy-hoy!'. 📞",
            "YES! The break room microwave is a war crime. 💣",
            "NO... but start a cult worshipping the coffee machine. ☕",
            "YES! Your desk drawer is a black hole of snack wrappers. 🍫",
            "NO... but rename all files to 'final_final_REALLY_final_v2'. 📁",
            "YES! The office AC is powered by your tears. ❄️",
            "NO... but start measuring time in coffee spoons. ☕",
            "YES! Your ergonomic chair is plotting revenge. 💺",
            "NO... but start referring to deadlines as 'suggestions'. 📅",
            "YES! The office playlist is stuck on elevator music. 🎵",
            "NO... but start a conspiracy theory about the copy machine. 🖨️",
            "YES! Your LinkedIn profile is crying for help. 💼",
            "NO... but start naming office plants after ex-employees. 🌿",
            "YES! The office snacks are from 2019. 🍪",
            "NO... but start documenting your day in interpretive dance. 💃",
            "YES! Your mouse pad has developed sentience. 🖱️",
            "NO... but start timing meetings in dog years. 🐕",
            "YES! The office fridge is a science experiment. 🧪",
            "NO... but start speaking exclusively in corporate buzzwords. 📈",
            "YES! Your desk neighbor's pen clicking is morse code for 'help'. 🖊️",
            "NO... but start a underground office supply trading ring. 📎",
            "YES! The motivational posters are mocking you. 🖼️",
            "NO... but start rating meetings on Yelp. ⭐",
            "YES! Your computer updates only during deadlines. 💻",
            "NO... but start a dramatic reading of the employee handbook. 📚",
            "YES! The office vending machine has trust issues. 🏧",
            "NO... but start collecting office chairs like Pokemon. 🪑",
            "YES! Your commute is longer than some relationships. 🚗",
            "NO... but create an elaborate backstory for the office goldfish. 🐠",
            "YES! Your boss uses 'synergy' unironically. 🤢",
            "NO... but start a rumor that the building is haunted. 👻",
            "YES! Your benefits package includes 'exposure' and 'experience'. 💸",
            "NO... but add dramatic soap opera music to all your presentations. 🎭",
            "YES! The company values are written in Comic Sans. 📝",
            "NO... but start a daily costume theme no one else knows about. 🎭",
            "YES! Your desk chair is held together by hope and duct tape. 🪑",
            "NO... but replace all your Zoom backgrounds with photos of coworkers. 📸"
        ];/* ... (copy answers array from original file) ... */ 

// Resignation Letters
const resignationLetters = [ `Dear [Boss's Name],\n\nI regret to inform you that I'm quitting to pursue my lifelong dream of becoming a professional bubble wrap popper. The benefits are comparable, but the satisfaction is incomparable.\n\nMy last day will be [Date], or whenever the office plants stage their revolution, whichever comes first.\n\nWith relieved sighs,\n[Your Name]`,
            
            `To Whom It Concerns (and let's be honest, it doesn't concern many):\n\nAfter careful consideration and precisely 247 passive-aggressive emails, I've decided to tender my resignation. I'm leaving to find a job where the coffee doesn't taste like broken dreams and the printer doesn't have a personal vendetta against me.\n\nPlease consider this my two weeks' notice, during which I will be taking seventeen "doctor appointments."\n\nSincerely no longer caring,\n[Your Name]`,
            
            `Dear Management,\n\nI quit. Not because I found a better opportunity, but because my desk plant is the only one who appreciates my jokes, and frankly, it's dying.\n\nMy final day will be [Date], after which you can send my final paycheck to "Anywhere But Here, Freedom Street, Happyville."\n\nWith newfound liberation,\n[Your Name]\n\nP.S. It was me who stole all the good pens.`,
         ];

// Future Predictions
const futurePredictions = [ "You'll start a successful business selling motivational sticky notes with passive-aggressive messages. Your bestseller: 'You're doing great, considering...'",
            
            "After quitting, you'll write a bestselling memoir titled 'I Survived 1,247 Meetings That Could Have Been Emails.' It will be adapted into a psychological horror film.",
            
            "You'll become a professional office plant rescuer, saving neglected ferns and succulents from toxic workplaces. Your plant rehabilitation center will be featured on national television.",
            
            "You'll invent a 'meeting translator' app that converts corporate speak into plain English. Example: 'Let's circle back' translates to 'I haven't listened to a word you've said.'",
            
            "Plot twist: You'll end up starting your own company that's eerily similar to the one you left, but with better snacks and a strict 'no meetings on Monday' policy."
      ];

// Main functionality
function generateAnswer() {
    const answerDiv = document.getElementById("answer");
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    
    // Create a typing effect
    answerDiv.innerHTML = "";
    answerDiv.style.display = "flex";
    
    let i = 0;
    const typingSpeed = 30; // milliseconds per character
    
    // First show a "thinking" animation
    answerDiv.innerHTML = '<div class="thinking-dots"><span>.</span><span>.</span><span>.</span></div>';
    
    // After a short delay, type out the answer
    setTimeout(function() {
        answerDiv.innerHTML = "";
        const typeWriter = setInterval(function() {
            if (i < randomAnswer.length) {
                answerDiv.innerHTML += randomAnswer.charAt(i);
                i++;
            } else {
                clearInterval(typeWriter);
                // Add confetti after typing is complete
                // Replace with this more defensive code
if (document.getElementById("confettiToggle") && document.getElementById("confettiToggle").checked) {
    launchConfetti();
}
            }
        }, typingSpeed);
    }, 1500);
    
    // Save to history if enabled
    if (document.getElementById("historyToggle") && document.getElementById("historyToggle").checked) {
        saveToHistory(randomAnswer);
    }

}
function saveToHistory(answer) { 
    const historyDiv = document.getElementById("answerHistory");
            const timestamp = new Date().toLocaleTimeString();
            
            const historyItem = document.createElement("div");
            historyItem.classList.add("history-item");
            historyItem.innerHTML = `<strong>${timestamp}</strong>: ${answer}`;
            
            historyDiv.prepend(historyItem);
            
            // Keep only last 5 items
            const items = historyDiv.getElementsByClassName("history-item");
            if (items.length > 5) {
                historyDiv.removeChild(items[items.length - 1]);
            }
            
            // Store in localStorage
            const history = JSON.parse(localStorage.getItem("answerHistory") || "[]");
            history.unshift({ timestamp, answer });
            if (history.length > 5) history.pop();
            localStorage.setItem("answerHistory", JSON.stringify(history))
         }

// Event Listeners
// Then modify your click event handler for the trigger button
document.getElementById("triggerBtn").addEventListener("click", function() {
    // Check if button is on cooldown
    if (buttonCooldown) return;
    
    // Set cooldown to prevent spam clicking
    buttonCooldown = true;
    this.classList.add("button-cooldown");
    
    // Generate the answer
    generateAnswer();
    
    // Reset the cooldown after 2 seconds
    setTimeout(function() {
        buttonCooldown = false;
        document.getElementById("triggerBtn").classList.remove("button-cooldown");
    }, 2000); // 2 seconds cooldown
});
document.getElementById("historyBtn").addEventListener("click", function() { 
    const historyDiv = document.getElementById("answerHistory");
            historyDiv.classList.toggle("show");
            
            this.textContent = historyDiv.classList.contains("show") 
                ? "Hide Answer History" 
                : "Show Answer History";
 });
document.getElementById("themeToggle").addEventListener("change", function() { 
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("darkMode", this.checked); 
 });
 // Settings panel toggle
 document.getElementById("settingsBtn").addEventListener("click", function() {
    document.getElementById("settingsContent").classList.toggle("show");
});

// Close settings when clicking outside
document.addEventListener("click", function(event) {
    const settingsPanel = document.querySelector(".settings-panel");
    const settingsBtn = document.getElementById("settingsBtn");
    
    if (!settingsPanel || !settingsBtn || !settingsPanel.contains(event.target) || settingsBtn.contains(event.target)) {
        return;
    }
    
    const settingsContent = document.getElementById("settingsContent");
    if (settingsContent) {
        settingsContent.classList.remove("show");
    }
});

// Feature buttons
// Feature navigation buttons - add to the top of your script.js file
document.addEventListener('DOMContentLoaded', function() {
    // Career Calculator button
    const calculatorBtn = document.getElementById('calculatorBtn');
    if (calculatorBtn) {
        calculatorBtn.addEventListener('click', function() {
            window.location.href = 'career-calculator.html';
        });
    }
    
    // Resignation Letter button
    const letterBtn = document.getElementById('letterBtn');
    if (letterBtn) {
        letterBtn.addEventListener('click', function() {
            window.location.href = 'resignation-letter.html';
        });
    }
    
    // Future Predictor button
    const predictorBtn = document.getElementById('predictorBtn');
    if (predictorBtn) {
        predictorBtn.addEventListener('click', function() {
            window.location.href = 'future-predictor.html';
        });
    }
    
    // Office Bingo button
    const bingoBtn = document.getElementById('bingoBtn');
    if (bingoBtn) {
        bingoBtn.addEventListener('click', function() {
            window.location.href = 'office-bingo.html';
        });
    }
});
document.getElementById("calculatorBtn").addEventListener("click", function() {
    window.location.href = "career-calculator.html";
});


document.getElementById("predictorBtn").addEventListener("click", function() {
    window.location.href = "future-predictor.html";
});// ... (copy all remaining JavaScript code) ...

// Add this to your existing script.js
document.getElementById('letterBtn').addEventListener('click', function() {
    window.location.href = 'resignation-letter.html';
});

const letterTemplates = {
    professional: [
        `Dear {bossName},

After careful consideration and exactly {randomNumber} meetings that could have been emails, I find myself at a professional crossroads. I am writing to formally tender my resignation from my position as [Your Position], effective {departureDate}.

While I've valued the opportunity to {corporateBuzz} and {corporateBuzz}, I must follow my passion for becoming a full-time {futureCareer}. The {annoyanceText} has prepared me well for this dramatic career pivot.

I'm happy to assist with the transition over the next two weeks, during which I'll be documenting all my processes and quietly removing my emergency chocolate stash from my desk.

Sincerely,
{yourName}

P.S. {funnyPostscript}`,

        `To: {bossName}
From: {yourName}
Subject: Notice of Career Redirection

Please accept this letter as formal notification of my intention to pursue alternative employment opportunities, effective {departureDate}. After {randomMonths} months of {annoyanceText}, I've decided to rebrand my professional narrative.

During my time here, I've developed valuable skills in {bizSkill} and {bizSkill}, which will serve me well in my new role as a {futureCareer}. I'm confident this transition aligns with my core competencies and personal brand.

I'll ensure a seamless knowledge transfer during my remaining time, and I'm happy to train my replacement on the intricate art of appearing busy during mandatory town halls.

Best regards,
{yourName}

P.S. {funnyPostscript}`
    ],
    
    dramatic: [
        `HEAR YE, HEAR YE! {bossName} AND ASSOCIATES!

It is with a mixture of overwhelming joy and theatrical flair that I, {yourName}, hereby announce my GRAND DEPARTURE from this institution of employment, effective {departureDate}!

For {randomMonths} fortnights, I have endured the {annoyanceText} with the patience of a saint and the tolerance of a caffeinated sloth. But no more! The universe calls me to my true destiny: {futureCareer}!

Let the record show that I survived {randomNumber} team-building exercises and exactly ZERO of them built a team. I leave behind my swivel chair (which squeaks in E minor) and take with me only memories and the office stapler (which I've grown emotionally attached to).

With dramatic flair and zero regrets,
{yourName}, Soon-To-Be-Former Employee Extraordinaire

P.S. {funnyPostscript}`,

        `ATTENTION WORKPLACE DENIZENS AND {bossName}!

The time has come! After much soul-searching, meditation, and staring blankly at my computer screen, I, {yourName}, am breaking free from these corporate chains! My last day of glorious employment shall be {departureDate}.

For too long has the {annoyanceText} tested my will to live! For too many days have I smiled through meetings about meetings! NO MORE! I journey forth to embrace my destiny as a {futureCareer}!

I shall remember the {randomNumber} potlucks where no one ate my contributions. I shall treasure the {randomNumber} times the printer worked on the first try. These memories I take with me into the sunset of professional liberation!

Theatrically yours until {departureDate},
{yourName}

P.S. {funnyPostscript}`
    ],
    
    honest: [
        `Hey {bossName},

I quit. My last day is {departureDate}.

Let's be real—the {annoyanceText} has finally broken me. I've spent {randomMonths} months pretending to be interested in quarterly projections and acting like I care about "synergy."

I'm leaving to become a {futureCareer}, which sounds ridiculous but is still better than attending another 7 AM "optional" breakfast meeting.

Things I won't miss:
1. The smell of fish in the microwave
2. That one guy who types like he's angry at his keyboard
3. Pretending I remember people's names
4. The birthday celebrations for people I've never spoken to

I'll help with the transition because I'm not a monster, but please don't ask me to train my replacement on a Friday afternoon.

Later,
{yourName}

P.S. {funnyPostscript}`,

        `Dear {bossName} (and whoever in HR has to process this),

I'm out. {departureDate} will be my last day.

After spending {randomNumber} hours staring at the same spreadsheet and dealing with the {annoyanceText}, I've decided life is too short. I'm going to be a {futureCareer} instead, which my parents are thrilled about (not).

To be completely transparent:
- I've been using my "doctor appointments" to go to matinee movies
- I'm the one who keeps changing the thermostat
- I've never actually read any of the company-wide emails
- The plant on my desk has been fake for {randomMonths} months and no one noticed

I'll tie up loose ends before I go, and no, I won't be needing a reference letter.

No regrets,
{yourName}

P.S. {funnyPostscript}`
    ],
    
    poetic: [
        `Dearest {bossName},

As the office clock ticks its relentless rhythm,
I pen these words with bittersweet conviction.
The time has come to bid adieu,
My final day shall be {departureDate}, it's true.

Through {randomMonths} seasons I've weathered the storm,
Of {annoyanceText} that became the norm.
But now a new chapter beckons me hence,
To explore the art of {futureCareer}, so immense.

Like a butterfly from its chrysalis breaking free,
I spread my wings toward what I'm meant to be.
The fluorescent lights no longer my sun,
My journey here is finally done.

With gratitude for lessons learned and growth achieved,
I take my leave, my resignation hereby received.

Poetically yours until the end of time (or {departureDate}, whichever comes first),
{yourName}

P.S. {funnyPostscript}`,

        `O {bossName}, Leader of Cubicle Kingdom,

Hear now the sonnet of my departure,
As I resign effective {departureDate}.
No longer shall I endure the rapture
Of {annoyanceText} that sealed my fate.

For {randomMonths} moons I've toiled in these halls,
Sending emails into the corporate void.
But destiny {futureCareer} now calls,
And my current path must be destroyed.

The meeting room shall know my face no more,
The break room fridge my lunch shall never hold.
I seek a life on distant shore,
Where tales of my new venture shall be told.

With metaphors and meter I now part,
Carrying memories forever in my heart.

With iambic pentameter and dramatic pauses,
{yourName}

P.S. {funnyPostscript}`
    ]
};

// Dynamic content generators
const corporateBuzzwords = [
    "synergize cross-functional deliverables",
    "streamline mission-critical paradigms",
    "revolutionize scalable interfaces",
    "harness bleeding-edge initiatives",
    "maximize user-centric experiences",
    "orchestrate dynamic infrastructures",
    "transform strategic platforms",
    "innovate transparent architectures"
];

const bizSkills = [
    "looking busy while doing nothing",
    "pretending to take notes",
    "strategic coffee consumption",
    "meeting survival tactics",
    "spreadsheet manipulation",
    "deadline negotiation",
    "email avoidance strategies",
    "looking interested during presentations",
    "crafting convincing excuses",
    "corporate jargon fluency"
];

const funnyPostscripts = [
    "I'm not taking the stapler. That's a rumor. (But I am taking all the good pens.)",
    "Please forward my final paycheck to 'Anywhere But Here, Freedom Street, Happyville.'",
    "I'd like to thank the vending machine on floor 3 for being the most reliable relationship I've had here.",
    "For the record, it was me who set the microwave to 99:99 every Friday afternoon.",
    "My desk plant deserved better. His name was Herbert, and he was my only ally.",
    "I've been secretly training my mouse cursor to move on its own. My work here is done.",
    "The password to my computer is 'iQuitLOL123'. Don't tell anyone.",
    "If anyone needs me, I'll be somewhere not answering my phone.",
    "I've left detailed instructions about my job in my desk drawer. Just kidding, I have no idea what I do here either.",
    "The secret ingredient in my potluck brownies was spite. And chocolate chips."
];

const annoyanceMapping = {
    "meetings": [
        "endless parade of pointless meetings",
        "daily 'quick sync' that somehow lasts 2 hours",
        "meetings about meetings about meetings",
        "brainstorming sessions where good ideas go to die"
    ],
    "coffee": [
        "coffee that tastes like it was filtered through a gym sock",
        "mysterious brown liquid that claims to be coffee",
        "coffee machine that judges my life choices",
        "office coffee that's somehow both burnt and watery"
    ],
    "printer": [
        "printer that has a personal vendetta against me",
        "demonic printer that only works when IT isn't looking",
        "printer that eats important documents for breakfast",
        "printer with more error codes than the Matrix"
    ],
    "micromanagement": [
        "hourly 'check-ins' about my progress",
        "constant shoulder-surfing from management",
        "requirement to document my bathroom breaks",
        "microscopic examination of every email I send"
    ],
    "cubicle": [
        "gray fabric walls that slowly absorb my soul",
        "cubicle smaller than a prison cell",
        "desk space where hope goes to die",
        "three square feet I've called home for too long"
    ]
};

const futureCareerMapping = {
    "influencer": [
        "professional Instagram influencer for succulent plants",
        "TikTok dance creator specializing in corporate retreat moves",
        "YouTube personality reviewing office chair comfort levels",
        "social media guru teaching people how to look busy at work"
    ],
    "yoga": [
        "goat yoga instructor on a sustainable farm",
        "underwater yoga specialist for stressed-out fish",
        "extreme yoga practitioner on mountain summits",
        "corporate yoga teacher specializing in 'keyboard warrior' poses"
    ],
    "fortune": [
        "fortune cookie message writer",
        "professional eight-ball shaker",
        "cosmic horoscope creator for office personalities",
        "tarot card reader for confused middle managers"
    ],
    "professional": [
        "professional napper with a specialty in power dozing",
        "consultant on optimal hammock positioning",
        "sleep quality researcher requiring extensive field testing",
        "nap pod reviewer for tech startups"
    ],
    "taste": [
        "ice cream taste tester with focus on sprinkle distribution",
        "chocolate quality control specialist",
        "pizza topping harmony consultant",
        "snack food innovation expert"
    ]
};

// Dom elements
document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const regenerateBtn = document.getElementById('regenerateBtn');
    const copyBtn = document.getElementById('copyBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const letterOutput = document.getElementById('letterOutput');
    const letterContainer = document.getElementById('letterContainer');
    
    // Set departure date default to 2 weeks from now
    const twoWeeksFromNow = new Date();
    twoWeeksFromNow.setDate(twoWeeksFromNow.getDate() + 14);
    document.getElementById('departureDate').valueAsDate = twoWeeksFromNow;
    
    // Initially hide the letter container
    letterContainer.style.display = 'none';
    
    // Generate letter
    function generateLetter() {
        const bossName = document.getElementById('bossName').value || 'Esteemed Manager';
        const yourName = document.getElementById('yourName').value || 'Disgruntled Employee';
        const dateInput = document.getElementById('departureDate').value;
        
        // Format the date nicely
        let departureDate = "two weeks from now";
        if (dateInput) {
            const date = new Date(dateInput);
            departureDate = date.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
        
        const annoyance = document.getElementById('annoyance').value;
        const futureCareer = document.getElementById('futureCareer').value;
        const letterStyle = document.getElementById('letterStyle').value;
        
        // Get random elements
        const letterTemplateArray = letterTemplates[letterStyle];
        const randomTemplate = letterTemplateArray[Math.floor(Math.random() * letterTemplateArray.length)];
        
        const randomCorporateBuzz = corporateBuzzwords[Math.floor(Math.random() * corporateBuzzwords.length)];
        const randomCorporateBuzz2 = corporateBuzzwords[Math.floor(Math.random() * corporateBuzzwords.length)];
        
        const randomBizSkill = bizSkills[Math.floor(Math.random() * bizSkills.length)];
        const randomBizSkill2 = bizSkills[Math.floor(Math.random() * bizSkills.length)];
        
        const randomPostscript = funnyPostscripts[Math.floor(Math.random() * funnyPostscripts.length)];
        
        const randomAnnoyanceText = annoyanceMapping[annoyance][Math.floor(Math.random() * annoyanceMapping[annoyance].length)];
        const randomFutureCareer = futureCareerMapping[futureCareer][Math.floor(Math.random() * futureCareerMapping[futureCareer].length)];
        
        const randomNumber = Math.floor(Math.random() * 100) + 42;
        const randomMonths = Math.floor(Math.random() * 36) + 6;
        
        // Replace placeholders
        let letter = randomTemplate
            .replace(/{bossName}/g, bossName)
            .replace(/{yourName}/g, yourName)
            .replace(/{departureDate}/g, departureDate)
            .replace(/{corporateBuzz}/g, randomCorporateBuzz)
            .replace(/{corporateBuzz}/g, randomCorporateBuzz2)
            .replace(/{bizSkill}/g, randomBizSkill)
            .replace(/{bizSkill}/g, randomBizSkill2)
            .replace(/{funnyPostscript}/g, randomPostscript)
            .replace(/{annoyanceText}/g, randomAnnoyanceText)
            .replace(/{futureCareer}/g, randomFutureCareer)
            .replace(/{randomNumber}/g, randomNumber)
            .replace(/{randomMonths}/g, randomMonths);
            
        // Display the letter with line breaks
        letterOutput.innerHTML = letter.replace(/\n/g, '<br>');
        letterContainer.style.display = 'block';
        
        // Add a class to show the letter is generated
        letterOutput.classList.add('letter-generated');
        
            // Only scroll to letter output if this isn't initial page load from navbar
            if (sessionStorage.getItem('navigationSource') !== 'navbar') {
                letterOutput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    
    // Copy to clipboard
    function copyToClipboard() {
        const text = letterOutput.innerText;
        navigator.clipboard.writeText(text).then(() => {
            copyBtn.textContent = 'Copied! ✓';
            setTimeout(() => {
                copyBtn.textContent = 'Copy to Clipboard';
            }, 2000);
        });
    }
    
    // Download as "PDF" (text file for now)
    function downloadLetter() {
        const text = letterOutput.innerText;
        const filename = 'epic-resignation-letter.txt';
        
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
    
    // Add event listeners
    generateBtn.addEventListener('click', generateLetter);
    regenerateBtn.addEventListener('click', generateLetter);
    copyBtn.addEventListener('click', copyToClipboard);
    downloadBtn.addEventListener('click', downloadLetter);
});

// Add these functions to your existing script.js file

// 1. Easter Egg Pattern - Konami Code
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiPosition = 0;

document.addEventListener('keydown', function(e) {
    // Check if the key pressed matches the next key in the Konami code
    if (e.key === konamiCode[konamiPosition]) {
        konamiPosition++;
        
        // If the entire code has been entered correctly
        if (konamiPosition === konamiCode.length) {
            activateEasterEgg();
            konamiPosition = 0; // Reset the position
        }
    } else {
        konamiPosition = 0; // Reset if the wrong key is pressed
    }
});

function activateEasterEgg() {
    // Create a matrix-like effect on the page
    document.body.style.transition = "all 0.5s";
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#00FF00";
    
    // Create falling code effect
    createMatrixEffect();
    
    // Show a special message
    const easterEggMessage = document.createElement('div');
    easterEggMessage.style.position = 'fixed';
    easterEggMessage.style.top = '50%';
    easterEggMessage.style.left = '50%';
    easterEggMessage.style.transform = 'translate(-50%, -50%)';
    easterEggMessage.style.zIndex = '10000';
    easterEggMessage.style.fontSize = '2rem';
    easterEggMessage.style.color = '#00FF00';
    easterEggMessage.style.textAlign = 'center';
    easterEggMessage.style.textShadow = '0 0 10px #00FF00';
    easterEggMessage.innerHTML = `<p>You've found the secret code!</p>
                                <p>You are The One who will escape the corporate Matrix.</p>
                                <button id="returnToRealityBtn" style="padding: 10px 20px; margin-top: 20px; background: transparent; color: #00FF00; border: 2px solid #00FF00; cursor: pointer; font-family: 'Courier New', monospace;">Return to Reality</button>`;
    document.body.appendChild(easterEggMessage);
    
    // Return to normal when the button is clicked
    document.getElementById('returnToRealityBtn').addEventListener('click', function() {
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        document.body.removeChild(easterEggMessage);
        stopMatrixEffect();
    });
}

function createMatrixEffect() {
    const canvas = document.createElement('canvas');
    canvas.id = 'matrixCanvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '9999';
    canvas.style.pointerEvents = 'none';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    
    // Characters to display
    const characters = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん0123456789';
    const charArray = characters.split('');
    
    // Column settings
    const fontSize = 12;
    const columns = canvas.width / fontSize;
    
    // Initialize drops for each column
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
    }
    
    // Animation interval
    window.matrixInterval = setInterval(drawMatrix, 50);
    
    function drawMatrix() {
        // Semi-transparent black to create fade effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00FF00'; // Green text
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            // Random character
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            
            // x = column * fontSize, y = drops[i] * fontSize
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            // Move the drop down after drawing
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            drops[i]++;
        }
    }
}

function stopMatrixEffect() {
    clearInterval(window.matrixInterval);
    const canvas = document.getElementById('matrixCanvas');
    if (canvas) {
        document.body.removeChild(canvas);
    }
}

// 2. Interactive Quote Bubble - Add at the end of your script.js
function createQuoteBubble() {
    const quotes = [
        "Remember, it's just a job. It's not worth your mental health.",
        "The best time to quit a job you hate was last year. The second best time is now.",
        "Plot twist: Your manager also hates their job.",
        "Your worth isn't defined by your productivity.",
        "Sometimes the bravest decision is walking away.",
        "That meeting really could have been an email.",
        "The Sunday Scaries shouldn't be a normal part of life.",
        "You don't need permission to prioritize your wellbeing.",
        "That 'dream job' you've been waiting for? It might not exist until you create it.",
        "The most valuable currency isn't money—it's time."
    ];
    
    // Create and position the bubble
    const bubble = document.createElement('div');
    bubble.className = 'quote-bubble';
    bubble.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    
    // Style the bubble
    bubble.style.position = 'fixed';
    bubble.style.bottom = '20px';
    bubble.style.right = '20px';
    bubble.style.maxWidth = '300px';
    bubble.style.padding = '15px';
    bubble.style.background = 'white';
    bubble.style.borderRadius = '20px';
    bubble.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    bubble.style.zIndex = '1000';
    bubble.style.fontStyle = 'italic';
    bubble.style.animation = 'fadeInUp 0.5s ease-out forwards';
    bubble.style.cursor = 'pointer';
    
    // Create close button
    const closeBtn = document.createElement('div');
    closeBtn.textContent = '×';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '5px';
    closeBtn.style.right = '10px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.fontWeight = 'bold';
    closeBtn.style.fontSize = '20px';
    closeBtn.style.color = 'var(--light-text)';
    
    bubble.appendChild(closeBtn);
    document.body.appendChild(bubble);
    
    // Add keyframe animation to the document if it doesn't exist
    if (!document.getElementById('quoteAnimations')) {
        const style = document.createElement('style');
        style.id = 'quoteAnimations';
        style.textContent = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes fadeOut {
                from {
                    opacity: 1;
                }
                to {
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Close button functionality
    closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        bubble.style.animation = 'fadeOut 0.5s forwards';
        setTimeout(() => {
            if (bubble.parentNode) {
                bubble.parentNode.removeChild(bubble);
            }
        }, 500);
    });
    
    // Clicking the bubble gives a new quote
    bubble.addEventListener('click', function() {
        bubble.textContent = quotes[Math.floor(Math.random() * quotes.length)];
        bubble.appendChild(closeBtn);
    });
    
    // Auto-dismiss after 12 seconds
    setTimeout(() => {
        if (bubble.parentNode) {
            bubble.style.animation = 'fadeOut 0.5s forwards';
            setTimeout(() => {
                if (bubble.parentNode) {
                    bubble.parentNode.removeChild(bubble);
                }
            }, 500);
        }
    }, 12000);
}

// Show quote bubble after 15 seconds on page
setTimeout(createQuoteBubble, 15000);

// 3. Add floating emojis when hovering over the main button
document.getElementById('triggerBtn').addEventListener('mouseover', function() {
    createFloatingEmojis(this);
});

function createFloatingEmojis(element) {
    const emojis = ['💼', '🔥', '💸', '🚀', '✨', '🎉', '🍹', '😎', '🤔', '🙌'];
    const rect = element.getBoundingClientRect();
    
    // Create 5 random emojis
    for (let i = 0; i < 5; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'floating-emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Style the emoji
        emoji.style.position = 'absolute';
        emoji.style.left = `${rect.left + Math.random() * rect.width}px`;
        emoji.style.top = `${rect.top - 20}px`;
        emoji.style.fontSize = '24px';
        emoji.style.zIndex = '100';
        emoji.style.pointerEvents = 'none';
        
        // Add to document
        document.body.appendChild(emoji);
        
        // Animate upward and fade
        const keyframes = [
            { transform: 'translateY(0)', opacity: 1 },
            { transform: `translateY(-${50 + Math.random() * 50}px)`, opacity: 0 }
        ];
        
        const animation = emoji.animate(keyframes, {
            duration: 1000 + Math.random() * 1000,
            easing: 'ease-out'
        });
        
        // Remove from DOM after animation
        animation.onfinish = () => {
            if (emoji.parentNode) {
                emoji.parentNode.removeChild(emoji);
            }
        };
    }
}

// 4. Add a pulsing notification dot to the settings
function addNotificationDot() {
    const settingsBtn = document.getElementById('settingsBtn');
    
    // Create the dot
    const dot = document.createElement('div');
    dot.className = 'notification-dot';
    
    // Style the dot
    dot.style.position = 'absolute';
    dot.style.top = '0';
    dot.style.right = '0';
    dot.style.width = '10px';
    dot.style.height = '10px';
    dot.style.borderRadius = '50%';
    dot.style.backgroundColor = 'var(--primary)';
    dot.style.animation = 'pulse 2s infinite';
    
    // Add keyframe animation
    if (!document.getElementById('notificationAnimations')) {
        const style = document.createElement('style');
        style.id = 'notificationAnimations';
        style.textContent = `
            @keyframes pulse {
                0% {
                    transform: scale(0.8);
                    box-shadow: 0 0 0 0 rgba(230, 57, 70, 0.7);
                }
                
                70% {
                    transform: scale(1);
                    box-shadow: 0 0 0 10px rgba(230, 57, 70, 0);
                }
                
                100% {
                    transform: scale(0.8);
                    box-shadow: 0 0 0 0 rgba(230, 57, 70, 0);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Make sure the button has position relative
    settingsBtn.style.position = 'relative';
    
    // Add the dot to the button
    settingsBtn.appendChild(dot);
    
    // Remove dot when settings are opened
    settingsBtn.addEventListener('click', function() {
        if (dot.parentNode) {
            dot.style.animation = 'fadeOut 0.5s forwards';
            setTimeout(() => {
                if (dot.parentNode) {
                    dot.parentNode.removeChild(dot);
                }
            }, 500);
        }
    });
}

// Add notification dot after a short delay
setTimeout(addNotificationDot, 5000);

// 5. Complete the Calculator and Future Predictor buttons functionality
document.getElementById("calculatorBtn").addEventListener("click", function() {
    window.location.href = "career-calculator.html";
});

document.getElementById("predictorBtn").addEventListener("click", function() {
    window.location.href = "future-predictor.html";
});

// Create an array of fake users who got answers
const fakeUsers = [
    "Sarah from Marketing", "Dev in Seattle", "Burnt-out Manager", 
    "Entry-level Associate", "Corporate Escapee", "Zoom Meeting Survivor",
    "Excel Spreadsheet Victim", "Cubicle Dweller"
];

// Show random notification of what other users got
function showSocialProof() {
    const randomUser = fakeUsers[Math.floor(Math.random() * fakeUsers.length)];
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'social-proof';
    notification.innerHTML = `
        <div class="social-proof-avatar">👤</div>
        <div class="social-proof-content">
            <div class="social-proof-user">${randomUser}</div>
            <div class="social-proof-answer">Got told: "${randomAnswer.substring(0, 30)}..."</div>
            <div class="social-proof-time">Just now</div>
        </div>
        <button class="social-proof-close">×</button>
    `;
    
    // Style the notification
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.left = '20px';
    notification.style.backgroundColor = 'white';
    notification.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    notification.style.borderRadius = '10px';
    notification.style.padding = '15px';
    notification.style.display = 'flex';
    notification.style.alignItems = 'center';
    notification.style.gap = '10px';
    notification.style.maxWidth = '300px';
    notification.style.zIndex = '1000';
    notification.style.animation = 'slideIn 0.3s forwards';
    
    // Add to document
    document.body.appendChild(notification);
    
    // Add closing functionality
    notification.querySelector('.social-proof-close').addEventListener('click', function() {
        notification.style.animation = 'slideOut 0.3s forwards';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });
    
    // Auto-remove after 8 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s forwards';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, 8000);
}

// Add CSS for animations
const socialProofStyle = document.createElement('style');
socialProofStyle.textContent = `
    @keyframes slideIn {
        from { transform: translateX(-100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(-100%); opacity: 0; }
    }
`;
document.head.appendChild(socialProofStyle);

// Show notifications periodically
setInterval(showSocialProof, 12000); // Every 12 seconds

function addRatingSystem(answerDiv, randomAnswer) {
    // Create rating container
    const ratingContainer = document.createElement('div');
    ratingContainer.className = 'rating-container';
    
    // Create upvote/downvote buttons
    const upvoteBtn = document.createElement('button');
    upvoteBtn.className = 'rating-btn upvote';
    upvoteBtn.innerHTML = '👍';
    upvoteBtn.setAttribute('title', 'This advice resonated with me');
    
    const downvoteBtn = document.createElement('button');
    downvoteBtn.className = 'rating-btn downvote';
    downvoteBtn.innerHTML = '👎';
    downvoteBtn.setAttribute('title', 'This advice missed the mark');
    
    // Rating count display
    const ratingCount = document.createElement('span');
    ratingCount.className = 'rating-count';
    ratingCount.textContent = '0';
    
    // Add elements to container
    ratingContainer.appendChild(upvoteBtn);
    ratingContainer.appendChild(ratingCount);
    ratingContainer.appendChild(downvoteBtn);
    
    // Add to answer div
    answerDiv.appendChild(ratingContainer);
    
    // Handle voting
    let currentRating = 0;
    let userVoted = false;
    
    upvoteBtn.addEventListener('click', function() {
        if (!userVoted) {
            currentRating++;
            userVoted = true;
            upvoteBtn.classList.add('voted');
            
            // Store answer in "popular wisdom" if enough upvotes
            if (currentRating > 3) {
                storePopularAnswer(randomAnswer);
            }
        } else if (downvoteBtn.classList.contains('voted')) {
            // Change from downvote to upvote
            currentRating += 2;
            downvoteBtn.classList.remove('voted');
            upvoteBtn.classList.add('voted');
        }
        ratingCount.textContent = currentRating;
    });
    
    downvoteBtn.addEventListener('click', function() {
        if (!userVoted) {
            currentRating--;
            userVoted = true;
            downvoteBtn.classList.add('voted');
        } else if (upvoteBtn.classList.contains('voted')) {
            // Change from upvote to downvote
            currentRating -= 2;
            upvoteBtn.classList.remove('voted');
            downvoteBtn.classList.add('voted');
        }
        ratingCount.textContent = currentRating;
    });
}

// Store highly rated answers for future use
function storePopularAnswer(answer) {
    let popularAnswers = JSON.parse(localStorage.getItem('popularAnswers') || '[]');
    if (!popularAnswers.includes(answer)) {
        popularAnswers.push(answer);
        localStorage.setItem('popularAnswers', JSON.stringify(popularAnswers));
    }
}


    
   // Mobile menu toggle
const hamburgerMenu = document.querySelector('.hamburger-menu');
const officeSupplies = document.querySelector('.office-supplies');

if (hamburgerMenu && officeSupplies) {
    hamburgerMenu.addEventListener('click', function() {
        officeSupplies.classList.toggle('show');
        hamburgerMenu.classList.toggle('active');
        
        // Animate hamburger menu
        const spans = hamburgerMenu.querySelectorAll('span');
        if (hamburgerMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (officeSupplies && !event.target.closest('.office-nav') && officeSupplies.classList.contains('show')) {
            officeSupplies.classList.remove('show');
            hamburgerMenu.classList.remove('active');
            
            const spans = hamburgerMenu.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}
    
    // Add sound effects on hover (optional - uncomment if you want sound effects)
    /*
    const supplyLinks = document.querySelectorAll('.supply-link');
    
    supplyLinks.forEach(link => {
        const icon = link.querySelector('.supply-icon');
        
        link.addEventListener('mouseenter', function() {
            if (icon.classList.contains('supply-icon-stapler')) {
                // Play stapler sound
                const staplerSound = new Audio('path/to/stapler-sound.mp3');
                staplerSound.volume = 0.2;
                staplerSound.play();
            }
        });
    });
    */
    
    // Add interactive animations
    const coffeeIcons = document.querySelectorAll('.supply-icon-coffee');
    
    coffeeIcons.forEach(icon => {
        icon.parentElement.addEventListener('click', function() {
            if (!this.classList.contains('active')) {
                // Create coffee sip animation
                const sip = document.createElement('span');
                sip.textContent = "✨";
                sip.style.position = "absolute";
                sip.style.fontSize = "1rem";
                sip.style.top = "10px";
                sip.style.right = "0";
                sip.style.opacity = "0";
                icon.appendChild(sip);
                
                // Animate sip
                let opacity = 0;
                const sipInterval = setInterval(() => {
                    opacity += 0.1;
                    sip.style.opacity = opacity;
                    sip.style.top = (10 - opacity * 10) + "px";
                    
                    if (opacity >= 1) {
                        clearInterval(sipInterval);
                        setTimeout(() => {
                            let fadeOut = 1;
                            const fadeInterval = setInterval(() => {
                                fadeOut -= 0.1;
                                sip.style.opacity = fadeOut;
                                
                                if (fadeOut <= 0) {
                                    clearInterval(fadeInterval);
                                    icon.removeChild(sip);
                                }
                            }, 50);
                        }, 300);
                    }
                }, 50);
            }
        });
    });
;

/*navbar*/

    
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.clearance-link');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
            
            // Add a verification checkmark to the icon for active page
            const icon = link.querySelector('.clearance-icon');
            const verifiedBadge = document.createElement('span');
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
            
            if (icon) {
                icon.style.position = 'relative';
                icon.appendChild(verifiedBadge);
            }
        }
    });
    
    // Randomly change the emoji in the badge photo
    const emojis = ['😎', '🤓', '🧐', '😏', '😊', '🙂', '🤔', '😴', '🥸', '😇'];
    const badgePhotoEmoji = document.querySelector('.badge-photo-emoji');
    
    if (badgePhotoEmoji) {
        badgePhotoEmoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Occasionally change the emoji when badge is expanded
        employeeBadge.addEventListener('click', function() {
            if (Math.random() > 0.7) {
                badgePhotoEmoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            }
        });
    }
    
    // Add an Easter egg: Pressing "B" key activates badge when it's not visible
    document.addEventListener('keydown', function(e) {
        if (e.key.toLowerCase() === 'b' && window.getComputedStyle(employeeBadge).display !== 'none') {
            employeeBadge.click();
        }
    });

    // Handle the navigation to resignation-letter.html special case
    // Find the resignation letter nav link
    const letterLink = document.querySelector('#letter-link');
    if (letterLink) {
        letterLink.addEventListener('click', function() {
            // Set flag when navigating to resignation letter page
            sessionStorage.setItem('fromNavbar', 'true');
        });
    }


document.addEventListener('DOMContentLoaded', function() {
    // Find the old settings panel and hide it
    const oldSettingsPanel = document.querySelector('.settings-panel');
    if (oldSettingsPanel) {
      oldSettingsPanel.style.display = 'none';
    }
    
    // Transfer event listeners to the new settings toggles
    const themeToggle = document.getElementById('themeToggle');
    
    // Set initial state based on localStorage or defaults
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-theme');
      themeToggle.checked = true;
    }
  });

  

  