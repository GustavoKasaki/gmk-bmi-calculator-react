import './Input.scss'

const Input = () => {
    return (
        <div className="input">
            <div className="weight">
                <label htmlFor="">Weight:</label>
                <input type="number" placeholder="Type your weight in kg" />
            </div>
            <div className="height">
                <label htmlFor="">Height:</label>
                <input type="number" placeholder="Type your height in cm" />
            </div>
        </div>
    )
}

export default Input;