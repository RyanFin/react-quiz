# React-Quiz

- Using the useReducer() hook for the first time. -[useReducer](https://www.youtube.com/watch?v=RZPAQV7JvNU&ab_channel=LamaDev)
- JSON Viewer chrome extension

## Extensions

- Auto Rename Tag (for VS Code)

## Dummy API with json server

    - Installation in project: `$ npm i json-server`
    - Add step to package.json file: `"server": "json-server --watch data/questions.json --port 8000"`
    - launch server with `$ npm run server`

## Clean up

- Timer goes straight to 0 immediately, even though I set it to a 10 second countdown. This is because new timers were being instantiated every time I ran the app. There was no clean up function.
- Using the clean up function to sort this out: `return () => clearInterval(id); //cancel the timer between renders after it unmounts`

# Heroku Upload

1. `$ heroku create <your-app-name>`
2. `$ git push heroku main`
3. `$ heroku open`

- Reference: [ChatGPT](https://chat.openai.com/c/135a5da1-7a06-49f2-88e7-74bf5e50e66e)
