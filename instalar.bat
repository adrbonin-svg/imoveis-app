@echo off
echo.
echo  ============================================
echo    Instalando Sistema de Gestao de Imoveis
echo  ============================================
echo.

REM Verifica Node.js
node --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
  echo [ERRO] Node.js nao encontrado!
  echo Baixe em: https://nodejs.org/  (versao 18 ou superior)
  pause
  exit /b 1
)

echo [OK] Node.js encontrado
echo.

REM Instala dependencias
echo Instalando dependencias...
npm install
if %ERRORLEVEL% NEQ 0 (
  echo [ERRO] Falha ao instalar dependencias
  pause
  exit /b 1
)

REM Cria .env se nao existir
if not exist .env (
  copy .env.example .env
  echo.
  echo [AVISO] Arquivo .env criado a partir do .env.example
  echo Por favor, edite o arquivo .env e coloque sua chave API do Asaas
  echo.
)

echo.
echo  ============================================
echo    Instalacao concluida!
echo    Execute iniciar.bat para rodar o sistema
echo  ============================================
echo.
pause
