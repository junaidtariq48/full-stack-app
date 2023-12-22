
# Backend Server

A NodeJS, Express and mongoDB server to build api's for our simple full stack application task.


## Prerequisite

**Docker:**\
Assuming that you have a knowledge of above stack and have already installed docker/docker desktop on your machine.

If not please install docker desktop depends on your OS either windows/Mac/Linux

**Non-Docker:** \
If in case you want to run on your local machine rather running on docker. You need to make sure `NodeJS` is installed in your machine. If not please install `https://nodejs.org/en`.



## Installation

clone the repository to your local machine.

```bash
  git clone https://github.com/junaidtariq48/full-stack-app.git
```
Get into server project directory

```bash
 cd full-stack-app/server
```

to run on your local machine first install everything

```bash
npm i
```
once Installation completed you can run the application in development environment. As we have multiple environments.

```bash
npm run dev
```



## API Reference

#### Get all items

```http
  GET /items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Save item

```http
  POST /items
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**.  |
| `quantity`   | `number` | **Required**.  |

#### Delete item

```http
  DELETE /items/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.  |



## Running Tests

To run tests, run the following command

```bash
  npm run test
```