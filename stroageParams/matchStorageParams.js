const readline = require('readline');
const path = require('path');
const fs = require('fs');

const moduleName = 'Democracy';

let filepath = path.join(__dirname, `./${moduleName}`);

const rl = readline.createInterface({
  input: fs.createReadStream(filepath),
});

let description = '';
let result = [];

const paramsMap = {
  'AccountIndex': 'index',
  'AccountId': 'who',
}

rl.on('line', line => {
  const matchDesc = line.match(/\/\/\/\s(.*)/);
  if (matchDesc) {
    description = matchDesc[1];
  }

  const matchName = line.match(/pub\s(\w+)/) || line.match(/^(\w+)\s/);
  if (matchName && matchName[1]) {
    const matchType = line.match(/(\w+) ];/) || line.match(/(\w+);/);
    const matchVec = line.match(/(\w+)> ]/)
    const matchParam = line.match(/(\w+)\s=>/);
    result.push({
      optionName: matchName[1].replace(/^\S/, s => s.toLowerCase()),
      description: description,
      key: `${moduleName} ${matchName[1]}`,
      params:
        matchParam && matchParam[1]
          ? `[
    param('${paramsMap[matchParam[1]]}', '${matchParam[1]}')
  ]`
          : '[]',
      type: matchVec ? [`'${matchVec[1]}'`] : (matchType && matchType[1] ? matchType[1] : ''),
    });
    description = '';
  }
  console.log(`${line}`);
});

rl.on('close', line => {
  let str =  result
  .map(option => {
    return `const ${option.optionName}: CreateItemOptions = {
  description: \`${option.description}\`,
  key: '${option.key}',
  params: ${option.params},
  type: ${Array.isArray(option.type) ? ('[' + option.type[0] + ']') : ('\'' + option.type + '\'')}
};`;
  }).join('\n\n')

  str += '\n\n\n' + result.map(option => {
    return option.optionName + ':' + '\n' + `createMethod('${option.optionName}')(${option.optionName}),`
  }).join('\n')

  fs.writeFileSync('result.txt', str, 'utf8');
});
