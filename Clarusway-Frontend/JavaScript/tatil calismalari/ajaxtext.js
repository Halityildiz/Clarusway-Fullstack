// Http status
// 200: OK
// 403:Forbidden
// 404: Not Found
// 505: Interval Server Error
// Informational responses (100–199)
// Successful responses (200–299)
// Redirection messages (300–399)
// Client error responses (400–499)
// Server error responses (500–599)

// readyState	Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

document.getElementById("btn").addEventListener("click", function () {
  // XMLHttpRequest
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    // console.log(this.readyState);
    console.log(this.status);
  };
  xhr.open("GET", "example.txt", true); //true asenkron
  xhr.send();
  // console.log(xhr);
});

document.getElementById("btn").addEventListener("click", function () {
  // XMLHttpRequest
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);
      document.getElementById("ajax").textContent = this.responseText;
    }
  };

  xhr.open("GET", "example.txt", true); //true asenkron
  xhr.send();
  // console.log(xhr);
});

document.getElementById("btn").addEventListener("click", function () {
  // XMLHttpRequest
  const xhr = new XMLHttpRequest();
  // xhr.onreadystatechange = function () {
  //   if ((this.status == 200) & (this.readyState == 4)) {
  //     console.log(this.responseText);
  //   }
  xhr.onprogress = function () {
    console.log("Process isleniyor...", this.readyState);
  };

  xhr.open("GET", "example.txt", true); //true asenkron
  xhr.send();
  // console.log(xhr);
});

// XMLHttpRequest
// onabort: null
// onerror: null
// onload: null
// onloadend: null
// onloadstart: null
// onprogress: null
// onreadystatechange: null
// ontimeout: null
// readyState: 0
// response: ""
// responseText: ""
// responseType: ""
// responseURL: ""
// responseXML: null
// status: 0
// statusText: ""
// timeout: 0
// upload: XMLHttpRequestUpload {onloadstart: null, onprogress: null, onabort: null, onerror: null, onload: null, …}
// withCredentials: false
