import Developer from './developer';

const developer = new Developer('Jon' , 'Bon');
const nameDev = document.getElementById('developer');
const date = new Date();

nameDev.innerHTML = developer.userFirstName() + ' ' + developer.userLastName();
nameDev.onclick = function() {
    document.getElementById('date').innerHTML = date.getDate() +'/'+ (date.getMonth()+1) +'/'+ date.getFullYear();
}