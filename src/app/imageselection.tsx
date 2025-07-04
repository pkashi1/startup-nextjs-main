const constructionImages = [
  "/images/constrcution/dean-bennett-aBV8pVODWiM-unsplash.jpg",
  "/images/constrcution/di-F1MlxlEpaOk-unsplash.jpg",
  "/images/constrcution/fleur-dQf7RZhMOJU-unsplash.jpg",
  "/images/constrcution/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg",
  "/images/constrcution/pedro-miranda-3QzMBrvCeyQ-unsplash.jpg",
  "/images/constrcution/pexels-ywanphoto-188679.jpg"
];

export const getRandomImage = (): string => {
  const index = Math.floor(Math.random() * constructionImages.length);
  return constructionImages[index];
};

export default constructionImages;
