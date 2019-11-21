db.enablePersistence()
    .catch(function(err) {
        if (err.code == 'failed-precondition') {
            console.log('persistance failed');
        } else if (err.code == 'unimplemented') {
            console.log('persistance not available');
        }
    });

db.collection('Tecnico').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
            renderRecipe(change.doc.data(), change.doc.id);
        }
        if (change.type === 'removed') {
        }
    });
});
// adicionar nova area
const form = document.querySelector('form');
form.addEventListener('submit', evt => {
    evt.preventDefault();

    const Tecnico = {
        Area: form.AreaNome.value,
        Descricao: form.AreaDescricao.value,
        Endereco_imagem: form.sobremesaArquivo.value
    };

    db.collection('tecnicos').add(tecnico)
        .catch(err => console.log(err));

    //reseta o formulario
    form.AreaNome.value = '';
    form.sAreaDescricao.value = '';
    form.sobremesaArquivo.value = '';

});
