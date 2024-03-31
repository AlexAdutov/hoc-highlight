import { Video } from './Video'; // Импорт компонента Video
import { Article } from './Article'; // Импорт компонента Article
import { WithNewOrPopularViews } from './WithNewOrPopularViews'; // Импорт HOC WithNewOrPopularViews

// Компонент List принимает массив объектов list и отображает каждый элемент в соответствии с его типом
export function List(props) {
    return props.list.map((item) => {
        // Создание компонентов Video и Article с применением HOC WithNewOrPopularViews
        const WithHocVideo = WithNewOrPopularViews(Video);
        const WithHocArticle = WithNewOrPopularViews(Article);

        // Определение типа элемента и возврат соответствующего компонента с применением HOC
        switch (item.type) {
            case 'video': // Если тип video, отображаем видео
                return <WithHocVideo {...item} key={item.id} />; // Применяем HOC к компоненту Video

            case 'article': // Если тип article, отображаем статью
                return <WithHocArticle {...item} key={item.id} />; // Применяем HOC к компоненту Article
        }
    });
}
