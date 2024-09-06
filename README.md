Lex Adrianov's Personal Blog

Welcome to the repository for Lex Adrianov's personal blog. This website showcases my thoughts on tech and the world, my projects, experience, and courses. The site is built using Django and hosted on AWS Elastic Beanstalk with NGINX as the web server. It also uses AWS S3 for static and media file storage, with SSL managed via Certbot.

Table of Contents

Features
Installation
Technologies Used
Configuration
Deployment
License
Features

Responsive Design: The website is fully responsive, providing a smooth user experience across devices.
Blog Section: Posts about tech, development, and more.
Experience & Education: A timeline of my work experience and educational background.
Projects: Showcases my personal and professional projects.
Courses: A list of courses I’ve taken.
Stored Posts: Users can store posts for later reading.
Secure: The site is SSL-encrypted via Let's Encrypt.
Installation

To run this project locally, follow these steps:

Prerequisites
Python 3.6+
Django 4.2.x
PostgreSQL
AWS account (for S3, Elastic Beanstalk)
Clone the Repository
bash
Copy code
git clone https://github.com/your-username/blog.git
cd blog
Set Up a Virtual Environment
bash
Copy code
python3 -m venv venv
source venv/bin/activate
Install Dependencies
bash
Copy code
pip install -r requirements.txt
Create a .env File
Create a .env file in the project root with the following variables:

makefile
Copy code
SECRET_KEY=your-secret-key
DEBUG=True
DB_NAME=your-db-name
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_HOST=your-db-host
DB_PORT=your-db-port
AWS_STORAGE_BUCKET_NAME=your-s3-bucket-name
AWS_S3_REGION_NAME=your-s3-region
AWS_ACCESS_KEY_ID=your-aws-access-key-id
AWS_SECRET_ACCESS_KEY=your-aws-secret-access-key
Apply Migrations
bash
Copy code
python manage.py migrate
Run the Development Server
bash
Copy code
python manage.py runserver
Now, visit http://127.0.0.1:8000 to view the site locally.

Technologies Used

Django: The core framework for building the web application.
AWS Elastic Beanstalk: Used for deployment and hosting the project.
AWS S3: For media and static file storage.
PostgreSQL: As the primary database.
Certbot & Let's Encrypt: For SSL certificate management.
NGINX: Web server to manage requests.
Configuration

AWS Configuration
Make sure you configure the following AWS services for this project:

AWS Elastic Beanstalk: Set up an environment for Django applications.
AWS S3: Store static and media files.
AWS RDS: If using AWS-managed PostgreSQL.
SSL Configuration
SSL is handled by Certbot via NGINX. 


Set up Elastic Beanstalk:
Run eb init to configure your AWS Elastic Beanstalk application.
Deploy the application using eb deploy.
Static and Media Files: Ensure that you have set up AWS S3 properly for storing static and media files.
Database:
Ensure PostgreSQL is properly configured in the .env file.
Apply the migrations on the deployed instance:
bash
Copy code
python manage.py migrate


License

This project is licensed under the MIT License.
