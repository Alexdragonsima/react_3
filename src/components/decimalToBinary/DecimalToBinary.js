//  Импортируем необходимые модули из React
import React, { useState } from "react";
//  Импортируем файл стилей
import './DecimalToBinary.css';
import { getDefaultNormalizer } from "@testing-library/dom";

//  Создаем функциональный компонент DecimalTobinary
const DecimalToBinary = () => {
    //  Используем хук useState для создания состояния decimal
    //  Это состояние будет хранить введенное пользователем десятичное число
    const [decimal, setDecimal] = useState('');

    //  Создаем состояние binary для хранения результата конвертации
    const [binary, setBinary] = useState('');

    //  Функция кконвертации двоичного числа в двоичное
    const convertToBinary = () => {
        //  Проверяем, не пустое ли поле ввода
        if (decimal === '') {
            //  Еслии поле пустое, устанавливаем сообщение об ошибке
            setBinary('Введите число!');
            //  Выходим из фенкции
            return;
        }
        //  Преобразуем строку в целое число с помощью parseInt
        const number = parseInt(decimal);

        //  Проверяем, является ли результат преобразования числом
        if (isNaN(number)) {
            //   Если преобразование не удалось, показываем ошибку
            setBinary('Введите корректное число!');
            //  выходим из функции
            return;
        }

        //  Конвертируем число в двоичную систему с помощью метода toString(2)
        //  и устанавливаем результат в состояние binary
        setBinary(number.toString(2));
    };

    //  Функция для обработки клавиш
    const handleKeyPress = (e) => {
        //  Если нажата клавиша Enter
        if (e.key === 'Enter') {
            //  Вызываем функцию конвертации
            convertToBinary();
        }
    };

    //  функция очисткии для полей ввода и результатов
    const clearFields = () => {
        //  Очищаем поле ввода
        setDecimal('');
        //  Очищаем результат
        setBinary('');
    };

    //  Возращаем JSX разметку компонента
    return (
        //  Основной контейнер компонента
        <div className="convert-container">
            {/* {Заголовок компонеета} */}
            <h2 className="converter-title">Конвертер десятичных чисел в двоичные</h2>
            {/* {Описание компонента} */}
            <p className="convert-discription">
                Введите целое число в десятичной системе
            </p>

            {/* {Группа элементов ввода} */}
            <div className="input-group">
                {/* {Поле ввода для десятичного числа} */}
                <input
                    type="text" // Тип поля - текстовое
                    value={decimal}// Привязываем значение к состоянию decimal
                    // Оброботчик изменения значения в поле ввода
                    onChange={(e) => setDecimal(e.target.value)}
                    // Обработчик нажатия клавиш
                    onKeyPress={handleKeyPress}
                    // Подсказка внутри поля ввода
                    placeholder="Введите десятичное число"
                    // CSS класс для стилизации
                    className="number-input"
                />

                {/* {Группа кнопок} */}
                <div className="buttons-group">
                    {/* {Кнопка для запуска конвертации} */}
                    <button onClick={convertToBinary} className="convert-btn">
                        Конвертировать
                    </button>
                    {/* {Кнопка для очистки полей} */}
                    <button onClick={clearFields} className="clear-btn">
                        Очистить
                    </button>
                </div>
            </div>

            {/* {Условный рендеринг: показываем результат только если binary не пустое} */}
            {binary && (
                // Контейнер для отображения результата
                <div className="result-container">
                    {/* {Заголовок результата} */}
                    <h3 className="result-title">Результат:</h3>
                    {/* {Отображение двоичного числа} */}
                    <p className="binary-result">{binary}</p>
                    {/* {Дополнительная информация о конвертации} */}
                    <p className="calculation-info">
                        Число {decimal} в двоичной системе: {binary}
                    </p>
                </div>
            )}
        </div>
    );
};

// Экспортируем компонент для использования  в друших частях приложения
export default DecimalToBinary;