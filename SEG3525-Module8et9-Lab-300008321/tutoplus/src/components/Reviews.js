import React from 'react';
import './reviews.css';

const Reviews = () => {
    return(
        <div id="reviews" class="p-3 my-3 border bg-gradient">
            <h3 class="" style={{'color':'rgba(0,0,153,1)', 'font-weight':'bold'}}> Prenez le temps si désiré de donner nos tuteurs et/ou tutrices une rétroaction ci-dessous: </h3>
            <h4 style={{'color':'rgba(0, 0, 153, 1)', 'text-decoration': 'underline'}}>Choisir le tuteur ou la tutrice ci-dessous: </h4>
            <select id="schoolSelect" name="schoolSelect" style={{'color':'rgba(0, 0, 153, 1)'}}>
                <option value=""></option>
                <option value="Xiaofan Yin">Xiaofan Yin</option>
                <option value="Aleksander Oskar">Aleksander Oskar</option>
                <option value="Tony Belozzo">Tony Belozzo</option>
                <option value="Sachi Khan">Sachi Khan</option>
                <option value="Reethi Pat">Reethi Pat</option>
            </select>
            <br></br><br></br>
            <h4 style={{'color':'rgba(0, 0, 153, 1)', 'text-decoration': 'underline'}}>Écrire les commentaires ci-dessous: </h4>
            <input type="text" id="comments" name="comments"></input>
            <br></br><br></br>
            <button style={{'background':'rgba(26, 117, 255, 1)', 'font-weight':'bold', 'color':'rgba(0, 0, 153, 1)'}}>Soumettre</button>
        </div>
    );
}
 
export default Reviews;