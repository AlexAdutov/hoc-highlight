import { data } from './data/data'; // Импортируем данные из файла data.js
import { List } from './components/List'; // Импортируем компонент List из файла List.js

export default function App() {
    return <List list={data} />; // Рендерим компонент List и передаем ему список данных из файла data.js
}