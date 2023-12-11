
const email = document.getElementById('email');
const button = document.getElementById('forgetBtn');

button.onclick = async (e) =>{
    e.preventDefault();
    button.innerText = "Loadding..."
    const data = {email: email.value}
    fetch('https://apxcrypfieldbackend.onrender.com/api/forgotpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response=> response.json())
        .then(response => {
            if(response.status === 404){
                button.innerText = "Email Password Reset Link"
                alert(response.message)
            }else if(response.status === "success"){
                alert(response.message)
                window.location.reload()
            }
          console.log(response.message)
        }).catch((error) => {
          console.log(error);
        });
}