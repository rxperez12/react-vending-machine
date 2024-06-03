import { Link } from "react-router-dom";
import "./VendingMachine.css";

function VendingMachine() {
  return (
    <div className="VendingMachine" >
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/apple">apple</Link></li>
        <li><Link to="/ice-cream-sandwich">ice cream sandwich</Link></li>
        <li><Link to="/hot-cheetos">hot cheetos</Link></li>
      </ul>
    </div>
  );
}

export default VendingMachine;
