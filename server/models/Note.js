import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({
    name: String,
    userId: {
        type: String,
        required: true
    },
});

const Note = mongoose.model("notes", NoteSchema);

export default Note;