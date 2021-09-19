# Stack Overflow

#How to Start
docker run -it -p {LOCAL PORT}:3000 stackoverflow

## Componenet Choices

Database and API

## Database: SQL

Tables:
Answer - stores each answer of a post(question)
Comment - stores all comments
Post - stores all posts
User - stores all user data

## API

# sign up a user
route: POST /api/signup
params: name, email

example:
POST http://localhost:3000/api/signup
body: {"name": "user1", "email": "user1@gmail.com"}

# show questions and answers for a specific user
route: GET /api/lists
params: userId

example:
GET http://localhost:3000/api/lists

# show all answers and comments for a post
route: GET /api/question/:questionId
params: userId

example: 
GET http://localhost:3000/api/question/1/

# add a post/question for a user
route: POST /api/question
params: title, body, userId

example:
POST http://localhost:3000/api/question
body: {"title": "User 1's question", "body": "my question", "userId": "1"}

# add an answer for a user
route: POST /api/question/:questionId/answer
params: body, userId, questionId

example:
POST http://localhost:3000/api/question/1/answer
{"body": "my answer", "userId": "2"}

# add a comment for a user
route: POST /api/question/:questionId/comment
params: body, userId, questionId

example:
POST http://localhost:3000/api/question/1/comment
{"body": "my comment 1 to my own post", "userId": "1"}