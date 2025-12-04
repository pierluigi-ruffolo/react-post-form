import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <header className="p-3 bg-secondary-subtle">
        <h1 className="text-center">BLOG POST</h1>
      </header>
      <div className="container mt-5">
        {/* inzio form */}
        <h2>Aggiungi un post...</h2>
        <form className="mt-3" action="">
          <div className="mb-3">
            <label htmlFor="autore" className="form-label fs-5">
              Autore post
            </label>
            <input type="text" className="form-control" id="autore" />
          </div>
          <div className="mb-3">
            <label htmlFor="Titolo" className="form-label fs-5">
              Titolo
            </label>
            <input type="text" className="form-control" id="Titolo" />
          </div>
          <div className="mb-3">
            <label htmlFor="descrizione" className="form-label fs-5">
              Testo post
            </label>
            <input type="text" className="form-control fs-5" id="descrizione" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="pubblico" />
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
