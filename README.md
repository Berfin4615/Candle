````md
# 🕯️ Coding Candle  
**Code Until the Candle Melts**

> There is a trend that goes like  
> “We code until the candle melts.”  
>  
> I liked the idea —  
> but instead of buying candles,  
> **I coded the candle.**

Coding Candle is a lightweight, always-on-top desktop application that displays a **pixel-art candle** on your screen.  
The candle melts over a randomly selected duration, helping you stay focused while you work.

---

## ✨ Features

- 🕯️ **Pixel-art candle animation (HTML5 Canvas)**
- 🔥 **Lively flame flicker animation**
- ⏱️ **Time-based melting**
  - User enters **minimum and maximum minutes (decimal supported)**
  - App selects a **random duration within the range**
- 🖥️ **Always-on-top desktop application**
- 🪟 **Fully transparent window (no borders)**
- 🖱️ **Draggable window**
- 🎯 **Can be positioned on screen corners**
- ⚡ **Lightweight & fast (powered by Tauri)**

---

## 🧠 Project Idea

I was inspired by the popular  
**“code until the candle melts”** trend on social media.

Instead of:
- Buying real candles
- Watching them burn on my desk

I wanted:
- A candle that lives on my screen
- A real desktop application
- Something customizable and aesthetic

So I built a **candle entirely with code**.

---

## 🛠️ Technologies Used

- **Tauri** – Desktop application framework (Windows)
- **HTML5 Canvas** – Pixel-art drawing and animation
- **Vanilla JavaScript** – Animation loop & time logic
- **CSS** – Transparent window & pixel-style UI

---

## 🚀 How It Works

1. When the app launches, a **pixel-art setup panel** appears
2. The user enters:
   - Minimum duration (e.g. `2.5` minutes)
   - Maximum duration (e.g. `6.0` minutes)
3. The app randomly selects a **decimal duration** within the range
4. The candle animation starts
5. As time passes:
   - The candle body gradually shrinks
   - The flame moves downward
6. When the candle fully melts:
   - The focus session is complete

---

## ⌨️ Keyboard Shortcuts

- **I** → Toggle the setup panel (show / hide)

---

## 🖥️ Developer Setup

### Requirements
- Node.js
- Rust + Cargo
- On Windows:
  - Visual Studio Build Tools (C++)

### Run in Development
```bash
npm install
npm run tauri dev
````

### Build the App

```bash
npm run tauri build
```

---

## 📌 Use Cases

* Pomodoro-style focus sessions
* Productivity and focus aid
* “Code with me” videos
* Streaming overlays
* Aesthetic desktop widget
* Social media content (Reels / TikTok / Shorts)

---

## 🎥 Social Media Context

This project was created as part of a social media concept:

> “We code until the candle melts —
> but we don’t buy candles,
> we code them.”

---

## 📄 License

This project is intended for personal and educational use.
Feel free to fork, modify, and build upon it.

---

🕯️
**If the candle melts before the code is done —
it’s time for a break.**

```
