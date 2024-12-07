import { useState } from 'react';
import './Input.scss'

interface InputProps {
    setBMI: (value: number | null) => void;
}

const Input: React.FC<InputProps> = ({setBMI}) => {
    const [weight, setWeight] = useState<number>();
    const [height, setHeight] = useState<number>();
    

    const calculateBMI = (e:any) => {
        e.preventDefault();

        if (!weight || !height) {
            alert("Please fill the fields correctly!");
            return;
        }
        
        const heightInMeters = height / 100;
        const BMIValue = weight / (heightInMeters * heightInMeters);
        setBMI(Number(BMIValue.toFixed(1)));
    }

    return (
        <form className="input">
            <div className="input__fields">
                <div className="input__fields__weight">
                    <label htmlFor="">Weight: </label>
                    <input type="number" value={weight} placeholder="Type your weight in kg" required onChange={(e) => setWeight(Number(e.target.value))} />
                </div>
                <div className="input__fields__height">
                    <label htmlFor="">Height: </label>
                    <input type="number" value={height} placeholder="Type your height in cm" required onChange={(e) => setHeight(Number(e.target.value))} />
                </div>
            </div>
            <button onClick={calculateBMI}>Calculate</button>
        </form>
    )
}

export default Input;