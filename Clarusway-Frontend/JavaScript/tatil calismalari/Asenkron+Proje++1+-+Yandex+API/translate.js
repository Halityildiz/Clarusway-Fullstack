function Translate(word, language) {
  this.apikey = "42b96ed928msh864e97950d0b962p1016efjsn5f9bee68f963";
  this.word = word;
  this.languages = language;

  this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function (callback) {
  if (this.word.length < 1) return;

  const endpoint = `https://nlp-translation.p.rapidapi.com/v1/translate?key=${this.apikey}&text=${this.word}&lang=${this.languages}`;

  this.xhr.open("GET", endpoint);

  this.xhr.onload = () => {
    if (this.xhr.status === 200 && this.word !== "") {
      const json = JSON.parse(this.xhr.responseText);
      const text = json.text[0];

      callback(null, text);
    } else {
      callback(new Error("Bir hata oluştu", null));
    }
  };

  this.xhr.send();
};

Translate.prototype.changeParameters = function (newWord, newLanguage) {
  this.word = newWord;
  this.languages = newLanguage;
};
