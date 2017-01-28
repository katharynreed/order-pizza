function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}
//back end

Pizza.prototype.price = function () {
  return ((this.toppings.length) * 2) * this.size * 4.5;
}

String.prototype.toppingArray = function () {
  return this.split(", ")
}

  var resetFields = function() {
  $("input#toppings").val("");
}

//front end

$(document).ready(function() {

  $("form#order-pizzas").submit(function(event) {
      event.preventDefault();
      total = 0;
      sizes = ["Teeny-Tiny", "Medi-yum", "Pretty Big", "Mondo", "Mega Mondo"]

      $(".new-pizza").each(function() {
      var inputtedToppings = $(this).find('input#toppings').val();
      var inputtedSize = parseFloat($(this).find('select#size').val());

      $("#ordered-pizzas").text(sizes[inputtedSize - 1] + " pizza with " + inputtedToppings);
            var newPizza = new Pizza(inputtedToppings.toppingArray(), inputtedSize);
            total = parseFloat(total);
            total += newPizza.price();
            total = total.toFixed(2);
          });

      $("#total").text(total);
      $("#show-total").show();

      console.log(total);
      console.log();

      resetFields();
    });
  });
