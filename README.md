# The React Quiz

A quiz app about your React knowledge developed as a simple React Single Page Application (SPA)

## Live Demo

[Live demo hosted on Netlify](https://the-wild-oasis-delta-flax.vercel.app/)

## App creation context

This is one of the intermediary projects I did for the ['The Ultimate React Course 2024: React, Redux & More'](https://www.udemy.com/course/the-ultimate-react-course/) by [Jonas Schmedtmann](https://codingheroes.io/) that I completed on February 15 2024.

I have written all of the React code for this app, usually writting code upfront on my own and then watching the course instructions.

After the course ended, I converted the app to TypeScript as a practice and made the app styles responsive and mobile first.

Most of the styles for this project where provided by the course instructor [Jonas Schmedtmann](https://codingheroes.io/) and I don't claim any credit for them.

## App description:

This is a Vanilla react app that let's users go through a timed quiz where they answer multiple choice questions. Each correctly answered question awards the user points which summed make their total score. The app allows users to:

- Answer quiz questions choosing answers from pre-defined set of choices
- Earn points for each correcly answered question
- Race against time to finish answering all the questions in the quiz
- Compare themselves against their previous highest score

## libraries and features

- Global state management using React's [Context API](https://react.dev/reference/react/useContext) and [useReducer](https://react.dev/reference/react/useReducer)
- Built using [Vite](https://vitejs.dev)
- Quiz questions are fetched from a local file but are set up and ready to be fetched from any API.
- No external library dependencies apart from [react and react-dom](https://github.com/facebook/react)

## Forking and cloning

This project is ready to work out of the box after cloning/forking and running `npm install` on a terminal window running in your app directory.
