console.log("about to fetch an array of images");

const filenames = [
  "images/Spice&Wolf-1.jpg",
  "images/Spice&Wolf-2.jpg",
  "images/Raiser Of Gales.jpg",
  "images/Demon Deathchase.jpg",
];

const fetchImages = async () => {
  for (let filename of filenames) {
    const response = await fetch(filename);
    const blob = await response.blob();
    const img = document.createElement("img");
    img.src = URL.createObjectURL(blob);
    document.body.append(img);
  }
};

fetchImages(filenames)
  .then((response) => {
    console.log("yay!");
  })
  .catch((error) => {
    console.log("error!");
    console.error(error);
  });
