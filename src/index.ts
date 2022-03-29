
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { txRouter } from "./router";
import config from "./config";
import mongoose  from "mongoose";
import axios from "axios";
var os = require("os");


(async function main() {
  const app = express();

  app.use(cors());


  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(bodyParser.urlencoded({ extended: true }));



  mongoose.connect(config.mongo, { useNewUrlParser: true }, (err: any) => {
    if (err) console.log("Error on MongoDB connection", err);
    else console.log("Connected to MongoDB");
  });



  app.listen(config.port || 3100, async () => {
   
     const tryWebHook = await axios.post(`https://api.telegram.org/bot${config.bot}/setWebhook`, {
      "url": `https://support-bot-xp.herokuapp.com/update`,
      "drop_pending_updates": true
     })

     if (tryWebHook.data.ok) {
       console.log('webhook active on ', os.hostname());
       app.use("/", txRouter());
     }
  });




})();
