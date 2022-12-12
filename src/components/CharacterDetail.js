import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const CharacterDetail = ({ characters }) => {
    const { id } = useParams()
    const characterFound = characters.find(each => each.id === parseInt(id))
    return (
        <section>
            <article id={characterFound.id}>
                <img src={characterFound.img} alt={`Foto de ${characterFound.name}`} />
                <h2>{characterFound.name}</h2>
                <p>Especie: {characterFound.species}</p>
                <ul>
                    <li>Origen:{characterFound.origin}</li>
                    <li>Status:{characterFound.status}</li>
                    <li>Número de episodios en los que aparece:{characterFound.episodes}</li>
                </ul>
            </article>
            <Link to={'/'}>Volver al inicio</Link>
        </section >

    )
}; export default CharacterDetail