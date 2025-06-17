// import Background from "./Components/Background";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Section_1 from "./Components/Section_1";
import Section_2 from "./Components/Section_2";
import "./assets/css/estilo.css";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed w-full h-screen border-t-[16px] border-white overflow-hidden"></div>
      <div className="img_block p-4 h-lvh">
        <div className="bg-[url('./assets/img/Wallpaper2.jpg')] object-contain bg-cover bg-center h-full">
          <Header />
        </div>
      </div>
      <Section_1 />
      <Section_2 /> 
      <Footer/>
    </div>
  );
};

export default App;
