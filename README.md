# AutoIQ
## Overview 
A full-stack web application built with React, Node.js, Express, and MySQL that allows users to manage and persist data through a responsive user interface.
This is Auto IQ. A simple Q/A web application about cars where users can click on specific categories, see questions and answers related to that category. 
## User Stories
- As a user, I want to see images related to each category, so that I can better visualize and understand the car topics.
- As a user, I want to view questions and detailed answers within a selected category, so that I can better understand essential car knowledge.
- As a user, I want to browse car knowledge by category, so that I can easily find information about specific car topics.
## Features
- User login/authentication
- Clickable categories that expand and collapse
- Questions and answers per catogory
- Images for each category when clicked
## Technologies Used
- React (Frontend)
- React Bootstrap and Bootswatch Lux (Styling)
- Axios (API requests)
- Node.js and Express (Backend)
- My SQL (Database)
## Future Improvements
- Add more images to match each question
- Login is required to see Dashboard page
- Allow users to add new questions and answers
## Prerequisites
- Node.js and npm installed
## Database Structure
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(60) NOT NULL,
    user_password VARCHAR(45) NOT NULL,
    user_email VARCHAR(45)
)
CREATE TABLE category (
  category_id INT AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(255) NOT NULL,
  image_name VARCHAR(255)
);

CREATE TABLE question (
  question_id INT AUTO_INCREMENT PRIMARY KEY,
  category_id INT NOT NULL,
  question_text VARCHAR(255) NOT NULL,
  answer_text TEXT NOT NULL,
  FOREIGN KEY (category_id) REFERENCES category(category_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);