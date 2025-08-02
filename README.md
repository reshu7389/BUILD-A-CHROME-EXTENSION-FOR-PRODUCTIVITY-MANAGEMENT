# BUILD-A-CHROME-EXTENSION-FOR-PRODUCTIVITY-MANAGEMENT
"COMPANY": CODTECH IT SOLUTIONS
"NAME": RESHU SINGH
"INTERN ID": CT04DH1157
"DOMAIN": MERN STACK WEB DEVELOPEMENT
"DURATION": 4 WEEKS
"MENTOR": NEELA SANTOSH

Project Description: Productivity Tracker Chrome Extension with MERN Backend
This project is a Chrome extension for productivity management that helps users monitor and improve their digital habits. Built with a robust MERN (MongoDB, Express.js, React.js, Node.js) backend and integrated seamlessly into the browser using a custom Chrome extension, the tool offers real-time tracking of user activity, distraction control, and insightful daily productivity reports — all with secure user authentication and cross-device data syncing.

The core functionality of the extension is to track time spent on different websites, helping users identify where their time goes while browsing. Every time a user visits or interacts with a website, the extension records the hostname and duration of their session. This data is then securely sent to a backend server using authenticated API requests, ensuring privacy and security.

A key feature of the system is user authentication using JWT (JSON Web Tokens). Users must log in through the extension using their email and password. The authentication system is built using secure hashing for passwords (bcryptjs) and signed tokens using a secret stored in environment variables (JWT_SECRET). Once logged in, the user's token is stored locally using Chrome's storage.local, which allows automatic session restoration and synchronization across multiple Chrome sessions or devices.

The backend server is built using Node.js with Express, while MongoDB stores all user-specific data, including website activity logs. The schema is designed to link activity data directly to a unique userId, enabling personalized reports and secured access. The backend provides two main endpoints:

/api/auth for login and signup

/api/activity for saving and retrieving tracked data

On the frontend, the Chrome extension includes a user interface (popup.html and popup.js) that displays a daily productivity report. After login, the extension dynamically fetches the user’s data and presents a breakdown of time spent on each site in seconds. This interface is built using vanilla JavaScript, and the logic is kept lightweight to ensure quick response inside the popup UI.

The system is designed to sync data across devices, meaning that whether a user logs in from one laptop or another, their time tracking and productivity history remain consistent and accessible. This is achieved by associating all activity data with the logged-in user's MongoDB document.

The project also includes basic site-blocking capabilities, which can be enhanced further to automatically block or alert users when they spend excessive time on blacklisted domains like social media.

By combining Chrome extension capabilities with a powerful MERN backend, the project demonstrates the potential of full-stack JavaScript in building practical, real-world productivity tools. This system not only empowers users with visibility into their habits but also helps them take control of their time by offering daily analytics and secure data synchronization.

Future improvements may include Google OAuth, CSV export of reports, customizable focus modes, and mobile browser support.

#OUTPUT:

