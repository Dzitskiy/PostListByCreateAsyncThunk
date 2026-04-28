# My App

Небольшое React-приложение на `Vite`, в котором список постов загружается из `https://jsonplaceholder.typicode.com/posts` через `Redux Toolkit` и `thunk`.

## Запуск

Команды:

```bash
npm install
npm run dev
```

Приложение будет доступно по адресу:

```text
http://127.0.0.1:5173/
```

## Что есть в проекте

- `src/main.jsx` подключает `Provider` и монтирует корневой компонент.
- `src/app/store.js` создаёт Redux store через `configureStore`.
- `src/posts/postsSlice.js` описывает slice состояния постов и асинхронный thunk `fetchPosts`.
- `src/posts/PostsList.jsx` запрашивает данные и показывает список постов.
- `src/App.jsx` рендерит главную страницу приложения.

## Кратко по Redux

- `Redux` хранит общее состояние приложения в одном store.
- Компоненты читают данные через `useSelector`.
- Изменения состояния отправляются через `dispatch`.
- В этом проекте Redux хранит список постов, статус загрузки и возможную ошибку.

## Кратко по Redux thunks

- `Thunk` позволяет выполнять асинхронную логику до изменения store.
- Это удобно для HTTP-запросов, таймеров и цепочек действий.
- В `Redux Toolkit` для этого обычно используют `createAsyncThunk`.
- В этом проекте `fetchPosts` делает запрос к API, а `extraReducers` обрабатывает состояния `pending`, `fulfilled` и `rejected`.