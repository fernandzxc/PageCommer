import model311 from "/src/assets/img/Model-1061.webp";
import model3111 from "/src/assets/img/Model-106.webp";
import model301 from "/src/assets/img/Model-1051.webp";
import model30 from "/src/assets/img/Model-105.webp";
import model291 from "/src/assets/img/Model-1041.webp";
import model29 from "/src/assets/img/Model-104.webp";
import model281 from "/src/assets/img/Model-1031.webp";
import model28 from "/src/assets/img/Model-103.webp";
import model271 from "/src/assets/img/Model-1021.webp";
import model27 from "/src/assets/img/Model-102.webp";
import model261 from "/src/assets/img/Model-1011.webp";
import model26 from "/src/assets/img/Model-101.webp";
import model251 from "/src/assets/img/Model-92.webp";
import model25 from "/src/assets/img/Model-91.webp";
import model241 from "/src/assets/img/Model-82.webp";
import model24 from "/src/assets/img/Model-81.webp";
import model231 from "/src/assets/img/Model-72.webp";
import model23 from "/src/assets/img/Model-71.webp";
import model221 from "/src/assets/img/Model-62.webp";
import model22 from "/src/assets/img/Model-61.webp";
import model211 from "/src/assets/img/Model-52.webp";
import model201 from "/src/assets/img/Model-51.webp";
import model191 from "/src/assets/img/Model-42.webp";
import model19 from "/src/assets/img/Model-41.webp";
import model181 from "/src/assets/img/Model-32.webp";
import model18 from "/src/assets/img/Model-31.webp";
import model171 from "/src/assets/img/Model-22.webp";
import model17 from "/src/assets/img/Model-21.webp";
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
import Header from "./Header";
import Footer from "./Footer";
import Products from "./Products";

const AllProducts = () => {
  return (
    <div>
      <Header />
      <main className="pt-28 p-9">
        <h1 className="text-2xl pb-4">Coleccion Otoño Invierno 2025</h1>
        <div>
          <div className="grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-5 ">
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
            <Products
              nombre="BLUSA NEW SONIA"
              id={17}
              precio={"$80"}
              hover={model281}
              normalImg={model28}
            />
            <Products
              nombre="BLUSA NEW SONIA"
              id={18}
              precio={"$250"}
              hover={model271}
              normalImg={model27}
            />
            <Products
              nombre="BLUSA NEW SONIA"
              id={19}
              precio={"$300"}
              hover={model261}
              normalImg={model26}
            />
            <Products
              nombre="BLUSA NEW SONIA"
              id={20}
              precio={"$1,000"}
              hover={model251}
              normalImg={model25}
            />
            <Products
              nombre="BLUSA NEW SONIA"
              id={21}
              precio={"$2,000"}
              hover={model241}
              normalImg={model24}
            />
            <Products
              nombre="BLUSA NEW SONIA"
              id={22}
              precio={"$600"}
              hover={model231}
              normalImg={model23}
            />
            <Products
              nombre="BLUSA NEW SONIA"
              id={23}
              precio={"$700"}
              hover={model221}
              normalImg={model22}
            />
            <Products
              nombre="BLUSA NEW SONIA"
              id={24}
              precio={"$400"}
              hover={model211}
              normalImg={model201}
            />
            <Products
              nombre="BLUSA NEW SONIA"
              id={25}
              precio={"$50"}
              hover={model191}
              normalImg={model19}
            />
            <Products
              nombre="BLUSA NEW SONIA"
              id={26}
              precio={"$80"}
              hover={model181}
              normalImg={model18}
            />
            <Products
              nombre="BLUSA NEW SONIA"
              id={27}
              precio={"$250"}
              hover={model171}
              normalImg={model17}
            />
            <Products
              nombre="BLUSA NEW SONIA"
              id={28}
              precio={"$600"}
              hover={model311}
              normalImg={model3111}
            />
            <Products
              nombre="BLUSA NEW SONIA"
              id={29}
              precio={"$700"}
              hover={model301}
              normalImg={model30}
            />
            <Products
              nombre="BLUSA NEW SONIA"
              id={30}
              precio={"$400"}
              hover={model291}
              normalImg={model29}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllProducts;
