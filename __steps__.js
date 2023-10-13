/**
 * 1. create a post api on the server side
 * 2. send data via post on client side
 * 3. set fetch method inside the fetch options (second parameter)
 * 3.1. options will have three things → method, headers, body
 * 4. set → method: 'POST'
 * 5. set → headers: 'content-type: 'application/json'
 * 6. set → body: JSON.stringify(data) [data → the value will be send to server]
 * 7. server side: don't forget to use middleware → app.use(express.json())
 * 
 */