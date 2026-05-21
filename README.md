# SEOFlow-AI 🚀

AI-powered SEO analysis and keyword tracking platform built using React, Node.js, Express, MongoDB, and AI-powered automation tools.
This project helps users analyze websites, track keyword rankings, monitor competitors, and generate SEO insights using AI.

⸻
## Live Demo

### Frontend
🔗 https://seo-flow-ai-k33q.vercel.app

### Backend API
🔗 https://seo-flow-ai-server.vercel.app

⸻

📌 Overview

SEOFlow-AI is a modern SEO analytics platform that helps users:

* Analyze website SEO performance
* Track keyword rankings on Google
* Monitor competitors
* Detect technical SEO issues
* Generate AI-powered SEO recommendations
* Visualize SEO insights through a modern dashboard

This project combines browser automation, AI analysis, web scraping, and full-stack SaaS architecture.

⸻

✨ Features

🔍 SEO Analysis

* Website SEO auditing
* Metadata analysis
* Heading structure analysis
* Internal & external link analysis
* Image alt text detection
* Keyword extraction
* Technical SEO issue detection
* AI-generated recommendations

📈 Rank Tracking

* Google SERP keyword tracking
* Competitor analysis
* Ranking history tracking
* Position change analytics
* Best position monitoring
* Keyword management system

🤖 AI Integration

* Gemini AI structured SEO analysis
* Intelligent issue detection
* SEO scoring system
* Automated recommendations

🔐 Authentication

* JWT authentication
* Protected API routes
* User-specific analytics and tracking

🎨 Frontend

* Modern SaaS UI
* Dark theme dashboard
* Responsive design
* Analytics cards and charts
* Pricing section
* Professional landing page

⸻

🛠️ Tech Stack

Frontend

- React.js
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Router

Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt

Automation & AI

- Playwright
- Browserbase
- Gemini AI
  
⸻

🏗️ Architecture

Client
 → Routes
 → Auth Middleware
 → Controllers
 → Services
    → Scraper Service
    → AI Analysis Service
    → Rank Tracking Service
 → MongoDB

⸻

📂 Project Structure

SEO/

│
├── client/                 # Frontend
│   ├── src/
│   └── public/
│
├── server/                 # Backend
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── server.js
│
├── package.json
└── README.md

⸻

⚡ Installation

1. Clone Repository

git clone https://github.com/mohdasad-dev/SEOFlow-AI.git

2. Install Dependencies

Backend

cd server
npm install

Frontend

cd client
npm install

⸻

🔑 Environment Variables

Create a .env file inside the server directory.

PORT=4000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
BROWSERBASE_API_KEY=your_browserbase_api_key

⸻

▶️ Run Application

Backend

cd server
npm run server

Frontend

cd client
npm run dev

⸻

📊 SEO Analysis Workflow

User URL Input
   ↓
Playwright + Browserbase Scraping
   ↓
SEO Data Extraction
   ↓
Gemini AI Analysis
   ↓
SEO Score & Recommendations
   ↓
Store Results in MongoDB

⸻

📈 Rank Tracking Workflow

Keyword Input
   ↓
Google SERP Scraping
   ↓
Keyword Position Detection
   ↓
Competitor Analysis
   ↓
Store Ranking History

⸻

🚀 Future Improvements

* Historical SEO analytics
* AI chatbot assistant
* Lighthouse integration
* Queue system with Redis + BullMQ
* Cron-based automated tracking
* PDF report generation
* Team collaboration features
* Subscription billing system

⸻

🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

⸻

📄 License

This project is licensed under the MIT License.

⸻

👨‍💻 Author

Developed by Md Asad.
