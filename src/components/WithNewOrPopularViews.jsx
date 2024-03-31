// Импорт компонентов New и Popular из соответствующих файлов
import { New } from './New';
import { Popular } from './Popular';
// Импорт PropTypes из библиотеки prop-types
import PropTypes from 'prop-types';

// HOC (High Order Component) функция WithNewOrPopularViews принимает компонент Component
export function WithNewOrPopularViews(Component) {
    // Внутренняя функция hocViews принимает props
    return function hocViews(props) {
        // Если количество просмотров больше 1000, возвращаем компонент Popular с обернутым в него компонентом Component и его props
        if (props.views > 1000) {
            return (
                <Popular>
                    <Component {...props} />
                </Popular>
            );
        }
        // Если количество просмотров меньше 100, возвращаем компонент New с обернутым в него компонентом Component и его props
        if (props.views < 100) {
            return (
                <New>
                    <Component {...props} />
                </New>
            );
        }
        // В противном случае возвращаем просто компонент Component с его props
        return <Component {...props} />;
    };
}

// Определение типов свойств HOC функции
WithNewOrPopularViews.propTypes = {
    views: PropTypes.number, // Ожидаем, что компонент будет получать число просмотров
};
