// Add your code here

function submitData(name, email){

  let configObj = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email
    })

  }

  fetch('http://localhost:3000/users', configObj)
    .then(resp => resp.json())
    .then(function(json){
      const body = document.querySelector('body')
      body.innerHTML = json.id
    })
    .catch(function(error){
      document.body.innerHTML = error.message
      // message: message,
      // code: '401'
    })
}
//
// submitData("steve", "steve@steve.com")
