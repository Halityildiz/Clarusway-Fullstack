class Request {
  // get request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  // post request eklemek icin
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  // put request guncelleme yapmak icin
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  // delete request silmek icin
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch("https://jsonplaceholder.typicode.com/albums/1", {
        method: "DELETE",
      })
        .then((response) => resolve("veri silme islemi basarili.. "))
        .catch((err) => reject(err));
    });
  }
}

//put request

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
