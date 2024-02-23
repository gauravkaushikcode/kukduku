# Social Media Application - Kukduku

## MERN with GraphQL

## Features:

- Login
- Signup
- View Posts
- Add New Post
- Like/Unlike any Post
- View Detail page of any view
- Comment on any Post
- Delete your Posts & Comments

## Run Locally

- Take latest pull using `git pull origin main`
- Run a local instance of MongoDB with port '27017'
- Move to frontend folder using `cd frontend`
- Install all dependencied `npm i`
- Start frontend using `npm start`
- Move to backend folder `cd backend`
- Install all dependencied `npm i`
- Start backend using `npm start`

## Try Build

- You can also try server builds using `npm run build`

## Packages Used

### Frontend Packages

    - apollo/client v3.6.9,
    - react v18.2.0,
    - react-router v6.3.0,
    - semantic-ui-react v2.1.3,

### Backend Packages

    - apollo-server-core v3.13.0,
    - apollo-server-express v3.13.0,
    - graphql v16.8.1,
    - graphql-subscriptions v2.0.0,
    - subscriptions-transport-ws v0.11.0,

### Deployment

## just run (can also be run using docker commands)

    - podman compose up -d

## to stop all containers

    - podman compose down

## to stop and remove all containers

    - podman compose down -v
