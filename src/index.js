import Developer from './developer';

const developer = new Developer('Jon','Bon');
let nameDev = document.getElementById("developer");
let date = new Date();

nameDev.innerHTML = developer.userFirstName() + ' ' + developer.userLastName();
nameDev.onclick = function() {
    document.getElementById("date").innerHTML = date.getDate() +'/'+ (date.getMonth()+1) +'/'+ date.getFullYear();
}