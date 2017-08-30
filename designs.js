// Select color input
const color = document.getElementById("colorPicker");
// Select size input
const height = document.getElementById("input_height");
const width = document.getElementById("input_width");
// When size is submitted by the user, call makeGrid()
const form = document.getElementById("sizePicker");
form.onsubmit = function(e) {makeGrid(e)};

function makeGrid(e) {
// Your code goes here!
  e.preventDefault();
  const table = document.getElementById("pixel_canvas");
  console.log(table);
  let trtd = [];
  for (let i=0; i<height.value; i++) {
    trtd.push('<tr>');
    for (let j=0; j<width.value; j++) {
      trtd.push('<td onclick="(function(e){e.style.background = color.value;})(this)"></td>');
    }
    trtd.push('</tr>');
  }
  table.innerHTML = trtd.join('\n');
}
