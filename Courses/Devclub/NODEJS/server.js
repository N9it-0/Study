// OLD WAY TO IMPORT
// const express = require("express")

// NEW WAY TO IMPORT
import { PrismaClient } from './generated/prisma/client.js'
import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json()) //Needed so express knows we're dealing with json.
app.use(cors())

//const users = [] //Simulated Database
const prisma = new PrismaClient()

app.get('/users/', async (req, res) => {
    const users = await prisma.user.findMany()
    //await sempre precisa de async
    res.status(200).json(users)
})

app.post('/users', async (req, res) => {
    try {
    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    },
    //if(user.data.age < 18) {throw new Error("Underaged Users NOT allowed.")} just to show that you can make custom errors
)
    return res.status(201).json({ user })
    } catch(error) {
    return res.status(500).json({ error:"internal server error" })
    } // Try & Catch ==> used together, used to catch errors.
    finally {
        console.log("Finished.")
    } //As Try's finished executed it is executed as well.
    
})

app.put('/users/:id', async (req, res) => {
    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })
    res.status(201).json({ user })
})

app.delete('/users/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ message: "Usuário Deletado Com Sucesso!" })
})

app.listen(3000)
// req - request
// res - response
// http://localhost:3000

/*  
    CRUD
    CREATE - OK
    READ - OK 
    UPDATE - OK
    DELETE - OK
*/