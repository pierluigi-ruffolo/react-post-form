import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [post, setPost] = useState([]);
  const [formData, setFormData] = useState({
    autore: "",
    titolo: "",
    descrizione: "",
    pubblico: false,
  });

  function onChangeInput(event) {
    const { name, type, value, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setPost((precedente) => [...precedente, formData]);
    setFormData({
      autore: "",
      titolo: "",
      descrizione: "",
      pubblico: false,
    });
  }

  return (
    <>
      <header className="p-3 bg-secondary-subtle">
        <h1 className="text-center">BLOG POST</h1>
      </header>
      <div className="container mt-5">
        {/* inzio form */}
        <h2>Aggiungi un post...</h2>
        <form className="mt-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="autore" className="form-label fs-5">
              Autore post
            </label>
            <input
              type="text"
              className="form-control"
              id="autore"
              name="autore"
              value={formData.autore}
              onChange={onChangeInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Titolo" className="form-label fs-5">
              Titolo
            </label>
            <input
              type="text"
              className="form-control"
              id="Titolo"
              name="titolo"
              value={formData.titolo}
              onChange={onChangeInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="descrizione" className="form-label fs-5">
              Testo post
            </label>
            <input
              type="text"
              className="form-control fs-5"
              id="descrizione"
              name="descrizione"
              value={formData.descrizione}
              onChange={onChangeInput}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="pubblico"
              name="pubblico"
              checked={formData.pubblico}
              onChange={onChangeInput}
            />
            <label className="form-check-label fs-5" htmlFor="pubblico">
              Pubblica
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Aggiungi
          </button>
        </form>
        {/* fine form */}
      </div>
    </>
  );
}

export default App;
