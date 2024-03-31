import PropTypes from 'prop-types';

// Компонент Article принимает props с данными о заголовке (title) и количестве прочтений (views)
export function Article(props) {
    return (
        <div className='item item-article'> {/* Обертка для стилизации */}
            <h3>
                <a href='#'>{props.title}</a> {/* Вывод заголовка */}
            </h3>
            <p className='views'>Прочтений: {props.views}</p> {/* Вывод количества прочтений */}
        </div>
    );
}

// Указываем ожидаемые типы данных для props компонента Article
Article.propTypes = {
    title: PropTypes.string.isRequired, // Заголовок должен быть строкой и обязательным
    views: PropTypes.number.isRequired, // Количество прочтений должно быть числом и обязательным
};
