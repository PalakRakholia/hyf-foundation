1. Identify the components:

The application has three main components: frontend, backend and database.
-Frontend: The part of the application users see and interact with.
-Backend: Handles the application logic and processes requests.
-Database: Stores all the recipe information.
-API: Connects the frontend and backend so they can exchange data.


2. Where is the recipe data stored?

The recipe data is stored in the database. It contains all the information about the recipes, such as names, ingredients and instructions.


3. How does the frontend communicate with the backend?

The frontend communicates with the backend through API requests. When a user does something in the application, the frontend sends a request to the backend, which processes it and sends a response back.

4. What happens when a user adds a new recipe?

When a user adds a new recipe, they fill in the recipe details and submit them. The frontend sends the information to the backend via APIs(through CRUD operations), where it gets checked and saved in the database. After that, the frontend updates the recipe list so the new recipe can be seen.