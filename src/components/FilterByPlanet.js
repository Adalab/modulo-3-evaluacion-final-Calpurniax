const FilterByPlanet = ({ planets, handlePlanet, searchByPlanet }) => {
    const handleChechbox = (event) => {
        handlePlanet(event.target.value)
    }

    const renderInput = () => {
        if (planets.length > 0)
            return planets.map((eachPlanet, index) => {
                return (
                    <li key={index}>
                        <input type="checkbox" name={eachPlanet} id={eachPlanet} value={eachPlanet} onChange={handleChechbox} checked={searchByPlanet.includes(eachPlanet) ? true : false} />
                        {eachPlanet}
                    </li>
                )
            })
    }
    return (
        <div>
            <label className="form__planet__label" htmlFor="planet">Filtrar por origen</label>
            <ul className="form__planet__ul">{renderInput()}</ul>
        </div>

    )
}; export default FilterByPlanet