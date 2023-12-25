import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"

function App() {
  return (
    <>
      <div className="App">
        <NavBar></NavBar>
      </div>
      <ItemListContainer
        saludo={"Bienvenidos a MusicShop - Instrumentos"}
      />
    </>
  )
}

export default App
