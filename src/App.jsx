import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Card from "./components/Card";

const inputObject = {
  autore: "",
  titolo: "",
  descrizione: "",
  pubblico: false,
};

function App() {
  const [post, setPost] = useState([]);
  const [formData, setFormData] = useState(inputObject);

  function onChangeInput(event) {
    const { name, type, value, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("form inviato");
    if (
      formData.autore === "" ||
      formData.titolo === "" ||
      formData.descrizione === "" ||
      !isNaN(formData.autore) ||
      !isNaN(formData.titolo) ||
      !isNaN(formData.descrizione)
    ) {
      console.log("inserisci input validi");

      return;
    } else {
      setPost((precedente) => [...precedente, formData]);
      setFormData(inputObject);
    }
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
        <div className="row mt-5">
          {post.length === 0 ? (
            <h5>Inserisci un post</h5>
          ) : (
            post.map((posts, index) => <Card post={posts} key={index} />)
          )}
        </div>
      </div>
    </>
  );
}

export default App;
