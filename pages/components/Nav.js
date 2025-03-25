import { useRouter } from "next/router";
import Link from "next/link";

const navStyle = {
  display: "flex",
  gap: "30px",
  listStyle: "none",
};

const Nav = () => {
  return (
    <nav>
      <ul style={navStyle}>
        <li>
          <Link href={`/`}>Home</Link>
        </li>
        <li>
          <Link href={`/About`}>About</Link>
        </li>
        <li>
          <Link href={`/Contact`}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
