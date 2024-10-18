import react from 'react';
import background from './elementos/backgroundimg1.webp';

function Topo(){
    return(
<header >
      <div class="container">
        <div class="row">

          {/* Efeito blur por cima das plantas */}
          <div className="col-4">
              <div className="blured">
                <div className="conteudo-titulo">
                    Site de anão(?)
                </div>
              </div>
          </div>
          
          {/* Imagem das plantas */}
          <div className="col-4">
            <img className="imagem1" src={background} width="100%" height="100%"/>
          </div>
          <div>
            Um textinho aquiii
          </div>
        </div>
      </div>
</header>
    );
}

export default Topo;