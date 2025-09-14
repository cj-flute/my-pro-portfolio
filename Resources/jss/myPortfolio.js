<script>
      // Initialize animations
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
      });

      // Initialize Vanta.js background
      VANTA.GLOBE({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x3b82f6,
        backgroundColor: 0x101827,
        size: 0.8,
      });

      // Initialize mobile menu
      document
        .getElementById("mobile-menu-button")
        .addEventListener("click", function () {
          // You would implement mobile menu toggle functionality here
          alert("Mobile menu would open here in a complete implementation");
        });

      // Replace feather icons
      feather.replace();
    </script>