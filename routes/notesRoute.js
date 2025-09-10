import express from "express";
import { createNote, deleteNote, getNotes, updateNote } from "../controllers/notesController.js";
import { AuthChecker } from "../middleware/authMiddleware.js";

const noteRouter = express.Router();

noteRouter.post("/create", AuthChecker,createNote);
noteRouter.get("/get-notes",AuthChecker, getNotes);
noteRouter.put("/update-note/:id",AuthChecker, updateNote);
noteRouter.delete("/delete-note/:id",AuthChecker, deleteNote);

export default noteRouter;
