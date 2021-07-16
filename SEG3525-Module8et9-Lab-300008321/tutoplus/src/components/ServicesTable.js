import Groupes from '../groupes.jpg';
import One from '../one_on-one.JPG';

const ServicesTable = () => {
    return ( 
        <div class=" p-3 my-3 border bg-gradient">
            <h1 id="services" class="" style={{'color':'rgba(0, 0, 153, 1)', 'font-weight':'bold'}}> Voici les services offerts par Tuto+: </h1>
            <table class="table table-hover" style={{'color':'rgba(0, 0, 153, 1)'}}>
                <thead>
                    <tr>
                        <th scope="col"><h2>Services</h2></th>
                        <th scope="col"><h2></h2></th>
                        <th scope="col"><h2>Descriptions</h2></th>
                        <th scope="col"><h2>Prix</h2></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Tutorat en groupe</strong></td>
                        <td><img src={Groupes} width="150" height="130"></img></td>
                        <td>Cela consiste d'un groupe d'élèves de différents niveaux qui sont <strong>mis ensemble pour s'entraider</strong> et trouver la solution à leurs problèmes de devoirs.</td>
                        <td><strong>20$/heure</strong></td>
                    </tr>
                    <tr>
                        <td><strong>Tutorat un à un</strong></td>
                        <td><img src={One} width="150" height="130"></img></td>
                        <td>Cela consiste d'une session entre <strong>un tuteur spécialiste</strong> dans le domaine et l'étudiant en question.</td>
                        <td><strong>50$/heure</strong></td>
                    </tr>
                </tbody>
            </table>
        </div> 
    );
}
 
export default ServicesTable;