@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Space+Grotesk&family=Spectral&display=swap');

:root {
  /* Light mode colors inspired by Image 2 */
  --light-bg: #d2fdf3;
  --light-text: #333366;
  --light-accent1: #ff6b6b;
  --light-accent2: #4ecdc4;
  --light-card-bg: #b3caeb;
  --light-card-border: #d6be34;

  /* Dark mode colors inspired by Image 1 */
  --dark-bg: #0a0a2a;
  --dark-text: #e0e0ff;
  --dark-accent1: #9d4edd;
  --dark-accent2: #5a189a;
  --dark-card-bg: #1a1a3a;
  --dark-card-border: #3a0ca3;

  /* Common colors */
  --nebula1: #ff61d2;
  --nebula2: #7e6bf5;
  --star: #fffacd;
  --golden: #cab644;
}

body {
  font-family: 'Spectral', serif;
  transition: background-color 0.3s, color 0.3s;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}

body.light-mode {
  background-color: var(--light-bg);
  color: var(--light-text);
  background-image: linear-gradient(45deg, #4ecdc4, #ff6b6b, #45b7d1, #f7b733);
}

body.dark-mode {
  background-color: var(--dark-bg);
  color: var(--dark-text);
  background-image: linear-gradient(45deg, #0a0a2a, #3a0ca3, #5a189a, #7209b7);
}

h1, h2, h3 {
  font-family: 'Cinzel Decorative', cursive;
}

.container {
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 20px;
  margin-top: 20px;
  border: 2px solid var(--golden);
}

.light-mode .container {
  background-color: rgba(255, 255, 255, 0.7);
}

.dark-mode .container {
  background-color: rgba(10, 10, 42, 0.7);
}

.ship-card, .module-card, .weapon-card, .upgrade-card {
  border-radius: 10px;
  transition: all 0.3s ease;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
}

.light-mode .ship-card, .light-mode .module-card, .light-mode .weapon-card, .light-mode .upgrade-card {
  background-color: var(--light-card-bg);
  border: 1px solid var(--light-card-border);
}

.dark-mode .ship-card, .dark-mode .module-card, .dark-mode .weapon-card, .dark-mode .upgrade-card {
  background-color: var(--dark-card-bg);
  border: 1px solid var(--dark-card-border);
}

.ship-card:hover, .module-card:hover, .weapon-card:hover, .upgrade-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(255, 215, 0, 0.4);
}

button {
  font-family: 'Space Grotesk', sans-serif;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.1s;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}

button:hover {
  transform: translateY(-2px);
}

button:active {
  transform: translateY(1px);
}

.light-mode button {
  background-color: var(--light-accent1);
  color: white;
}

.light-mode button:hover {
  background-color: var(--light-accent2);
}

.dark-mode button {
  background-color: var(--dark-accent1);
  color: white;
}

.dark-mode button:hover {
  background-color: var(--dark-accent2);
}

input[type="text"], input[type="number"], select, textarea {
  font-family: 'Space Grotesk', sans-serif;
  border-radius: 5px;
  padding: 8px;
  border: 1px solid var(--golden);
  transition: border-color 0.3s, box-shadow 0.3s;
}

.light-mode input[type="text"], .light-mode input[type="number"], .light-mode select, .light-mode textarea {
  background-color: rgba(255, 255, 255, 0.8);
  color: var(--light-text);
}

.dark-mode input[type="text"], .dark-mode input[type="number"], .dark-mode select, .dark-mode textarea {
  background-color: rgba(26, 26, 58, 0.8);
  color: var(--dark-text);
}

.light-mode input[type="text"]:focus, .light-mode input[type="number"]:focus, .light-mode select:focus, .light-mode textarea:focus {
  border-color: var(--light-accent1);
  box-shadow: 0 0 10px rgba(255, 107, 107, 0.5);
}

.dark-mode input[type="text"]:focus, .dark-mode input[type="number"]:focus, .dark-mode select:focus, .dark-mode textarea:focus {
  border-color: var(--dark-accent1);
  box-shadow: 0 0 10px rgba(157, 78, 221, 0.5);
}

/* Nebula-inspired gradient text */
.nebula-text {
  background: linear-gradient(45deg, var(--nebula1), var(--nebula2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

/* Star-like twinkling effect */
.star-twinkle {
  position: relative;
}

.star-twinkle::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  background-color: var(--star);
  border-radius: 50%;
  animation: twinkle 1.5s infinite alternate;
}

@keyframes twinkle {
  0% { opacity: 0.2; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1.2); }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb {
  background: var(--golden);
  border-radius: 5px;
}

/* Background image selection */
#bgImageSelect {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  color: var(--golden);
  border: 1px solid var(--golden);
}

/* Cosmic dust particles */
.cosmic-dust {
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}

.dust-particle {
  position: absolute;
  background-color: rgba(255, 215, 0, 0.6);
  border-radius: 50%;
  animation: float 20s infinite linear;
}

@keyframes float {
  0% { transform: translateY(0) rotate(0deg); }
  100% { transform: translateY(-100vh) rotate(360deg); }
}

/* Popup styles */
.popup {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 15px;
  z-index: 1000;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 2px solid var(--golden);
  max-width: 80%;
  width: 400px;
}

.light-mode .popup {
  background-color: rgba(255, 255, 255, 0.9);
  color: var(--light-text);
}

.dark-mode .popup {
  background-color: rgba(26, 26, 58, 0.9);
  color: var(--dark-text);
}

.popup h2 {
  margin-bottom: 15px;
  font-family: 'Cinzel Decorative', cursive;
}

.popup p {
  margin-bottom: 15px;
}

.popup button {
  display: block;
  margin: 0 auto;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 999;
}

/* Adjust the existing button styles to fit better with popups */
.popup button {
  padding: 8px 16px;
  font-size: 14px;
}

.light-mode .popup button {
  background-color: var(--light-accent2);
}

.dark-mode .popup button {
  background-color: var(--dark-accent2);
}

/* New Spelljammer-inspired enhancements */

/* Magical glow effect for important elements */
.magical-glow {
  box-shadow: 0 0 15px var(--golden), 0 0 30px var(--nebula1);
  transition: box-shadow 0.3s ease;
}

.magical-glow:hover {
  box-shadow: 0 0 25px var(--golden), 0 0 50px var(--nebula2);
}

/* Astral sea-inspired text effect */
.astral-text {
  background: linear-gradient(45deg, var(--nebula1), var(--nebula2), var(--star));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  animation: astral-shimmer 5s infinite alternate;
}

@keyframes astral-shimmer {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

/* Constellation effect for backgrounds */
.constellation-bg {
  position: relative;
  overflow: hidden;
}

.constellation-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(1px 1px at 10px 10px, var(--star), transparent),
    radial-gradient(1px 1px at 50px 50px, var(--star), transparent),
    radial-gradient(1px 1px at 100px 100px, var(--star), transparent);
  background-size: 200px 200px;
  animation: twinkle 10s infinite linear;
  opacity: 0.3;
}

/* Crystal ball-inspired elements */
.crystal-ball {
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1));
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.crystal-ball::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), transparent);
  transform: rotate(45deg);
  animation: crystal-shimmer 5s infinite linear;
}

@keyframes crystal-shimmer {
  0% { transform: rotate(45deg) translateY(-50%); }
  100% { transform: rotate(45deg) translateY(50%); }
}

/* Steampunk-inspired form elements */
.steampunk-input {
  border: 2px solid var(--golden);
  background-color: rgba(0, 0, 0, 0.1);
  color: var(--golden);
  font-family: 'Spectral', serif;
  padding: 10px;
  border-radius: 5px;
  box-shadow: inset 0 0 5px var(--golden);
  transition: all 0.3s ease;
}

.steampunk-input:focus {
  outline: none;
  box-shadow: inset 0 0 10px var(--golden), 0 0 10px var(--nebula1);
}

/* Magical rune animation for loading states */
.loading-rune {
  width: 50px;
  height: 50px;
  border: 3px solid var(--golden);
  border-radius: 50%;
  position: relative;
  animation: rotate-rune 2s infinite linear;
}

.loading-rune::before,
.loading-rune::after {
  content: '';
  position: absolute;
  background-color: var(--golden);
}

.loading-rune::before {
  width: 20px;
  height: 3px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.loading-rune::after {
  width: 3px;
  height: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes rotate-rune {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
