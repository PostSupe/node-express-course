const express = require('express');
const app = express();



const mockUserData=[
{name:'Logan'},
{name:'Joshua'},
{name:'Amy-Lee'}
]
app.get('/users', function(req,res){
 	res.json({
 	 	success: true,
 	 	message: 'woot -- successfully got users. Nice!',
 	 	users: mockUserData
 	})
})


app.listen(8000,function(){
console.log("server is running - listening on Port 8000")
})