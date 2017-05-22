#!/bin/sh
echo "Installing webpack global package..."
if [ "$(id -u)" != "0" ]; then
  echo "ALERT: Need root for install global package."
  if ! [ -x "$(command -v sudo)" ]; then
    echo "Installing webpack with su."
    su -c "npm i webpack -g"
  else
    echo "Installing webpack with sudo."
    sudo npm i webpack -g
  fi
else
  echo "Exec: npm i webpack -g"
  npm i webpack -g
fi
echo "Installing node modules..."
echo "Exec: npm i"
npm i
echo "Build nexo frontend web with webpack..."
webpack -p
echo ""
echo "NEXO DEMO: INSTALLED"
echo "-------------------------------------------------------------"
echo "npm start - This script"
echo "npm run build - Run webpack for build frontend javascripts"
echo "npm run serve - Run express server"
echo ""
echo "Nexo.js Frontend documentation: https://warlock.gitbooks.io/nexo"
echo ""
echo "Thanks for play!"
echo ""