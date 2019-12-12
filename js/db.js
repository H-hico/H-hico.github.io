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
            desenhaCard(change.doc.data(), change.doc.id);
        }
        if (change.type === 'removed') {
           removeCard(change.doc.id);
        }
    });
});
// adicionar nova area
const form = document.querySelector('form');
form.addEventListener('submit', evt => {
    evt.preventDefault();

    const Tecnico = {
        Area: form.TecnicoNome.value,
        Descricao: form.TecnicoDescricao.value,
        Endereco_imagem: form.TecnicoArquivo.value
    };

    db.collection('Tecnico').add(Tecnico)
        .catch(err => console.log(err));

    //reseta o formulario
    form.TecnicoNome.value = '';
    form.TecnicoDescricao.value = '';
    form.TecnicoArquivo.value = '';

});
// remove a recipe
const sobremesas1 = document.querySelector('.tecnicos');
sobremesas1.addEventListener('click', evt => {
  if(evt.target.tagName === 'I'){
    const id = evt.target.getAttribute('data-id');
    //console.log(id);
    db.collection('Tecnico').doc(id).delete();
  }
})
