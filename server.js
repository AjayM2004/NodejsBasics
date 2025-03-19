// import express from "express";
// const app = express();
// const PORT = 7117;
// const data = { name: "John Doe", age: 30 };
// //MIDDLEWARE
// app.use(express.json());
// // website endpoints is used whenever we want to send the response in html format to the client
// app.get('/about',(req,res)=>{
//   console.log("Request received for about", req.method);
//   res.set('Cache-Control', 'no-store'); // Disable caching
//   res.send(`
//     <body style="background-color:lightblue;color:yellow;">
//     <h1>About Us</h1>
//     <p>We are a group of developers who are passionate about coding.</p>
//     <h4>my data<h4/
//     <p>${ JSON.stringify(data)}</p>
//     </body>`);
//   res.sendStatus(201);
// })
// app.get('/', (req, res) => {
//   console.log("Request received", req.method);
//   res.set('Cache-Control', 'no-store'); // Disable caching
//   res.sendStatus(201);
// });
// app.get('/dashboard',(req,res)=>{
//   console.log("Request received for dashboard", req.method);
//   res.set('Cache-Control', 'no-store'); // Disable caching
//   res.send("<h1>Welcome to the dashboard</h1>");
//   res.sendStatus(201);
// });
// // API endpoints (non visual data) is used whenever we want to send the response in JSON format or any other format to the client
// app.get('/api/v1/users', (req, res) => {
//   console.log("Request received for users", req.method);
//   res.set('Cache-Control', 'no-store'); // Disable caching
//   res.send(data);
//   res.sendStatus(201);
// });
//  // someone wants to create a user (for example when they click a sign up button)
//     // the user clicks the sign up button after entering their credentials, and their browser is wired up to send out a network request to the server to handle that action
// app.post('/api/v1/users',(req,res)=>{
//   console.log("Request received for users", req.method);
//   res.set('Cache-Control', 'no-store'); // Disable caching
//   res.send(data);
//   res.sendStatus(201);
// })

// app.listen(PORT, () => console.log(`Server is running on the port = ${PORT}`));
import express from "express";
const app = express();
const PORT = 7117;
const data = [{"name":"John Doe","age":30}];

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
  console.log("Request received for root", req.method);
  res.set('Cache-Control', 'no-store'); // Disable caching
  res.sendStatus(200);
});

app.get('/dashboard', (req, res) => {
  console.log("Request received for dashboard", req.method);
  res.set('Cache-Control', 'no-store'); // Disable caching
  res.send(`<a href="/api/v1/users">Go to users</a>`);
});
app.get('/api/v1/users', (req, res) => {
  console.log("Request received for users", req.method);
  res.set('Cache-Control', 'no-store'); // Disable caching
  res.sendStatus(200);
});

app.get('/about', (req, res) => {
  console.log("Request received for about", req.method);
  res.set('Cache-Control', 'no-store'); // Disable caching
  res.send(`
    <body style="background-color:lightblue;color:yellow;">
    <h1>About Us</h1>
    <p>We are a group of developers who are passionate about coding.</p>
    <h4>my data</h4>
    <p>${JSON.stringify(data)}</p>
    <a href="/dashboard">Go to dashboard</a>
    <a href="/api/v1/users">Go to users</a>

    </body>
    <script>
      console.log("Hello from the client side");
    </script>
  `);
});

app.post('/api/v1/users', (req, res) => {
  console.log("Request received for users POST", req.method);
  console.log("Request body:", req.body);
  const userdata = req.body;
  data.push(userdata);
  res.set('Cache-Control', 'no-store'); // Disable caching
  res.status(201).json({ message: "User created", user: req.body });
});
app.delete('/api/v1/users',(req,res)=>{
  console.log("Request received for users DELETE the last user", req.method);
  data.pop();
  res.set('Cache-Control', 'no-store'); // Disable caching
  res.status(201).json({ message: "Last User deleted" });
})

app.listen(PORT, () => console.log(`Server is running on the port = ${PORT}`));