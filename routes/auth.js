import express from "express";
import { register } from "../controllers/auth";

const router = express.Router(); // this gives the expres router functionality

router.post("/register", register);

module.exports = router; // this is a common js module export
