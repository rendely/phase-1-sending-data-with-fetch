function submitData(name, email){
  return fetch('http://localhost:3000/users',{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(
      {name: name,
      email: email}
    )
  })
  .then(r => r.json())
  .then(d => {
    console.log("new id:",d.id);
    document.body.innerHTML = `${d.id}`;
  })
  .catch(e => {
    console.log(e)
    document.body.innerHTML = `${e}`;
  })
}