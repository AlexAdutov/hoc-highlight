import PropTypes from 'prop-types';

// Компонент Popular принимает дочерние элементы и отображает их с меткой "Popular!"
export function Popular(props) {
    return (
        <div className='wrap-item wrap-item-popular'>
            <span className='label'>Popular!</span> {/* Метка "Popular!" */}
            {props.children} {/* Дочерние элементы, переданные в компонент */}
        </div>
    );
}

// Установка типа children как node, чтобы принимать любые дочерние элементы
Popular.propTypes = {
    children: PropTypes.node.isRequired, // Обязательное свойство, должен быть передан хотя бы один дочерний элемент
};
