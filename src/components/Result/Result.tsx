import './Result.scss'

const Result = () => {
    return (
        <>
            <div className="result">
                <h3>Your BMI is:</h3>
                <span>20 kg/m²</span>
            </div>
            <div className="chart">
                <h3 className='chart__title'>BMI values for adults:</h3>
                <ul className='chart__table'>
                    <li className='chart__table__item'>
                        <p>Severe Thinness</p>
                        <p>{'<16'}</p>
                    </li>
                    <li className='chart__table__item'>
                        <p>Moderate Thinness</p>
                        <p>16 ~ 17</p>
                    </li>
                    <li className='chart__table__item'>
                        <p>Mild Thinness</p>
                        <p>17 ~ 18,5</p>
                    </li>
                    <li className='chart__table__item chart__table__item--isActive'>
                        <p>Normal</p>
                        <p>18,5 ~ 25</p>
                    </li>
                    <li className='chart__table__item'>
                        <p>Overweight</p>
                        <p>25 ~ 30</p>
                    </li>
                    <li className='chart__table__item'>
                        <p>Obese Class I</p>
                        <p>30 ~ 35</p>
                    </li>
                    <li className='chart__table__item'>
                        <p>Obese Class II</p>
                        <p>35 ~ 40</p>
                    </li>
                    <li className='chart__table__item'>
                        <p>Obese Class III</p>
                        <p>{'>40'}</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Result;