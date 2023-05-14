
import './link.css'
const Link=(props)=>{

    return <>
    <label>{props.name}</label>
   <div className="progress progressstyle" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-info" style={{width: props.width}}>{props.value}</div>
</div>
</>}
export default Link
