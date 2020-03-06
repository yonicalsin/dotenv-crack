import * as path from 'path';

class CogEnv {}

const set = (value: any, nm = 'path') => {
   Reflect.set(CogEnv, nm, value);
};
const get = (nm = 'path') => {
   return Reflect.get(CogEnv, nm);
};

// Defaults
set('.env');
set('utf8', 'encoding');
set(null, 'debug');

export const setPath = (value: string) => set(value);
export const setEncoding = (value: string) => set(value);
export const setDebug = (value: string) => set(value);

export let getEnvOne = (param: string, defaults = {}) => {
   const dotenv = require('dotenv').config({
      path: path.resolve(process.cwd(), get()),
      encoding: get('encoding'),
      debug: get('debug'),
   });
   require('dotenv-expand')(dotenv);

   let data: any = process.env[param];

   switch (data) {
      case 'true':
      case 'TRUE':
         data = true;
      case 'false':
      case 'FALSE':
         data = false;
   }

   if (!isNaN(parseFloat(data))) {
      data = parseFloat(data);
   }

   if (defaults && data == undefined) {
      data = defaults[param];
   }
   return data;
};

const parseObject = (obj = {}) => {
   const data = {};
   for (const [k, v] of Object.entries(obj)) {
      const arrIndex = k.split(/\||\@/gi);
      const index = arrIndex[0];
      data[index] = obj[k];
   }
   return data;
};

export const getEnv = (defaults = {}) => {
   defaults = parseObject(defaults);
   return (param: string) => {
      return getEnvOne(param, defaults);
   };
};

export const getEnvObject = (defaults = {}) => {
   let data = {};
   const parsed = parseObject(defaults);
   for (let k in defaults) {
      let arrIndex: string[] = k.split(/\||\@/gi);
      const index = arrIndex[0];
      const name = arrIndex[arrIndex.length - 1];
      data[name] = getEnvOne(index, parsed);
   }
   return data;
};
