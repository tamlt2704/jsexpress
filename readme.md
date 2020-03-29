1. Init project
npm init -y

npx license mit # use license package [https://www.npmjs.com/package/license]

npx gitignore node


2. express backend

npm install express --save


3. start app
npm start

4. add nodemon
npm install nodemon --save

5. add react
npm install -g create-react-app

client/package.json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "proxy": "http://localhost:5000",
}
