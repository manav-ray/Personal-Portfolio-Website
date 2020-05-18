// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBnEmR3RvMo6g3xyntfW_5YioeDnsGpUiU",
    authDomain: "ray-portfolio-website.firebaseapp.com",
    databaseURL: "https://ray-portfolio-website.firebaseio.com",
    projectId: "ray-portfolio-website",
    storageBucket: "ray-portfolio-website.appspot.com",
    messagingSenderId: "747452326604",
    appId: "1:747452326604:web:ad7246864f5c65f9ebd869",
    measurementId: "G-DR4M30KZ04"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    saveMessage(name, company, email, phone, message);

    document.querySelector('.alert').style.display = 'block';

    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    document.getElementById('contactForm').reset();

}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}