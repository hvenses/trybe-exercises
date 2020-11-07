const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1) Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

// Maneira SEM FUNÇÂO
lesson2["turno"] = 'manhã'

// Maneira COM FUNÇÃO
const addNewKey = (obj, key, value) => {
  obj[key] = value;
};

addNewKey(lesson2, 'turno', 'manhã')

//console.table(lesson2)

// 2) Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

// Maneira SEM FUNÇÂO
const listKeys = Object.keys(lesson1);
//console.log(listKeys);

// Maneira COM FUNÇÃO
const listKeys2 = (obj) =>  Object.keys(obj);
//console.log(listKeys2(lesson1));

// 3) Crie uma função para mostrar o tamanho de um objeto.

const objSize = (obj) => Object.keys(obj).length;
console.log(objSize(lesson2));

// 4) Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.