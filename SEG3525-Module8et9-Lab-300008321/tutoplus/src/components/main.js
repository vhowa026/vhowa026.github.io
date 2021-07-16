function populateListClassChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
    var opts = [], opt;
    
    s2.innerHTML = "";
    //code pour cette boucle pris de https://www.dyn-web.com/tutorials/forms/select/multi-selected.php
    var optionArray;
    optionArray = restrictClasses(classes, s1.value);

    for(i=0; i < optionArray.length; i++) {
        var className = optionArray[i].split(',');
        var radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "classes";
        radio.value = className[0];
        s2.appendChild(radio);

        var label = document.createElement('label');
        label.htmlFor = className[0];
        label.appendChild(document.createTextNode(className[0]+ ' ' + className[1]));
        s2.appendChild(label);

        s2.appendChild(document.createElement("br"));
    }
}