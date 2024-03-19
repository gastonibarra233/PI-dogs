const getDog = async () => {
    //hacer la primera solicitud para obtener la imagen del perro
  const imageUrl = "https://api.thedogapi.com/v1/images/search";
  const imageRes = await fetch(imageUrl);
    const [data] = await imageRes.json();
    const { url: image } = data;

    //hacer la segunda solicitud para obtener la información general del perro
    const breedUrl = "https://api.thedogapi.com/v1/breeds";
    const breedRes = await fetch(breedUrl);
    const breed = await breedRes.json();

    const breedNames = [];
    for (let i = 0; i < breed.length; i++) {
        breedNames.push(breed[i].name);       
    }

    const breedId = [];
    for (let i = 0; i < breed.length; i++) {
        breedId.push(breed[i].id)        
    }

    console.log(breedNames)
    console.log(breedId)
    
    const dog = {
      image,
      breed: {
        breedId,
        breedNames,
      },
    };

    // console.log(dog)
    return dog
};

export default getDog;
