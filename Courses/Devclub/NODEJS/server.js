// OLD WAY TO IMPORT
// const express = require("express")

// NEW WAY TO IMPORT
import { PrismaClient } from './generated/prisma/client.js'
import express from 'express'

const app = express()
app.use(express.json()) //Needed so express knows we're dealing with json.

//const users = [] //Simulated Database
const prisma = new PrismaClient()

app.get('/users/', (req, res) => {
    res.status(200).json(users)
}) 

app.post('/users', (req, res) => {
    users.push(req.body)
    res.status(201).json({message: "Usuário criado com sucesso"})
}) 
    
app.listen(3000)
// req - request
// res - response
// http://localhost:3000