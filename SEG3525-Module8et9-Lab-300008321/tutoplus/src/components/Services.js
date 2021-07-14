import React from 'react';
import Groupes from '../groupes.jpg';
import One from '../one_on-one.JPG';
const Services = () => {
    return ( 
        <div class=" p-3 my-3 border bg-gradient" style={{'background':'rgba(204, 224, 255, 1)'}}>
            <h1 id="services" class="" style={{'color':'rgba(0, 0, 153, 1)', 'font-weight':'bold'}}> Voici les services offerts par Tuto+: </h1>
            <p style={{'font-size':'25px', 'font-weight':'bold', 'color':'rgba(0, 0, 153, 1)', 'padding-left':'0.1rem'}}>Tutorat en groupe:</p>
            <img src={Groupes} width="250" height="196" style={{'float':'left'}}/>
            <p style={{'font-size':'20px', 'color':'rgba(0, 0, 153, 1)', 'padding-left':'0.1rem'}}> Cela consiste d'un groupe d'élèves de différents niveaux qui sont mis ensemble pour s'entraider et trouver la solution à leurs problèmes de devoirs avec un prix de <strong>20$/heure</strong>.</p>
            <br></br><br></br><br></br><br></br><br></br>
            <p style={{'font-size':'25px', 'font-weight':'bold', 'color':'rgba(0, 0, 153, 1)', 'padding-left':'0.1rem'}}>Tutorat un à un:</p>
            <img src={One} width="250" height="196" style={{'float':'left'}}/>
            <p style={{'font-size':'20px', 'color':'rgba(0, 0, 153, 1)', 'padding-left':'0.1rem'}}> Cela consiste d'une session entre un tuteur spécialiste dans le domaine et l'étudiant en question avec un prix de <strong>50$/heure</strong>.</p>
            <br></br><br></br><br></br><br></br><br></br>
        </div>
        );
}
 
export default Services;