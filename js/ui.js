// essa funcao seleciona o row (que esta no index)
// para depois desenhar todos os cards la
const tecnicos = document.querySelector('.tecnicos');

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {edge:'left'});;
    // formulario para adicionar Area
	const forms = document.querySelectorAll('.side-form');
	var instances2 = M.Sidenav.init(forms, {edge:'right'});
  });

//funcao para desenhar o card da receita na tela
//id, nome, descricao, endereco_imagem
const desenhaCard = (data, id) => {

    const html = `
  <div class="col s12 m6 l3  " data-id="${id}">
	    <div class="card" style="background-color: #A59C94FF;">
		    <div class="card-image area-imagem">
	            <img src="images/${data.Endereco_imagem}">
	            <span class="card-title Area-Nome">"${data.Area}"</span>
	        </div>
	        <div class="card-content Area-Descricao">
	            <p>"${data.Descricao}"</p>
	        </div>
	        <div class="area-deletar">
                <i class="material-icons" data-id="${id}">delete_outline</i>
            </div>
	    </div>
   </div>`;
    sobremesas.innerHTML += html;

};
