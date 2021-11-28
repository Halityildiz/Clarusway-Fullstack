const tbody = document.getElementById("tbodyUserList");
window.onload = () => {
  getApiUserList();
  setInterval(getApiUserList(), 5000);
};
const getApiUserList = async (pageNo) => {
  tbody.innerHTML = "";
  showLoading();
  const response = await axios({
    url: "https://reqres.in/api/users?page=1",
    method: "get",
  });

  // const responseData = await axios.get("https://reqres.in/api/users?page=1");

  // console.log(response.data.data[0]);
  if (response.data.data[0].id == undefined) {
    alert("userlist not found");
    removeLoading();
  } else {
    for (let i = 0; i < response.data.data.length; i++) {
      tbody.innerHTML += ` <tr> 
            <td>
            <img src="${response.data.data[i].avatar}"/>
            </td>
            <td>
            ${response.data.data[i].id}
            </td>
            <td>
            ${response.data.data[i].email}
            </td>
            <td>
            ${response.data.data[i].first_name}
            </td>
            <td>
            ${response.data.data[i].last_name}
            </td>
     </tr>`;
      removeLoading();
    }
  }
};
