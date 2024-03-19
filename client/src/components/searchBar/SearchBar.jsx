// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function SearchBar() {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [dogBreeds, setDogBreeds] = useState([]);


// useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const { data } = await axios.get('http://localhost:3002/dogs');
//             setDogBreeds(data);
//         } catch (error) {
//             console.error('Error fetching dog breeds:', error);
//         }
//     };

//     fetchData();
// }, []);
    
//     const filteredBreeds = dogBreeds.filter(breed => breed.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const handleChange = evento => {
//         setSearchTerm(evento.target.value);
//     }
//     const handleKeyDown = (evento) => {
//       // console.log(evento.key);
//       if (evento.key === "Enter") {
//         search();
//       }
//     };

//   return (
//     <div>
//       <input
//         type="search"
//         onChange={handleChange}
//         onKeyDown={handleKeyDown}
//         placeholder="Buscar por nombre de raza..."
//         value={searchTerm}
//           />
//       <ul>
//         {filteredBreeds.map((breed) => (
//           <li key={breed.id}>{breed.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SearchBar;
