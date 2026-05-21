#!/bin/bash
# Script de deploy — rode no VPS para atualizar o sistema
set -e

echo "🔄 Atualizando sistema..."
git pull origin master
npm install --production
pm2 restart imoveis-app
echo "✅ Sistema atualizado com sucesso!"
