# Node.js Dockerized Service 🚀

A simple **Node.js + Express service** with two routes, containerized using Docker.  
The service is ready for deployment via GitHub Actions to a remote server.

---

## ✨ Features
- `/` → returns **Hello, world!**
- `/secret` → protected by **Basic Auth**, returns a secret message
- Configurable via `.env` file
- Dockerized for easy deployment
- CI/CD ready with **GitHub Actions**

---

## 📂 Project Structure
.
├── .dockerignore # Files ignored by Docker
├── .gitignore # Files ignored by Git
├── Dockerfile # Docker build file
├── package.json # Node.js project manifest
├── server.js # Express app
├── .env (ignored) # Environment variables (not committed)
└── README.md # Documentation


---

## ⚙️ Environment Variables
Create a `.env` file in the project root:

```env
SECRET_MESSAGE=This is a top secret 🚀
USERNAME=admin
PASSWORD=supersecret

🖥️ Run Locally

Install dependencies:
npm install


Start the service:
node server.js


Test:
http://localhost:3000/ → Hello, world!
http://localhost:3000/secret → prompts for username & password → shows secret message

🐳 Run with Docker

Build the image:
docker build -t node-docker-service .


Run the container (with .env):
docker run -p 3000:3000 --env-file .env node-docker-service


Open in browser:
http://localhost:3000/
http://localhost:3000/secret

🚀 Deployment (Coming Soon)

In the next step, this project will be deployed to a remote Linux server using:
GitHub Actions (CI/CD)
Docker Hub (or GitHub Container Registry)
Secrets management (for credentials and environment variables)

📜 License

This project is for learning purposes. Feel free to fork and modify.

