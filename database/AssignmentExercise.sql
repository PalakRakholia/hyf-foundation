-- 1.How many tasks are in the task table?
SELECT COUNT(*) FROM TASK;

-- 2.How many tasks in the task table do not have a valid due date?
SELECT * FROM TASK WHERE DUE_DATE IS NULL;

-- 3.Find all the tasks that are marked as done.
SELECT * FROM TASK WHERE STATUS_ID = 3;

-- 4.Find all the tasks that are not marked as done.
SELECT * FROM TASK WHERE STATUS_ID != 3;

-- 5. Get all the tasks, sorted with the most recently created first.
SELECT * FROM TASK ORDER BY CREATED DESC;

-- 6.Get the single most recently created task.
SELECT * FROM TASK ORDER BY CREATED DESC LIMIT 1;

-- 7.Get the title and due date of all tasks where the title or description contains database.
SELECT TITLE, DESCRIPTION FROM TASK WHERE TITLE IS NOT NULL OR DESCRIPTION IS NOT NULL;

-- 8.Get the title and status (as text) of all tasks.
SELECT t.TITLE, s.NAME FROM TASK t JOIN STATUS s ON t.STATUS_ID = s.ID;

-- 9.Get the name of each status, along with a count of how many tasks have that status.
SELECT s.NAME, COUNT(*) AS TASK_COUNT FROM STATUS s JOIN TASK t ON t.STATUS_ID = s.ID GROUP BY s.NAME;

-- 10.Get the names of all statuses, sorted by the status with most tasks first.
SELECT s.NAME, COUNT(*) AS TASK_COUNT  FROM TASK t JOIN STATUS s ON t.STATUS_ID = s.ID GROUP BY s.NAME ORDER BY TASK_COUNT DESC;