(function(window, document, undefined) {
  "use strict";
  var init = function() {
    var canvas = document.querySelector("#x");
    var icon_template = document.querySelector("#template");
    var icon_width = 250;
    var icon_height = auto;
    var the_images = [
      "images/clock-1.png",
      "images/clock-2.png",
      "images/clock-3.png",
      "images/clock-3.png",
      "images/clock-4.png",
      "images/clock-5.png",
      "images/clock-6.png",
      "images/clock-7.png",
      "images/clock-8.png",
      "images/clock-9.png",
      "images/clock-10.png",
      "images/clock-11.png",
      "images/clock-12.png",
      "images/clock-13.png",
      "images/clock-14.png",
      "images/clock-15.png",
      "images/clock-16.png"
    ];
    var pickRandomImage = function() {
      var i = Math.floor(Math.random() * the_images.length);
      return the_images[i];
    };
    var total_number_of_images = 10;
    var max_height = canvas.offsetHeight - icon_height;
    var max_width = canvas.offsetWidth - icon_width;
    var randomCoordinate = function() {
      var r = [];
      var x = Math.floor(Math.random() * max_width);
      var y = Math.floor(Math.random() * max_height);
      r = [x, y];
      return r;
    };
    var createImage = function() {
      var node = icon_template.cloneNode(true);
      var xy = randomCoordinate();
      node.removeAttribute("id");
      node.removeAttribute("hidden");
      node.style.top = xy[1] + "px";
      node.style.left = xy[0] + "px";
      node.setAttribute("src", pickRandomImage());
      canvas.appendChild(node);
    };
    for (var i = 0; i < total_number_of_images; i++) {
      createImage();
    }
  };
  window.addEventListener("load", init);
})(window, document);
