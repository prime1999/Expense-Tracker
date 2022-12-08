import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

function PagesLinks() {
  return (
    <div className="links">
      <Link style={{ color: "#fff", fontSize: "30px" }} to={"/about"}>
        <p>
          <FaQuestion />
        </p>
      </Link>
    </div>
  );
}

export default PagesLinks;
