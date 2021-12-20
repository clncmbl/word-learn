

window.addEventListener('DOMContentLoaded', async ev => {
  console.log('DOM content loaded')

  const fileinput = document.getElementById("selfile");
  fileinput.addEventListener("change", handleFiles, false);
  function handleFiles() {
    const fileList = fileinput.files; /* now you can work with the file list */
    console.log(fileList)
    const promise = fileList[0].text()
    console.log(promise)
  }

})