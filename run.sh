#!/bin/sh

echo npm init

npm install
echo npm start
echo npx npm-check-updates -u
echo https://localhost:8080
node server.js

exit 0
