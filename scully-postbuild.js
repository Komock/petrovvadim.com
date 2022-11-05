const fs = require('fs');
const content = 'petrovvadim.com';

fs.writeFile('./docs/CNAME', content, err => {
  if (err) {
    console.error(err);
  }
});