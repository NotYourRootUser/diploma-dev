# Lesson Notes  
## Environment Variables, npm, Nodemailer, and Project Configuration

---

## npm and Packages

### What npm is  
npm is a package manager used to install, manage, and share reusable code modules.

### What a package is  
A package is a reusable bundle of code you plug into your project.  
Examples include React, Express, Material UI.

### Types of npm packages  
1. Application packages  
   Used to scaffold or build full applications.  
   Example: npm create vite  

2. Library packages  
   Installed to add features.  
   Example: react, react router dom

---

## Modules vs Libraries vs Packages  

### Module  
A single JavaScript file that exports code for reuse.

### Library  
A collection of modules that provide features.  
Example: React, Material UI

### Package  
A downloadable version of a library.  
Contains metadata through package.json.

---

## package.json

Central configuration file that tracks:
- Dependencies  
- Dev dependencies  
- Scripts  
- Project metadata  
- Versions

---

## Scripts

Scripts define automation commands inside package.json.  
Example:  
npm run dev starts a development server.

---

## Dependencies vs Dev Dependencies

### Dependencies  
Required for production runtime.  
Example: react

### Dev Dependencies  
Used only during development and not needed in production.  
Example: vite or eslint

---

## node_modules and Git

Do not commit node_modules.  
Commit package.json and package lock.json.  
Run npm install to restore node_modules on another machine.

---

## Nodemailer

Nodemailer is a module for sending email from Node applications.

Basic pattern:
1. Import nodemailer  
2. Create a transporter with SMTP settings  
3. Define mailOptions (from, to, subject, text or html)  
4. Call sendMail

---

## Environment Variables

Used to store sensitive or configurable values outside code.  
Placed in a `.env` file and accessed via `process.env`.

---

## Using dotenv

Steps:
1. Install dotenv  
2. Create `.env` file  
3. Add `.env` to `.gitignore`  
4. `import dotenv from "dotenv"` then call `dotenv.config()`  
5. Access values using `process.env.KEY_NAME`

---

## Types of .env Files

| File | Purpose |
|------|---------|
| .env | Default for local development |
| .env.development | Development environment configuration |
| .env.test | Testing configuration |
| .env.production | Production deployment configuration |
| .env.local | Machine specific overrides |
| .env.example | Template showing required variables |

---

## Best Practices

- Never commit .env files containing real secrets  
- Always commit a `.env.example` with placeholder values  
- Use separate environment files for development, testing, and production

---

## Key Takeaways

- Environment variables separate secrets from source code  
- package.json defines dependencies, scripts, and metadata  
- npm installs reusable code packages  
- Nodemailer enables programs to send email with attachments and HTML  


