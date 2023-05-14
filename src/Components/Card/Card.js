import './Card.css'
const Card=(props)=>{
 
    return <>
<div class="card" style={{width: "18rem"}} >
 <a href={props.href}>
 <img src={props.img} class="card-img-top" alt="..."/>
 </a>
 
  <div class="card-body">
    <p class="card-text"> {props.text}</p>
  </div>
</div>
</>}
export default Card
