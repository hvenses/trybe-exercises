#!/bin/bash

DIRETORIO=$1
if [ -d "$DIRETORIO" ]
  then
    QTD=`ls $DIRETORIO | wc -w`
    echo "O caminho $DIRETORIO tem $QTD arquivos."
  else
    echo "O caminho $DIRETORIO não é um diretório!"
fi

