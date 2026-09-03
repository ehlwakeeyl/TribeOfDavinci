/* ==========================================================================
   CLEAN SHELTERS LTD — CONTACT FORM
   Client-side validation and a local success state. Does not send data
   anywhere; wire a real submit handler here when a backend is available.
   ========================================================================== */

(function () {
  "use strict";

  var form = document.getElementById("contact-form");
  if (!form) return;

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var isValid = true;
    form.querySelectorAll("[required]").forEach(function (field) {
      var wrap = field.closest(".field");
      var ok = field.value.trim() && (field.type !== "email" || isValidEmail(field.value));
      if (!ok) {
        isValid = false;
        if (wrap) wrap.classList.add("has-error");
      } else if (wrap) {
        wrap.classList.remove("has-error");
      }
    });

    if (!isValid) return;

    form.hidden = true;
    var confirmation = document.getElementById("contact-confirmation");
    if (confirmation) confirmation.hidden = false;
  });
})();
