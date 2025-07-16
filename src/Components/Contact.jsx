import Header from "./Header";
import Footer from "./Footer";
import fashion from "/src/assets/img/fashion.jpg"

const Contact = () => {
  return (
    <div>
      <Header />

      <main>
        <div className="pt-28 p-9">
          <h1 className="text-2xl pb-4">Quienes Somos</h1>
          <p>
            En Atelier Urbano, creemos que la moda es una expresión personal
            accesible para todos. Somos una tienda online dedicada a ofrecerte
            las últimas tendencias en ropa, cuidadosamente seleccionadas para
            que encuentres ese atuendo perfecto que te haga sentir seguro y a la
            moda. Desde piezas básicas para tu día a día hasta conjuntos
            llamativos para ocasiones especiales, nuestro compromiso es
            brindarte una experiencia de compra sencilla y satisfactoria, con
            prendas de calidad que se adaptan a tu estilo de vida. Nos apasiona
            la moda y queremos compartir esa pasión contigo, ayudándote a
            construir un guardarropa versátil y lleno de personalidad,
            directamente desde la comodidad de tu hogar.
          </p>
          <figure>
            <img src={fashion} />
          </figure>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
