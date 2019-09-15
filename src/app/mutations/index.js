import fs from 'fs';
import path from 'path';

const Mutation = {}

fs
  .readdirSync(__dirname)
  .filter(file => ((file.indexOf('.')) !== 0 && (file !== 'index.js')))
  .forEach(file => {
    Object.assign(Mutation, require(path.resolve(__dirname, file)).default)
  });

export default Mutation
