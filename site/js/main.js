/* =========================================================
   Hope Haven Youth Shelter - Site JavaScript
   Handles: mobile navigation, live occupancy indicator,
            form validation + confirmation messages.
   ========================================================= */

(function () {
  "use strict";

  /* ---------- 1. Mobile navigation toggle ---------- */
  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("primary-nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---------- 2. Shelter occupancy indicator ----------
     Part 1 uses sample data held in the page. In a later part this
     will be replaced by a live feed from the shelter management system. */
  function initOccupancy() {
    var widget = document.getElementById("occupancy");
    if (!widget) return;

    var totalBeds = parseInt(widget.dataset.totalBeds, 10) || 0;
    var bedsUsed = parseInt(widget.dataset.bedsUsed, 10) || 0;
    var available = Math.max(totalBeds - bedsUsed, 0);
    var percentUsed = totalBeds ? Math.round((bedsUsed / totalBeds) * 100) : 0;

    var bar = widget.querySelector(".occupancy-bar span");
    var count = widget.querySelector("[data-available]");
    var badge = widget.querySelector(".badge");
    var updated = widget.querySelector("[data-updated]");

    if (bar) bar.style.width = percentUsed + "%";
    if (count) count.textContent = available + " of " + totalBeds;

    if (badge) {
      if (available === 0) {
        badge.textContent = "Full - please call our 24h line";
        badge.className = "badge is-full";
      } else if (available <= 3) {
        badge.textContent = "Limited space";
        badge.className = "badge is-limited";
      } else {
        badge.textContent = "Beds available tonight";
        badge.className = "badge";
      }
    }

    if (updated) {
      updated.textContent = new Date().toLocaleString("en-ZA");
    }
  }

  /* ---------- 3. Form handling ----------
     Client-side validation with an on-page confirmation message.
     Server-side e-mail confirmation is added in a later part. */
  function initForms() {
    var forms = document.querySelectorAll("form[data-confirm]");

    Array.prototype.forEach.call(forms, function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();

        var status = form.querySelector(".form-status");
        if (!status) return;

        status.classList.add("is-visible");

        if (!form.checkValidity()) {
          status.classList.add("is-error");
          status.textContent =
            "Please complete all required fields correctly and try again.";
          form.reportValidity();
          return;
        }

        status.classList.remove("is-error");
        status.textContent = form.dataset.confirm;
        form.reset();
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initOccupancy();
    initForms();
  });
})();
