import React, { useState } from "react"; 
import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; 

const ContactPage = () => { 
  const [form, setForm] = useState({ name: "", message: "" }); 
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value }); 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    alert(`Mensaje enviado por: ${form.name}`); 
  }; 
  
  return ( 
    <div className="container my-5"> 
      <h2>Contacto</h2> 
      <form onSubmit={handleSubmit}> 
        <div className="form-group"> 
          <input type="text" name="name" placeholder="Nombre" onChange={handleChange} className="form-control" required /> 
        </div> 
        <div className="form-group"> 
          <textarea name="message" placeholder="Mensaje" onChange={handleChange} className="form-control" required ></textarea> 
        </div> 
        <button type="submit" className="btn btn-success mt-3"> Enviar </button> 
      </form> 
      <div className="social-media mt-4"> 
        <h4>Síguenos en nuestras redes sociales:</h4> 
        <div className="social-icons"> 
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> 
            <FaFacebook size={40} style={{ margin: "0 10px", color: "#3b5998" }} /> 
          </a> 
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> 
            <FaInstagram size={40} style={{ margin: "0 10px", color: "#E4405F" }} /> 
          </a> 
          <a href="mailto:tuempresa@gmail.com" target="_blank" rel="noopener noreferrer"> 
            <FaEnvelope size={40} style={{ margin: "0 10px", color: "#D44638" }} /> 
          </a> 
          <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer"> 
            <FaPhoneAlt size={40} style={{ margin: "0 10px", color: "#4CAF50" }} /> 
          </a> 
        </div> 
      </div> 
    </div> 
  ); 
}; 

export default ContactPage;
