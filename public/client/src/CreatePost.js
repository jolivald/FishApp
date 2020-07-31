import React from 'react';

const Component = () => {
  const fishes = [ 'Anguille', 'Brême', 'Brochet', 'Carassin', 'Carpe', 'Esturgeon', 'Tanche' ];
  const handleSubmit = event => {
    event.preventDefault();
    const data   = new FormData();
    const inputs = document.querySelectorAll('input, select, textarea', event.target);
    inputs.forEach(input => data.append(
      input.id,
      input.type === 'file' ? input.files[0] : input.value
    ));
    fetch('http://127.0.0.1:8000/api/posts', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => alert('Publication créée avec l\'identifiant: ' + json.id))
      .catch(err => console.error(err));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <input id="firstName" type="text" required placeholder="Prénom"/>
      </div>
      <div className="field">
        <input id="lastName" type="text" required placeholder="Nom"/>
      </div>
      <div className="field">
        <label htmlFor="fishName">Espèce: </label>
        <select id="fishName">
          {fishes.map((fishName, i) => (
            <option key={i}>{fishName}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <input id="fishSize" type="number" required placeholder="Taille"/>
      </div>
      <div className="field">
        <input id="fishWeight" type="number" required placeholder="Poids"/>
      </div>
      <div className="field">
        <label htmlFor="fishImage">Image: </label>
        <input id="fishImage" type="file" required />
      </div>
      <div className="field">
        <textarea id="contents" required placeholder="Message"></textarea>
      </div>
      <div className="field">
        <button className="button is-primary">Envoyer</button>
      </div>
    </form>
  );
};

export default Component;