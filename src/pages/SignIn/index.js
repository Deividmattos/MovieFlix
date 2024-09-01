import { useState } from "react";
import "./signin.css";
import logo from "../../assets/film-projector_200px.png";
import { Link } from "react-router-dom";

export default function Singnin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Logo do Site de filmes" />
        </div>

        <form>
          <h1>Entrar</h1>
          <input
            type="text"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" value="Access">
            Access
          </button>
        </form>
        <Link to="/register">Create an account</Link>
      </div>
    </div>
  );
}
