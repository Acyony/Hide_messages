
// This approach I don't use the bubbling event. In this case i'm calling one eventlistener for each <button>.

/* let closeBtns = document.querySelectorAll(".remove-button").forEach((elem) =>
  elem.addEventListener("click", function (e) {
      console.log(elem);
      const div = e.target.closest(".pane");
      div.remove();
  })
);
 */


//--=^.^=----delegation---------=^.^=--

// The idea is, instead of assigning a handler to each of button, we put a single handler on their common ancestor. 

let container = document.getElementById("container");

container.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.innerText === "[x]") {
    let pane = e.target.closest(".pane");
    pane.remove();
  }
});
