import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../db.js';
const router = express.Router();
//register a new user endpointing /auth/register
router.post(`/register`,(req,res)=>{
  const body = req.body;
  const {username,password} = body;
  console.log(username);
  console.log(password+".........................");
  res.sendStatus(200);
});
router.post(`/login`,(req,res)=>{
  
});
export default router;