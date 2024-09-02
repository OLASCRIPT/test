import BigCard from "../Reusable/BigCard";
import "./HomeTop.css"
import fb from "../../assets/icon-facebook.svg"
import tw from "../../assets/icon-twitter.svg"
import Rm from "../../assets/icon-instagram.svg"
import Fk from "../../assets/icon-youtube.svg"
import up from "../../assets/icon-up.svg"
import down from '../../assets/icon-down.svg'
const HomeTope = () =>{
    return(
        <div className="home">

<BigCard
// gradient = {{backgroundColor:"hsl (208,92%, 53%)"}}
social= {<img src={fb} alt="facebook" />}
user = "@nathanf"
addnum ="1987"
subscribe= "Followers"
today = {<img src={up}  alt="top" />}
dril = "today"
Event= "12"
/>
<BigCard
social= {<img src={tw} alt="twitter" />}
user = "@nathanf"
addnum ="1044"
subscribe= "Followers"
today = {<img src={down}  alt="top" />}
dril = "today"
Event= "12"

/>
<BigCard

social= {<img src={Rm} alt="instagram" />}
user = "@nathanf"
addnum ="11k"
subscribe= "Followers"
Event= "12"
/>
<BigCard

social= {<img src={Fk} alt="youtube" />}
user = "@nathanf"
addnum ="8239"
subscribe= "Followers"
Event= "12"
/>
        </div>
    )
}
export default HomeTope