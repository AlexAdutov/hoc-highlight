import PropTypes from 'prop-types';

// Компонент New принимает дочерние элементы и отображает их с меткой "New!"
export function New(props) {
    return (
        <div className='wrap-item wrap-item-new'>
            <span className='label'>New!</span> {/* Метка "New!" */}
            {props.children} {/* Дочерние элементы, переданные в компонент */}
        </div>
    );
}

// Установка типа children как node, чтобы принимать любые дочерние элементы
New.propTypes = {
    children: PropTypes.node.isRequired, // Обязательное свойство, должен быть передан хотя бы один дочерний элемент
};
