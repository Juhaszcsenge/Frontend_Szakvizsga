import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formState, setFormState] = useState<ContactFormState>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <Container className="contact">
    <section  id="connect">
        <div className="algin-items-center">
          <Row>
          <Col md={6}>
                <img className="contact-image" src="./ham.jpg" alt="" style={{width:"450px", height:"300px"}}></img>
                </Col>
                <Col md={6}>
                <form onSubmit={handleSubmit}>
        <label>
            Név:
            <input type="text" name="name" value={formState.name} onChange={handleChange} />
        </label>
        <br />
        <label>
            E-mail:
            <input type="email" name="email" value={formState.email} onChange={handleChange} /> 
        </label>
        <br />
        <label>
            Üzenet:
            <textarea name="message" value={formState.message} onChange={handleChange} />
        </label>
        <button type="submit">Küldés</button>
      
    </form>
                </Col>
          </Row>
        </div>
    </section>
    </Container>
  );
};

export default ContactForm;