import { useEffect, useState } from 'react';
import Header from './Header/Header';
import Input from './Input/Input';
import './Window.scss';

const Window: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`window ${isVisible ? 'slide-up' : ''}`}>
            <Header />
            <Input />
        </div>
    )
}

export default Window;