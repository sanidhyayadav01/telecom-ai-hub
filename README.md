# Telecom AI Hub 🚀

An integrated AI-powered telecom platform that combines learning, customer support, communication assistance, and analytics into one unified system.

This project merges two telecom-based AI projects into a single scalable application using **React**, **FastAPI**, and **Groq Llama 3.3**.


## Problem Statement

Telecom companies often manage:

- Customer complaints separately
- Employee learning platforms separately
- Messaging/customer communication manually
- Technical training systems independently

This creates fragmented workflows.

### Solution:
Telecom AI Hub integrates all major telecom workflows into one centralized AI-driven platform.

---

# Features

## 🎓 AI Telecom Tutor
- Ask telecom-related questions
- Get concise AI-generated explanations
- Covers:
  - 5G
  - LTE
  - Network Slicing
  - IoT
  - Networking
  - Telecom Infrastructure

---

## 🧪 AI Quiz Generator
- Generates telecom MCQs dynamically
- Topic-based quiz generation
- Interactive answer selection
- Correct answer highlighting
- Explanation after each question

---

## 💬 Smart Messaging Assistant
- Converts raw customer messages into:
  - Professional
  - Formal
  - Business-ready communication

Example:

Input:
"My internet is down"

Output:
"I am experiencing an internet outage. Kindly assist in resolving the issue."

---

## 🛠 Complaint Intelligence System
Analyzes telecom complaints and identifies:

- Issue Category
- Severity
- Urgency
- Customer Sentiment
- Recommended Resolution

---

## 📊 Dashboard
Displays:

- AI interactions
- Quizzes generated
- Complaints handled
- Recent platform activities

---

# Tech Stack

### Frontend
- React.js
- React Router
- Axios
- CSS Inline Styling

### Backend
- FastAPI
- Python

### AI Layer
- Groq API
- Llama 3.3 Model

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

# Project Architecture

```bash
Frontend (React)
     ↓
API Calls (Axios)
     ↓
Backend (FastAPI)
     ↓
AI Services Layer
 ├── Tutor
 ├── Quiz
 ├── Messaging
 ├── Complaint Analysis
     ↓
Groq Llama 3.3
```

---

# Folder Structure

```bash
telecom-ai-hub/
│
├── backend/
│   ├── api/routes/
│   ├── services/
│   ├── core/
│   ├── models/
│   ├── data/
│
├── frontend/
│   ├── src/pages/
│   ├── src/components/
│   ├── src/services/
│
└── README.md
```

---

# Installation

## Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# Environment Variables

Create `.env` inside backend:

```env
GROQ_API_KEY=your_api_key_here
```

---

# Future Enhancements

- User authentication
- Database integration
- Real telecom datasets
- Voice-based customer support
- Ticket tracking system
- Admin analytics dashboard

---

# Key Innovation

Unlike traditional telecom systems that separate training, communication, and complaint management, Telecom AI Hub unifies them into one intelligent platform.

---

# Author

**Sanidhya Yadav & Team**  
Final Year CSE Student  
Medi-Caps University
