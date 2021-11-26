//fonction de recuperation de la première requete
function firstRequest(request) {

    //Définition des tableaux de noms
    let searchWine = ['vin', 'vain', 'alcool', 'rose', 'rosé', 'rouge', 'blanc', 'blan'];
    let searchArome = ['gout', 'gou', 'goud', 'arome', 'arrome', 'odeur', 'texture'];
    let searchPlat = ['mangé', 'manger', 'déguster', 'deguster', 'degusté', 'deguste', 'plat'];
    let searchOccasion = ['occasion', 'compagnie'];
    let searchCepage = ['cepage', 'varite', 'varieté'];
    let searchMarque = ['domaine', 'chateau', 'sainte', 'marque'];
    let searchDate = ['datant', 'agé', 'age'];
    let searchPrix = ['entre', 'coutant', '€'];

    let motEnTrop = ['en', 'de', 'avec', 'un', 'pour'];
    answerUser = { "vin": "", "arome": "", "plat": "", "occasion": "", "cepage": "", "marque": "", "date": "", "prix": "" }

    ArrayRequest = request.split(" ");

    //recherche du vin
    for (let i = 0; i < ArrayRequest.length; i++) {
        for (let j = 0; j < ArrayRequest.length; j++) {
            let motSearch = ['rouge', 'blanc', 'rose', 'rosé'];
            if (ArrayRequest[i] == searchWine[j]) {
                for (let k = 0; k < motSearch.length; k++) {
                    if (ArrayRequest[i - 1] == motSearch[k] || ArrayRequest[i - 2] == motSearch[k] || ArrayRequest[i + 1] == motSearch[k] || ArrayRequest[i + 2] == motSearch[k]) {
                        if (answerUser["vin"] == "") {
                            answerUser["vin"] = motSearch[k];
                        } else if (answerUser["vin"] != motSearch[k]) {
                            answerUser["vin"] = answerUser["vin"] + ", " + motSearch[k];
                        }
                    }
                }
            }
        }
    }

    //recherche des aromes
    for (let i = 0; i < ArrayRequest.length; i++) {
        for (let j = 0; j < ArrayRequest.length; j++) {
            let motSearch = ['végétal', 'épicé', 'boisé', 'floral', 'fruité'];
            if (ArrayRequest[i] == searchArome[j]) {
                for (let k = 0; k < motSearch.length; k++) {
                    if (ArrayRequest[i - 1] == motSearch[k] || ArrayRequest[i - 2] == motSearch[k] || ArrayRequest[i + 1] == motSearch[k] || ArrayRequest[i + 2] == motSearch[k]) {
                        if (answerUser["arome"] == "") {
                            answerUser["arome"] = motSearch[k];
                        } else if (answerUser["arome"] != motSearch[k]) {
                            answerUser["arome"] = answerUser["arome"] + ", " + motSearch[k];
                        }
                    }

                }
            }
        }
    }

    //recherche des plat
    for (let i = 0; i < ArrayRequest.length; i++) {
        for (let j = 0; j < ArrayRequest.length; j++) {
            let motSearch = ['barbecue', 'fromages', 'viande', 'poisson', 'fruits de mer', 'dessert'];
            if (ArrayRequest[i] == searchPlat[j]) {
                for (let k = 0; k < motSearch.length; k++) {
                    if (ArrayRequest[i - 1] == motSearch[k] || ArrayRequest[i - 2] == motSearch[k] || ArrayRequest[i + 1] == motSearch[k] || ArrayRequest[i + 2] == motSearch[k]) {
                        if (answerUser["plat"] == "") {
                            answerUser["plat"] = motSearch[k];
                        } else if (answerUser["plat"] != motSearch[k]) {
                            answerUser["plat"] = answerUser["plat"] + ", " + motSearch[k];
                        }
                    }

                }
            }
        }
    }

    //recherche des occasion
    for (let i = 0; i < ArrayRequest.length; i++) {
        for (let j = 0; j < ArrayRequest.length; j++) {
            let motSearch = ['amis', 'repas', 'famille', 'grand', 'soir', 'soirée'];
            if (ArrayRequest[i] == searchOccasion[j]) {
                for (let k = 0; k < motSearch.length; k++) {
                    if (ArrayRequest[i - 1] == motSearch[k] || ArrayRequest[i - 2] == motSearch[k] || ArrayRequest[i + 1] == motSearch[k] || ArrayRequest[i + 2] == motSearch[k]) {
                        if (answerUser["occasion"] == "") {
                            answerUser["occasion"] = motSearch[k];
                        } else if (answerUser["occasion"] != motSearch[k]) {
                            answerUser["occasion"] = answerUser["occasion"] + ", " + motSearch[k];
                        }
                    }

                }
            }
        }
    }

    //recherche des cepage
    for (let i = 0; i < ArrayRequest.length; i++) {
        for (let j = 0; j < ArrayRequest.length; j++) {
            let motSearch = ['Mourvèdre', 'Syrah', 'Cabernet sauvignon', 'Rolle', 'Cinsault', 'Grenache noir', 'Tibouren', 'Sémillon', 'Carignan'];
            if (ArrayRequest[i] == searchCepage[j]) {
                for (let k = 0; k < motSearch.length; k++) {
                    if (ArrayRequest[i - 1] == motSearch[k] || ArrayRequest[i - 2] == motSearch[k] || ArrayRequest[i + 1] == motSearch[k] || ArrayRequest[i + 2] == motSearch[k]) {
                        if (answerUser["cepage"] == "") {
                            answerUser["cepage"] = motSearch[k];
                        } else if (answerUser["cepage"] != motSearch[k]) {
                            answerUser["cepage"] = answerUser["cepage"] + ", " + motSearch[k];
                        }
                    }

                }
            }
        }
    }

    //recherche des marque
    for (let i = 0; i < ArrayRequest.length; i++) {
        for (let j = 0; j < ArrayRequest.length; j++) {
            let motSearch = ['Domaine', 'Sainte', 'Roseline', 'Chateau', 'Demoiselles'];
            if (ArrayRequest[i] == searchMarque[j]) {
                for (let k = 0; k < motSearch.length; k++) {
                    if (ArrayRequest[i - 1] == motSearch[k] || ArrayRequest[i - 2] == motSearch[k] || ArrayRequest[i + 1] == motSearch[k] || ArrayRequest[i + 2] == motSearch[k]) {
                        if (answerUser["marque"] == "") {
                            answerUser["marque"] = motSearch[k];
                        } else if (answerUser["marque"] != motSearch[k]) {
                            answerUser["marque"] = answerUser["marque"] + ", " + motSearch[k];
                        }
                    }

                }
            }
        }
    }

    //recherche des date
    for (let i = 0; i < ArrayRequest.length; i++) {
        for (let j = 0; j < ArrayRequest.length; j++) {
            if (!isNaN(parseFloat(ArrayRequest[i]))) {
                if (ArrayRequest[i - 1] == searchDate[j] || ArrayRequest[i - 2] == searchDate[j]) {
                    alert(ArrayRequest[i - 1] + ' ' + searchPrix[j]);
                    if (answerUser["date"] == "") {
                        answerUser["date"] = ArrayRequest[i];

                    } else {
                        splitSizeDate = answerUser["date"].split(", ");
                        ajoutdate = 0;
                        for (let k = 0; k < splitSizeDate.length; k++) {
                            if (splitSizeDate[k] == ArrayRequest[i]) {
                                ajoutdate = 1;
                            }
                        }
                        if (ajoutdate == 0) {
                            answerUser["date"] = answerUser["date"] + ", " + ArrayRequest[i];
                        }
                    }
                }
            }
        }
    }

    //recherche des prix
    for (let i = 0; i < ArrayRequest.length; i++) {
        for (let j = 0; j < ArrayRequest.length; j++) {
            if (!isNaN(parseFloat(ArrayRequest[i]))) {
                if (ArrayRequest[i - 1] == searchPrix[j] || ArrayRequest[i - 2] == searchPrix[j] || ArrayRequest[i + 1] == searchPrix[j] || ArrayRequest[i + 2] == searchPrix[j]) {

                    if (answerUser["prix"] == "") {
                        answerUser["prix"] = ArrayRequest[i];

                    } else {
                        splitSizePrix = answerUser["prix"].split(", ");
                        ajout = 0;
                        for (let k = 0; k < splitSizePrix.length; k++) {
                            if (splitSizePrix[k] == ArrayRequest[i]) {
                                ajout = 1;
                            }
                        }
                        if (ajout == 0) {
                            answerUser["prix"] = answerUser["prix"] + ", " + ArrayRequest[i];
                        }
                    }
                }
            }
        }
    }

    retour = 'Je vois que vous recherchez un vin';
    questionManquante = '';

    if (answerUser["vin"] != "") {
        retour = retour + ' ' + answerUser["vin"];
    } else {
        if (questionManquante == '') {
            questionManquante = '1';
        } else {
            questionManquante = questionManquante + ', 1';
        }
    }

    if (answerUser["arome"] != "") {
        retour = retour + ', avec un gout de ' + answerUser["arome"];
    } else {
        if (questionManquante == '') {
            questionManquante = '2';
        } else {
            questionManquante = questionManquante + ', 2';
        }
    }

    if (answerUser["plat"] != "") {
        retour = retour + ', pour accompagner ' + answerUser["plat"];
    } else {
        if (questionManquante == '') {
            questionManquante = '3';
        } else {
            questionManquante = questionManquante + ', 3';
        }
    }
    if (answerUser["occasion"] != "") {
        retour = retour + ', pour une occasion comme ' + answerUser["occasion"];
    } else {
        if (questionManquante == '') {
            questionManquante = '4';
        } else {
            questionManquante = questionManquante + ', 4';
        }
    }

    if (answerUser["cepage"] != "") {
        retour = retour + ', provenant du cepage de ' + answerUser["cepage"];
    } else {
        if (questionManquante == '') {
            questionManquante = '5';
        } else {
            questionManquante = questionManquante + ', 5';
        }
    }
    if (answerUser["marque"] != "") {
        retour = retour + ', avec la marque ' + answerUser["marque"];
    } else {
        if (questionManquante == '') {
            questionManquante = '6';
        } else {
            questionManquante = questionManquante + ', 6';
        }
    }

    if (answerUser["date"] != "") {
        retour = retour + ', datant de ' + answerUser["date"];
    } else {
        if (questionManquante == '') {
            questionManquante = '7';
        } else {
            questionManquante = questionManquante + ', 7';
        }
    }
    if (answerUser["prix"] != "") {
        retour = retour + ', pour un budget de ' + answerUser["prix"];
    } else {
        if (questionManquante == '') {
            questionManquante = '8';
        } else {
            questionManquante = questionManquante + ', 8';
        }
    }

    var ladate = new Date();
    var recapitulatif = document.createElement("div");
    recapitulatif.className = "message-chatbot container-message-chatbot";
    recapitulatif.innerHTML = "<div><p id='text-message' style='font-size:14px;'>" + retour + "</p></div><p class='date-message'><span>envoyé à </span>" + ladate.getHours() + " : " + ladate.getMinutes() + "</p>";
    document.getElementById("message-content-chatbot").appendChild(recapitulatif);

    var relance = document.createElement("div");
    relance.className = "message-chatbot container-message-chatbot";
    relance.innerHTML = "<div><p id='text-message' style='font-size:14px;'>Alors, prêt à continuer ?</p></div><p class='date-message'><span>envoyé à </span>" + ladate.getHours() + " : " + ladate.getMinutes() + "</p>";
    document.getElementById("message-content-chatbot").appendChild(relance);


}

