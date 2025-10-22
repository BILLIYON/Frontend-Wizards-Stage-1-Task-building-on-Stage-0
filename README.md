# 🧙‍♂️ Frontend Wizards — Stage 1 Task

A responsive, accessible multi-page web project built with **semantic HTML**, **modern CSS**, and **vanilla JavaScript**.  
This continues from **Stage 0 (Profile Card)** and adds two new pages — **Contact Us** (form validation) and **About Me** (reflection page).

---

## 🚀 Features

### 🏠 Profile Card (`index.html`)
- Displays profile name, bio, avatar, hobbies & dislikes.  
- Shows current time in milliseconds using `Date.now()`.  
- Includes social links (Twitter, GitHub, etc.).  
- Fully responsive design.

### 📞 Contact Us (`contact.html`)
- Accessible form with proper `<label>` and `aria-describedby` attributes.  
- Client-side validation for:
  - Required fields  
  - Valid email format  
  - Message ≥ 10 characters  
- Error messages and a visible success confirmation.  
- Keyboard-friendly navigation.

### 👤 About Me (`about.html`)
- Sections for Bio, Goals, Areas of Low Confidence, Note to Future Self, and Extra Thoughts.  
- Uses semantic HTML (`<main>`, `<section>`, headings).  
- Clean, responsive layout.

---

## 🧠 Accessibility & Semantics
- Every visible element includes a `data-testid` attribute for automated testing.  
- Inputs linked to labels via `for` and `id`.  
- Keyboard focus states visible on interactive items.  
- Proper color contrast for readability.

---

## 💻 Technologies
- **HTML5** – semantic structure  
- **CSS3** – responsive layout (Flexbox + media queries)  
- **JavaScript (ES6)** – form validation logic  
- **GitHub Pages / Netlify** – deployment hosting

---

## 🧩 Project Structure
```

frontend-wizards-stage1/
│
├── index.html          # Profile Card (Stage 0)
├── contact.html        # Contact Us page
├── about.html          # About Me page
├── style.css           # Shared styling
└── script.js           # Contact form validation

````

---

## 🧪 Data-TestIDs Reference
Each element is tagged for testing (examples):

| Element | data-testid |
|----------|--------------|
| Profile Card root | `test-profile-card` |
| User name | `test-user-name` |
| Bio | `test-user-bio` |
| Time (ms) | `test-user-time` |
| Avatar image | `test-user-avatar` |
| Hobbies list | `test-user-hobbies` |
| Dislikes list | `test-user-dislikes` |
| Contact form fields | `test-contact-*` |
| About page sections | `test-about-*` |

---

## 🧰 Running Locally
1. Clone the repo  
   ```bash
   git clone https://github.com/<your-username>/frontend-wizards-stage1.git
   cd frontend-wizards-stage1
````

2. Open `index.html` in your browser.
3. For changes, edit HTML/CSS/JS files and refresh.

---

## 🌐 Deployment

Host easily using:

* **Netlify** → drag-and-drop your folder
* **GitHub Pages** → push to `main`, enable Pages in repo settings

**Live Demo:** [Your deployed URL here]
**Repo Link:** [Your GitHub repo here]

---

## ✨ Credits

Built by **John Billon** 🧑‍💻
For **Frontend Wizards – Stage 1 Challenge**

---

## 📜 License

This project is open-source under the **MIT License**.
