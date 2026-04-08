import { Router } from "express";
import {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
const router = Router();

router.post("/", createUser);
router.get("/", getUsers);

// this is id called route parameter or URL parameter
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

// const express = require("express");

// const router = express.Router();

// router.get("/", (req, res) => {
//   res.json([
//     { name: "ali", age: 30 },
//     { name: "ahmed", age: 25 },
//     { name: "mohamed", age: 35 },
//     { name: "sara", age: 28 },
//   ]);
// });

// module.exports = router;
export default router;
