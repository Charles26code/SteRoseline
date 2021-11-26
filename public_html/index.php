<?
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Chatbot</title>

    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/style.css">

  <script
    src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
    crossorigin="anonymous"></script>
</head>

<body>

    <div id="main-chatbot">
        <div id="container-chatbot" class="main-chatbot-close">

            <div class="relative-chatbot">
                <!-- Header du chatbot -->
                <div id='header-chatbot' class="header-chatbot">
                    <div class="back-header-chatbot" onclick="ouvertureFermutureChatbot()"></div>
                    <div class="img-header-chatbot" style="background-image: url('src/img/main-picture.png');">
                        <div style="background-color: #18A93F;">

                        </div>
                    </div>
                    <div class="text-header-chatbot">
                        <h1>Marie Victoire</h1>
                        <p>Votre conseillère en oenologie</p>
                    </div>
                    <div class="setting-header-chatbot" onClick="afficheSettingUser()"></div>
                </div>
                <!-- Zone d'affichage des messages -->
                <div id="message-content-chatbot" class="message-content-chatbot">

                    <!-- Première section d'affichage -->
                    <div class="first-view-presentation">
                        <div class="image-firstview"></div>
                        <div class="text-firstview">
                            <h1>Marie Victoire</h1>
                            <p>Votre conseillère en oenologie</p>
                        </div>
                    </div>

                </div>
                <!-- Zone d'envoi du texte -->
                <div class="input-text-message-chatbot">
                    <textarea id="contenu-message"></textarea>
                    <div><button id='button-submit'></button></div>
                </div>


                <!-- Modal de setting -->
                <div id="modal-setting-user" class="modal-setting-user-close">
                    <div class="cross-modal-setting-user" onclick="afficheSettingUser()"></div>
                    <h1>Réglage du chatbot</h1>
                    <p onclick="deleteChatBot()" class="unable-chatbot">Déactiver le Chat-Bot</p>
                    <div class="content-setting-user">
                        <p>Thème du chatbot</p>
                        <div class="row-theme-setting-user">
                            <div id="#202020" class="active" onclick="changeTheme('#202020')"
                                style='background-color: #202020;'></div>
                            <div id="#7CB66A" onClick="changeTheme('#7CB66A')" style='background-color: #7CB66A;'></div>
                            <div id="#88D9E5" onClick="changeTheme('#88D9E5')" style='background-color: #88D9E5;'></div>
                            <div id="#F7ACAC" onClick="changeTheme('#F7ACAC')" style='background-color: #F7ACAC;'></div>
                        </div>
                    </div>
                    <div class="content-setting-user">
                        <p>Taille des textes du chatbot</p>
                        <div class="row-theme-setting-user-size">
                            <input value="14" onchange="setUserSize()" type="number" id="sizeTextChatBot">
                            <p>px</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>

        <div id="container-chatbot-img" onClick="ouvertureFermutureChatbot()" class="container-chatbot-close">

            <div class="img-perso-chatbot" style=" background-image: url('src/img/main-picture.png');">
                <div id="cross-img-perso-chatbot" class="cross-img-perso-chatbot">
                </div>
                <div class="message-chatbot-close">
                    <p>Puis-je vous être utile ?</p>
                </div>
            </div>


        </div>

    </div>


    <section></section>
    <section>

    </section>
</body>

</html>
<script src="js/baseFunction.js"></script>
