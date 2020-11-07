const citiesStates = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goiás',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraima',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins'
  }; 
const states = document.getElementById('state');
const btnSubmit = document.getElementById('submitBtn');
const formValues = document.querySelectorAll('.form-comp');

Object.keys(citiesStates).forEach( key => {
  let option = document.createElement('option');

  option.innerText = citiesStates[key];
  option.value = citiesStates[key];
  states.appendChild(option);
  });

  function submitEvent(e) {
    e.preventDefault();
  }

  btnSubmit.addEventListener('click', submitEvent);