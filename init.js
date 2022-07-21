
document.querySelector("#generate").onclick = function () {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson[0];
    document.getElementById('surnameOutput').innerText = initPerson[1][0];
    document.getElementById('genderOutput').innerText = initPerson[1][1];
    document.getElementById('otchestvoOutput').innerText = initPerson[1][2];
    document.getElementById('professionOutput').innerText = initPerson[1][3];
    const wasBorn = personGenerator.wasBorn();
    document.getElementById('birthYearOutput').innerText = wasBorn;
};
document.querySelector("#clear").onclick = function () {
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('otchestvoOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
};


