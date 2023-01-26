import axios from 'axios'
import { useEffect,useState } from 'react'
import './App.css'
import CardNew from './components/CardNew'

function App() {

  const [news, setNews] = useState([])
  const [nameNew, setNameNew] = useState("")

  const getNews = () => {
    const URL = `https://newsapi.org/v2/top-headlines?q=${nameNew}&language=es&apiKey=88e561158bbe427a94227d99351334c2`
    axios.get(URL)
    .then((res) => {setNews(res.data.articles)})
    .catch((err) => {console.log(err)})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameNew(e.target.textNew.value)
  }

  useEffect(() => {
    getNews()
  }, [nameNew])

  return (
    <div className="App">
      <h1 className='App__title'>Good news Academlo!</h1>
      <form className='App__form' onSubmit={handleSubmit}>
        <div className='App__form-div'>
          <input className='App__form-input' id="textNew" placeholder='Busca tu noticia...' type="text" />
        </div>
        <button className='App__form-btn'>Search</button>
      </form>
      <section className='container-articles'>
        {
          news[0] && <CardNew newNote={news[0]} /> 
        }
        {
          news[1] && <CardNew newNote={news[1]} /> 
        }
        {
          news[2] && <CardNew newNote={news[2]} /> 
        }
      </section>
    </div>
  )
}

export default App
