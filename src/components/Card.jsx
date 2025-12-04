export default function Card({ post }) {
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title fs-3">{post.titolo}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary fs-4">
            {post.autore}
          </h6>
          <p className="card-text fs-5">{post.descrizione}</p>
          {post.pubblico === false ? (
            <p>Da non pubblicare</p>
          ) : (
            <p>Da pubblicare</p>
          )}
        </div>
      </div>
    </div>
  );
}
