  var write = document.querySelector(".contacts-write");
  var feedback = document.querySelector(".feedback");
  var feedbackform = document.querySelector(".modal-feedback-form");
  var feedbackname = document.querySelector("[name=name]");
  var feedbackemail = document.querySelector("[name=email]");
  var feedbackletter = document.querySelector("[name=letter]");
  var map = document.querySelector(".contacts-map");
  var modalmap = document.querySelector(".modal-map");
  var close = document.querySelectorAll(".js-modal-close");

  var buyButtons = document.querySelectorAll(".products-buy");
  var cart = document.querySelector(".cart");

  var deliveryitem = document.querySelector(".services-menu-delivery");
  var warrantyitem = document.querySelector(".services-menu-warranty");
  var credititem = document.querySelector(".services-menu-credit");
  var delivery = document.querySelector(".services-delivery");
  var warranty = document.querySelector(".services-warranty");
  var credit = document.querySelector(".services-credit");

  var promoback = document.querySelector(".promo-back");
  var promoforward = document.querySelector(".promo-forward");
  var slide1 = document.querySelector(".promo-slideshow-list li:first-child");
  var slide2 = document.querySelector(".promo-slideshow-list li:last-child");
  var sliderid1 = document.querySelector(".promo-slider-id-block :first-child");
  var sliderid2 = document.querySelector(".promo-slider-id-block :last-child");

  if (write) {
    write.addEventListener("click", function(evt) {
      evt.preventDefault();
      feedback.classList.add("reveal-bounce");
      feedbackname.focus();
    });
  };
  if (feedbackform) {
    feedbackform.addEventListener("submit", function(evt) {
      if (!feedbackname.value || !feedbackemail.value || !feedbackletter.value) {
        evt.preventDefault();
        feedback.classList.remove("feedback-error");
        feedback.offsetWidth = feedback.offsetWidth;
        feedback.classList.add("feedback-error");
      }
    });
  };


  if (map) {
    map.addEventListener("click", function(evt) {
      evt.preventDefault();
      modalmap.classList.add("reveal");
    });
  };

  for (var i = 0; i < close.length; i = i + 1) {
    close[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      if (feedback != null || modalmap != null) {
        feedback.classList.remove("reveal-bounce");
        feedback.classList.remove("feedback-error");
        modalmap.classList.remove("reveal");
      }
      if (cart) {
        cart.classList.remove("reveal-expand");
      }
    });
  };

  if (deliveryitem) {
    deliveryitem.addEventListener("click", function(evt) {
      evt.preventDefault();
      deliveryitem.classList.add("services-menu-item-current");
      warrantyitem.classList.remove("services-menu-item-current");
      credititem.classList.remove("services-menu-item-current");
      delivery.classList.add("reveal");
      warranty.classList.remove("reveal");
      credit.classList.remove("reveal");
    });
    warrantyitem.addEventListener("click", function(evt) {
      evt.preventDefault();
      warrantyitem.classList.add("services-menu-item-current");
      deliveryitem.classList.remove("services-menu-item-current");
      credititem.classList.remove("services-menu-item-current");
      warranty.classList.add("reveal");
      delivery.classList.remove("reveal");
      credit.classList.remove("reveal");
    });
    credititem.addEventListener("click", function(evt) {
      evt.preventDefault();
      credititem.classList.add("services-menu-item-current");
      deliveryitem.classList.remove("services-menu-item-current");
      warrantyitem.classList.remove("services-menu-item-current");
      credit.classList.add("reveal");
      warranty.classList.remove("reveal");
      delivery.classList.remove("reveal");
    });
  };

  for (var i = 0; i < buyButtons.length; i = i + 1) {
    buyButtons[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      cart.classList.add("reveal-expand");
    });
  };

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (cart) {
        if (cart.classList.contains("reveal-expand")) {
          cart.classList.remove("reveal-expand");
        }
      }
      if (feedback || modalmap) {
        if (feedback.classList.contains("reveal-bounce")) {
          feedback.classList.remove("reveal-bounce");
          feedback.classList.remove("feedback-error");
        }
        if (modalmap.classList.contains("reveal")) {
          modalmap.classList.remove("reveal");
        }
      }
    }
  });

  if (promoforward) {
    promoforward.addEventListener("click", function(evt) {
      evt.preventDefault();
      slide1.classList.remove("reveal");
      slide2.classList.add("reveal");
      promoforward.setAttribute("disabled", "disabled");
      promoback.removeAttribute("disabled");
      sliderid1.classList.remove("promo-slider-id-active");
      sliderid2.classList.add("promo-slider-id-active");
    });
  };

  if (promoback) {
    promoback.addEventListener("click", function(evt) {
      evt.preventDefault();
      slide2.classList.remove("reveal");
      slide1.classList.add("reveal");
      promoback.setAttribute("disabled", "disabled");
      promoforward.removeAttribute("disabled");
      sliderid2.classList.remove("promo-slider-id-active");
      sliderid1.classList.add("promo-slider-id-active");
    });
  };
