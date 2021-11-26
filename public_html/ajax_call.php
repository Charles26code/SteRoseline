<?php
  const DATABASE_URL = "mysql:host=mysql;dbname=vin";
  const USER         = "dev";
  const PASSORD      = "dev";

  switch ($_POST['method']) {
    case 'firsRequest' :
      if (isset($_POST['request'])) {
        $request = $_POST['request'];

        $pdo = new PDO(DATABASE_URL, USER, PASSORD);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

        $query = $pdo->prepare("INSERT INTO vin.ChatRequest (firstRequest) VALUES (:firstRequest)");
        $query->bindParam(':firstRequest', $request);

        $query->execute();
        echo $pdo->lastInsertId();
      } else {
        echo 0;
      }
      break;
    case 'dishRequested':
      if (isset($_POST['idChatRequest'], $_POST['dish'])) {
        $idChatRequest = $_POST['idChatRequest'];
        $dish = $_POST['dish'];

        $pdo = new PDO(DATABASE_URL, USER, PASSORD);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

        $query = $pdo->prepare("INSERT INTO vin.DishRequested (idChatRequest, dish) VALUES (:idChatRequest, :dish)");
        $query->bindParam(':idChatRequest', $idChatRequest);
        $query->bindParam(':dish', $dish);

        $query->execute();
        echo 1;
      } else {
        echo 0;
      }
      break;
    default:

  }
