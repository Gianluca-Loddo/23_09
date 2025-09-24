/*
──────────────────────────────────────────────────────────────────────────────
NOTE PER LO STUDIO (React, App.jsx)

1) Import/Export ≠ Genitore/Figlio
   - import/export: solo per riutilizzare codice tra file (grafo dei moduli).
   - genitore/figlio: deciso da CHI RENDERIZZA CHI nel JSX (albero dei componenti).
   - Se App nel suo return contiene <Card />, allora App è GENITORE e Card è FIGLIO,
     a prescindere dal fatto che App "importi" Card.
     Esempio albero: <App> → <Card>

2) Props (properties)
   - Sono i dati di INGRESSO che il genitore passa al figlio via attributi JSX.
     <Card title="Batman" description="..." imageUrl="/img/batman.jpg" />
     (concettualmente React chiama: Card({ title:"Batman", description:"...", imageUrl:"..." }))
   - Nel figlio si ricevono come oggetto "props" oppure via destructuring:
       function Card({ title, description, imageUrl }) { ... }
   - Le props sono di SOLA LETTURA nel figlio (non vanno mutate).

3) Liste e "key"
   - Quando creo liste di componenti uso .map sugli array:
       {cards.map(card => <Card key={card.id} title={card.title} ... />)}
   - "key" è speciale per React (serve a riconoscere gli elementi nelle liste),
     NON è una prop normale e NON arriva a Card. Deve essere univoca e stabile (meglio un id).

4) Che cos’è .map
   - È un METODO degli ARRAY di JavaScript (non di React).
     Trasforma ogni elemento in un nuovo valore/elemento, restituendo un NUOVO array.
     In React: dati (array) → elementi JSX.
   - Se cards può essere null/undefined:
       {cards?.map(...)}  // optional chaining
     oppure:
       const safeCards = Array.isArray(cards) ? cards : [];
       {safeCards.map(...)}

5) JSX e graffe { ... }
   - Le graffe dentro il JSX indicano “qui c’è un’espressione JavaScript”.
     Esempi:
       {title}                      // stampo una variabile
       {imageUrl && <img ... />}    // renderizzo condizionalmente (solo se "truthy")

6) style in React (doppie graffe)
   - style accetta un OGGETTO JS, non una stringa CSS:
       <h1 style={{ textAlign: "center", marginTop: 24 }}>...</h1>
     - Prima coppia di graffe: entro in JS
     - Seconda coppia: l’oggetto JS vero e proprio
     - Proprietà in camelCase (textAlign, marginTop) e numeri = px

7) className
   - In JSX si usa className (NON "class"): <div className="grid">...</div>

8) Extra utili
   - Default props via destructuring:
       function Card({ title = "(senza titolo)", description = "—", imageUrl }) { ... }
   - Mantieni le props immutabili nel figlio.
   - Usa id stabili per "key" (evita l’indice dell’array se possibile).

RICAPITOLANDO:

IMPORT/EXPORT = “posso usare il codice di Card in App”; 
GENITORE/FIGLIO = “App rende <Card />”; 
PROPS = “dati che App passa a Card”; 
MAP = “trasforma array di dati in array di <Card />”; 
KEY = “identificatore speciale per liste”; 
{ ... } = “JavaScript dentro JSX”.
──────────────────────────────────────────────────────────────────────────────
*/
