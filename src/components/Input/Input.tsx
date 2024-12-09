import { useState } from 'react';
import './Input.scss'

interface InputProps {
    setBMI: (value: number | null) => void,
    setActiveCategory: (category: string) => void;
}

const Input: React.FC<InputProps> = ({setBMI, setActiveCategory}) => {
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

        const category = classifyBMI(BMIValue);
        setActiveCategory(category);
        console.log(category);
    }

    const classifyBMI = (BMI: number): string => {
        if (BMI < 16) return "Severe Thinness";
        if (BMI < 17) return "Moderate Thinness";
        if (BMI < 18.5) return "Mild Thinness";
        if (BMI < 25) return "Normal";
        if (BMI < 30) return "Overweight";
        if (BMI < 35) return "Obese Class I";
        if (BMI < 40) return "Obese Class II";
        return "Obese Class III";
    }

    return (
        <form className="input">
            <div className="input__fields">
                <div className="input__fields__weight">
                    <label htmlFor="">Weight: </label>
                    <input type="number" value={weight} placeholder="Type your weight in kg" onChange={(e) => setWeight(Number(e.target.value))} />
                </div>
                <div className="input__fields__height">
                    <label htmlFor="">Height: </label>
                    <input type="number" value={height} placeholder="Type your height in cm" onChange={(e) => setHeight(Number(e.target.value))} />
                </div>
            </div>
            <button onClick={calculateBMI}>Calculate</button>
        </form>
    )
}

export default Input;