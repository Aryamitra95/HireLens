🔍 Overview
HireLens enables users to upload their resumes and receive automated, in-depth feedback based on criteria such as:

ATS (Applicant Tracking System) compatibility

Content quality and structure

Tone and style

Relevance to specific job titles or descriptions

Key features include:

PDF upload and conversion for analysis

Multi-category scores and improvement tips

Personal resume library for tracking multiple submissions

Detailed, actionable feedback for targeted optimization

🧪 Live Demo
🌐 Try it now: https://hire-lens-one.vercel.app/

You can upload a sample resume, select a job title and company, and receive scores and improvement suggestions instantly.

🛠️ TechStacks:
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) 
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)


🚀 Getting Started
Prerequisites
Node.js >= 20

npm or yarn

Installation
bash
git clone https://github.com/Aryamitra95/HireLens.git
cd HireLens
npm install
npm run dev
Visit http://localhost:5173 (default Vite port) in your browser.

Build for production
bash
npm run build
npm start
🧩 Key Features
Smart PDF Resume Upload: Upload and preview resumes in PDF format.

Role-aware Feedback: Select or enter a target job/company for customized analysis.

Multi-dimensional Scoring: Scores and suggestions for ATS, content, style, structure, and skills.

Job-Specific Feedback: Analysis adapted based on the actual job description provided.

AI-Powered Improvements: Tips on how to increase your resume’s relevance and impact.

Cloud-Powered Storage (Puter.js): Save and track your uploads and feedback.

User Authentication: Secure login to keep your data private.

💼 Typical Workflow
Sign In: Register or sign in with Puter.js (serverless auth).

Upload Resume: Drop your PDF into the uploader.

Specify Job Details: Fill in the company name, job title, and (optionally) paste the job description.

Analyze: AI processes your resume, grading it and generating improvement suggestions.

Review Feedback: See your scores across all categories and review detailed AI-generated tips.

Optimize & Re-upload: Improve your resume based on feedback and track progress over time.

📁 Project Structure
text
HireLens/
├── app/
│   ├── components/      # UI elements
│   ├── lib/             # Utility functions and API integrations
│   ├── routes/          # Main pages (authentication, upload, results, etc.)
├── constants/           # Prompt templates and scoring logic
├── public/              # Static assets
├── types/               # TypeScript type definitions
📊 Example Feedback Categories
ATS Score: Are your formatting and keywords optimized for resume robots?

Tone & Style: Is your resume professional and clear?

Content: Is the content impactful and relevant?

Structure: Is your resume organized and easy to read?

Skills: Are the right skills emphasized for the job?

Each category receives a score (out of 100) and actionable improvement tips.

🔒 Data Privacy
HireLens is designed with privacy in mind. Uploaded resumes are securely stored via Puter.js cloud, and user data is accessible only after authentication.


