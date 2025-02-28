var typed = new Typed(".auto-type", {
  strings: ["Frontend Developer", "Web Designer", "Digital Marketer"],
  typeSpeed: 150,
  backSpeed: 150,
  looped: true,
});

function unique() {
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let message = document.getElementById("message").value;

  if (
    firstname === "" ||
    lastname === "" ||
    email === "" ||
    number === "" ||
    message === ""
  ) {
    document.getElementById("toast").style.display = "block";
    document.getElementById("toast-body").innerHTML = "Please Fill all Details";
  } else if (!email.includes("@")) {
    document.getElementById("toast").style.display = "block";
    document.getElementById("toast-body").innerHTML =
      "Please Write Vaild Email Format";
  } else {
    Swal.fire({
      title: "Good job!",
      text: "Message Sent Successfully",
      icon: "success",
    });
  }
}
function close() {
  document.getElementById("close-btn").style.display = "none";
}
