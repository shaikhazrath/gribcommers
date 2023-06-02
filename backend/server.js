import express from 'express'
const app = express();


import { config } from 'dotenv';
config({path:'./config/config.env'})


import auth from './Router/authRouter.js'
import User from './Router/home.js'
import Customer from './Router/customerRouter.js'
import Vendor from './Router/vendorRouter.js'



import connectDB from './config/database.js';


import chalk from 'chalk';
import cors from 'cors'


app.use(express.json());
// Set specific origins to allow requests from
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(express.urlencoded({ extended: true }));



app.use('/auth',auth)
app.use('/user',User)
app.use('/vendor',Vendor)
app.use('/customer',Customer)



connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        chalk.cyan(`Server is running on http://127.0.0.1:${process.env.PORT}`)
      );
    });
  })
  .catch((error) => {
    console.error(chalk.red('Failed to connect to the database:'), error);
  });