- single-page HTML portfolio styled like an API response  
- main heading acts like a GET endpoint ("> GET /justin")  
- body uses JSON-style data block showing role, phase, uptime, repositories, and status  
- form section mimics a POST request ("> POST /contact")  
- simple email form that sends to Gmail via `mailto:`  
- terminal or “console output” theme (monospace font + minimal color)  
- divider between sections to visually separate API and contact areas  
- footer message like a system log ("All systems nominal")  
- layout centered, minimalistic, readable on all screen sizes  
- intentionally feels like a developer console rather than a standard webpage  

---

## Project Idea: Firewall Visualizer

### Concept
- simple web demo that shows packets (colored circles) moving across the screen
- a “firewall” box sits in the middle; some packets pass through, others bounce off
- illustrates inbound vs outbound filtering in a fun, visual way
- no JavaScript required — only CSS animations and positioning

### Visual layout
- left side: label “Internet”
- center: tall narrow div labeled “Firewall”
- right side: label “Internal Network”
- background dark, packets bright (green for allowed, red for blocked)
- optional: small glowing lines or gradient “data streams”

### Core mechanics (CSS)
- use `@keyframes` to animate packets horizontally  
- green packets reach the right side (allowed)  
- red packets reverse direction midway (blocked)  
- maybe add a slow pulsing glow to the firewall box  
- flex or grid layout to keep everything centered and tidy

### Educational value
- demonstrates basic firewall behavior visually  
- great talking piece for cloud or network security  
- reinforces concepts like “deny by default” and “least privilege”

### Optional extras
- text legend showing “Green = Allowed / Red = Blocked”
- light bounce animation on the firewall when a packet hits it
- subtle background gradient or noise pattern to feel like a console display
