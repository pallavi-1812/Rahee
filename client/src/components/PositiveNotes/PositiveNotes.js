import { useState, useEffect } from "react";
import Note from './Note';
import Input from "./Input";
import './PositiveNotes.css';
import axios from 'axios';

const PositiveNotes = () => {
    const [inputData, setInputData] = useState([]);
    const [text, setText] = useState({ name: "" });

    useEffect(() => {
        requestNotes()
    }, []);



    const requestNotes = async () => {
        await axios
            .get('http://localhost:5000/notes', {
                headers: { "x-auth-token": localStorage.getItem("auth-token") },
            })
            .then(res => {
                setInputData(res.data);
            })
            .catch(error => {
                console.error('error: ', error);
            });
    }

    function HandleChange(event) {
        const newData = event.target.value;
        setText({ name: newData });
    }

    const HandleClick = async () => {

        await axios.post('http://localhost:5000/notes', text, {
            headers: { "x-auth-token": localStorage.getItem("auth-token") },
        })
            .then(res => setInputData((prevData) => {
                return [...prevData, res.data];
            }));
        setText({ name: "" });
    }

    return (
        <div className="box">
            <div className="heading">
                <h1>Strength Box</h1>
            </div>
            <Input
                onChanging={HandleChange}
                value={text.name}
                onClicking={HandleClick}
            />
            <div>
                <ul>
                    {inputData.map((data, index) => {
                        return (
                            <Note key={index} text={data.name} />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default PositiveNotes;
