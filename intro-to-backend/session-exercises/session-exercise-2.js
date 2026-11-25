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

app.get("/", (req, res) => {
  res.send("Hello from exercise 2!");
});

// Here is an example of the first route, /all-users, which returns all users sorted by their ID
app.get("/all-users", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM users ORDER BY id ASC;");
  res.json(rows);
});

// TODO implement more routes here

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
app.get('/last-name-count', async(req, res) =>{
    const rows = await knexInstance.raw(`SELECT LAST_NAME, COUNT(*) AS COUNT FROM USERS 
GROUP BY LAST_NAME ORDER BY LAST_NAME ASC;`);
    res.json(rows);
});


// /first-user should respond with the first user. If there are no users in the table, respond with a 404
app.get('/first-user', async(req, res) =>{
    const rows = await knexInstance.raw(`SELECT * FROM USERS ORDER BY ID ASC LIMIT 1`);
    const firstUser = rows[0];
    if(!firstUser){
        res.status(404).json({
            error: 'No user found'
        });
    }
    res.json(rows);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
