// src/components/Card.jsx
export default function Card({ title, description, imageUrl }) // Le props sono passate come oggetto destrutturato

{
  // "title", "description" e "imageUrl" sono le props
  // che il genitore (App) passa. La Card le apre e le mostra.
  return (
    <div className="card">
      {imageUrl && ( // Mostra l'immagine solo se imageUrl è definito, altrimenti non mostra nulla
        <img className="card-image" src={imageUrl} alt={title} />
      )}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button className="card-button" onClick={() => alert(`Hai cliccato: ${title}`)}>
          Apri
        </button>
      </div>
    </div>
  );
}
