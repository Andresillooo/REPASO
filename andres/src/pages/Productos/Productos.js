import React from 'react';
import { Link } from 'react-router-dom';
import './Productos.css';

// Componente de Producto individual
function Producto(props) {
  return (
    <div className="producto">
      <div className="producto__img-container">
        <img src={props.src} alt={props.alt} className="producto__img" />
      </div>
      <div className="productDescription">
        <h3 className="producto__title">{props.novidade}</h3>
        <span className="producto__price">{props.price}</span>
      </div>
      <button className="producto__btn">Agregar al carrito</button>
    </div>
  );
}

// Componente de la sección de Productos
function ProductosSection() {
  // Información de los productos
  const productos = [
    {
      src: 'https://smselectronic.com/wp-content/uploads/2023/05/SM-S918B_Black_01-600x600.jpg',
      alt: 'Samsumg S23 Ultra',
      novidade: 'Samsumg S23 Ultra',
      price: '$3.400.000'
    },
    {
      src: 'https://dobleclicknet.com/wp-content/uploads/2022/12/JBL-FLIP-6-3.png',
      alt: 'Otro producto',
      novidade: 'Parlante JBL',
      price: '$100.000'
    },
    // Agrega más objetos de producto aquí si es necesario
    {
      src: 'https://ih1.redbubble.net/image.3502330816.4960/icr,iphone_14_tough,back,a,x600-pad,600x600,f8f8f8.u5.jpg',
      alt: 'Otro producto',
      novidade: 'Forro IPhone',
      price: '$80.000'
    },
    {
      src: 'https://falabella.scene7.com/is/image/FalabellaCO/22278187_1?wid=800&hei=800&qlt=70',
      alt: 'Otro producto',
      novidade: 'Mouse Logitech G305',
      price: '$196.000'
    },
    {
      src: 'https://www.ktronix.com/medias/6941812746165-001-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w5MzM5OHxpbWFnZS93ZWJwfGFHUTNMMmhqT0M4eE5ETTJOVGt3TXpneE5EWTROaTgyT1RReE9ERXlOelEyTVRZMVh6QXdNVjh4TkRBd1YzZ3hOREF3U0F8NGQzN2IwOGQ5OWYwMWI0MjdiZDBjNjc4NTFmOTgwNjE5ZTcyZGQzMzFhOTFiODBjYmZkYzQ1YTlhMzY0YjY3MQ',
      alt: 'Otro producto',
      novidade: 'Audifonos Inalambricos Xiaomi',
      price: '$170.000'
    },
    {
      src: 'https://altagamadigital.com/wp-content/uploads/2023/10/0-600x600-8.jpg',
      alt: 'Otro producto',
      novidade: 'Teclado mecanico ',
      price: '$200.000'
    },
  ];

  // Renderizar la sección de Productos
  return (
    <section className="ProductosSection">
      <header className="header">
        <Link to="/" className="btn-atras">Volver atrás</Link>
        <button className="btn-cerrar-sesion">Cerrar sesión</button>
      </header>
      <main className="mainProductos">
        <h2>Productos</h2>
        <section className="containerProductos">
          {/* Mapear cada producto y renderizarlo */}
          {productos.map((producto, index) => (
            <Producto
              key={index}
              src={producto.src}
              alt={producto.alt}
              novidade={producto.novidade}
              price={producto.price}
            />
          ))}
        </section>
      </main>
    </section>
  );
}

export default ProductosSection;
