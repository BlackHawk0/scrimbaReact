import './App.css';
import Header from './components/Header'
import PetCard from './components/PetCard'

// const user = {
//   name:"Daniel",
//   position:"Lead Instructor",
//   hometown:"Kitale"
// }

// const lists = (
//   <ul id='about-me'>
//     <li className='danie'>{user.name}</li>
//     <li className='danie'>{user.position}</li>
//     <li className='danie'>{user.hometown}</li>
//   </ul>

// )

const pets = [
  { id: 1, name: "Fezzik", image: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/23124207/Old-English-Sheepdog-running-in-the-park.jpg" },
  { id: 2, name: "Lucy", image: "https://emborapets.com/wp-content/uploads/2020/08/Why-Does-My-Springer-Spaniel-Smell-So-Bad_.jpg"},
  { id: 3, name: "Blaise", image: "https://www.thesprucepets.com/thmb/P8d4QM0bI4rJh1WygZDI8f8kNV4=/1000x1000/smart/filters:no_upscale()/GettyImages-870255568-8639765b08c6441dbe35ed72e2d8fb48.jpg" }
]


function App() {

  const petcards = pets.map(petobj => {
    return <PetCard key ={petobj.id}
    name={petobj.name} image={petobj.image} />
  })
  console.log(petcards);

  return (
    <div>
      <Header />
      <main>
        {/* <PetCard name={pets[0].name} image={pets[0].image} />
        <PetCard name={pets[1].name} image={pets[1].image} />
        <PetCard name={pets[2].name} image={pets[2].image} /> */}
        {petcards}
      </main>
    </div>
  );
}


export default App;
