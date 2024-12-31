#!/bin/bash

echo "Installing dependencies...."

npm i --save cross-env &
npm i --save @nestjs/config &
npm i --save @nestjs/typeorm typeorm pg &

wait
echo "Dependencies installed successfully."