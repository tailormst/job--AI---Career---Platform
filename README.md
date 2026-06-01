# AI Career Recommendation Platform

## AI-Powered Career Guidance and Learning Roadmap Platform

AI Career Recommendation Platform helps users explore career paths, generate personalized learning roadmaps, view salary insights, and practice through AI-generated quizzes.

The platform uses Google Gemini to generate recommendations based on user interests, skills, and career goals.

---

## Features

- Personalized career recommendations
- AI-generated learning roadmaps
- Salary insights for different career domains
- AI-powered quiz generation
- User profile management
- Data storage using PostgreSQL (Neon)

---

## Tech Stack

### Frontend

- React.js
- Next.js

### Backend & APIs

- Clerk (Authentication and User Management)
- REST APIs

### Database

- PostgreSQL (Neon)

### AI

- Google Gemini API

---

## Project Workflow

1. User provides interests, skills, or career preferences.
2. The platform processes user inputs.
3. Gemini generates career recommendations.
4. Personalized learning roadmaps are created.
5. Salary insights are displayed for selected domains.
6. Users can generate quizzes for learning and self-assessment.

---

## Core Features

### Career Recommendations

Generates career suggestions based on user interests and skills.

### Learning Roadmaps

Creates structured learning paths for selected career domains.

### Salary Insights

Displays minimum, average, and maximum salary ranges for different career paths.

### Quiz Generation

Creates AI-powered quizzes based on selected topics.

---

## Database

PostgreSQL (Neon) is used to store:

- User profiles
- Career preferences
- Generated roadmaps
- Quiz-related data

---

## Running Locally

### Clone Repository

```bash
git clone https://github.com/tailormst/job--AI---Career---Platform.git
```

### Install Dependencies

```bash
npm install
```

### Configure Environment

Create a `.env` file:

```env
DATABASE_URL=
GEMINI_API_KEY=
```

### Start Development Server

```bash
npm run dev
```

Application runs at:

```text
http://localhost:3000
```

---

## Learning Outcomes

Through this project, I gained experience with:

- React.js development
- REST API integration
- PostgreSQL database management
- AI application development using Gemini
- User-centered software design
- Career recommendation systems

---

## Future Improvements

- Resume analysis and feedback
- Job recommendation integration
- Progress tracking dashboards
- Skill gap analysis
- Interview preparation modules

---

## Author

Mohammed Saifuddin Tailor

GitHub: https://github.com/tailormst
