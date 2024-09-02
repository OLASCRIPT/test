
import './BigCard.css'




const BigCard = (props) =>{
    return(
        <div className="BigCard">
            <div className='card'>
 <main> {props.social} </main> 
<small > {props.user}  </small>
</div>
<h1>{props.addnum}  </h1>
<span> {props.subscribe} </span>
<div className='flex '>
<main> {props.today}  </main>
<nav> {props.Event} </nav>
<p> {props.dril}  </p>
</div>
        </div>
    )
}
export default BigCard