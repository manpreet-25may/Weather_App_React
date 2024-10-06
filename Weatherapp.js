function WApp() {
    
    return (
        <Weatherapp />

    )
}

const Weatherapp = () => {
    const [city, setCity] = React.useState(null);
    const [search, setSearch] = React.useState("Calgary");
    React.useEffect(() => {
        const fetchApi = async () => {
            // const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${'a5ddc8a9eb3b2b1039b0c58f87077faa'}`
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=81e3d5f73f597d24dfa722110a6fafbc`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
            //setCity(resJson);
            console.log(response);
        };
        fetchApi();
    },[search])
    return (
        <>
        
            <div className="box">
            <h2 className="weather">Weather  <i className="fa-solid fa-cloud"></i></h2>
                <div className="inputdata">
                    Enter the city-
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
                        {/* <i className="fa-solid fa-street-view"></i> */}
                        <h2>{search}</h2>
                        <p>{city.temp}°C</p>
                        <p>Min :{city.temp_min} °C | Max: {city.temp_min}°C</p>
                        <p>Humidity: {city.humidity}</p>
                        <p>Pressure: {city.pressure}</p>
                    </div>
                )}

          </div>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<WApp />)