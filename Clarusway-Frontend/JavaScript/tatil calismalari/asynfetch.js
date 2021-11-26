class Request {
  // get request
  async get(url) {
    // return new Promise((resolve, reject) => {
    //   fetch(url)
    //     .then((response) => response.json())
    //     .then((data) => resolve(data))
    //     .catch((err) => reject(err));
    // });
    const response = await fetch(url); // response object
    const data = await response.json(); // Json onject
    return data;
  }

  // post request eklemek icin
  async post(url, data) {
    // return new Promise((resolve, reject) => {
    //   fetch(url, {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((data) => resolve(data))
    //     .catch((err) => reject(err));
    // });
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    return data;
  }

  // put request guncelleme yapmak icin
  async put(url, data) {
    // return new Promise((resolve, reject) => {
    //   fetch(url, {
    //     method: "PUT",
    //     body: JSON.stringify(data),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((data) => resolve(data))
    //     .catch((err) => reject(err));
    // });
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    return data;
  }

  // delete request silmek icin
  async delete(url) {
    // return new Promise((resolve, reject) => {
    //   fetch("https://jsonplaceholder.typicode.com/albums/1", {
    //     method: "DELETE",
    //   })
    //     .then((response) => resolve("veri silme islemi basarili.. "))
    //     .catch((err) => reject(err));
    // });
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/albums/1",
      {
        method: "DELETE",
      }
    );
    return "Veri silme islemi basarili..";
  }
}

//get request

// const request = new Request();
// let albums;
// request
//   .get("https://jsonplaceholder.typicode.com/albums")
//   .then((albums) => {
//     // albums = data;
//     console.log(albums);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log(albums); // icerideki veriyi  undefined aliyoruz bunu burada degil icerde almaliyiz  asenkron

//post request

// const request = new Request();

// request
//   .post("https://jsonplaceholder.typicode.com/albums", {
//     userId: 1,
//     title: "Thriller",
//   })
//   .then((newAlbum) => console.log(newAlbum))
//   .catch((err) => console.log(err));

//put request

// const request = new Request();

// request
//   .put("https://jsonplaceholder.typicode.com/albums/1", {
//     userId: 10,
//     title: "Tarkan Karma",
//   })
//   .then((album) => console.log(album))
//   .catch((err) => console.log(err));

//delete request

const request = new Request();

request
  .delete("https://jsonplaceholder.typicode.com/albums/1")
  .then((message) => console.log(message))
  .catch((err) => console.log(err));
