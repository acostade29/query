var $toDoList = []

$("#btn").on("click", function(evnt) {
    let toDo = $("#input").val();
    
    if (toDo) {
        var $newItem = $(`<tr>
        <td class="button"><button>X</button></td>
        <td class="text">${toDo}</td>
      </tr>`)
    }
    $("#to-dos").append($newItem)
    $("#input").val("")

})
$("#to-dos").on("click", "button", function() {
    $(this).closest('tr').fadeOut(750, function() {
      $(this).remove();
    });
  });