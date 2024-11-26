import React from "react"; 
import matafuegosImg from '../assets/matafuegos.png'; 

const HeroSection = () => ( 
  <section 
    className="text-white text-center p-5 d-flex justify-content-center align-items-center" 
    style={{
      backgroundImage: `url(${matafuegosImg})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '100vh',
      textAlign: 'center', // Asegura que el texto se centre
    }} 
  > 
    <div>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Bienvenidos a Matafuegos Lembo</h1> 
      <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>Protegiendo lo que más importa</p> 
      <div className="mt-4"> 
        <p style={{ fontSize: '1.25rem' }}>
          Somos una empresa líder con más de 30 años de experiencia en seguridad contra incendios, comprometida con la investigación y adopción de los últimos avances tecnológicos en el sector.
        </p> 
        <p style={{ fontSize: '1.25rem' }}>
          Nos dedicamos a la mejora continua, promoviendo el bienestar y el crecimiento de nuestros colaboradores, quienes son el pilar fundamental de nuestra organización y nuestra misión de excelencia.
        </p> 
      </div> 
    </div>
  </section> 
); 

export default HeroSection;
