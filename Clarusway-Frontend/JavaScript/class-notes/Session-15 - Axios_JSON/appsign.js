const loading = document.getElementById("loading");
const submitBtn = document.getElementById("submit");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

window.onload = () => {
  // setTimeout(fillFormInput(), 500);
  setTimeout(fillFormInput, 500);
};

const showLoading = () => {
  loading.style.display = "block";
};
const removeLoading = () => {
  loading.style.display = "none";
};
const fillFormInput = () => {
  email.value = "eve.holt@reqres.in";
  password.value = "pistol";
  localStorage.setItem("email", EncryptStringAES(email.value));
  localStorage.setItem("password", EncryptStringAES(password.value));
};
submitBtn.addEventListener("click", (e) => {
  //e.preventDefault();  // buttonun type i submit olsaydi e.preventDefault yapmamiz lazimdi
  console.log("clicked");
  apiRegister();
});

const apiRegister = async () => {
  const bodyData = {
    email: email.value,
    password: password.value,
  };
  const response = await axios({
    // kendi default degerinde json gonderip aldigindan degistirmeye gerek kalmiyor.
    url: "https://reqres.in/api/register",
    data: bodyData,
    method: "post",
  })
    // console.log(response.data.token);
    // const {data} = response // object
    // console.log(data.token);
    .then((response) => response.data)
    .catch((error) => {
      alert(error);
      removeLoading();
    });
  if (response.token == undefined) {
    alert(response.error);
    removeLoading();
  } else {
    localStorage.setItem("tokenkey", EncryptStringAES(jsonResponse.token));
    localStorage.setItem("tokenkeyEncrypted", EncryptStringAES(response.token));
    removeLoading();
    window.location.href = "userlist.html";
  }
};

// const apiRegister = async () => {
//   const bodyData = {
//     email: email.value,
//     password: password.value,
//   };
//   // console.log(bodyData);
//   console.log(JSON.stringify(bodyData));
//   showLoading();
//   // fetch("https://reqres.in/api/register", {
//   // window.fetch("https://reqres.in/api/register", {
//   await fetch("https://reqres.in/api/register", {
//     method: "POST",
//     body: JSON.stringify(bodyData),
//     headers: { "Content-Type": "application/json" },
//   })
//     .then((response) => response.json())
//     .then((jsonResponse) => {
//       console.log(jsonResponse);
//       console.log(jsonResponse.token);
//       if (jsonResponse.id == undefined) {
//         alert(jsonResponse.error);
//         removeLoading();
//       } else {
//         localStorage.setItem("tokenkey", EncryptStringAES(jsonResponse.token));
//         localStorage.setItem(
//           "tokenkeyEncrypted",
//           EncryptStringAES(jsonResponse.token)
//         );
//         window.location.href = "userlist.html";
//       }
//     })
//     .catch((error) => {
//       alert(error);
//       removeLoading();
//     });
// };
