import React, { Children } from "react";
import Page from "../Layout/Page";
import "./Register.css";

function Register() {
  return (
    <Page>
      <h1>Send inn mangler</h1>
      <form className="form">
        <FormElementTextArea>
          <label>Beskriv mangler</label>
          <textarea name="mangler"></textarea>
        </FormElementTextArea>

        <FormElement>
          <label>Sendt inn av</label>
          <input type="text" required></input>
        </FormElement>
        <div className="submit">
          <input type="submit" value="Send inn" />
        </div>
      </form>
    </Page>
  );
}

const FormElement = (props: any) => {
  return (
    <div className="formElementWrapper">
      <div className="formElementName">
        {React.Children.toArray(props.children)[0]}
      </div>
      <div className="formElementInput commonInput">
        {React.Children.toArray(props.children)[1]}
      </div>
    </div>
  );
};

const FormElementTextArea = (props: any) => {
  return (
    <div className="formElementWrapper">
      <div className="formElementName">
        {React.Children.toArray(props.children)[0]}
      </div>
      <div className="formElementInput textArea">
        {React.Children.toArray(props.children)[1]}
      </div>
    </div>
  );
};

export default Register;