//Au lancement de la page
document.addEventListener('DOMContentLoaded', function () {
    etatlancement = -1;

});

//affichage du chatbot
function ouvertureFermutureChatbot() {

    if (document.getElementById('container-chatbot-img').className == 'container-chatbot-close') {
        document.getElementById('container-chatbot-img').classList.remove('container-chatbot-close');
        document.getElementById('container-chatbot-img').classList.add('container-chatbot-open');

        document.getElementById('container-chatbot').classList.remove('main-chatbot-close');
        document.getElementById('container-chatbot').classList.add('main-chatbot-open');

        messageContentChatBot = document.getElementById('message-content-chatbot');
        messageContentChatBot.scrollTop = messageContentChatBot.scrollHeight;

        if (etatlancement == -1) {
            setTimeout(lancementBot, 3000);
            etatlancement++;
        }

    } else {
        document.getElementById('container-chatbot-img').classList.add('container-chatbot-close');
        document.getElementById('container-chatbot-img').classList.remove('container-chatbot-open');

        document.getElementById('container-chatbot').classList.add('main-chatbot-close');
        document.getElementById('container-chatbot').classList.remove('main-chatbot-open');

        messageContentChatBot = document.getElementById('message-content-chatbot');
        messageContentChatBot.scrollTop = messageContentChatBot.scrollHeight;
    }
}

