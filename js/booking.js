/* ==========================================================================
   CLEAN SHELTERS LTD — BOOKING / CLEANING REQUEST FORM
   Multi-step "cleaning request" experience. This is a request form, not a
   payment or real-time booking system: submitting it stores nothing and
   sends nothing on its own — it only demonstrates the client-side flow and
   is built so a real submit handler (fetch/XHR to a backend) can be dropped
   into handleSubmit() later without touching the step logic.
   ========================================================================== */

(function () {
  "use strict";

  var form = document.getElementById("booking-form");
  if (!form) return;

  var steps = Array.prototype.slice.call(form.querySelectorAll(".form-step"));
  var stepDots = Array.prototype.slice.call(document.querySelectorAll(".step-dot"));
  var progressText = document.querySelector("[data-step-progress]");
  var currentStep = 0;

  var PACKAGE_LABELS = {
    "quick-fresh": "Quick Fresh",
    "complete-clean": "Complete Clean",
    "deep-reset": "Deep Reset",
    "move-in": "Move-In",
    "move-out": "Move-Out",
    "office-care": "Office Care",
    "shortlet-turnaround": "Shortlet Turnaround",
    custom: "Custom Cleaning",
  };

  /* ---------------------------------------------------------------------
     Step navigation
     ------------------------------------------------------------------- */
  function showStep(index) {
    steps.forEach(function (step, i) {
      step.classList.toggle("is-active", i === index);
    });

    stepDots.forEach(function (dot, i) {
      dot.classList.toggle("is-active", i === index);
      dot.classList.toggle("is-complete", i < index);
    });

    if (progressText) {
      progressText.textContent = "Step " + (index + 1) + " of " + steps.length;
    }

    currentStep = index;

    if (index === steps.length - 1) {
      buildSummary();
    }

    var shell = document.querySelector(".booking-shell");
    if (shell) {
      shell.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function validateStep(index) {
    var step = steps[index];
    var isValid = true;
    var fields = step.querySelectorAll("input[required], textarea[required], select[required]");

    var radioGroups = {};
    fields.forEach(function (field) {
      if (field.type === "radio") {
        radioGroups[field.name] = radioGroups[field.name] || [];
        radioGroups[field.name].push(field);
      }
    });

    fields.forEach(function (field) {
      if (field.type === "radio") return;
      var fieldWrap = field.closest(".field") || field.closest(".option-card");
      if (!field.value || (field.type === "email" && !isValidEmail(field.value))) {
        isValid = false;
        if (fieldWrap) fieldWrap.classList.add("has-error");
      } else if (fieldWrap) {
        fieldWrap.classList.remove("has-error");
      }
    });

    Object.keys(radioGroups).forEach(function (name) {
      var group = radioGroups[name];
      var checked = group.some(function (radio) {
        return radio.checked;
      });
      var groupWrap = step.querySelector('[data-group="' + name + '"]');
      if (!checked) {
        isValid = false;
        if (groupWrap) groupWrap.classList.add("has-error");
      } else if (groupWrap) {
        groupWrap.classList.remove("has-error");
      }
    });

    return isValid;
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  form.querySelectorAll("[data-next]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!validateStep(currentStep)) return;
      if (currentStep < steps.length - 1) {
        showStep(currentStep + 1);
      }
    });
  });

  form.querySelectorAll("[data-prev]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (currentStep > 0) {
        showStep(currentStep - 1);
      }
    });
  });

  stepDots.forEach(function (dot, i) {
    dot.addEventListener("click", function () {
      if (i < currentStep) {
        showStep(i);
      }
    });
  });

  /* ---------------------------------------------------------------------
     Summary (step 5 recap)
     ------------------------------------------------------------------- */
  function getRadioValue(name) {
    var checked = form.querySelector('input[name="' + name + '"]:checked');
    return checked ? checked.value : "";
  }

  function getLabelForRadio(name) {
    var checked = form.querySelector('input[name="' + name + '"]:checked');
    if (!checked) return "—";
    var strong = checked.closest(".option-card").querySelector("strong");
    return strong ? strong.textContent : checked.value;
  }

  function buildSummary() {
    var summary = document.querySelector("[data-summary]");
    if (!summary) return;

    var bedrooms = form.querySelector("#bedrooms").value || "—";
    var bathrooms = form.querySelector("#bathrooms").value || "—";
    var date = form.querySelector("#preferredDate").value || "—";
    var time = getRadioValue("preferredTime") || "—";

    summary.innerHTML =
      "<dt>Space</dt><dd>" + escapeHtml(getLabelForRadio("propertyType")) + "</dd>" +
      "<dt>Service</dt><dd>" + escapeHtml(getLabelForRadio("service")) + "</dd>" +
      "<dt>Bedrooms / Bathrooms</dt><dd>" + escapeHtml(bedrooms) + " / " + escapeHtml(bathrooms) + "</dd>" +
      "<dt>Preferred date</dt><dd>" + escapeHtml(date) + "</dd>" +
      "<dt>Preferred time</dt><dd>" + escapeHtml(time.charAt(0).toUpperCase() + time.slice(1)) + "</dd>";
  }

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  /* ---------------------------------------------------------------------
     Preselect package/service from URL, e.g. booking.html?package=complete-clean
     ------------------------------------------------------------------- */
  function preselectFromQuery() {
    var params = new URLSearchParams(window.location.search);
    var pkg = params.get("package");
    if (!pkg) return;

    var radio = form.querySelector('input[name="service"][value="' + cssEscape(pkg) + '"]');
    if (radio) {
      radio.checked = true;
      var note = document.querySelector("[data-preselect-note]");
      if (note) {
        note.hidden = false;
        note.querySelector("strong").textContent = PACKAGE_LABELS[pkg] || pkg;
      }
    }
  }

  function cssEscape(value) {
    return window.CSS && CSS.escape ? CSS.escape(value) : value.replace(/"/g, '\\"');
  }

  /* ---------------------------------------------------------------------
     Submit — validates the final step, then shows the confirmation state.
     This does NOT send data anywhere yet. Wire a real request here later,
     e.g.:
       fetch("/api/booking-requests", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(collectFormData())
       });
     ------------------------------------------------------------------- */
  function collectFormData() {
    var data = {};
    new FormData(form).forEach(function (value, key) {
      data[key] = value;
    });
    return data;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!validateStep(currentStep)) return;

    var formData = collectFormData();
    // Backend integration point:
    // handOffToBackend(formData);
    void formData;

    form.hidden = true;
    var stepper = document.querySelector(".stepper");
    if (stepper) stepper.hidden = true;
    var confirmation = document.getElementById("booking-confirmation");
    if (confirmation) {
      confirmation.hidden = false;
      confirmation.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  preselectFromQuery();
  showStep(0);
})();
