import bodyParser from 'body-parser';
import express from 'express';
import ServerlessHttp from 'serverless-http';
const app = express();


const data =[{name:"User1", surname:"User2", email:"user@example.com", password:"password"}
];
app.use(bodyParser.json());

app.get('/getAllUsers', (req, res)=>{
    res.json(data);
});
app.post('/addNewUser', (req, res)=>{
    data.push(req.body)
    res.send('Successfully added');
})




export const handler = ServerlessHttp(app);