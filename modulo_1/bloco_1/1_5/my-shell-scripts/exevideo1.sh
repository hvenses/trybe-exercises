#!/bin/bash

echo "Criando arquivo..."; sleep 1; echo .; sleep 1; echo .; sleep 1; echo .;
echo "Texto exemplo =)"> arquivo.txt
echo "Arquivo criado!"
sleep 2
echo "Criando pasta..."; sleep 1; echo .; sleep 1; echo .; sleep 1; echo .;
mkdir PastaExemplo
echo "Pasta criada!"
sleep 2
echo "Movendo arquivo criado para a pasta criada"; sleep 1; echo .; sleep 1; echo .; sleep 1; echo .;
mv arquivo.txt PastaExemplo
echo "Arquivo movido para pasta com sucesso!"

