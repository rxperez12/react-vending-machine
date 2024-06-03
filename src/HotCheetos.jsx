import { Link } from "react-router-dom";

const HOT_CHEETOS = "https://media.giphy.com/media/zplnsLhEhGIlWDTO1u/giphy.gif?cid=790b761151epbelwo97l0xc4cqhau5e9684mpctpj4n88zou&ep=v1_gifs_search&rid=giphy.gif";

function HotCheetos() {
  return (
    <div>
      <h2>HOT HOT HOT</h2>
      <img src={HOT_CHEETOS} alt="Chester Cheetah with cheetos" />
      <Link to="/"> BUY MORE </Link>
    </div>
  );
}

export default HotCheetos;