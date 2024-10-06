function App(){
    // const [data,setData]=React.useState([])
    const [city, setCity] = React.useState(null);
    const [search, setSearch] = React.useState("Calgary");
    const getData= () => {
        fetch('weather.json',{
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            }}).then((response) => {
                return response.json()
            }).then((main) => {
                // console.log(data)
                setCity(main)
            })    
    }
    
    React.useEffect(() => {
        getData()
    },[search])
    return (
        <>
            <div className="box">
                <div className="inputdata">
                    <input type="search"
                        value={search}
                        className="inputfield"
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }} />
                </div>
                {!city ? (
                    <p>No Data found</p>
                ) : (
                    <div>
                        <h2>{search}</h2>
                        <p>{city.main.temp}Celsius</p>
                        <p>Min :{city.main.temp_min} Cel | Max: {city.main.temp_max}Cel</p>
                        <p>Humidity: {city.main.humidity}</p>
                        <p>Pressure: {city.main.pressure}</p>
                    </div>
                )}

          </div>
        </>
    )
}
    
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App/>)