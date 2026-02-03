// index.js - CommonJS simple
console.log('🚀 Iniciando Backend ISRI...');
console.log('PORT:', process.env.PORT || 3001);

require('dotenv').config();
require('ts-node/register');
require('./src/index.ts');