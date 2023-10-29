import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
res.send("Community Compass")
})

export default router;
