import Link from "next/link";
export default function CarCard({car}){
  return(
    <div style={{background:'#111',padding:'15px',borderRadius:'10px',textAlign:'center'}}>
      <img src={car.image} style={{width:'100%',borderRadius:'10px'}} />
      <h3>{car.name}</h3>
      <p>{car.price}</p>
      <p>{car.year}</p>
      <Link href={`/cars/${car.id}`}>
        <button style={{marginTop:'10px',padding:'10px',background:'#38bdf8'}}>Details</button>
      </Link>
    </div>
  )
}