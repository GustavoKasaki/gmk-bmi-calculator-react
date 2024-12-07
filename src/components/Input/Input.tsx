import './Input.scss'

const Input = () => {
    return (
        <form className="input">
            <div className="input__fields">
                <div className="input__fields__weight">
                    <label htmlFor="">Weight: </label>
                    <input type="number" placeholder="Type your weight in kg" required />
                </div>
                <div className="input__fields__height">
                    <label htmlFor="">Height: </label>
                    <input type="number" placeholder="Type your height in cm" required />
                </div>
            </div>
            <button type="submit">Calculate</button>
        </form>
    )
}

export default Input;