# user-app 2

create, read, update, delete

React.js web

_dependencies_

```bash
npm install react-router-dom
npm install bootstrap
npm install axios
npm install json-server
```
**import bootstrap/dist/css/bootstrap.min.css** in index.js
- first create db.json file outside src folder  (this single file act as database)
- add user data into json file

**run json-server**
```bash
npx json-server --watch db.json
```
or 
specify port
```bash
npx json-server --watch db.json --port 3030
```

**just ``` json-server --watch db.json``` won't work  because you have installed it locally you have to use npx** 

**or you can install globally typing ```npm install -g json-server```** 
after that can run ```json-server --watch db.json```

https://www.youtube.com/watch?v=Rm4__WgPncI
