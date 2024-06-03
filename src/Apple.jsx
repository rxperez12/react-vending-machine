import { Link } from "react-router-dom";

const APPLE_IMG =
  "https://giphy.com/clips/studiosoriginals-dancing-OC2wa83DbTTaCO9MUS";
const APPLE_LINK2 =
  "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTRpcGpxcWlxdXVicThodTd3MGg2dnFhOHk4bWQ4cmU0bHpnazZ0eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26xBPapqZgN5M1KrC/giphy.gif";

/** Apple component: show apples dancing
 *
 *Router -> Apple NOTE: router? App? what do we put here
 */
function Apple() {
  return (
    <div>
      <img
        src={APPLE_LINK2}
        alt="apples dancing"
      />
      <h2> You bought an apple!! So healthy!</h2>
      <Link to="/"> BUY MORE </Link>
    </div>
  );
}

export default Apple;
