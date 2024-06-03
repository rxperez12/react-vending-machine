import { Link } from "react-router-dom";

const ICE_CREAM_SANDWICH = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXQ5NzU4Zm5xdGVva2Fyd3hpd2s2ZGsycjFudmdrOG9ld3kwOXl1MCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7FDtvM9nIN6Cs/giphy.gif";

function IceCreamSandwich() {
  return (
    <div>
      <h2>THE PERFECT SUMMER TREAT</h2>
      <img src={ICE_CREAM_SANDWICH} alt="a shaking ice cream sandwich" />
      <Link to="/"> BUY MORE </Link>
    </div>
  );
}

export default IceCreamSandwich;