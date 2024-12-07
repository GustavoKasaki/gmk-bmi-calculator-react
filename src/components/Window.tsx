import { useEffect, useState } from 'react';
import Header from './Header/Header';
import Input from './Input/Input';
import Result from './Result/Result';
import './Window.scss';

const Window: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [BMI, setBMI] = useState<number | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`window ${isVisible ? 'slide-up' : ''}`}>
            <Header />
            <Input setBMI={setBMI} />
            <Result BMI={BMI} />
        </div>
    )
}

export default Window;