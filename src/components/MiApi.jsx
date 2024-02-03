import Buscador from "./Buscador"
import { Badge } from "react-bootstrap"
import { useEffect } from "react"
import './MiApi.css'

const MiApi = ({futurama, setFuturama, search, setSearch}) => {
    
    const getFuturama = async() => {
        const response = await fetch('https://api.sampleapis.com/futurama/characters')
        const futuramaList = await response.json()
        console.log(futuramaList)
        const api = futuramaList.map((futurama) =>  {
            return{
                id: futurama.id,
                name: futurama.name.first, 
                img: futurama.images.main, 
                specie: futurama.species
            }
        }).reverse()
        setFuturama(api)
    }

    useEffect(() =>{
        getFuturama()
    },[])

  return (
    <>
        <Buscador
        futurama={futurama} 
        setFuturama={setFuturama}
        getFuturama={getFuturama}
        search={search}
        setSearch={setSearch}
        />    
        <main>
            {futurama.map((futurama) =>
            <div className="box" key={futurama.id}>
                <img className="img" src={futurama.img} alt={futurama.name}/>
                <p className="name">Nombre: {futurama.name}</p>
                <Badge className="specie" bg="warning">Especie: {futurama.specie}</Badge>
            </div>
            )}
        </main>
    </>
  )
}

export default MiApi
