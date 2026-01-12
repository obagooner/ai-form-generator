# AI-Powered HTML Form Generator

A frontend-only web application that converts natural language descriptions into clean, accessible, production-ready HTML forms with live preview and export options.

---
## 🔍 Live Demo

👉 https://obagooner.github.io/ai-form-generator/

## 📸 Preview

![AI Form Generator Preview](Assets/screenshot.png)


## 🚀 Features

- Natural language → HTML form generation  
- Live form preview  
- Accessible by default (labels, ARIA attributes, proper semantics)  
- Preset form templates:
  - Contact Form
  - Login Form
  - Registration Form
  - Survey Form  
- Customization options:
  - CSS styling
  - Responsive layout
  - Form validation
  - Light/Dark theme toggle  
- One-click copy to clipboard  
- Export options:
  - Download as HTML
  - Copy CSS only
  - Copy JavaScript only
  - Export to CodePen  
- No backend required

---

## 🧠 How It Works

This project uses a simulated AI engine based on intelligent keyword parsing and rule-based generation. User descriptions are analyzed for common form-related terms (e.g., email, password, message), which are then mapped to appropriate HTML input types and accessibility attributes.

The architecture mirrors real AI workflows while remaining free, fast, and ideal for public demos and portfolio use.

---

## 💡 Problem & Solution

**Problem:**  
Creating accessible HTML forms is repetitive and error-prone, especially during rapid prototyping or early-stage product development.

**Solution:**  
This tool allows users to describe a form in plain English and instantly receive clean, accessible HTML with a live preview — reducing setup time while enforcing best practices by default.

---

## 🧩 Skills Demonstrated

- Vanilla JavaScript application architecture  
- DOM manipulation and dynamic rendering  
- Accessibility-first HTML (labels, ARIA, semantics)  
- UI/UX design and responsive layout  
- Simulated AI logic and prompt-driven workflows  
- Static deployment with GitHub Pages  

---

## 🛠 Tech Stack

- HTML5  
- CSS3  
- Vanilla JavaScript  
- GitHub Pages (hosting)

---

## 📦 Usage

No installation or build step is required.

You can use the application directly via the live demo, or run it locally by opening the `index.html` file in your browser.

```bash
git clone https://github.com/obagooner/ai-form-generator.git
cd ai-form-generator
open index.html


---

## 🧠 Case Study: AI-Powered Form Generator

### Problem
Many developers, founders, and non-technical users struggle to quickly create clean, accessible HTML forms. Existing tools are either too rigid, overly complex, or locked behind paid platforms.

### Solution
I built an AI-powered form generator that allows users to describe their form requirements in plain English and instantly receive:
- A live form preview
- Clean, production-ready HTML, CSS, and JavaScript
- Optional validation, responsiveness, and theming

The tool focuses on speed, clarity, and developer-friendly output.

### Key Features
- Natural-language form description input
- Pre-built form presets (Contact, Login, Registration, Survey)
- Live preview with modern UI styling
- Code export (HTML / CSS / JavaScript)
- Dark and light theme support
- Error handling and helpful user guidance
- Fully responsive layout

### Technical Decisions
- **Vanilla HTML, CSS, JavaScript** for zero build complexity
- Modular JavaScript functions for extensibility
- CSS variables for easy theming
- Accessibility-conscious form markup
- GitHub Pages for frictionless deployment

### Challenges & Learnings
- Translating vague user descriptions into structured form layouts
- Balancing UI polish with code simplicity
- Designing flexible presets without over-constraining customization

This project strengthened my frontend architecture skills, UI/UX decision-making, and ability to ship polished tools suitable for real users.

### Future Improvements
- AI API integration (OpenAI / Claude)
- Drag-and-drop form editor
- Export to React / Vue components
- Form schema validation and saving

