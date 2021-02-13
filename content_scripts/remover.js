function remover() {
  if (window.hasRun) {
    return;
    console.log("Window has ran");
  }
  window.hasRun = true;
  console.log("Testing testing");

  function removeComments() {
    try{
      const fullComment = document.querySelector('ytd-comment-thread-renderer');
      const parentElement = fullComment.parentElement;
      fullComment.remove();
      setTargetElement(parentElement);
      console.log("Full comment deleted");
    }
    catch(error) {
      console.log(error)
    }
  }

  //testing deletion on body

  // async function removeBody() {
  //   const body = await document.querySelector('body');
  //   console.log(body);
  //   console.log(error);
  //   body.remove();
  //   console.log("Body deleted");
  // };

  // async function removeComments() {
  //   const fullComment = await document.querySelector('ytd-comment-thread-renderer');
  //   console.log(fullComment);
  //   console.log(error);
  //   fullComment.remove();
  //   console.log("Full comment deleted");
  // };


  // window.addEventListener('DOMContentLoaded', (e) => removeComments());
  // removeComments();
  removeBody();

};

console.log("Remover bottom text");
// remover()
function display() {
  window.open('https://www.google.com', '_blank');
  console.log('Button has been clicked')
}
