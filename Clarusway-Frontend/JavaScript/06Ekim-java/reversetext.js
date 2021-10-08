function reserve_txt(myText) {
    if (myText.length == 1) {
      console.log(myText)
    } else {
      newText = ""
      for (let i = myText.length - 1; i >= 0; i--) {
        newText += myText[i]
      }
      console.log(newText)
    }
  }  
reserve_txt("Cohort__9--FS Harveyli Cumalar");
