import React from "react";

const FormNetlify = () => {
  return (
    <form
      name="contacto"
      method="POST"
      data-netlify="true"
      netlify="true"
      action="/"
      hidden
    >
      <input type="hidden" name="form-name" value="contacto" hidden />
      <input type="text" name="NOMBRE" />
      <input type="text" name="APELLIDO" />
      <input type="email" name="EMAIL" />
      <input type="text" name="DIRECCION" />
      <input type="text" name="PAIS" />
      <input type="text" name="PHONE" />
      <input type="text" name="COMPANY" />
      <input type="text" name="PUESTO" />
      <input type="text" name="MENSAJE" />
    </form>
  );
};

export default FormNetlify;
