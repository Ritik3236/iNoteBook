const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Notes = require('../models/notesSchema');
const fetchUser = require('../middleware/fetchUser')

//! ROUTE 1 :
// ? Post a Note  using POST : api/notes/addNote , login Required.
router.post('/addnote', fetchUser,
    // Validation.
    body('title', 'Title must be at least 3 characters long').isLength({ min: 3 }),
    body('description', 'Description must be at least 5 characters long').isLength({ min: 5 }),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: errors.array() });
        }
        try {
            const { title, description, tag } = req.body
            const note = new Notes({ user_id: req.user.id, title, description, tag });
            const newNote = await note.save();

            res.status(201).send({ newNote: newNote });
        } catch (err) {
            console.log(err)
            res.status(500).send({ message: 'Internal Error Occurred' })
        }
    })

//! ROUTE 2 :
// ? Get All Notes  using GET : api/notes/fetchAllNotes, login Required.
router.get('/fetchallnotes', fetchUser, async (req, res) => {

    try {
        allNotes = await Notes.find({ user_id: req.user.id });
        res.status(200).send({ allNotes });
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: 'Internal Error Occurred' })
    }
})


//! ROUTE 3 :
// ? Update Notes  using PUT :  api/notes/updateNote , login Required.
router.put('/updatenote/:id', fetchUser,

    // Validation.
    body('title', 'Title must be at least 3 characters long').isLength({ min: 3 }),
    body('description', 'Description must be at least 5 characters long').isLength({ min: 5 }),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: errors.array() });
        }
        try {
            const { title, description, tag } = req.body
            const newNote = {}
            if (title, description, tag) {
                newNote.title = title;
                newNote.description = description;
                newNote.tag = tag;
            }
            let note = await Notes.findById(req.params.id);

            if (!note) { return res.status(401).send("Not Found"); }
            if (note.user_id.toString() !== req.user.id) { return res.status(401).send({ message: "Not Allowed" }); }

            note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
            res.status(201).send(note);

        } catch (err) {
            console.log(err)
            res.status(500).send({ message: 'Internal Error Occurred' })
        }
    })

//! ROUTE 4 :
// ? Delete Notes  using DELETE :  api/notes/deleteNote, login Required.
router.delete('/deletenote/:id', fetchUser, async (req, res) => {
    try {

        let note = await Notes.findById(req.params.id);

        if (!note) { return res.status(401).send("Not Found"); }
        if (note.user_id.toString() !== req.user.id) { return res.status(401).send({ message: "Not Allowed" }); }

        await Notes.findByIdAndDelete(req.params.id);
        res.status(202).send({ message: "Note has been Deleted" },)

    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Internal Error Occurred" })
    }
})

module.exports = router;