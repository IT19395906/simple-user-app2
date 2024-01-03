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

columns of the table are dynamically added using the array same as records.
 {columns.map((c, i) => (
                            <th key={i}>{c}</th>
                        ))}
columns are not predefined like this.
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
therefore setColumns(Object.keys(res.data[0])) line dynamically extracts the column names from the keys of the first object


https://www.youtube.com/watch?v=Rm4__WgPncI
