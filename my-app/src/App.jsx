import { PostsList } from './posts/PostsList'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <section className="app-hero">
        <span className="app-kicker">Redux Toolkit Demo</span>
        <h1>Список постов с внешнего API</h1>
        <p>
          На странице выводится результат запроса к
          {' '}
          <code>jsonplaceholder.typicode.com/posts</code>.
        </p>
      </section>

      <section className="posts-section">
        <div className="section-heading">
          <h2>PostsList</h2>
          <p>Ниже показаны первые 10 записей, загруженные через thunk.</p>
        </div>
        <PostsList />
      </section>
    </main>
  )
}

export default App
