import { Router } from "express";
const router = new Router();

import CandidatesController from './controllers/CandidatesController'


router.post("/candidates/push", (req, res) => {
    CandidatesController.candidatesPush(req,res)
});
router.get("/", (req, res) => {
    res.status(200).json({mensaje:'may the force be with you'})
});




export default router;
