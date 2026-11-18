--EXERCISE 2:

-- 1.List the names and phones of all of the users.
SELECT EMAIL,PHONE FROM USER u;

-- 2.List all of the users, ordering them by name alphabetically.
SELECT * FROM USER ORDER BY NAME;

-- 3.Find the name of the user of id 10.
SELECT NAME FROM USER WHERE ID = 10;

-- 4.Find 3 oldest (by create date) tasks.
SELECT * FROM TASK ORDER BY CREATED DESC LIMIT 3;


--EXERCISE 3:

-- 1.Select all tasks which have status In progress
--SELECT * FROM STATUS; ID = 2
SELECT STATUS_ID, * FROM TASK WHERE STATUS_ID = 2;

-- 2.Display list of tasks with the user names of the users attached to the tasks
SELECT u.NAME,t.TITLE FROM TASK t JOIN USER u ON t.USER_ID = u.ID;


--EXERCISE 4:

--1.Add yourself as a new user in the user table
--SELECT * FROM USER;
INSERT INTO USER (id, name, email, phone)
VALUES(13, 'Palak Rakholia', 'pr@yahoo.com', '45-999999999');

-- 2.Create 2 or more tasks assigned to yourself
--SELECT * FROM TASK;
INSERT INTO task
(id, title, description, created, updated, due_date, status_id, user_id)
VALUES(36, 'Complete Session exercise', 'This should not take long, apply session learnings', DATETIME('NOW'), '2026-11-10 06:14:31', '2026-11-22 20:58:03', 2, 13);

INSERT INTO task
(id, title, description, created, updated, due_date, status_id, user_id)
VALUES(37, 'Complete Assignment exercise', 'Revisit the topics learned in class and complete the exercise', DATETIME('NOW'), '2026-11-10 06:14:31', '2026-11-22 20:58:03', 1, 13);

INSERT INTO task
(id, title, description, created, updated, due_date, status_id, user_id)
VALUES(38, 'Prepare for next session', 'get ready with preparation before hand', DATETIME('NOW'), '2026-11-10 06:14:31', '2026-11-22 20:58:03', 1, 13);

-- 3.Update the task you just created to change its status to "In Progress" (status_id = 2)
UPDATE TASK SET STATUS_ID = 2 WHERE USER_ID = 13;

-- 4.Retrieve only the title and description of all tasks assigned to you
SELECT TITLE, DESCRIPTION FROM TASK WHERE USER_ID = 13;

-- 5.Delete a task that you no longer need
DELETE FROM TASK WHERE TITLE = 'Complete Session exercise';

