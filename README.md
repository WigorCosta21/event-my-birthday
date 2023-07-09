My Birthday
This is a simple project for a birthday invitation, developed using HTML, SCSS, and JavaScript. The goal is to display information about the event, count down to the birthday date, and allow guests to confirm their presence.

<img src="https://raw.githubusercontent.com/WigorCosta21/servidor_estaticos/main/hero.jpg" alt="Imagem" style="filter: saturate(2);">

<img src="https://raw.githubusercontent.com/WigorCosta21/servidor_estaticos/main/main_attractions.jpg" alt="Imagem" style="filter: saturate(2);">

<img src="https://raw.githubusercontent.com/WigorCosta21/servidor_estaticos/main/confirmation_information.jpg" alt="Imagem" style="filter: saturate(2);">

Features
Countdown: The page displays a countdown to the birthday date, showing the number of days, hours, minutes, and seconds remaining.
Attractions: It showcases images of the main attractions of the event.
RSVP Confirmation: Guests can enter their email in a form and confirm their presence.
Information: It provides key information about the event, such as the address, date, and contact email.
Technologies Used
HTML
SCSS (compiled to CSS)
JavaScript
Project Structure
The project is structured as follows:

The index.html file contains the basic structure of the HTML document and includes the necessary CSS and JavaScript files.
The src directory contains the project source files.
The index.js file contains the JavaScript code responsible for the countdown and handling the RSVP confirmation.
The styles.scss file contains the project styles written in SCSS.
The images directory contains the images used in the project.
Running the Project
To run the project locally using Parcel, follow these steps:

Make sure you have Node.js installed on your computer.

Download the project files to your computer.

Open the terminal or command prompt and navigate to the project's root directory.

Run the following command to install the project dependencies:

Copy code
npm install
Once the installation is complete, run the following command to start the Parcel development server:

sql
Copy code
npm start
The Parcel development server will compile the project and automatically open your default browser, displaying the project page.

You can interact with the different features of the project directly in the browser.

Additional Notes
This project uses the Font Awesome library to display icons. The icons are loaded from the link provided in the <script> tag in the HTML document's header.
The countdown is calculated based on the date set in the JavaScript code. You can adjust the date by modifying the line const dateEvent = new Date("Apr 21, 2024 20:00:00") in the index.js file.
