import React, { useState } from 'react';
import "../assets/css/App.css";
function TempConvert() {
    const [temp, setTemp] = useState('');
    const [scale, setScale] = useState('celsius');
    const [toScale, setToScale] = useState('fahrenheit');
    const [error, setError] = useState('');

    const celToFah = (inputCel) => {
        return (inputCel * 9) / 5 + 32;
    };

    const FahToCel = (inputFah) => {
        return ((inputFah - 32) * 5) / 9;
    };

    const celToKel = (inputCel) => {
        return inputCel + 273.15;
    };

    const kelToCel = (inputKel) => {
        return inputKel - 273.15;
    };

    const convertTemp = (val, fromScale, toScale) => {
        if (fromScale === toScale) {
            return val;
        } else if (fromScale === 'celsius' && toScale === 'fahrenheit') {
            return celToFah(val);
        } else if (fromScale === 'fahrenheit' && toScale === 'celsius') {
            return FahToCel(val);
        } else if (fromScale === 'celsius' && toScale === 'kelvin') {
            return celToKel(val);
        } else if (fromScale === 'kelvin' && toScale === 'celsius') {
            return kelToCel(val);
        } else if (fromScale === 'kelvin' && toScale === 'fahrenheit') {
            const celsiusValue = kelToCel(val);
            return celToFah(celsiusValue);
        } else if (fromScale === 'fahrenheit' && toScale === 'kelvin') {
            const celsiusValue = FahToCel(val);
            return celToKel(celsiusValue);
        }
        return val;
    };

    const tempChangeFunction = (event) => {
        const input = event.target.value;
        setTemp(input);
        if (!/^-?\d*\.?\d*$/.test(input)) {
            setError(` Enter a valid numeric temperature.`);
        } else {
            setError('');
        }
    };

    const scaleChangeFunction = (event) => {
        const selectedScale = event.target.value;
        setScale(selectedScale);
        if (selectedScale === toScale) {
            setError(`Hey Geek! Conversion between the same scale is not allowed.`);
        } else {
            setError('');
        }
    };

    const toScaleChangeFunction = (event) => {
        const selectedToScale = event.target.value;
        setToScale(selectedToScale);
        if (selectedToScale === scale) {
            setError(`Hey Geek! Conversion between the same scale is not allowed.`);
        } else {
            setError('');
        }
    };

    const result = convertTemp(Number(temp), scale, toScale);

    return (
        <div className="converter">
        <div className="converter-card">
            <h3 className="converter-title">Temperature Converter</h3>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder={`Enter ${scale}`}
                    value={temp}
                    onChange={tempChangeFunction}
                />
                <br></br>
                <select
                    className="form-select"
                    value={scale}
                    onChange={scaleChangeFunction}
                >
                    <option value="celsius">Celsius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                    <option value="kelvin">Kelvin</option>
                </select>
                <br></br>
        
                <span className="arrow"></span>
                <select
                    className="form-select"
                    value={toScale}
                    onChange={toScaleChangeFunction}
                >
                    <option value="celsius">Celsius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                    <option value="kelvin">Kelvin</option>
                </select>
            </div>
            {error ? (
                <p className="error-text">
                    <i className="fa fa-exclamation-circle" />
                    {error}
                </p>
            ) : (
                <p className="result-text">
                    {result !== null ? (
                        <>
                            <i className="fa fa-thermometer-half" />
                            {temp}{' '}
                            {scale === 'celsius'
                                ? 'Celsius'
                                : scale === 'fahrenheit'
                                ? 'Fahrenheit'
                                : 'Kelvin'}{' '}
                            = {result.toFixed(2)}{' '}
                            {toScale === 'celsius'
                                ? 'Celsius'
                                : toScale === 'fahrenheit'
                                ? 'Fahrenheit'
                                : 'Kelvin'}
                            .
                        </>
                    ) : (
                        ' Select different units to convert.'
                    )}
                </p>
            )}
        </div>
        </div>
    );
}

export default TempConvert;
