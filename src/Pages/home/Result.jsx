// Result.jsx
import "./result.css";
import Search from "./Search";
import { Link } from "react-router-dom";
function Result({ nearestStations }) {
  return (
    <div className="result-container">
      {nearestStations.map((station) => (
        <div key={station.name} className="result-card">
          <h4>{station.name}</h4>
          <p>Description: {station.description}</p>
          <p>Location: Lat - {station.lat}, Lng - {station.lng}</p>
          <div className="button-container">
            <button style={{paddingLeft:'20px'}} >Direction</button>
            <Link to={'/moreinfo'}><button style={{marginLeft:'5px'}} >More Info</button></Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Result;
