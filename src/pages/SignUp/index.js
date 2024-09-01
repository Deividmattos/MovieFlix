import { useState } from "react";
import logo from "../../assets/film-projector_200px.png";
import { Link } from "react-router-dom";

export default function SingUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name !== "" && email !== "" && password !== "") {
      console.log("Fazendo Cadastro");
    }
  }

  return (
    <div className="container">
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Logo do Site de filmes" />
        </div>

        <form onSubmit={handleSubmit}>
          <h1>New account</h1>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="***********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
