#!/bin/bash 

echo "Favor indicar o caminho do novo diretório:"
read NOVODIR
if [ -f "$NOVODIR" ]
  then 
    echo "Esse é um arquivo comum"
elif [ -d "$NOVODIR" ]
  then 
    echo "Esse é um diretório"
else
  echo "Esse é um outro tipo de arquivo"
fi
ls -l 

