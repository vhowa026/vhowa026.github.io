import Information from "./Information";

const Appointment = () => {
    var classes = [
        {
            name: "Loi des ingénieurs",
            arts: false,
            education: false,
            engineering: true,
            healthSciences: false,
            law: false,
            medicine: false,
            science: false,
            socialSciences: false,
            management: false
        },
        {
            name: "Calcul 1",
            arts: false,
            education: false,
            engineering: true,
            healthSciences: false,
            law: false,
            medicine: false,
            science: false,
            socialSciences: false,
            management: false
        },
        {
            name: "Éthique",
            arts: false,
            education: false,
            engineering: false,
            healthSciences: false,
            law: true,
            medicine: false,
            science: false,
            socialSciences: false,
            management: false
        },
        {
            name: "Droits 101",
            arts: false,
            education: false,
            engineering: false,
            healthSciences: false,
            law: true,
            medicine: false,
            science: false,
            socialSciences: false,
            management: false
        },
        {
            name: "Théatre 101",
            arts: true,
            education: false,
            engineering: false,
            healthSciences: false,
            law: false,
            medicine: false,
            science: false,
            socialSciences: false,
            management: false
        },
        {
            name: "Improvisation",
            arts: true,
            education: false,
            engineering: false,
            healthSciences: false,
            law: false,
            medicine: false,
            science: false,
            socialSciences: false,
            management: false
        },
        {
            name: "Marketing",
            arts: false,
            education: false,
            engineering: false,
            healthSciences: false,
            law: false,
            medicine: false,
            science: false,
            socialSciences: false,
            management: true
        },
        {
            name: "Économie",
            arts: false,
            education: false,
            engineering: false,
            healthSciences: false,
            law: false,
            medicine: false,
            science: false,
            socialSciences: false,
            management: true
        },
        {
            name: "Scolarité et société",
            arts: false,
            education: true,
            engineering: false,
            healthSciences: false,
            law: false,
            medicine: false,
            science: false,
            socialSciences: false,
            management: false
        },
        {
            name: "Justice sociale et éducation globale",
            arts: false,
            education: true,
            engineering: false,
            healthSciences: false,
            law: false,
            medicine: false,
            science: false,
            socialSciences: false,
            management: false
        },
        {
            name: "Biologie",
            arts: false,
            education: false,
            engineering: false,
            healthSciences: true,
            law: false,
            medicine: true,
            science: true,
            socialSciences: false,
            management: false
        },
        {
            name: "Anatomie",
            arts: false,
            education: false,
            engineering: false,
            healthSciences: true,
            law: false,
            medicine: true,
            science: true,
            socialSciences: false,
            management: false
        },
        {
            name: "Sociologie",
            arts: false,
            education: false,
            engineering: false,
            healthSciences: false,
            law: false,
            medicine: false,
            science: false,
            socialSciences: true,
            management: false
        },
        {
            name: "Psychologie",
            arts: false,
            education: false,
            engineering: false,
            healthSciences: false,
            law: false,
            medicine: false,
            science: false,
            socialSciences: true,
            management: false
        }
    ];
    
    function restrictClasses(classes, restriction) {
        let classes_names = [];
        for(let i=0; i<classes.length; i+=1) {
            if((restriction == "Arts") && (classes[i].arts == true)) {
                classes_names.push(classes[i].name + ',');
            }
            else if((restriction == "Éducation") && (classes[i].education == true)) {
                classes_names.push(classes[i].name + ',');
            }
            else if((restriction == "Génie") && (classes[i].engineering == true)) {
                classes_names.push(classes[i].name + ',');
            }
            else if((restriction == "Sciences de la santé") && (classes[i].healthSciences == true)) {
                classes_names.push(classes[i].name + ',');
            }
            else if((restriction == "Droits") && (classes[i].law == true)) {
                classes_names.push(classes[i].name + ',');
            }
            else if((restriction == "Médecine") && (classes[i].medicine == true)) {
                classes_names.push(classes[i].name + ',');
            }
            else if((restriction == "Sciences") && (classes[i].science == true)) {
                classes_names.push(classes[i].name + ',');
            }
            else if((restriction == "Sciences Sociales") && (classes[i].socialSciences == true)) {
                classes_names.push(classes[i].name + ',');
            }
            else if((restriction == "Gestion") && (classes[i].management == true)) {
                classes_names.push(classes[i].name + ',');
            }
            else if(restriction == "Aucune") {
                classes_names.push(classes[i].name + ',');
            }
        }
        return classes_names;
    }

    function populateListClassChoices(slct1, slct2) {
        var s2 = document.getElementById(slct2);
        var opts = [], opt;
        
        if(s2)
            s2.innerHTML = "";
        //code pour cette boucle pris de https://www.dyn-web.com/tutorials/forms/select/multi-selected.php
        var optionArray= [];
        optionArray = restrictClasses(classes, slct1);
        console.log(optionArray);
        for(let i=0; i < optionArray.length; i++) {
            var className = optionArray[i].split(',');
    
            var option = document.createElement('option');
            option.htmlFor = className[0];
            option.appendChild(document.createTextNode(className[0]+ ' ' + className[1]));
            s2.appendChild(option);
        }
    }
    return ( 
        <div id="appointment" class=" p-3 my-3 border bg-gradient" style={{'background':'rgba(204, 224, 255, 1)'}}>
            <h1 style={{'color':'rgba(0, 0, 153, 1', 'font-weight':'bold'}}>Prenez un rendez-vous avec nous!</h1>
            <div class="row justify-content-around">
                <div class="card" style={{'width':'20rem', 'height':'7.9rem', 'color':'rgba(0, 0, 153, 1)'}}>
                    <h2 style={{'color':'rgba(0, 0, 153, 1)', 'text-decoration': 'underline'}}><center>Choisir votre université/collège</center></h2>
                    <select id="schoolSelect" name="schoolSelect" style={{'color':'rgba(0, 0, 153, 1)'}}>
                        <option value=""></option>
                        <option value="Université d'Ottawa">Université d'Ottawa</option>
                        <option value="Université Carleton">Université Carleton</option>
                        <option value="La Cité Collégiale">La Cité Collégiale</option>
                        <option value="Collège Algonquin">Collège Algonguin</option>
                    </select>
                </div>
                <div class="card" style={{'width':'20rem', 'height':'7.9rem', 'color':'rgba(0, 0, 153, 1)'}}>
                    <h2 style={{'color':'rgba(0, 0, 153, 1)', 'text-decoration':'underline'}}><center>Choisir la faculté du cours désiré</center></h2>
                    <select id="facultySelect" name="facultySelect" style={{'color':'rgba(0, 0, 153, 1)'}} onChange={(e) => populateListClassChoices(e.target.value, 'displayClasses')}>
                        <option value=""></option>
                        <option value="Arts">Arts</option>
                        <option value="Éducation">Éducation</option>
                        <option value="Génie">Génie</option>
                        <option value="Sciences de la santé">Sciences de la santé</option>
                        <option value="Droits">Droits</option>
                        <option value="Médecine">Médecine</option>
                        <option value="Sciences">Sciences</option>
                        <option value="Sciences Sociales">Sciences Sociales</option>
                        <option value="Gestion">Gestion</option>
                    </select>
                </div>
                <div class="card" style={{'width':'20rem', 'height':'7.9rem', 'color':'rgba(0, 0, 153, 1)'}}>
                    <h2 style={{'color':'rgba(0, 0, 153, 1)', 'text-decoration':'underline'}}><center>Choisir le cours désiré</center></h2>
                    <select id="displayClasses" name="displayClasses" style={{'color':'rgba(0, 0, 153, 1)'}}>

                    </select>
                </div>
            </div>
            <br></br>
            <Information />
        </div>
     );
}
export default Appointment;