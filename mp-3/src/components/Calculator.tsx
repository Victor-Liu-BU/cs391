import { useState } from 'react';
import {
    CalculatorContainer,
    CalculatorInput,
    ButtonGrid,
    CalculatorButton,
    OutputDisplay
} from '../styledComponents';

const Calculator = () => {
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [result, setResult] = useState('');
    const [resultColor, setResultColor] = useState('black');

    // Custom hook for calculator operations
    const useCalculatorOperations = () => {
        const displayResult = (value: number | string) => {
            setResult(String(value));
            if (typeof value === 'number') {
                setResultColor(value < 0 ? 'red' : 'black');
            } else {
                setResultColor('black');
            }
        };

        const addition = () => {
            const num1 = parseFloat(firstNumber);
            const num2 = parseFloat(secondNumber);
            displayResult(num1 + num2);
        };

        const subtraction = () => {
            const num1 = parseFloat(firstNumber);
            const num2 = parseFloat(secondNumber);
            displayResult(num1 - num2);
        };

        const multiplication = () => {
            const num1 = parseFloat(firstNumber);
            const num2 = parseFloat(secondNumber);
            displayResult(num1 * num2);
        };

        const division = () => {
            const num1 = parseFloat(firstNumber);
            const num2 = parseFloat(secondNumber);
            if (num2 !== 0) {
                displayResult(num1 / num2);
            } else {
                setResult('Error: Division by zero');
            }
        };

        const power = () => {
            const num1 = parseFloat(firstNumber);
            const num2 = parseInt(secondNumber);
            let powerResult = 1;
            for (let i = 0; i < num2; i++) {
                powerResult *= num1;
            }
            displayResult(powerResult);
        };

        const clearFields = () => {
            setFirstNumber('');
            setSecondNumber('');
            setResult('');
        };

        return { addition, subtraction, multiplication, division, power, clearFields };
    };

    const { addition, subtraction, multiplication, division, power, clearFields } = useCalculatorOperations();

    return (
        <CalculatorContainer>
            <CalculatorInput
                placeholder="Enter first number"
                value={firstNumber}
                onChange={(e) => setFirstNumber(e.target.value)}
            />
            <CalculatorInput
                placeholder="Enter second number"
                value={secondNumber}
                onChange={(e) => setSecondNumber(e.target.value)}
            />
            <ButtonGrid>
                <CalculatorButton onClick={addition}>Add (+)</CalculatorButton>
                <CalculatorButton onClick={subtraction}>Subtract (-)</CalculatorButton>
                <CalculatorButton onClick={multiplication}>Multiply (×)</CalculatorButton>
                <CalculatorButton onClick={division}>Divide (÷)</CalculatorButton>
                <CalculatorButton onClick={power}>Power (^)</CalculatorButton>
                <CalculatorButton onClick={clearFields}>Clear</CalculatorButton>
            </ButtonGrid>
            <OutputDisplay style={{ color: resultColor }}>
                {result}
            </OutputDisplay>
        </CalculatorContainer>
    );
};

export default Calculator;