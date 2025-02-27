import { ENDominios } from './geomorfor/dominios'
import { ENMapeamento } from './geomorfor/mapeamento'

function ENGeomorfologia(){
    return(
        <>
           <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a className="nav-item nav-link active" id="nav-mapeamento-tab" data-toggle="tab" href="#nav-mapeamento" role="tab" aria-controls="nav-mapeamento" aria-selected="true">Contexto Teórico do Mapeamento</a>
            <a className="nav-item nav-link" id="nav-geomorfologicos-tab" data-toggle="tab" href="#nav-geomorfologicos" role="tab" aria-controls="nav-geomorfologicos" aria-selected="false">Dominios Geomorfológicos</a>
            </div>
        </nav>
            <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-mapeamento" role="tabpanel" aria-labelledby="nav-mapeamento-tab">
                <ENMapeamento />
            </div>
            <div className="tab-pane fade" id="nav-geomorfologicos" role="tabpanel" aria-labelledby="nav-geomorfologicos-tab">
                <ENDominios />
            </div>
            </div>
        </>
    )
}


export default ENGeomorfologia