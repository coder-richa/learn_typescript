# Learn TypeScript

Step by step learning typescript

## Setting up Project

### Initialize Project

Run the following command

```
npm init
```

### Specify Dev Dependency to Run Lite Server

```
npm install --save-dev lite-server
```

### Add start script in package.json

```
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "lite-server"
    },
```

### Compile app.ts

```
tsc .\app.ts
```

### Start lite-server

```
npm start
```
