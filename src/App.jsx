import axios from 'axios'
import { useEffect,useState } from 'react'
import './App.css'
import CardNew from './components/CardNew'

function App() {

  const [news, setNews] = useState([])

  const getNews = () => {
    const URL = "https://newsapi.org/v2/top-headlines?q=méxico&language=es&apiKey=88e561158bbe427a94227d99351334c2"
    axios.get(URL)
    .then((res) => {setNews(res.data.articles)})
    .catch((err) => {console.log(err)})
  }

  useEffect(() => {
    getNews()
  }, [])

  return (
    <div className="App">
      <h1>Good news Academlo!</h1>
      <form>
        <div>
          <label htmlFor=""></label>
          <input type="text" />
        </div>
        <button>Search</button>
      </form>
      <section>
        <CardNew newNote={news[0]} />
        <CardNew newNote={news[1]} />
        <CardNew newNote={news[2]} />
      </section>
    </div>
  )
}

export default App
