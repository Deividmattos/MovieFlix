import { useState } from "react";
import logo from "../../assets/film-projector_200px.png";
import { Link } from "react-router-dom";

export default function SingUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Logo do Site de filmes" />
        </div>

        <form action="">
          <h1>New account</h1>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onchange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="email@email.com"
            value={email}
            onchange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="***********"
            value={password}
            onchange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" value="Access">
            Register
          </button>
        </form>
        <Link to="/">Already have an account? Log in</Link>
      </div>
    </div>
  );
}
