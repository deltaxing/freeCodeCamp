const fs = require('fs-extra');
const path = require('path');
const readDirP = require('readdirp-walk');

readDirP({
  root: path.resolve(__dirname, './challenges/chinese')
})
.on('data', replaceTestStrings);

async function replaceTestStrings(file) {
  const {
    name,
    depth,
    path: filePath,
    fullPath,
    stat
  } = file;
  if (stat.isDirectory() || name === '.DS_Store') {
    return null;
  }

  var englishFilePath = fullPath.replace(/chinese/g, 'english');
  if (!fs.existsSync(englishFilePath)) {
    console.log(fullPath);
  }

  var enfileContent = fs.readFileSync(englishFilePath, {encoding: 'utf-8'})
    .toString();
  var chfileContent = fs.readFileSync(fullPath, {encoding: 'utf-8'}).toString();
  var testStrings = enfileContent.match(/testString:.*/g);
  var i = 0;
  chfileContent = chfileContent.replace(/testString:.*/g, function() {
    return testStrings[i++];
  });

  fs.writeFileSync(fullPath, chfileContent);

  // var match;
  // var testStrings = [];
  // var reg = /(testString:).*/g;
  // while ((match = reg.exec()) !== null) {
  //   testStrings.push(match);
  // }

  return null;
}
