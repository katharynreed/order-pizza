function Pizza(toppings, size) {
  this.toppings = toppings;
  this.pizzaSize = size;
}

//front-end

$(document).ready(function() {
  $("#add-pizza").click(function () {
    $("#all-pizzas").append('<div class="new-pizza">' +
                                '<div class="form-group">' +
                                  '<label for="toppings">Toppings</label>' +
                                  '<input type="text" class="form-control" id="toppings" placeholder="Separate, toppings, with, a, commma, and, space">' +
                                '</div>' +
                                '<div class="form-group">' +
                                  '<label for="size">Size</label>' +
                                  '<select id="size" class="form-control">' +
                                    '<option value="1">Teeny-Tiny</option>' +
                                    '<option value="2">Medi-yum</option>' +
                                    '<option value="3">Pretty Big</option>' +
                                    '<option value="4">Mondo</option>' +
                                    '<option value="5">Mega Mondo</option>' +
                                  '</select>' +
                                '</div>' +
                              '</div>');
  });
