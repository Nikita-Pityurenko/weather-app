import React from 'react';

function Header({ setCity }) {
    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <header className="header">
            <h1>Погода в Україні</h1>
            <select onChange={handleCityChange}>
                <option value="Київ">Київ</option>
                <option value="Львів">Львів</option>
                <option value="Одеса">Одеса</option>
                <option value="Харків">Харків</option>
                <option value="Дніпро">Дніпро</option>
                <option value="Запоріжжя">Запоріжжя</option>
            </select>
        </header>
    );
}

export default Header;
