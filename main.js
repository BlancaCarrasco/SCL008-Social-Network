//inicialización firebase
//llamado a las rutas

let mainText = document.getElementById('mainText');

let submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', () => {

    let firebaseRef = firebase.database().ref();

    firebaseRef.child('Text').set('Some Value');

})