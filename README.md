# The Word

The Word is a Bible-focused web application built with Node.js and Express. It helps users sign in, track prayers, journal Bible study reflections, explore scripture pages, and connect around devotional content.

## Key Features

- User authentication with secure login and registration
- Prayer journal creation, editing, and tracking
- Scripture and devotion pages for Bible study
- Community circles and shared prayers functionality
- AI-assisted spiritual guidance support (optional AI integration)

## Project Structure

- `AI/` - AI agent scripts and helpers
- `auth/` - authentication routes and middleware
- `data/` - JSON data storage for prayers, journals, users, and circles
- `project/` - server entry point and app setup
- `routes/` - Express route handlers for app features
- `stitch/` - static HTML pages and frontend templates

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the app:

   ```bash
   npm start
   ```

3. Open the application in your browser at `http://localhost:3000`.

## Dependencies

- `express`
- `jsonwebtoken`
- `bcrypt`
- `@anthropic-ai/sdk`

## Notes

- Keep sensitive settings in a `.env` file, and do not commit it.
- This repository uses CommonJS modules and a Node.js backend.






















