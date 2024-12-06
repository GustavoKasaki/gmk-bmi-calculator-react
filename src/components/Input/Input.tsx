import './Input.scss'

const Input = () => {
    return (
        <div className="input">
            <div className="input__weight">
                <label htmlFor="">Weight: </label>
                <input type="number" placeholder="Type your weight in kg" />
            </div>
            <div className="input__height">
                <label htmlFor="">Height: </label>
                <input type="number" placeholder="Type your height in cm" />
            </div>
        </div>
    )
}

export default Input;