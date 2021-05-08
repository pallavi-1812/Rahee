import Note from '../models/Note.js';

export const createNote = async (req, res) => {
    try {
        const { name } = req.body;

        const newNote = new Note({
            name,
            userId: req.user
        });
        newNote.save()
            .then(note => res.json(note));
    } catch (err) {
        res.status(500).json({ error: err.message });
        console.log(err);
    }
}

export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find({ userId: req.user });
        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: err.message });
        console.log(err);
    }
}