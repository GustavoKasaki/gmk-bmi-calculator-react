import './Result.scss'

const Result = () => {
    return (
        <>
            <div className="result">
                <h3>Your BMI is:</h3>
                <span>20 kg/m²</span>
            </div>
            <ul>
                <li>
                    <p>Severe Thinness</p>
                    <p>{'<16'}</p>
                </li>
                <li>
                    <p>Moderate Thinness</p>
                    <p>16 ~ 17</p>
                </li>
                <li>
                    <p>Mild Thinness</p>
                    <p>17 ~ 18.5</p>
                </li>
                <li>
                    <p>Normal</p>
                    <p>16 ~ 17</p>
                </li>
                <li>
                    <p>Overweight</p>
                    <p>16 ~ 17</p>
                </li>
                <li>
                    <p>Obese Class I</p>
                    <p>16 ~ 17</p>
                </li>
                <li>
                    <p>Obese Class II</p>
                    <p>16 ~ 17</p>
                </li>
                <li>
                    <p>Obese Class III</p>
                    <p>{'<16'}</p>
                </li>
            </ul>
        </>
    )
}

export default Result;