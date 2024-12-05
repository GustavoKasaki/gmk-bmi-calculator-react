import './Header.scss';
import icon from '../../../assets/icon.png'

const Header: React.FC = () => {
    return (
        <header>
            <img src={icon} />
            <h1>BMI Calculator</h1>
            <p>To calculate your BMI, please input your weight and height below:</p>
        </header>
    )
}

export default Header;