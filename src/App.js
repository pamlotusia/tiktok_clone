import './App.css'
import Video from './pages/Video'

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={111}
          messages={222}
          saves={333}
          shares={444}
          name="p.lotusia"
          description=" Gato top"
          music="Musica de tensão"
          url = "https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
        <Video
          likes={555}
          messages={666}
          saves={777}
          shares={888}
          name="p.lotusia"
          description="Gata top"
          music="Música engraçada"
          url = "https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        />

      </div>
    </div>
  )
}

export default App
