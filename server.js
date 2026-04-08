import express from "express";
import connectDB from "./db.js";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
const app = express();


// const port = 5000;
// const products_router = require("./routes/products")
// const users_router = require("./routes/users")
// const products2_router = require("./routes/products2")

dotenv.config(); // Load environment variables from .env file

app.use(express.json());

// test root for api
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});
connectDB();

// rootes

app.use("/users", userRoutes);




// app.post("users", async (req, res) => {
//   try {
//     const { name, age, email } = dummyData;

//     const newUser = await User.create({
//       name,
//       age,
//       email,
//     });
//     res.status(201).json(newUser);
//   } catch (err) {
//     console.error("Error creating user:", err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// 

// app.get("/",(req,res)=> res.send("hello word"))
// app.get("/about",(req,res)=> res.send("hello about"))

// app.use((req,res,next) => {
//     res.status(404).sendFile(__dirname + "/views/index.html")
// })

// app.set("view engine", "ejs")

// app.get("/",(req,res)=>{
//     res.render('index.ejs',{userName:"amixiid123"})
// })

// app.use("/products", products_router)
// app.use("/users", users_router)
// app.use("/products2", products2_router)

// app.use(express.static("public"))

// app.post("/login",(req,res)=>{
//     console.log(req.body);
//     res.send(`welcome ${req.body.username}`)
// })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`),
);
