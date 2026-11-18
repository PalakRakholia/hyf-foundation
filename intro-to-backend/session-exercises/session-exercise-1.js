import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from exercise 1!");
});

app.get("/currentYear", (req, res) => {
  // TODO: Implement this function to return a JSON object containing the current year
  let currentYear = new Date().getFullYear();
    res.json({
        'currentYear': String(currentYear) //as in HackYourFuture-CPH md file it was mentioned to return as string
    })
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});