# ConnectCommit_
 ConnectCommit – A Developer Networking Platform (MERN Stack)<br><br>

ConnectCommit is a full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that serves as a Tinder-style platform for developers to connect, collaborate, and create. Whether you're looking for a co-founder, open-source partner, or someone to brainstorm side projects with — ConnectCommit makes networking easier and fun.<br><br>


<br>🛠️ Tech Stack<br><br>
Frontend: React.js, Redux, Tailwind CSS<br>

Backend: Node.js, Express.js<br>

Database: MongoDB (Mongoose)<br>

Authentication: JWT (JSON Web Tokens)<br>

Real-time Communication: Socket.IO or Firebase (if used)<br>

Deployment: [Heroku/Vercel/Render]<br>

<br>________Project Setup________<br><br>
-Create a Vite + React application<br>
-Remove unecessary code and create a Hello world app<br>
-Install tailwind CSS<br>
-Install Daisy UI<br>
-Add NavBar component to App.jsx<br>
-Create a Navbar.jsx seperate component file<br>
-Install react router dom<br>
-Create a BrowserRouter > Routes > Route=/ Body > RouteChildren<br>
-Create a outlet in body component<br>
-Create a footer<br>
-To create login page<br>
-Install axios<br>
-CORS- Install cors in backend => add middleware to with configuration: origin, credentials:true<br>
-Whenever you are making API call so pass axios=>{withCredentials:true}<br>
-Install redux toolkit<br>
-Install react-redux + @reduxjs/toolkit <br>
-=>configureStore =>Provider =>createSlice =>add reducer to store<br>
-Add redux dev tools in chrome<br>
-Login and see if your data is coming properly in the store<br>
-Navbar should update as soon as user logs in <br>
-Refactor our codes to add constants files + create a component folder<br>
-You should not be acess other routes without login<br>
-If token is not present , redirect user to login page<br>
-Logout<br>
-Get the feed and the add the feed in the store<br>
-Buid the user card on feed page<br>
-Edit profile feature <br>
-Profile Page<br>
-Show toast message on save profile<br>
-new page to See all my connections<br>
-new page See all my connection requests<br>
-Feature to accept/reject connection request<br>
-Send/ignore the user card from the feed<br>
-Signup new user<br>
-E2E Testing<br>


<br><br>______Deployment_____<br><br>
-Signup on AWS<br>
-Launch an instance<br>
-ssh -i "StackSpark.pem" ubuntu@ec2-51-21-181-146.eu-north-1.compute.amazonaws.com<br>
-Install node version v22.13.1 on machine<br>
-Git clone on ec2 server<br>
-FrontEnd<br><br>
   -npm install -> dependencies install<br>
   -npm run build<br>
   -sudo apt update<br>
   -sudo apt install nginx<br>
   -sudo systemctl start nginx<br>
   - sudo systemctl enable nginx<br>
   -Copy code from dist(build files) to /var/www/html/<br>
   -sudo scp -r dist/* /var/www/html/<br>
   -Enable port 80 on your instance<br>

-Backend<br><br>
   -Allowed ec2 instance public Ip on mongoDB server<br>
   -npm install pm2 -g<br>
   -pm2 start npm -- start<br>
   -pm2 logs => to check logs-<br>
   -pm2 list, pm2 flush <name>, pm2 stop<name> , pm2 delete <name><br>
   -pm2 start npm --name "StackSpark" -- start<br>
   -config nginx -sudo nano /etc/nginx/sites-available/default
   -restart nginx - sudo systemctl restart nginx
   -modify the BASEURL in frontend project to "/api"

#nginx config

nginx conig
 location /api/ {
        proxy_pass http://localhost:7777/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }




<br>Body
   <br>Navbar
   <br>Route=/              =>Feed
   <br>Route=/login         =>Login
   <br>Route=/connections   =>connections
   <br>Router=/profile      =>profileView

