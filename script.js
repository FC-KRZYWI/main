function checkData(x, y) {
  fetch('')
    .then(res => {
      return res.json()
    })
    .then(data => {
       const users = data.users;

       for (let user in users) {
         if (user[0] == x && user[1] == y) {
           return ('can');
         };
       };

      return ('cant');
    })
  .catch(error => {
    console.error(error);
  }
};

document.querySelector('.login').addEventListener('click',() => {
  let checkIf = checkData(document.querySelector('.text').value, document.querySelector('.password.');

  switch(checkIf) {
    case 'can':
      document.write('you are now logged');
      break;
    case 'cant':
      document.write('you are not logged');
      break;
  };
});
