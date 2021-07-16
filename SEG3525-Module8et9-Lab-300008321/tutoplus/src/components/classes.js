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
}