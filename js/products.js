blocker = document.getElementsByClassName("blocker")[0];

setTimeout(() => {
	modal2.style.display = "block";
	blocker.style.display = "block";
}, 2000);

close2Btn = document.getElementById("close2");

close2Btn.addEventListener("click", () => {
	modal2.style.display = "None";
	blocker.style.display = "None";
});

let cameraData = [
	{
		itemID: "1",
		itemName: "Canon G7X",
		itemType: "Cam Body",
		itemDesc:
			"Powered by the DIGIC 6 Image Processor, the PowerShot G7 X camera gives you a seamless, high-speed continuous shooting (up to 6.5 fps).",
		price: 199,
		image: "../images/products/1.jpg",
	},
	{
		itemID: "2",
		itemName: "Nikon D850",
		itemType: "Cam Body",
		itemDesc:
			"At the heart of the D850 is a back-side illuminated (BSI) FX-format full-frame CMOS image sensor with 45.7 megapixels and no optical low-pass filter.",
		price: 314.15,
		image: "../images/products/2.jpg",
	},
	{
		itemID: "3",
		itemName: "Nikon D5",
		itemType: "Cam Body",
		itemDesc:
			"Nikon D5 is a new full frame FX format DSLR with 20.8 MP, 4K Ultra HD video capture and 12 FPS continuous shooting.",
		price: 271.82,
		image: "../images/products/3.jpg",
	},
	{
		itemID: "4",
		itemName: "Fujifilm X-T30",
		itemType: "Cam Body",
		itemDesc:
			"The Fujifilm X-T30 is just a slight update to one of our highest-rated cameras. Fuji could have done more, but it still remains one of our favorite affordable interchangeable lens cameras.",
		price: 161.8,
		image: "../images/products/4.jpg",
	},
	{
		itemID: "5",
		itemName: "Fujifilm X-E4",
		itemType: "Cam Body",
		itemDesc:
			"The design of the X-E4 embodies the essence of everything that makes an X-E camera special. The timeless rangefinder styling and slim body mean you can carry this camera wherever you go.",
		price: 330.3,
		image: "../images/products/5.jpg",
	},
	{
		itemID: "6",
		itemName: "Panasonic Lumix DC-GH5",
		itemType: "Cam Body",
		itemDesc:
			"The Panasonic Lumix DC-GH5 is a Micro Four Thirds mirrorless interchangeable lens camera body announced by Panasonic on 4 January 2017.",
		price: 194,
		image: "../images/products/6.jpg",
	},
	{
		itemID: "7",
		itemName: "Fujifilm X-H2s",
		itemType: "Cam Body",
		itemDesc:
			"Featuring a stunning 5th generation X-Trans CMOS 5 HS sensor and X-Processor 5 in a beautifully designed body, photographers and filmmakers alike can now create at the pace of life and the speed of their imaginations.",
		price: 285,
		image: "../images/products/7.jpg",
	},

	{
		itemID: "8",
		itemName: "Sony Alpha 7S",
		itemType: "Cam Body",
		itemDesc:
			"Presenting the world's smallest and lightest1 full frame interchangeable lens camera.",
		price: 385.5,
		image: "../images/products/8.jpg",
	},
	{
		itemID: "9",
		itemName: "Rokinon AF Cine Series",
		itemType: "Lens",
		itemDesc:
			"Introducing the world's first cine auto-focus lens line-up, Cine AF.",
		price: 169.2,
		image: "../images/products/9.jpg",
	},
	{
		itemID: "10",
		itemName: "Canon EF 70-200mm f/2.8L",
		itemType: "Lens",
		itemDesc: "One of the finest telephoto zoom lenses in Canon's EF line.",
		price: 289.99,
		image: "../images/products/10.jpg",
	},
	{
		itemID: "11",
		itemName: "Irix 15mm f/2.4",
		itemType: "Lens",
		itemDesc: "Even at its widest aperture at f/2.4, it’s surprisingly sharp.",
		price: 178.5,
		image: "../images/products/11.jpg",
	},
];

// systematically populate grid
const productContainer = document.querySelector(".product-grid");
const productTemplate = document.querySelector("#product-template");

cameraData.forEach((data, index, array) => {
	const newProduct = productTemplate.cloneNode(true);
	newProduct.style.display = "block";

	newProduct.querySelector("img").src = data.image;
	newProduct.querySelector(".title-product").firstChild.nextSibling.innerHTML =
		data.itemName;
	newProduct.querySelector(".category").firstChild.nextSibling.innerHTML =
		data.itemType;
	newProduct.querySelector(
		".description-prod"
	).firstChild.nextSibling.innerHTML = data.itemDesc;
	newProduct.querySelector(".price").innerHTML = `${(
		Math.round(data.price * 100) / 100
	).toFixed(2)} USD`;

  // add large image capabilities
  newProduct.querySelector('.wsk-body').addEventListener('click', () => {
    window.open(data.image, '_blank');
  })

	productContainer.appendChild(newProduct);
});
