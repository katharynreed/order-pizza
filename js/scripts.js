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
                                  '<input type="text" class="form-control" id="toppings" placeholder="Example: Rad-ish, Mystery of the Void, Tiny Fish from Ocean>' +
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

  $("form#order-pizza").submit(function(event) {
      event.preventDefault();
      total = 0;
      sizes = ["Teeny-Tiny", "Medi-yum", "Pretty Big", "Mondo", "Mega Mondo"]

      $(".new-pizza").each(function() {
      var inputtedToppings = $(this).find('input#toppings').val();
      var inputtedSize = parseFloat($(this).find('select#size').val());

      $("ul#ordered-pizzas").append("<li>" + sizes[inputtedSize - 1] + " pizza with " + inputtedToppings);
            var newPizza = new Pizza(inputtedToppings.convertToppingsToArray(), inputtedSize);
            total = parseFloat(total);
            total += newPizza.price();
            total = total.toFixed(2);
          });

      $("#total").text(total);
      $("#show-total").show();

      resetFields();
  });
});
