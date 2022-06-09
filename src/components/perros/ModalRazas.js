import "./Razas"
import "./ModalRazas.css"
function ModalRazas(props){
    return(
        <div className="modal fade" id={props.propModal1} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{props.propModal3}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src={props.propModal6} className="card-img-top mx-auto d-block mb-2"  alt={props.propModal3} />
              <h3 className="modal-subtittle">Información:</h3><p>{props.propModal5}</p>
              <h3 className="modal-subtittle">Personalidad:</h3><p>{props.propModal7}</p>
              <h3 className="modal-subtittle">Tamaño:</h3><p>{props.propModal9}</p>
              <h3 className="modal-subtittle">Vida:</h3><p>{props.propModal8}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    );
}
export default ModalRazas