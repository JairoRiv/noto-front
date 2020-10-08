import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <a className="logo">
          <img src="/logo.svg" alt="noto logo" />
          <p>Noto</p>
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <a href="#">Crear Nota</a>
          </li>
          <li>
            <a href="#">iniciar sesión</a>
          </li>
          <li>
            <a href="#">registrarse</a>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        header {
          height: 57px;
          width: 100%;
          display: flex;
          justify-content: space-around;
          background-color: #fdfbfb;
        }
        .logo {
          display: flex;
          align-items: center;
        }
        img {
          height: 42px;
          margin: 0 20px;
        }
        p {
          color: #1e530b;
          font-weight: bold;
          font-size: 34px;
        }
        nav {
          width: 70%;
        }
        ul {
          display: flex;
          justify-content: space-around;
        }
        li {
          list-style: none;
          text-transform: uppercase;
        }
        ul li:nth-child(3) {
          border: solid 2px #f5576c;
          border-radius: 50px;
          padding: 2px 10px;
        }
        ul li:nth-child(1) {
          border: solid 2px #1e530b;
          border-radius: 50px;
          padding: 2px 10px;
        }
      `}</style>
    </header>
  );
};

export default Header;
