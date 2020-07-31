import React from 'react';
import fetch from 'cross-fetch';

const CreateComment = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const date = new Date();
    const inputs = document.querySelectorAll('input, textarea', event.target);
    const data = Array.from(inputs).reduce((acc, input) => {
      acc[input.id] = input.value;
      return acc;
    }, {
      createdAt: date,
      createdBy: 'api platform',
      updatedAt: date,
      updatedBy: 'api platform'
    });
    fetch('http://127.0.0.1:8000/api/comments', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => alert('Commentaire créée avec l\'identifiant: ' + json.id))
      .catch(err => console.error(err));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input id="fistName" type="text" required placeholder="Prénom" />
      </div>
      <div>
        <input id="lastName" type="text" required placeholder="Nom" />
      </div>
      <div>
        <textarea id="contents" required placeholder="Message"></textarea>
      </div>
      <div>
        <button>Envoyer</button>
      </div>
    </form>
  );
};

export default CreateComment;