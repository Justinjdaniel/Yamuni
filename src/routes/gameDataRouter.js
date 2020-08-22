// router for all data fetch operations from the game db
const express = require("express");
const gameRouter = express.Router();
const activatedMonth=require('../Model/activatedMonth')
const gameHistory = require("../Model/gameHistory");
const teamSummary=require("../Model/teamSummary");

gameRouter.get("/teamStats", function (req, res) {
    //to get the stats of a team : from 'teamSummary' + 'gameHistory' collection
  console.log("team stats");
  const name=req.body.name;    //team name : which team's data to be fetched
  const balance;   //team summary data : balance availabale
  const teamGame;  //game history data : array of objects [each month's game data]
    teamSummary.findOne({teamName:name}).then((data)=>  //getting balance
    {
        balance=data.balance;
    });
    gameHistory.find({teamName:name}).then((data)=>
    {
        if(data)
        {
            res.send({message:"found!",balance:balance,history:data});
        }
        else
        {
            res.send({message:"none",balance:balance});
        }
    });
  });