//Envoi message
document.getElementById("button-submit").addEventListener("click", function () {
    var ladate = new Date();

    if (document.getElementById('contenu-message').value != 'error') {

        var div = document.createElement("div");
        div.className = "message-chatbot container-message-user";
        div.innerHTML = "<div><p id='text-message' style='font-size:14px;'>" + document.getElementById('contenu-message').value + "</p></div><p class='date-message'><span>envoyé à </span>" + ladate.getHours() + " : " + ladate.getMinutes() + "</p>";

        document.getElementById("message-content-chatbot").appendChild(div);

        if (etatlancement == 0) {
            firstRequest(document.getElementById('contenu-message').value);

            etatlancement++;
        }

        if (etatlancement > 0) {
            QMSortie = questionManquante.split(",");
            if (QMSortie[etatlancement - 2] == 1) {
                for (let i = 1; i < 4; i++) {
                    if (document.getElementById('categorie-' + i).checked == true) {
                        answerUser["vin"] = answerUser["vin"] + ' vin ' + document.getElementById('categorie-' + i).value;

                    }
                }
            }
            if (QMSortie[etatlancement - 2] == 2) {
                for (let i = 1; i < 6; i++) {
                    if (document.getElementById('arome-' + i).checked == true) {
                        answerUser["arome"] = answerUser["arome"] + ' arome ' + document.getElementById('arome-' + i).value;
                    }
                }
            }
            if (QMSortie[etatlancement - 2] == 3) {
                answerUser["plat"] = answerUser["plat"] + ' plat ' + document.getElementById('contenu-message').value;
            }
            if (QMSortie[etatlancement - 2] == 4) {
                answerUser["occasion"] = answerUser["occasion"] + ' occasion ' + document.getElementById('contenu-message').value;
            }
            if (QMSortie[etatlancement - 2] == 5) {
                answerUser["cepage"] = answerUser["cepage"] + ' cepage ' + document.getElementById('contenu-message').value;
            }
            if (QMSortie[etatlancement - 2] == 6) {
                for (let i = 1; i < 3; i++) {
                    if (document.getElementById('marque-' + i).checked == true) {
                        answerUser["marque"] = answerUser["marque"] + ' marque ' + document.getElementById('marque-' + i).value;
                    }
                }
            }
            if (QMSortie[etatlancement - 2] == 7) {
                answerUser["date"] = answerUser["date"] + ' date ' + document.getElementById('contenu-message').value;
            }
            if (QMSortie[etatlancement - 2] == 8) {
                answerUser["prix"] = answerUser["prix"] + ' prix ' + document.getElementById('contenu-message').value;
                etatlancement++;

            }
            if (QMSortie.length == (etatlancement - 1)) {
                etatlancement = 9;
            }
            if (QMSortie[etatlancement - 1] == 1) {
                var message1 = document.createElement("div");
                message1.className = "message-chatbot container-message-chatbot";
                message1.innerHTML = "<div><p id='text-message' style='font-size:14px;'>Quels catégories de vins recherchez vous ?</p></div><p class='date-message'><span>envoyé à </span>" + ladate.getHours() + " : " + ladate.getMinutes() + "</p>";
                document.getElementById("message-content-chatbot").appendChild(message1);

                //Conteneur des couleur du vin
                var conteneurCouleur = document.createElement("div");
                conteneurCouleur.className = "container-categorie-vin";
                conteneurCouleur.innerHTML = "<div id='box-categorie-1' class='box-categorie-vin'><div style='background-image: url(src/produit/rose.png);'></div><p>Rosé</p><input type='checkbox' value='rose rosé' id='categorie-1' onchange='changeCouleur(1)'></div><div id='box-categorie-2' class='box-categorie-vin'><div style='background-image: url(src/produit/vin-blanc.png);'></div><p>Blanc</p><input type='checkbox' value='blanc' id='categorie-2' onchange='changeCouleur(2)'></div><div id='box-categorie-3' class='box-categorie-vin'><div style='background-image: url(src/produit/rouge.png);'></div><p>Rouge</p><input value='rouge' type='checkbox' id='categorie-3' onchange='changeCouleur(3)'></div>";
                document.getElementById("message-content-chatbot").appendChild(conteneurCouleur);
                etatlancement++;

            } else if (QMSortie[etatlancement - 1] == 2) {

                var message1 = document.createElement("div");
                message1.className = "message-chatbot container-message-chatbot";
                message1.innerHTML = "<div><p id='text-message' style='font-size:14px;'>Quels arômes parmi les grandes catégories ci-dessous vous correspondent le mieux ? </p></div><p class='date-message'><span>envoyé à </span>" + ladate.getHours() + " : " + ladate.getMinutes() + "</p>";
                document.getElementById("message-content-chatbot").appendChild(message1);
                //Conteneur des button
                var conteneurButton = document.createElement("div");
                conteneurButton.className = "button-list-view";
                conteneurButton.innerHTML = "<div id='button-1'><input type='checkbox' value='Végétal' id='arome-1' onclick='selectButton(1)' /><p>Végétal</p></div><div id='button-2'><input type='checkbox' id='arome-2' value='Fruité' onclick='selectButton(2)' /><p>Fruité</p></div><div id='button-3'><input  id='arome-3' value='Floral' type='checkbox' onclick='selectButton(3)' /><p>Floral</p></div><div id='button-4'><input type='checkbox' id='arome-4' value='Empyromatique' onclick='selectButton(4)' /><p>Empyromatique</p></div><div id='button-5'><input id='arome-5' type='checkbox' value='Epice aromate' onclick='selectButton(5)' /><p>Epice aromate</p></div>";
                document.getElementById("message-content-chatbot").appendChild(conteneurButton);

                etatlancement++;

            } else if (QMSortie[etatlancement - 1] == 3) {
                var message1 = document.createElement("div");
                message1.className = "message-chatbot container-message-chatbot";
                message1.innerHTML = "<div><p id='text-message' style='font-size:14px;'>Avec quels plats accompagnez-vous votre vin ? </p></div><p class='date-message'><span>envoyé à </span>" + ladate.getHours() + " : " + ladate.getMinutes() + "</p>";
                document.getElementById("message-content-chatbot").appendChild(message1);
                etatlancement++;

            } else if (QMSortie[etatlancement - 1] == 4) {
                var message1 = document.createElement("div");
                message1.className = "message-chatbot container-message-chatbot";
                message1.innerHTML = "<div><p id='text-message' style='font-size:14px;'>En général, à quels occasions buvez vous du vin ? Sélectionnez une étiquette ou répondez directement dans la zone de saisi </p></div><p class='date-message'><span>envoyé à </span>" + ladate.getHours() + " : " + ladate.getMinutes() + "</p>";
                document.getElementById("message-content-chatbot").appendChild(message1);
                etatlancement++;

            } else if (QMSortie[etatlancement - 1] == 5) {
                var message1 = document.createElement("div");
                message1.className = "message-chatbot container-message-chatbot";
                message1.innerHTML = "<div><p id='text-message' style='font-size:14px;'>Quels cépages vous inspire le plus ? Mourvèdre | Syrah | Cabernet sauvignon | Rolle | Cinsault | Grenache noir | Tibouren | Sémillon | Carignan</p></div><p class='date-message'><span>envoyé à </span>" + ladate.getHours() + " : " + ladate.getMinutes() + "</p>";
                document.getElementById("message-content-chatbot").appendChild(message1);
                etatlancement++;

            } else if (QMSortie[etatlancement - 1] == 6) {
                var message1 = document.createElement("div");
                message1.className = "message-chatbot container-message-chatbot";
                message1.innerHTML = "<div><p id='text-message' style='font-size:14px;'>Avez vous une préférence parmi les marques proposés ?</p></div><p class='date-message'><span>envoyé à </span>" + ladate.getHours() + " : " + ladate.getMinutes() + "</p>";
                document.getElementById("message-content-chatbot").appendChild(message1);
                setTimeout(function () {
                    var conteneurMarque = document.createElement("div");
                    conteneurMarque.className = "container-marque-vin";
                    conteneurMarque.innerHTML = "<div id='box-marque-1' class='box-marque-vin'><div style='background-image: url(src/marque/sainte-roseline.png);'></div><input type='checkbox' id='marque-1' value='Domaine Sainte Roseline' onchange='changeMarque(1)'></div><div id='box-marque-2' class='box-marque-vin'><div style='background-image: url(src/marque/demoiselles.png);'></div><input type='checkbox' value='Chateau des Demoiselles' id='marque-2' onchange='changeMarque(2)'></div>";
                    document.getElementById("message-content-chatbot").appendChild(conteneurMarque);

                    element = document.getElementById('message-content-chatbot');
                    element.scrollTop = element.scrollHeight;
                }, 1000);
                etatlancement++;
            } else if (QMSortie[etatlancement - 1] == 7) {
                var message1 = document.createElement("div");
                message1.className = "message-chatbot container-message-chatbot";
                message1.innerHTML = "<div><p id='text-message' style='font-size:14px;'>De quelle date souhaitez-vous votre vin ?</p></div><p class='date-message'><span>envoyé à </span>" + ladate.getHours() + " : " + ladate.getMinutes() + "</p>";
                document.getElementById("message-content-chatbot").appendChild(message1);
                etatlancement++;

            } else if (QMSortie[etatlancement - 1] == 8) {
                var message1 = document.createElement("div");
                message1.className = "message-chatbot container-message-chatbot";
                message1.innerHTML = "<div><p id='text-message' style='font-size:14px;'>Quel prix souhaitez-vous mettre ?</p></div><p class='date-message'><span>envoyé à </span>" + ladate.getHours() + " : " + ladate.getMinutes() + "</p>";
                document.getElementById("message-content-chatbot").appendChild(message1);
                etatlancement++;

            }


            if (etatlancement >= 9) {
                retour = 'Je vois que vous recherchez un vin  ' + answerUser["vin"] + ', avec un gout de ' + answerUser["arome"] + ', pour accompagner ' + answerUser["plat"] + ', pour une occasion comme ' + answerUser["occasion"] + ', provenant du cepage de ' + answerUser["cepage"] + ', avec la marque ' + answerUser["marque"] + ', datant de ' + answerUser["date"] + ', pour un budget de ' + answerUser["prix"];

                var ladate = new Date();
                var finChat = document.createElement("div");
                finChat.className = "message-chatbot container-message-chatbot";
                finChat.innerHTML = "<div><p id='text-message' style='font-size:14px;'>" + retour + "</p></div><p class='date-message'><span>envoyé à </span>" + ladate.getHours() + " : " + ladate.getMinutes() + "</p>";
                document.getElementById("message-content-chatbot").appendChild(finChat);

                setTimeout(function () {
                    var finChat = document.createElement("div");
                    finChat.className = "message-chatbot container-message-chatbot";
                    finChat.innerHTML = "<div><p id='text-message' style='font-size:14px;'>J'ai maintenant besoin de quelques instants pour trouver un résultat ! </p></div><p class='date-message'><span>envoyé à </span>" + ladate.getHours() + " : " + ladate.getMinutes() + "</p>";
                    document.getElementById("message-content-chatbot").appendChild(finChat);
                    element = document.getElementById('message-content-chatbot');
                    element.scrollTop = element.scrollHeight;
                }, 1000);

            }
        }

        document.getElementById('contenu-message').value = '';

        element = document.getElementById('message-content-chatbot');
        element.scrollTop = element.scrollHeight;

    } else {

        //Message d'alerte du chatBot
        var alertMessage = document.createElement("div");
        alertMessage.className = "message-chatbot container-message-chatbot-alert";
        alertMessage.innerHTML = "<div><p id='text-message' style='font-size:14px;'>En général, à quels occasions buvez vous du vin ? Sélectionnez une étiquette ou répondez directement dans la zone de saisi</p></div><p class='date-message'><span>envoyé à </span>" + ladate.getHours() + " : " + ladate.getMinutes() + "</p>";
        document.getElementById("message-content-chatbot").appendChild(alertMessage);

    }
});

