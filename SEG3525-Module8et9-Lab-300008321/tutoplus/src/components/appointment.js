import XiaofanYin from '../Xiaofan Yin.jpg';
import AleksanderOskar from '../Aleksander Oskar.jpg';

const Appointment = () => {
    return ( 
        <div class=" p-3 my-3 border bg-gradient">
            <h1 id="appointment" class="" style={{'color':'rgba(0, 0, 153, 1)', 'font-weight':'bold'}}> Rencontrez nos tuteurs et tutrices!</h1>
            <p style = {{'color':'rgba(0, 0, 153, 1)', 'font-size':'20px'}}>Ces tuteurs et tutrices sont recrutés à travers le monde pour avoir les meilleurs dans le domaine.</p>
            <table class="table table-hover" style={{'color':'rgba(0, 0, 153, 1)'}}>
                <thead>
                    <tr>
                        <th scope="col"><h2>Tuteurs</h2></th>
                        <th scope="col"><h2></h2></th>
                        <th scope="col"><h2>Informations</h2></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Xiaofan Yin</strong></td>
                        <td><img src={XiaofanYin} width="300" height="250"></img></td>
                        <td><strong>Xiaofan Yin</strong> est une excellente tutrice spécialiste dans les catégories suivantes: <strong>Droits</strong> et <strong>Sciences Sociales</strong>.</td>
                    </tr>
                    <tr>
                        <td><strong>Aleksander Oskar</strong></td>
                        <td><img src={AleksanderOskar} width="300" height="250"></img></td>
                        <td><strong>Aleksander Oskar</strong> est un tuteur passioné dans les catégories suivantes: <strong>Arts</strong> et <strong>Éducation</strong>.</td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}
 
export default Appointment;