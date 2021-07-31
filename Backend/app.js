const express = require('express');
const EmployeeData = require('./src/model/Employeedata');
//const UserData = ('./src/model/Userdata');
const cors = require('cors');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());

app.use(express.json());
//username='admin';
//password='1234';


//function verifyToken(req, res, next) {
    //if(!req.headers.authorization) {
     // return res.status(401).send('Unauthorized request')
    //}
    //let token = req.headers.authorization.split(' ')[1]
    //if(token === 'null') {
      //return res.status(401).send('Unauthorized request')    
    //}
    //let payload = jwt.verify(token, 'secretKey')
    //if(!payload) {
      //return res.status(401).send('Unauthorized request')    
    //}
    //req.userId = payload.subject
   // next()
  //}

app.post('/insert',function(req,res){
   
    console.log(req.body);
   
    var employee = {       
    
        name : req.body.employee.name,
       email : req.body.employee.email,
        qualification : req.body.employee.qualification,
        
   }       
   var employee = new EmployeeData(employee);
   employee.save();
   res.send(employee);
});
app.get('/employees',function(req,res){
    
    EmployeeData.find()
                .then(function(employees){
                    res.send(employees);
                });
});
app.get('employees/:id',  function(req, res)  {
  
  const id = req.params.id;
    EmployeeData.findOne({"_id":id})
    .then((employee)=>{
        res.send(employee);
    });
})

//app.post('/login', (req, res) => {
   // let userData = req.body
    
      
     //   if (!username) {
         // res.status(401).send('Invalid Username')
       // } else 
        //if ( password !== userData.password) {
          //res.status(401).send('Invalid Password')
        //} else {
          //let payload = {subject: username+password}
          //let token = jwt.sign(payload, 'secretKey')
         // res.status(200).send({token})
        //}
      
    //})

    app.put('/update',(req,res)=>{
      console.log(req.body)
      id=req.body._id,
      name = req.body.name,
      email = req.body.email,
      qualification = req.body.qualification
     EmployeeData.findByIdAndUpdate({"_id":id},
                                  {$set:{
                                  "name":name,
                                  "email":email,
                                  "qualification":qualification
                                  }})
     .then(function(){
         res.send();
     })
   })
   
app.delete('/remove/:id',(req,res)=>{
   
     id = req.params.id;
     EmployeeData.findByIdAndDelete({"_id":id})
     .then(()=>{
         console.log('success')
         res.send();
     })
   })
     

app.listen(3000, function(){
    console.log('listening to port 3000');
});