//Lancement du chatbot
function lancementBot() {
    var ladate = new Date();

    //Message de présentation

    document.getElementById('message-content-chatbot').innerHTML = "<p class='datetime-chatbot'> Mercredi 1 dec</p><div class='message-chatbot container-message-chatbot'><div><p id='text-message' style='font-size:14px;'>Bonjour ! Je suis Marie Victoire</p></div><p class='date-message'><span>envoyé à </span>" + ladate.getHours() + " : " + ladate.getMinutes() + "</p></div>";

    setTimeout(function () {
        var chatMessage2 = document.createElement("div");
        chatMessage2.className = "message-chatbot container-message-chatbot";
        chatMessage2.innerHTML = "<div><p id='text-message' style='font-size:14px;'>Mon rôle est de vous accompagner lors de votre visite sur notre site pour vous proposer le vin qui correspondra parfaitement à vos attentes !</p></div><p class='date-message'><span>envoyé à </span>" + ladate.getHours() + " : " + ladate.getMinutes() + "</p>";
        document.getElementById("message-content-chatbot").appendChild(chatMessage2);
    }, 1000);
    setTimeout(function () {
        var chatMessage3 = document.createElement("div");
        chatMessage3.className = "message-chatbot container-message-chatbot";
        chatMessage3.innerHTML = "<div><p id='text-message' style='font-size:14px;'>Comment puis-je vous aider ?</p></div><p class='date-message'><span>envoyé à </span>" + ladate.getHours() + " : " + ladate.getMinutes() + "</p>";
        document.getElementById("message-content-chatbot").appendChild(chatMessage3);
    }, 2000);
}

