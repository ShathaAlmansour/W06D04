const express = require("express");
const dotnev = require("dotenv");

// باكج يقدر يوصل للسيرفر وياخذ الداتا
const cors = require("cors");

// علشان اطلع الباث 
const margan = require ("morgan")

// confiration to .env
dotenv.config();

// اوصل الباك اند للفرونت اند 
app.use(cors());
app.use(express.json());
app.use(morgan.json(dev));

let todos = [
  {
    id: 1,
    task: "sleep",
    isDel: false,
    isCopletes: false,
  },
  {
    id: 2,
    task: "Eat",
    isDel: false,
    isCopletes: false,
  },
  {
    id: 3,
    task: "More sleep",
    isDel: false,
    isCopletes: false,
  },
];

app.get("/todos", (req,res) => {
    try {
        res.status(200).json(todos);
    } catch (error) {
        res.status(200).json(error);
    }

    app.get("/todos", (req,res) => {
        const {id} = req.query;
        try {
            const found = todos.find((item) => {

            })
            todos.find((item) => {
                return item.id == id;
            });
            if (!id) {
                res.status(400).json("You must put an id as query");
            } else {
                if (found) res.status(200).json(found);
                else res.status(400).json("Not found");
            }
        } catch (error) {
            res.status(400).json(error);
        }
});

// instiate express
const app = express();

// const PORT = 4000;
// env شلت 4000 وحطيت هذا علشان السكيورتي بس قبل اكتب الرقم بملف
const PORT = process.env.PORT || 4000;
// PORT لازم كل سيرفر غير له بورت
// علشان اشوف السيرفر شغال او لا
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});

