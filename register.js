
const userName = document.getElementById('input1');
const fullname = document.querySelector('#fullname');
const email = document.getElementById('email');
const phoneNo = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const country = document.getElementById('country');
const referral = document.getElementById('referral');
const signUpBtn = document.getElementById("signupbtn")
console.log(fullname)


const sendSignUpEmail = async () => {
    const data = {
      email: email.value,
    };
    fetch('https://apxcrypfieldbackend.onrender.com/api/signupemailsand', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response=> response.json())
      .then(response => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  signUpBtn.onclick = async (event) => {
    event.preventDefault();
  
    const data = {
      userName: userName.value,
      email: email.value,
      fullName: fullname.value,
      phoneNumber: phoneNo.value,
      password: password.value,
      country: country.value,
      referral: referral.value,
    };
  
    console.log(data);
  
    fetch('https://apxcrypfield-backend.vercel.app/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response=> response.json())
      .then(response => {
        localStorage.setItem('apexUserId', response.data._id)
            sendSignUpEmail();
        console.log(response.data._id)
        const userId = localStorage.getItem('apexUserId')
        console.log("Local User Id", userId);
        window.location.href = `https://accountapxcrypfield.vercel.app/#/${userId}`;
        
      })
      .catch((error) => {
        console.log(error);
      });
  };
  