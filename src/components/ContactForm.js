import React, { useState } from 'react';

const ContactForm = ({ addContact }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ nombre, apellido, telefono });
    setNombre('');
    setApellido('');
    setTelefono('');
  };

  return (
    
    <form id="form" class="col-4 p-3" onSubmit={handleSubmit}>
      <div class="form-floating mb-3">
        <label for="nombre">Nombre:</label>
        <input name="nombre" type="text" class="form-control" id="Nombre" placeholder="Ex: Juana" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      </div>
      <div class="form-floating mb-3">
        <label for="apellido">Apellido:</label>
        <input name="apellido" type="text" class="form-control" id="Nombre" placeholder="Ex: Juana"value={apellido} onChange={(e) => setApellido(e.target.value)} required />
      </div>
      <div class="form-floating mb-3">
        <label for="telefono">Teléfono:</label>
        <input name="telefono" type="text" class="form-control" id="Nombre" placeholder="Ex: Juana" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
      </div>
      <button type="submit" class="btn btn-primary">Agregar Contacto</button>
    </form>
  );
};

export default ContactForm;