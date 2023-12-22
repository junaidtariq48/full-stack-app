
# Full Stack Application

A full stack application to showcase a simple example of items crud. In this we more focus on development on docker as it makes it much easier for every dev rather configuring everything on machine.


## Tech Stack

**Client:** React, TailwindCSS

**Server:** Node, Express, MongoDB

**Platform:** Docker 


## Prerequisite

**Docker:**\
Assuming that you have a knowledge of above stack and have already installed docker/docker desktop on your machine.

If not please install docker desktop depends on your OS either windows/Mac/Linux

**Non-Docker:** \
If in case you want to run on your local machine rather running on docker. You need to make sure `NodeJS` is installed in your machine. If not please install `https://nodejs.org/en`.




## File Structure
    
```
- client (Frontend)
- server (Backend)
- docker-compose-full.yml
- docker-compose-mongo.yml
```

## Installation

clone the repository to your local machine.

```bash
  git clone https://github.com/junaidtariq48/full-stack-app.git
```
Get into project directory

```bash
 cd full-stack-app
```

run the docker command to build container and run the application.

```bash
docker-compose -f docker-compose-full.yml up --build
```

Once docker build successfull then application should be running on `http://localhost:4000/`