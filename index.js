// Add your code here

function submitData(name,email) {
  const formData = {
      name: "Steve",
      email: "steve@steve.com",
    };
    
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };
    
    return fetch("http://localhost:3000/users", configurationObject)
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        // Append the new id to the DOM
        const newId = object.id;
        document.body.innerHTML += `<p>New ID: ${newId}</p>`;
      })
      .catch(function (error) {
        // Append the error message to the DOM
        document.body.innerHTML += `<p>Error: ${error.message}</p>`;
      });
  }