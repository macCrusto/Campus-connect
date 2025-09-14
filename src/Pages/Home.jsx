import Carousel from "../Components/Carousel"
import '../Styles/Home.css'

export default function Home(){
    return(
        <>
        <Carousel/>
        <div className="stats-container">
            <div className="stat-box">
                <div className="stat-number" style={{color:"#0056D2"}}>50+</div>
                <div className="stat-label">Annual events</div>
            </div>

             <div class="stat-box">
                <div class="stat-number" style={{color:"#0C942A"}}>5000+</div>
                <div class="stat-label">Active Students</div>
            </div>
            
            <div class="stat-box">
                <div class="stat-number" style={{color:"#D31470"}}>25+</div>
                <div class="stat-label">Departments</div>
            </div>
            
            <div class="stat-box">
                <div class="stat-number" style={{color:"#CAAD07"}}>100+</div>
                <div class="stat-label">Faculty Members</div>
            </div>
        </div>
        </>
    )
}