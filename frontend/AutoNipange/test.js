// console.log(url);

// register  https://nipange.onrender.com/api/users/create_user/'
// login     https://nipange.onrender.com/api/users/login/

async function postdata() {
  let url = 'https://nipange.onrender.com/api/users/login/';
  const res = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({
      email: 'dmwas704@gmail.com',
      password: 'avid623mwas'
    }),
  });
  const data = await res.json().catch(err => console.error(err));
  console.log(data)
  console.log(await res?.status);
  return data;
}
postdata();

// {
//       username: 'david-mwas',
//       email: 'dmwas704@gmail.com',
//       firstname: 'David',
//       lastname: 'mwas',
//       phone: '0795290373',
//       password: 'david623mwas'
//     }

// {
//     "userid": "959d7354",
//     "username": "david-mwas",
//     "email": "dmwas704@gmail.com",
//     "firstname": "David",
//     "lastname": "mwas",
//     "balance": 0.0,
//     "phone": "0795290373"


// {
//       username: 'johndoe',
//       email: 'johndoe@gmail.com',
//       firstname: 'john',
//       lastname: 'doe',
//       phone: '0755290343',
//       password: 'johndoe'
//

// }


// {
//       username: 'ken',
//       email: 'ken123@gmail.com',
//       firstname: 'doe',
//       lastname: 'ken',
//       phone: '0723562389',
//       password: 'ken123'
//     

// }

// {"username":"mikejoe2","email":"mike@mike123.com","firstname":"Joseph","lastname":"Mike","phone":"07846464711","password":"mikeeljo"}
// console.log(await );

// const ApiManager = url => {
//     console.log(`http://127.0.0.1:8000${url}`);
// };
// ApiManager('/api/users');
