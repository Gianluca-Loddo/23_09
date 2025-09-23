// src/components/Card.jsx
export default function Card({ title, description, imageUrl }) {
    // Le props sono passate come oggetto destrutturato, in modo da poterle usare direttamente
    // senza dover scrivere props.title, props.description, ecc.

  return (
    <div className="card">

        {/** In JSX, le graffe {} servono per inserire codice JavaScript dentro l’HTML. 
             Quello che c’è dentro le graffe non è markup puro, ma espressioni JS. 
             motivo per cui prima di ogni espressione JS dobbiamo usare le graffe. */}

      {imageUrl && ( // Mostra l'immagine solo se imageUrl è definito (non è null, undefined, false o una stringa vuota), altrimenti non mostra nulla
        <img className="card-image" src={imageUrl} alt={title} />
      )}
      <div className="card-body">
        <h3 className="card-title">{title}</h3> {/** Usare le graffe per inserire il valore della prop title */}
        <p className="card-description">{description}</p> {/** Usare le graffe per inserire il valore della prop description */}
        <button className="card-button" onClick={() => alert(`Hai cliccato: ${title}`)}>
          Apri
        </button>
      </div>
    </div>
  );
}
