# Coordinator storytelling (Bountiful Children's Foundation) v1.0.0

API for Coordinator storytelling (Bountiful Children's Foundation). A web application for sharing success stories.

- [Users](#users)
    - [Register a new user](#register-a-new-user)
	- [Log a user in](#log-a-user-in)
	- [Get a user by id (with user stories)](#get-a-user-by-ID-(with-user's-stories))
	<!-- - [Get all users](#get-all-users) -->
    
    <!-- - [Update user info.](#update-user-info.) -->

- [Stories](#stories)
	- [Create a story](#create-a-story)
	- [Get all stories](#get-all-stories)
	- [Update a story](#update-a-story)
    - [Delete a story](#delete-a-story)
	

	

# Users

## Register a new user



	POST /users/register


### Parameters (Needed fields)

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| firstname         | String    | <p>User's first name</p> |
| lastname          | String    | <p>User's last name</p> |
| country           | String    | <p>User's country</p> |
| title             | String    | <p>User's title at organization</p> |
| email             | String    | <p>User's email address</p> |
| username			| String	|  <p>User's username</p>	|
| password			| String	|  <p>User's password</p>	|


### Examples

Register example:

```
axios.post('/users/register', {
    "firstname": "John",
	"lastname": "Doe",
	"country": "Haiti",
	"title": "Coordinator",
	"email": "john@company.com",
	"username": "johndoe",
	"password": "johndoe"
});
```

### Success Response

Register Success

```

{
  "message": "Registration success! Welcome John! Your username is johndoe.",
  "user": {
    "id": 2,
    "firstname": "John",
    "lastname": "Doe",
    "country": "Haiti",
    "title": "Coordinator",
    "email": "john@company.com",
    "username": "johndoe",
    "password": "$2a$14$JZvRosKPEfApwHu4Yn6ZMenzUY1Jd/uqHL63lgT238sdYjbXCE7bC"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6ImpvaG5kb2UiLCJpYXQiOjE1NTgxMzMwNTcsImV4cCI6MTU1ODg1MzA1N30.4vhcYrzYKPwcK7K7FsjfeS08ymKv72RWcSq46U_6ql8"
}

```
### Error Response

Error Example:

```

ERROR XXX
{
    "error": "Some Error Message"
}

```



## Log a user in



	POST /users/login


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username	| String    |  <p>User's username</p>	|
| password	| String	|  <p>User's password</p>	|

### Examples

Login example:

```

axios.post('/users/login', {
    username: "johndoe",
    password: "johndoe"
});

```

### Success Response

Login Success

```

{
  "message": "Welcome johndoe!",
  "user": {
    "id": 2,
    "firstname": "John",
    "lastname": "Doe",
    "country": "Haiti",
    "title": "Coordinator",
    "email": "john@company.com",
    "username": "johndoe",
    "password": "$2a$14$JZvRosKPEfApwHu4Yn6ZMenzUY1Jd/uqHL63lgT238sdYjbXCE7bC"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6ImpvaG5kb2UiLCJpYXQiOjE1NTgxNTA0NDMsImV4cCI6MTU1ODg3MDQ0M30.6ugZPJbJIdi6unMicD3q7iEOn5cvgJMd3C8vbwA6QPg"
}

```
### Error Response

Error Example:

```

ERROR XXX
{
    "error": "Some Error Message"
}

```




## Get a user by ID (with user's stories)



	GET /users/:id

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization	    | String	|  <p>User's auth token</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id	| Number			|  <p>User's id</p>							|

### Examples

Request example:

<!-- const request = axios.create({
    baseURL: 'http://localhost:3200',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
}); -->

```
axios.get('/user/2');
```

### Success Response

User Data

```
{
  "id": 2,
  "firstname": "John",
  "lastname": "Doe",
  "country": "Haiti",
  "title": "Coordinator",
  "email": "john@company.com",
  "username": "johndoe",
  "password": "$2a$14$JZvRosKPEfApwHu4Yn6ZMenzUY1Jd/uqHL63lgT238sdYjbXCE7bC",
  "stories": [
    {
      "id": 4,
      "title": "A Life in Haiti",
      "country": "Haiti",
      "description": "A description goes here",
      "fullStory": "Full story goes here...",
      "date": "May 17, 2019"
    },
    {
      "id": 5,
      "title": "A Moment in Mongolia",
      "country": "Mongolia",
      "description": "A description goes here",
      "fullStory": "Full story goes here...",
      "date": "May 17, 2019"
    },
    {
      "id": 6,
      "title": "A Evening in Paraguay",
      "country": "Paraguay",
      "description": "A description goes here",
      "fullStory": "Full story goes here...",
      "date": "May 17, 2019"
    }
  ]
}
```
### Error Response

Error Example:

```
ERROR XXX
{
    "error": "Some Error Message"
}
```

# Stories

## Create a story

	POST /stories

### Headers

| Name    | Type      | Description |
|---------|-----------|--------------------------------------|
| authorization	   | String	|  <p>The token given to the user at registration or login</p>|

### Parameters

| Name    | Type      | Description  |
|---------|-----------|--------------------------------------|
| user_id	    | Number	|  <p>ID of the user</p>|
| title	        | String    |  <p>Title of story</p>|
| country       | String	|  <p>Country where story took place</p>|
| description	| String    | <p>Preview of story</p>|
| fullStory 	| String	| <p>Full story</p>	|
| date          | String    | <p>Date story took place</p>|

### Examples

Post story example:

```
 
 axios.post("/stories", {
    "user_id": 1,
    "title": "The Grand Zimbabwe",
    "country": "Zimbabwe",
    "description": "A cool story that happened in Zimbabwe",
    "fullStory": "Full story goes here",
    "date": "May 17, 2019"
});

```

### Success Response

Create story success.

```
{
    "id": 10,
    "user_id": 2,
    "title": "The Grand Zimbabwe",
    "country": "Zimbabwe",
    "description": "A cool story that happened in Zimbabwe",
    "fullStory": "Full story goes here",
    "date": "May 17, 2019"
}
```
### Error Response

Error Example:

```
ERROR XXX
{
    "error": "Some Error Message"
}
```
## Get all stories



	GET /stories


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>The id of the post you are collecting comments for.</p>							|

### Examples

Get comments example:

``` 

 axios.get("/stories");

```

### Success Response

Posts Data

```
[
  {
    "id": 1,
    "user_id": 1,
    "title": "A Moment in Peru",
    "country": "Peru",
    "description": "A cool story that happened in Peru",
    "fullStory": "Full story goes here.",
    "date": "May 17, 2019"
  },
  {
    "id": 2,
    "user_id": 1,
    "title": "A Tour in Ghana",
    "country": "Ghana",
    "description": "A cool story that happened in Ghana",
    "fullStory": "Full story goes here.",
    "date": "May 17, 2019"
  },
  {
    "id": 3,
    "user_id": 1,
    "title": "A Day in Cambodia",
    "country": "Cambodia",
    "description": "A cool story that happened in Cambodia",
    "fullStory": "Full story goes here.",
    "date": "May 17, 2019"
  },
  {
    "id": 4,
    "user_id": 2,
    "title": "A Life in Haiti",
    "country": "Haiti",
    "description": "A cool story that happened in Haiti",
    "fullStory": "Full story goes here.",
    "date": "May 17, 2019"
  },...
 ]
```
### Error Response

Error Example:

```
ERROR XXX
{
    "error": "Some Error Message"
}
```
## Update a story



	PUT /stories/:id

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization	| String	|  <p>The token given to the user at registration or login</p>|

### Parameters

| Name    | Type      | Description  |
|---------|-----------|--------------------------------------|
| user_id	    | Number	|  <p>ID of the user</p>|
| title	        | String    |  <p>Title of story</p>|
| country       | String	|  <p>Country where story took place</p>|
| description	| String    | <p>Preview of story</p>|
| fullStory 	| String	| <p>Full story</p>	|
| date          | String    | <p>Date story took place</p>|

### Examples

Update story example:

```

 axios.put("/stories/:id", {
    "user_id": 1,
    "title": "The Extra Grand Zimbabwe",
    "country": "Zimbabwe",
    "description": "A cool story that happened in Zimbabwe",
    "fullStory": "Full story goes here",
    "date": "May 17, 2019"
});

```

### Success Response

Update story success.

```
{
  "message": "1 story updated!"
}
```
### Error Response

Error Example:

```
ERROR XXX
{
    "error": "Some Error Message"
}
```


## Delete a story



	DELETE /stories/:id

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization	| String	|  <p>The token given to the user at registration or login</p>|

### Parameters

| Name    | Type      | Description  |
|---------|-----------|--------------------------------------|
| id	    | Number	|  <p>ID of the story</p>|


### Examples

Delete story example:

```

 axios.delete("/stories/:id");

```

### Success Response

Delete story success

```
{
  "message": "1 story deleted!"
}
```
### Error Response

Error Example:

```
ERROR XXX
{
    "error": "Some Error Message"
}
```
