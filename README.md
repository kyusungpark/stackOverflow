# Stack Overflow

#How to Start
clone repo
create .env file
paste credentials
docker build -t stackoverflow .
docker run -it -p {LOCAL PORT}:3000 stackoverflow

## Componenet Choices

Database and API

## Tech Stacks
TypeScript
NodeJS
Express
Postgres
TypeORM

## Development Process
TypeScript
Catch and fix errors at development. It saves time in the long run because you are likely to find your errors much earlier. Combine TypeScript with VSCode, you will get better documentation with the help of VSCode's self-documentation. If you forget something, they will tell right you away.

Node and Express
MVC architecture - jSeparation of application into three main components: model, view, and the controller for simpler and easier development process. 

Postgres and TypeORM
SQL for database. With they help of TypeORM you are able to develop faster and no need to write your own queries from scratch each time. Simply, take advantage of query builder if new query is needed. Much easier to read and implement.

## Database: SQL

Tables:
User - stores all user data
Question - stores all questions
Answer - stores all answers
Comment - stores all comments

## API

### sign up a user

route: POST /api/signup
params: name, email

example:
POST http://localhost:3000/api/signup
body: {"name": "user1", "email": "user1@gmail.com"}

### show questions and answers for a specific user

route: GET /api/lists
params: userId

example:
GET http://localhost:3000/api/lists

### show all answers and comments for a post

route: GET /api/question/:questionId
params: userId

example:
GET http://localhost:3000/api/question/1/

### add a post/question for a user

route: POST /api/question
params: title, body, userId

example:
POST http://localhost:3000/api/question
body: {"title": "User 1's question", "body": "my question", "userId": "1"}

### add an answer for a user

route: POST /api/question/:questionId/answer
params: body, userId, questionId

example:
POST http://localhost:3000/api/question/1/answer
{"body": "my answer", "userId": "2"}

### add a comment for a user

route: POST /api/question/:questionId/comment
params: body, userId, questionId

example:
POST http://localhost:3000/api/question/1/comment
{"body": "my comment 1 to my own post", "userId": "1"}

