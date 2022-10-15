import React from "react";
import Button from "./Button";
import Input from "./Input";

function Form() {
  return (
    <form>
      <p>
        <Input label='Nome'/>
      </p>

      <p>
        <Input label='Senha' />
      </p>
      <p>
        <Input label='Email'/>
      </p>
      <Button />
    </form>
  );
}

export default Form;
