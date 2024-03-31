import PropTypes from 'prop-types';

// Компонент Video принимает props: url (обязательно строка) и views (число, необязательно)
export function Video(props) {
    return (
        <div className='item item-video'>
            {/* Видео-плеер с указанным URL */}
            <iframe
                src={props.url}
                frameborder='0' // Какая то хрень с 'frameBorder' is deprecated.ts(6385)
                allow='autoplay; encrypted-media'
                allowFullScreen
            ></iframe>
            {/* Отображение количества просмотров */}
            <p className='views'>Просмотров: {props.views}</p>
        </div>
    );
}

// Определение типов свойств компонента
Video.propTypes = {
    url: PropTypes.string.isRequired, // URL видео (обязательный параметр, строка)
    views: PropTypes.number, // Количество просмотров (число, необязательно)
};
