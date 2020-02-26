const fs = require('fs');
const bodyParser = require('body-parser');
const express = require('express');
const bcrypt = require('bcrypt');
const colors = require('colors');

//servidor

const servidor = express();

//middleware

servidor.use(bodyParser.json())

//endopint
servidor.post('/register',(req, res)=>{


    if(req.body.username && req.body.password){
        bcrypt.hash(
            req.body.password,
            13,
            (err, hash)=>{
                if(err) throw err;
                const userData = {
                    "username":req.body.username,
                    "password": hash
                }
                fs.writeFile('user.json',
                JSON.stringify(userData),
                (err)=>{
                    if(err) throw err;
                    res.send({"menssage":"Usuario creado con exito!!!"})
                }
                )

            } 

        )

    }else{
        res.send({"message":"El body no es correcto..."})
    }

})
servidor.post('/loggin',(req, res)=>{
    if(req.body.username && req.body.password){
        const userData = {
            "username": req.body.username,
            "password": req.body.username
        }
        fs.readFile('user.json',(err, fileContents)=>{
            if(err) throw err;
            const data = JSON.parse(fileContents);
            //comprobar el hash de la contraseña
            bcrypt.compare(userData["password"],
            data["password"],
            (err, result)=>{
                if(err) throw err;
                
                if( 
                    userData["username"]=== data["username"]
                    &&
                    result
                ){
                    res.send({"message":"Se ha loggeado con éxito!"})

                }else{
                    res.send({"message":"Error, usuario o contraseña no son correctas..."})
                }

            }
            )
        }
        )
    }
})

//asigno puerto al servidor

servidor.listen(3000, ()=>{console.log("Escuchando en el puerto 3000".rainbow)})