/*
    Action graphiques
*/

//Les selection de bouton
function selectButton(num) {
    if (document.getElementById('button-' + num).className == "active") {
        document.getElementById('button-' + num).classList.remove('active');
    } else {
        document.getElementById('button-' + num).classList.add('active');
    }

}
//Bouton des marques
function changeMarque(i) {
    if (document.getElementById('marque-' + i).checked == false) {
        document.getElementById('box-marque-' + i).classList.remove('box-marque-active');
        document.getElementById('box-marque-' + i).classList.add('box-marque-vin');
    } else {
        document.getElementById('box-marque-' + i).classList.add('box-marque-active');
        document.getElementById('box-marque-' + i).classList.remove('box-marque-vin');
    }
}
//Bouton de catégorie du vin
function changeCouleur(i) {
    if (document.getElementById('categorie-' + i).checked == false) {
        document.getElementById('box-categorie-' + i).classList.remove('box-categorie-active');
        document.getElementById('box-categorie-' + i).classList.add('box-categorie-vin');
    } else {
        document.getElementById('box-categorie-' + i).classList.add('box-categorie-active');
        document.getElementById('box-categorie-' + i).classList.remove('box-categorie-vin');
    }
}
//Set text size
function setUserSize() {

    size = document.getElementById('sizeTextChatBot').value;
    newSize = size + 'px';

    var elms = document.querySelectorAll("[id='text-message']");

    for (var i = 0; i < elms.length; i++) {
        elms[i].setAttribute("style", "font-size: " + newSize + ";");

    }
}
//Setting user change theme
function changeTheme(color) {
    function rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    rgb = document.getElementById('header-chatbot').style.backgroundColor.split(',');
    r = parseInt(rgb[0].substring(4));
    g = parseInt(rgb[1]);
    b = parseInt(rgb[2]);
    oldColor = rgbToHex(r, g, b);

    document.getElementById('header-chatbot').style.backgroundColor = color;
    document.getElementById(color).classList.add('active');
    document.getElementById(oldColor.toUpperCase()).classList.remove('active');
}
//ChatBot delete
function deleteChatBot() {
    document.getElementById('main-chatbot').style.display = "none";
}
//Affiche setting
function afficheSettingUser() {
    if (document.getElementById('modal-setting-user').className == 'modal-setting-user-close') {
        document.getElementById('modal-setting-user').classList.add('modal-setting-user-open');
        document.getElementById('modal-setting-user').classList.remove('modal-setting-user-close');
    } else {
        document.getElementById('modal-setting-user').classList.remove('modal-setting-user-open');
        document.getElementById('modal-setting-user').classList.add('modal-setting-user-close');
    }
}