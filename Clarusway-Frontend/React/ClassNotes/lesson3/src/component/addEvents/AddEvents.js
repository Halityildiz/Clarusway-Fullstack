import React from "react";

const AddEvents = () => {
  function shoot() {
    alert("Great Shot!");
  }

  return (
    <div>
      <button onClick={shoot}>Take the shot</button>
      {/* JSX icinde arrow function kullanilmasi pek uygun degildir */}
    </div>
  );
};

export default AddEvents;
