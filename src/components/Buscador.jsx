import { useEffect } from "react"
import './Buscador.css'

const Buscador = ({futurama, setFuturama, search, setSearch, getFuturama}) => {
 
   const handleSearch = (e) => {
        setSearch(e.target.value)
    } 

    useEffect(() => {
        if (search === ''){
            getFuturama()
        }else {
            const filteredFuturama = futurama.filter((character) =>
            character.name.toLowerCase().includes(search.toLowerCase())
        )
    setFuturama(filteredFuturama)
        }
    },[search])

  return (
    <div className="search">
        <input 
        type="text"
        className="input w-75" 
        placeholder=" Busca el nombre de tu personaje favorito"
        value={search}
        onChange={handleSearch}
        />
    </div>
  )
}

export default Buscador
