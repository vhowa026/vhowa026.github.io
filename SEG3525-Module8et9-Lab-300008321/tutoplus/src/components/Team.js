import Harvey from '../harvey.jpg';
import Mike from '../Mike.JPG';
import Donna from '../donna.jpg';

const Team = () => {
    return ( 
        <div class=" p-3 my-3 border bg-gradient" style={{'background':'rgba(204, 224, 255, 1)'}}>
            <br></br>
            <h1 id="team" style={{'color':'rgba(0, 0, 153, 1)', 'font-weight':'bold'}}> Rencontrez notre équipe fondatrice!</h1>
            <br></br>
            <div class="row justify-content-around">
                <div class="card" style={{'width':'18rem', 'height':'41.5rem', 'color':'rgba(0, 0, 153, 1)'}}>
                    <img src={Harvey} width="264px" height="400px" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                    <p class="card-text" style={{'font-size':'22px', 'color':'rgba(0, 0, 153, 1)'}}/><strong>Harvey Specter</strong>
                    <br></br>Harvey Specter a gradué de l'université Harvard en droits et a ensuite poursuit un Executive MBA à l'université Queens. Il est le <strong>CEO</strong> de la compagnie Tuto+.
                </div>
            </div>
            <div class="card" style={{'width': '18rem', 'height': '41.5rem', 'color':'rgba(0, 0, 153, 1)'}}>
                <img src={Mike} width="264px" height="400px" class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <p class="card-text"/><strong> <b>Mike Ross</b> </strong>
                    <br></br>Mike Ross a gradué de l'université Columbia en génie informatique et a ensuite poursuit un Masters en Intelligence Artificielle à l'université de Waterloo. Il est le <strong>programmeur principal</strong> de la compagnie Tuto+.
                </div>
            </div>
        <div class="card" style={{'width': '18rem', 'height': '41.5rem', 'color':'rgba(0, 0, 153, 1)'}}>
            <img src={Donna} width="264px" height="400px" class="card-img-top" alt="..."></img>
            <div class="card-body">
                <p class="card-text"/><strong><b>Donna Paulsen</b></strong>
                <br></br>Donna Paulsen a gradué de l'université Yale en psychothérapie et a ensuite poursuit un Masters en psychoanalyse des enfants à l'université de Washington. Elle est la <strong>travailleuse sociale</strong> de la compagnie Tuto+.
            </div>
        </div>
        
    </div>
    <br></br><br></br>
    </div>
     );
}
 
export default Team;