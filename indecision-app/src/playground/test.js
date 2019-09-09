const fetch = require('node-fetch');

const getName = async (username) => {
  const url = `https://github.com/users/${username}`;
  const response = await fetch(url);
  const user = await response.json();

  if (response.status !== 200) {
    throw Error('User does not exist');
  }

  return user.login
}

(async function(){
  try {
    const name = await getName('LuigiDerson');
    console.log(name)
  } catch(e) {
    console.log(e)
  }
})()
