const fs = require('fs');
const path = require('path');

// Function to create folder and file
const createFile = (filePath, content = '') => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content);
  console.log(`Created: ${filePath}`);
};

// Folder and file structure
const foldersAndFiles = [
  { path: './backend/app/main.py', content: "# FastAPI app entry point\n" },
  { path: './backend/app/models/course.py', content: "# Pydantic models (Course model)\n" },
  { path: './backend/app/routers/courses.py', content: "# API routes (courses APIs)\n" },
  { path: './backend/app/services/course_service.py', content: "# Business logic (if needed)\n" },
  { path: './backend/app/database.py', content: "# Database connection (if you have DB)\n" },
  { path: './backend/app/config.py', content: "# Settings (CORS, env vars)\n" },
  { path: './backend/requirements.txt', content: "fastapi\nuvicorn\n" }
];

// Create folders and files
foldersAndFiles.forEach(item => {
  createFile(item.path, item.content);
});

console.log('Backend folder structure created!');
