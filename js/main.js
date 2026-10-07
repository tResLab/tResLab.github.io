const menuToggle = document.querySelector(".menu-toggle");
const siteNav = menuToggle
	? document.getElementById(menuToggle.getAttribute("aria-controls"))
	: null;

if (menuToggle && siteNav) {
	const desktopLayout = window.matchMedia("(min-width: 1080px)");

	function setMenuOpen(isOpen) {
		menuToggle.setAttribute("aria-expanded", String(isOpen));
		menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
		siteNav.classList.toggle("site-nav-expanded", isOpen);
	}

	menuToggle.addEventListener("click", () => {
		setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
	});

	siteNav.addEventListener("click", (event) => {
		if (event.target.closest("a")) {
			setMenuOpen(false);
		}
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
			setMenuOpen(false);
			menuToggle.focus();
		}
	});

	desktopLayout.addEventListener("change", (event) => {
		if (event.matches) {
			setMenuOpen(false);
		}
	});
}
