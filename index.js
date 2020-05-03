/* JavaScript function to initially populate the list of positions & 1st position */
function populate_positions() {
  var pos_list = "";
  // console.log(pos_list);
  positions.forEach((position, index) => {
    // console.log(index + position);
    pos_list +=
      "<div onclick='update_pos_desc(" +
      index +
      ")'>" +
      position.title +
      "</div>";
    // console.log(index + pos_list);
  });
  // console.log(pos_list);
  document.getElementById("pos_list").innerHTML = pos_list;

  /* Populate the description with 1st position by default */
  if (positions.length > 0) {
    update_pos_desc(0);
  }
}

/* Javascript to function update selected position details */
function update_pos_desc(sel_index) {
  console.log(sel_index);
  document.getElementById("pos_title").innerHTML = positions[sel_index].title;
  document.getElementById("pos_date").innerHTML =
    positions[sel_index].postingDate;
  document.getElementById("pos_loc").innerHTML = positions[sel_index].location;
  document.getElementById("pos_desc").innerHTML =
    positions[sel_index].description;
  var pos_resps = "<ul>";
  positions[sel_index].responsibilities.forEach((resp) => {
    pos_resps += "<li>" + resp + "</li>";
  });
  pos_resps += "</ul>";
  document.getElementById("pos_resp").innerHTML = pos_resps;
}
