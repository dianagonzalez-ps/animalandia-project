import "../../index.css"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

function Home (){
    return(
        <div>
            <Header />
            <Navbar />
            <Footer />
        </div>
    );
}
export default Home