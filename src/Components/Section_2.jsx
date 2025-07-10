import model16 from "/src/assets/img/Model-16.jpg";
import model161 from "/src/assets/img/Model-16.1.jpg";
import model15 from "/src/assets/img/Model-15.jpg";
import model151 from "/src/assets/img/Model-15.1.jpg";
import model14 from "/src/assets/img/Model-14.jpg";
import model141 from "/src/assets/img/Model-14.1.jpg";
import model13 from "/src/assets/img/Model-13.jpg";
import model131 from "/src/assets/img/Model-13.1.jpg";
import model12 from "/src/assets/img/Model-12.jpg";
import model121 from "/src/assets/img/Model-12.1.jpg";
import model10 from "/src/assets/img/Model-10.jpg";
import model101 from "/src/assets/img/Model-10.1.jpg";
import model9 from "/src/assets/img/Model-9.jpg";
import model91 from "/src/assets/img/Model-9.1.jpg";
import model8 from "/src/assets/img/Model-8.jpg";
import model81 from "/src/assets/img/Model-8.1.jpg";
import model7 from "/src/assets/img/Model-7.jpg";
import model71 from "/src/assets/img/Model-7.1.jpg";
import model6 from "/src/assets/img/Model-6.jpg";
import model61 from "/src/assets/img/Model-6.1.jpg";
import model5 from "/src/assets/img/Model-5.jpg";
import model51 from "/src/assets/img/Model-5.1.jpg";
import model4 from "/src/assets/img/Model-4.jpg";
import model41 from "/src/assets/img/Model-4.1.jpg";
import model3 from "/src/assets/img/Model-3.jpg";
import model31 from "/src/assets/img/Model-3.1.jpg";
import model1 from "/src/assets/img/Model-1.jpg";
import model11 from "/src/assets/img/Model-1.1.jpg";
import model04 from "/src/assets/img/Model-0.4.jpg";
import model05 from "/src/assets/img/Model-0.5.jpg";
import model2 from "/src/assets/img/Model-2.jpg";
import model21 from "/src/assets/img/Model-2.1.jpg";
import Products from "./Products";

const Section_2 = () => {
  return (
    <div className="p-9">
      <div className="text-center pb-11">
        <h1 className="text-4xl font-extrabold">SPRING SUMMER 2025</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <Products
          nombre="BLUSA NEW SONIA"
          id={1}
          precio="$50"
          hover={model161}
          normalImg={model16}
        />
        <Products
          nombre="BLUSA NEW SONIA"
          id={2}
          precio="$150"
          hover={model151}
          normalImg={model15}
        />
        <Products
          nombre="BLUSA NEW SONIA"
          id={3}
          precio="$350"
          hover={model141}
          normalImg={model14}
        />
        <Products
          nombre="BLUSA NEW SONIA"
          id={4}
          precio={"$100"}
          hover={model131}
          normalImg={model13}
        />
        <Products
          nombre="BLUSA NEW SONIA"
          id={5}
          precio={"$100"}
          hover={model121}
          normalImg={model12}
        />
        <Products
          nombre="BLUSA NEW SONIA"
          id={6}
          precio={"$400"}
          hover={model101}
          normalImg={model10}
        />
        <Products
          nombre="BLUSA NEW SONIA"
          id={7}
          precio={"$500"}
          hover={model91}
          normalImg={model9}
        />
        <Products
          nombre="BLUSA NEW SONIA"
          id={8}
          precio={"$80"}
          hover={model81}
          normalImg={model8}
        />
        <Products
          nombre="BLUSA NEW SONIA"
          id={9}
          precio={"$250"}
          hover={model71}
          normalImg={model7}
        />
        <Products
          nombre="BLUSA NEW SONIA"
          id={10}
          precio={"$300"}
          hover={model61}
          normalImg={model6}
        />
        <Products
          nombre="BLUSA NEW SONIA"
          id={11}
          precio={"$1,000"}
          hover={model51}
          normalImg={model5}
        />
        <Products
          nombre="BLUSA NEW SONIA"
          id={12}
          precio={"$2,000"}
          hover={model41}
          normalImg={model4}
        />
        <Products
          nombre="BLUSA NEW SONIA"
          id={13}
          precio={"$600"}
          hover={model31}
          normalImg={model3}
        />
        <Products
          nombre="BLUSA NEW SONIA"
          id={14}
          precio={"$700"}
          hover={model11}
          normalImg={model1}
        />
        <Products
          nombre="BLUSA NEW SONIA"
          id={15}
          precio={"$400"}
          hover={model05}
          normalImg={model04}
        />
        <Products
          nombre="BLUSA NEW SONIA"
          id={16}
          precio={"$50"}
          hover={model21}
          normalImg={model2}
        />
      </div>
    </div>
  );
};

export default Section_2;
