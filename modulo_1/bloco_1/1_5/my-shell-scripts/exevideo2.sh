#!/bin/bash

echo "Escreva seu nome: "
read NOME 
echo "Escreva sua idade: "
read IDADE 
whoami=USER
DIRETORIO=`pwd`
echo "Seu nome é $NOME, $IDADE anos de idade, utilizando o usuario $USER no diretório $DIRETORIO" 

