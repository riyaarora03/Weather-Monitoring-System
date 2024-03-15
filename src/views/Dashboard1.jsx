import Nheader from '../components/Nheader.jsx';
import WeatherTable from '../Weather/WeatherTable/WeatherTable.jsx';
import WeatherCard from '../Weather/WeatherCard/WeatherCard.jsx';

import WeatherGraphs from '../Weather/WeatherGraphs/WeatherGraphs.jsx'
import '../Weather/weather.css'

function DashApi() {
    const pageTitle = "Dashbord with API";
    return (
        <>
            <div className='weather'>
                <Nheader />
                <WeatherCard />
                <WeatherTable />
                <WeatherGraphs />
                
                
            </div>    
        </>
    )
}

export default DashApi;
