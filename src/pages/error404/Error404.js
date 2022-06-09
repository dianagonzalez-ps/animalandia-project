import "../../index.css"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Razas from "../../components/perros/Razas";
import { getAllPerros } from "../../components/perros/perros";

function Error404 (){
    const perros=getAllPerros();
    return(
        <div>
            <Header />
            <Navbar />
        <div className="container mb-5">
            
            <div className="row">
                <h1 className="text-center mt-4 fw-bold">Razas</h1>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        perros.map(p=>(
                            <Razas 
                            prop1={p.id}
                            prop2={p.thumbnail}
                            prop3={p.raza}
                            prop4={p.descripcion}
                            prop5={p.acercade}
                            prop6={p.imagen}
                            prop7={p.detalle}
                            prop8={p.vida}
                            prop9={p.tamaño}/>
                        ))
                    }
                </div>
            </div> 
        </div>
        <Footer />
        </div>
    );
}
export default Error404