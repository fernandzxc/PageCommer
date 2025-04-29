// import Background from "./Components/Background";
import Header from "./Components/Header";
import Section_1 from "./Components/Section_1";
import Section_2 from "./Components/Section_2";
import "./assets/css/estilo.css";

const App = () => {
  return (
    <div>
      <div className="fixed w-full h-screen border-[16px] border-white"></div>
      <div className="img_block p-4 h-lvh">
        <div className="bg-[url('./assets/img/Wallpaper2.jpg')] object-contain bg-cover bg-center h-full">
          <Header />
        </div>
      </div>
      <Section_1 />
      <Section_2 />
    </div>
  );
};

export default App;
