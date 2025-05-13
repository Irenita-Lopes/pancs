import pancs from "../../mocks/listaPancs";
import './index.css';

function ListaPancs() {
    return (
        <>
            {
                pancs.map(panc => {
                    return (
                        <div key={panc.id} className="panc-card">
                            <img src={panc.imagem} alt={panc.nomePopular} className="imagem-panc" />
                            <h2>{panc.nomePopular}</h2>
                            <h3>{panc.nomeCientifico}</h3>
                            <p>{panc.descricao}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ListaPancs;