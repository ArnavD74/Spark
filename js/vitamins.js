function suggest() {
  document.getElementById("vitamin").innerHTML = localStorage.getItem(
    "vitamin"
  );
  document.getElementById("protein").innerHTML = localStorage.getItem(
    "protein"
  );
  document.getElementById("powder").innerHTML = localStorage.getItem("powder");
}
