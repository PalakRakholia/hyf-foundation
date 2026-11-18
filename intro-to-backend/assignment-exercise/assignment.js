import express from "express";
import knex from "knex";

const app = express();
const port = 3000;

const dbFile = "./database.sqlite3";

// This connects to the database stored in the file mentioned below
const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: dbFile,
  },
  useNullAsDefault: true, // Omit warning in console
});

//HOME ROUTE
app.get("/", (req, res) => {
  res.send(`
    <!doctype html>
        <html>
        <head>
        <style>
        body {
        background-color: #f0f2f5;
        text-align: center;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Arial, sans-serif;
        }
        </style>
        </head>
        <body>
        <div style="
                background-color: white;
                padding: 30px 50px;
                border-radius: 15px;
                text-align: center;
                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            ">
        <p style='font-size: 36px; font-weight: bold; color:#08306B; margin-bottom: 20px;'>Total Users</p>
        <p id="count" style='color:Olive; font-size: 24px; font-weight: 600;margin: 10px 0'>Loading...</p>
        <p style='font-size: 16px; color:#2171B5;'>Users registered in our database</p>
        </div>
        <script>
        fetch('/users-count')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById('count').innerText = data[0].COUNT})
        </script>
        </body>
        </html>
    `);
});

// 3 EXTRA ROUTES
// /full-name should response with user first name and last name as together sorted alphabetically
app.get("/full-name", async (req, res) => {
  const rows = await knexInstance.raw(
    `SELECT CONCAT(FIRST_NAME, ' ', LAST_NAME) AS FULL_NAME FROM USERS ORDER BY FIRST_NAME ASC;`,
  );
  res.json(rows);
});

// /2025-users should respond with users created in 2025
app.get("/2025-users", async (req, res) => {
  const rows = await knexInstance.raw(
    `SELECT * FROM USERS WHERE CREATED_AT LIKE '%2025%';`,
  );
  res.json(rows);
});

// /users-with-long-names should response with users whose first name has more than 5 characters
app.get("/users-with-long-names", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM USERS WHERE LENGTH(FIRST_NAME)>5;",
  );
  res.json(rows);
});

// SESSION EXERCISE ROUTES//
// Here is an example of the first route, /all-users, which returns all users sorted by their ID
app.get("/all-users", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM users ORDER BY id ASC;");
  res.json(rows);
});

// /unconfirmed-users should respond with unconfirmed users
app.get("/unconfirmed-users", async (req, res) => {
  const rows = await knexInstance.raw(
    "SELECT * FROM USERS WHERE CONFIRMED_AT IS NULL;",
  );
  res.json(rows);
});

// /gmail-users should respond with users with an @gmail.com email
app.get("/gmail-users", async (req, res) => {
  const rows = await knexInstance.raw(
    `SELECT * FROM USERS WHERE EMAIL LIKE '%@gmail.com%';`,
  );
  res.json(rows);
});

// /2022-users should respond with users created in 2022
app.get("/2022-users", async (req, res) => {
  const rows = await knexInstance.raw(
    `SELECT * FROM USERS WHERE CREATED_AT LIKE '%2022%';`,
  );
  res.json(rows);
});

// /user-count should respond with the number of users
app.get("/users-count", async (req, res) => {
  const rows = await knexInstance.raw("SELECT COUNT(*) AS COUNT FROM USERS;");
  res.json(rows);
});

// /last-name-count should respond with how many users there are with a given last name, sorted alphabetically
app.get("/last-name-count", async (req, res) => {
  const rows =
    await knexInstance.raw(`SELECT LAST_NAME, COUNT(*) AS COUNT FROM USERS 
GROUP BY LAST_NAME ORDER BY LAST_NAME ASC;`);
  res.json(rows);
});

// /first-user should respond with the first user. If there are no users in the table, respond with a 404
app.get("/first-user", async (req, res) => {
  const rows = await knexInstance.raw(
    `SELECT * FROM USERS ORDER BY ID ASC LIMIT 1`,
  );
  const firstUser = rows[0];
  if (!firstUser) {
    res.status(404).json({
      error: "No user found",
    });
  }
  res.json(rows);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
