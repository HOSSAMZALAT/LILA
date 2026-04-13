import { useRouter } from "next/router";
import cars from "../../data/cars";

export default function CarDetails(){
  const router = useRouter();
  const {id} = router.query;
  const car = cars.find(c => c.id == id);

  if(!car) return <p>Loading...</p>;

  return(
    <div style={{padding:'30px',background:'#0f172a',color:'white',minHeight:'100vh'}}>
      <h1>{car.name}</h1>
      <img src={car.image} style={{width:'400px'}}/>
      <p>Price: {car.price}</p>
      <p>Year: {car.year}</p>
      <a href={`https://wa.me/201101555315?text=I want ${car.name}`}>
        <button style={{marginTop:'20px',padding:'10px',background:'green'}}>WhatsApp</button>
      </a>
    </div>
  )
}