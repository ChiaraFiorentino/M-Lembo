import React, { useState, useEffect } from "react"; 
import axios from "axios"; 

import aguaAPresion from "../assets/agua a presion.PNG"; 
import ExtintorBajaPresión from "../assets/ExtintorAguaaBajaPresión.jpg"; 
import anhidridoCarbonico from "../assets/anhidrido carbonico.jpg"; 
import gabinetes from "../assets/gabinetes.jpg"; 
import polvoQuimico from "../assets/polvo quimico.PNG"; 
import solucionQuimicaPulverizada from "../assets/s quimica pulverizada.PNG"; 
import senalizacion from "../assets/señalizacion.PNG"; 
import hcfc123 from "../assets/hcfc-123.jpg"; 
import aguaPulverizada from "../assets/aguaPulverizada.jpg"; 

const ProductList = () => { 
  const [products, setProducts] = useState([]); 
  const [newProduct, setNewProduct] = useState({ 
    name: "", 
    image: "", 
    description: "",
    price: 0,  
  }); 

  const [cart, setCart] = useState([]);  

  useEffect(() => { 
    const defaultProducts = [
      { name: "Agua a presión", image: aguaAPresion, description: "Extintor con agua a presión para fuegos clase A.", price: 50 },
      { name: "Extintor Baja Presión", image: ExtintorBajaPresión, description: "Ideal para incendios de fuegos tipo A.", price: 45 },
      { name: "Anhídrido Carbónico", image: anhidridoCarbonico, description: "Extintor con CO2 para fuegos eléctricos.", price: 60 },
      { name: "Gabinetes", image: gabinetes, description: "Gabinetes de seguridad para equipos de extinción.", price: 80 },
      { name: "Polvo Químico", image: polvoQuimico, description: "Extintor de polvo químico para fuegos tipo A, B y C.", price: 40 },
      { name: "Solución Química Pulverizada", image: solucionQuimicaPulverizada, description: "Extintor de solución química para fuegos tipo B y C.", price: 55 },
      { name: "Señalización", image: senalizacion, description: "Cartelería de seguridad para ambientes industriales.", price: 20 },
      { name: "HCFC-123", image: hcfc123, description: "Extintor con HCFC-123 para protección de equipos electrónicos.", price: 70 },
      { name: "Agua Pulverizada", image: aguaPulverizada, description: "Extintores de agua pulverizada para fuegos de tipo A.", price: 65 },
    ];
    setProducts(defaultProducts); 
  }, []); 

  const handleAddProduct = () => { 
    if (newProduct.name && newProduct.image && newProduct.description && newProduct.price) {
      setProducts([...products, newProduct]); 
      setNewProduct({ name: "", image: "", description: "", price: 0 }); 
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  const handleDeleteProduct = (productToDelete) => {
    const updatedProducts = products.filter(product => product !== productToDelete);
    setProducts(updatedProducts); 
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter(item => item !== product);
    setCart(updatedCart);
  };

  const totalCartValue = cart.reduce((total, product) => total + product.price, 0); 

  return ( 
    <div className="container my-5 main-container"> 
      <h2 style={{ fontWeight: 'bold', color: '#009130' }}>Productos</h2> 

      <div className="mb-4">
        <h3>Agregar Producto</h3>
        <input 
          type="text" 
          placeholder="Nombre del Producto" 
          value={newProduct.name} 
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="form-control mb-2"
        />
        <input 
          type="text" 
          placeholder="URL de la imagen" 
          value={newProduct.image} 
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          className="form-control mb-2"
        />
        <textarea 
          placeholder="Descripción del Producto" 
          value={newProduct.description} 
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          className="form-control mb-2"
        ></textarea>
        <input 
          type="number" 
          placeholder="Precio del Producto" 
          value={newProduct.price} 
          onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
          className="form-control mb-2"
        />
        <button onClick={handleAddProduct} className="btn btn-success">Agregar Producto</button>
      </div>

      <div className="row justify-content-center">
        {products.map((product, index) => (
          <div key={index} className="col-md-4">
            <div className="card product-card" style={{ backgroundColor: "white" }}>
              <img className="card-img-top" src={product.image} alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text" style={{ fontWeight: 'bold' }}>${product.price}</p> 
                <button 
                  className="btn btn-danger mt-2" 
                  onClick={() => handleDeleteProduct(product)}
                  style={{ backgroundColor: "#d9534f", borderColor: "#d9534f" }} 
                >
                  Eliminar Producto
                </button>
                <button 
                  className="btn btn-success mt-2" 
                  style={{ backgroundColor: "#009130", borderColor: "#009130" }} 
                  onClick={() => addToCart(product)} 
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5" style={{ border: '2px solid #009130', borderRadius: '8px', padding: '20px', backgroundColor: '#f9f9f9' }}>
        <h3>Carrito de Compras ({cart.length} productos)</h3>
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price} 
                <button 
                  className="btn btn-danger btn-sm ml-2" 
                  onClick={() => removeFromCart(item)} 
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
        <hr />
        <h4>Total: ${totalCartValue}</h4> 
      </div>
    </div>
  ); 
};

export default ProductList;
