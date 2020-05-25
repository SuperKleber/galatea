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
      <input type="text" name="FNAME" />
      <input type="text" name="LNAME" />
      <input type="email" name="EMAIL" />
      <input type="text" name="ADDRESS[country]" />
      <input type="text" name="ADDRESS[country]" />
      <input type="text" name="ADDRESS[country]" />
      <input type="text" name="PHONE" />
      <input type="text" name="COMPANY" />
      <input type="text" name="PUESTO" />
      <input type="text" name="MESSAGE" />
    </form>
  );
};

export default FormNetlify;
