
const Input = (props) => {
    return (
        <div className="form">
            <input
                onChange={(event) => {
                    props.onChanging(event);
                }}
                name="name"
                type="text"
                value={props.value}
                className='form-input'
            />
            <button onClick={props.onClicking} className='add-btn'>
                <span>Add</span>
            </button>
        </div>
    );
}

export default Input;
