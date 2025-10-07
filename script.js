const tombol = document.getElemenyById('sapaButton');
function aksi(){
  alert("hutram");
  window.confirm();
}
tombol.addEventListener('click', aksi);
