// requiere 영역
let mysql =require('mysql');
const { userInfo } = require('os');
const express = require('express');
var path = require('path');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const multer = require('multer');

const app = express();

app.use(express.static(path.join(__dirname,'/public')));

app.listen(8080, function(){
    console.log('enter to 8080')
});

// app.use(bodyParser.urlencoded({extended:false}));
// app.locals.pretty = true;
// app.set('views', ',.views_mysql');
// app.set('view engine','pug')

let connection=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'8134',
        database:'covid'
    }
);
connection.connect();



app.get('/pet', function(request,responce){
    connection.query('SElECT*FROM corona',function(error, results,fields)
    {
        if(error)
        {
            console.log(error);
        }
        // res.render('view', {corona: rows});
        const user =results;
        responce.send(user);
    }
);
    });
app.use('/', function(request,responce){
    responce.sendFile(__dirname + "/public/index.html")
});

// connection.end();


// const express = require('express')
// const app = express();

// const server = app.listen(3000, () =>{
//     console.log('Start server : localhost:3000 ')
// });

// var mysql = require('mysql');
// var pool  = mysql.createPool({
//     connectionLimit : 10,
//     host            : 'localhost',
//     user            : 'root',
//     password        : '8134',
//     database        : 'covid'
//   });

// app.set('views', __dirname + '/');
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile)

// app.get('/', function (req, res) {
//     res.render('index.html')
//   });

// app.get('/about', function (req, res) {
//   res.send('about')
//  })



// app.get('/db', function (req, res) {

//     pool.getConnection(function(err, connection) {
//         if (err) throw err; // not connected!
       
//         // Use the connection
//         connection.query('select * from corona', function (error, results, fields) {
            
//             res.send(JSON.stringify(results));
//             console.log('results', results);
//           // When done with the connection, release it.
//           connection.release();
       
//           // Handle error after the release.
//           if (error) throw error;
       
//           // Don't use the connection here, it has been returned to the pool.
//         });
//       });
//    })