import "./Razas.css"
import ModalRazas from "./ModalRazas"
function Razas (props){
    return(
        <div>
            <div className="col">
                <div className="card text-center">
                    <img src={props.prop2} className="card-img-top mx-auto d-block"  alt={props.prop3} />
                    <div className="card-body">
                        <h5 className="card-title">{props.prop3}</h5>
                        <p className="card-text">{props.prop4} </p>
                        <div class="d-grid gap-2">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${props.prop1}`}>
                            Ver más
                        </button></div>
                    </div>
                </div>
                <ModalRazas
                propModal1={`id${props.prop1}`}
                propModal2={props.prop2}
                propModal3={props.prop3}
                propModal4={props.prop4}
                propModal5={props.prop5}
                propModal6={props.prop6}
                propModal7={props.prop7}
                propModal8={props.prop8}
                propModal9={props.prop9}
                />
            </div>
        </div>
    );
}
export default Razas;