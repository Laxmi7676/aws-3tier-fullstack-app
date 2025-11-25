# aws-3tier-fullstack-app
WS 3-Tier  Web Application

This project is a 3-tier architecture web application deployed using AWS services.
It includes:

Frontend: HTML

Dashboard: Admin/User dashboard pages

Backend: Node.js + Express

Database: MySQL on AWS RDS

Compute: EC2 Ubuntu Server

Networking: VPC, Subnets, Security Groups

🏗 Architecture Overview
1️⃣ Presentation Layer (Frontend + Dashboard)

HTML, 
Hosted on EC2 (Nginx)

Communicates with backend APIs

2️⃣ Application Layer (Backend)

Node.js + Express

Routes, controllers, DB connection

API endpoints (e.g., /users)

Connects to RDS MySQL

3️⃣ Data Layer (MySQL RDS)

Dedicated database for the app

Accessible ONLY from EC2 SG
