const btn_next_info = document.querySelector('#info > form > .btn_next > button');
const info = document.getElementById('info');
const input_name = document.querySelector('#info > form > #name');
const input_tel = document.querySelector('#info > form > #tel');

const steps = document.querySelector('.btn_return > span');
const btn_next_one = document.querySelector('#step_one > .btn_next > button');
const step_one = document.getElementById('step_one');
const step_two = document.getElementById('step_two');

const procedures = document.getElementById('procedures');
const selection_professionals = document.querySelector('.div_professionals');
const professionals = document.getElementById('professionals');

const days = document.querySelectorAll('.days > button');
const div_hours = document.querySelector('.hours');
const hours = document.querySelectorAll('.hours > button');
const btn_next_two = document.querySelector('#step_two > .btn_next > button');

const step_three = document.getElementById('step_three');
const paragraph = document.querySelector('#step_three > .alert > div');

let _name, procedure, professional, _day, _hour;

input_name.addEventListener('input', () => {
    btn_next_info.disabled = input_name.value.length < 3 || input_tel.value.length < 9;
});

input_tel.addEventListener('input', () => {
    btn_next_info.disabled = input_name.value.length < 3 || input_tel.value.length < 9;
});

btn_next_info.addEventListener('click', () => {
    _name = '';
    procedure = '';
    professional = '';
    _day = '';
    _hour = '';

    procedures.value = 0;

    event.preventDefault();
    info.style.display = 'none';
    step_one.style.display = 'block';
    steps.textContent = '2 de 3';
    _name = input_name.value;
    changeProcedures();
});

function changeProcedures() {
    procedure = '';
    professional = '';
    _day = '';
    _hour = '';

    if(procedures.value > 0){
        selection_professionals.style.display = 'flex';
        professionals.value = 0;
        procedure = procedures[procedures.value].textContent;
    } else {
        selection_professionals.style.display = 'none';
        btn_next_one.disabled = true;
    }
};

function changeProfessionals() {
    professional = '';
    _day = '';
    _hour = '';

    if(procedures.value > 0 && professionals.value > 0){
        btn_next_one.disabled = false;
        professional = professionals[professionals.value].textContent;
        days.forEach((button) => {
            button.classList.remove('active');
        });
        div_hours.style.display = 'none';
    } else {
        btn_next_one.disabled = true;
    }
};

btn_next_one.addEventListener('click', () => {
    step_one.style.display = 'none';
    steps.textContent = '3 de 3';
    step_two.style.display = 'block';
    
});

function changeDays(day) {
    _day = '';
    _hour = '';
    
    btn_next_two.disabled = true;

    hours.forEach((button) => {
        button.classList.remove('active');
    });

    days.forEach((button) => {
        button.classList.remove('active');
    });

    _day = days[day-1].textContent;
    days[day-1].classList.add('active');
    div_hours.style.display = 'block';
};

function changeHours(hour) {
    _hour = '';

    hours.forEach((button) => {
        button.classList.remove('active');
    });
    _hour = hours[hour-1].textContent;
    hours[hour-1].classList.add('active');
    btn_next_two.disabled = false;
};

function cancelar() {
    switch(steps.textContent){
        case '2 de 3':
            step_one.style.display = 'none';
            steps.textContent = '1 de 3';
            info.style.display = 'block';
            break;
        case '3 de 3':
            step_two.style.display = 'none';
            steps.textContent = '2 de 3';
            step_one.style.display = 'block';
    }
};

function agendar() {
    steps.textContent = 'Confirmado!';
    step_three.style.display = 'block';
    step_two.style.display = 'none';
    paragraph.innerHTML = `<p>Olá, ${_name}! Você escolheu: <strong>${procedure}, ${professional}, ${_day} às ${_hour}h</strong>. Esperamos você!</p>`
}