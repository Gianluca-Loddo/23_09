// APP.JSX E' IL COMPONENTE GENITORE CHE PASSA LE PROPS AL COMPONENTE FIGLIO CARD
// src/App.jsx


import Card from "./components/card";

// Array di oggetti, ogni oggetto rappresenta i dati di una card

const cards = [
  {
    id: 1,
    title: "Gatto curioso",
    description: "Questo gatto ama dormire al sole.",
    imageUrl: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Montagna",
    description: "Aria fresca e sentieri tranquilli.",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Caffè",
    description: "Perfetto per iniziare la giornata.",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop"
  },
];

export default function App() {
  // Qui il genitore (App) passa le props (title, description, imageUrl) alla Card
  return ( //restituisce un array di Card con i dati presi dall'array cards JSX (HTML + JS)
    <main>

      {/* style={{ ... }} in React accetta un oggetto JS (non una stringa CSS).
          Le graffe esterne { ... } servono a dire “qui c’è JavaScript dentro il JSX”.
          Le graffe interne sono l’oggetto vero e proprio.
          Le proprietà sono in camelCase (textAlign, non text-align). */}

      <h1 style={{ textAlign: "center", marginTop: 24 }}>Le mie Card</h1>

      {/* Qui inizia la griglia delle card */}

      <div className="grid">

        {/* Qui inizia la mappatura delle card : map trasforma ogni elemento dell'array in un componente Card creando un nuovo array 
          cards.map(card => <Card key={card.id} title={card.title} />)
          // => [<Card .../>, <Card .../>]                                                                                     */}

        {cards.map(card => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </main>
  );
}
