import { useEffect, useState } from 'react';
import Header from './Header/Header';
import Input from './Input/Input';
import Result from './Result/Result';
import './Window.scss';

const Window: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [BMI, setBMI] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // useEffect(() => {
    //     console.log("Updated category to:", activeCategory);
    // }, [activeCategory]);

    return (
        <div className={`window ${isVisible ? 'slide-up' : ''}`}>
            <Header />
            <Input setBMI={setBMI} setActiveCategory={setActiveCategory} />
            <Result BMI={BMI} activeCategory={activeCategory} />
        </div>
    )
}

export default Window;