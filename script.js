
const showQuickView = () => {
	const popupBoxMain = document.querySelector(".popupBoxMain");
	const container = document.querySelector(".container");

	if (popupBoxMain && container) {
		popupBoxMain.style.display = "initial";
		container.style.filter = "blur(8px)";
		popupBoxMain.style.position = "fixed";
		popupBoxMain.style.display = "flex";

	}
}

const hidePage = () => {
	const popupBoxMain = document.querySelector(".popupBoxMain");
	const container = document.querySelector(".container");


	if (popupBoxMain && container) {
		popupBoxMain.style.display = "none";
		container.style.filter = "blur(0px)";
	}
}
