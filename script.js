const year = document.querySelector("#year");
const received = document.querySelector("#received");
const mobileAction = document.querySelector(".mobile-action");
const heroActions = document.querySelector(".hero-actions");
const contactSection = document.querySelector("#contact");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

const revealReceived = () => {
  if (received && window.location.hash === "#received") {
    received.hidden = false;
    window.requestAnimationFrame(() => {
      received.scrollIntoView({ block: "center" });
      received.focus({ preventScroll: true });
    });
  }
};

revealReceived();

if (received) {
  window.addEventListener("hashchange", revealReceived);
}

if (mobileAction && heroActions && "IntersectionObserver" in window) {
  let heroActionsVisible = true;
  let contactVisible = false;

  const updateMobileAction = () => {
    mobileAction.classList.toggle("is-hidden", heroActionsVisible || contactVisible);
  };

  const heroObserver = new IntersectionObserver(
    ([entry]) => {
      heroActionsVisible = entry.isIntersecting;
      updateMobileAction();
    },
    { threshold: 0.1 }
  );

  heroObserver.observe(heroActions);

  if (contactSection) {
    const contactObserver = new IntersectionObserver(
      ([entry]) => {
        contactVisible = entry.isIntersecting;
        updateMobileAction();
      },
      { threshold: 0.05 }
    );

    contactObserver.observe(contactSection);
  }
}
