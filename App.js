import React, { useState } from "react";

const produits = [
  {id:1,nom:"Coca 33cl",prix:1.2,categorie:"Softs"},
  {id:2,nom:"Oasis 33cl",prix:1.2,categorie:"Softs"},
  {id:3,nom:"Monster 50cl",prix:2.5,categorie:"Énergisants"},
  {id:4,nom:"RedBull 33cl",prix:2.5,categorie:"Énergisants"},
  {id:5,nom:"Sandwich Poulet",prix:3.9,categorie:"Sandwichs"},
  {id:6,nom:"Chips Brets",prix:2.5,categorie:"Snacks"},
  {id:7,nom:"Vodka Poliakov 70cl",prix:17.9,categorie:"Alcool"},
  {id:8,nom:"Whisky Ballantines 70cl",prix:24.9,categorie:"Alcool"}
  // Ajoute les autres produits ici si besoin
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [ageConfirmed, setAgeConfirmed] = useState(false);

  const addToCart = (p) => setCart([...cart, p]);
  const total = cart.reduce((sum,p)=>sum+p.prix,0);

  const categories = ["Softs","Énergisants","Sandwichs","Snacks","Alcool"];

  return (
    <div style={{padding:20, fontFamily:"sans-serif"}}>
      <h1>🚚 Livraison Épicerie</h1>
      {!ageConfirmed && <div style={{border:"1px solid red", padding:10, marginBottom:10}}>
        <p>Vous devez avoir 18 ans pour voir l'alcool.</p>
        <button onClick={()=>setAgeConfirmed(true)}>J'ai 18 ans</button>
      </div>}
      {categories.map(cat => (
        (cat !== "Alcool" || ageConfirmed) &&
        <div key={cat}>
          <h2>{cat}</h2>
          {produits.filter(p=>p.categorie===cat).map(p=>(
            <div key={p.id}>
              {p.nom} - {p.prix.toFixed(2)}€
              <button onClick={()=>addToCart(p)}>Ajouter</button>
            </div>
          ))}
        </div>
      ))}
      <h3>Panier</h3>
      {cart.map((c,i)=><div key={i}>{c.nom}</div>)}
      <p>Total: {total.toFixed(2)}€</p>
      <button onClick={()=>{if(cart.length>0){alert('Commande passée !'); setCart([])}}}>Commander</button>
    </div>
  );
  }
