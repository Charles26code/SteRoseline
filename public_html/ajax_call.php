<?php
  const DATABASE_URL = "mysql:host=mysql;dbname=vin";
  const USER         = "dev";
  const PASSORD      = "dev";
  //TO DO class database pour éviter les réouvertures de session

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
    case 'categoriesRequested':
      if (isset($_POST['idChatRequest'], $_POST['categories'])) {
        $idChatRequest = $_POST['idChatRequest'];
        $categories = $_POST['categories'];


        $pdo = new PDO(DATABASE_URL, USER, PASSORD);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

        foreach ($categories as $key => $category) {
          $categories[$key] = "($idChatRequest, $category)";
        }
        $sql_categories = implode(',', $categories);
        $sql = "INSERT INTO vin.CategoryRequested (idChatRequest, idCategory) VALUES $sql_categories";
        $pdo->exec($sql);
        echo 1;
      } else {
        echo 0;
      }
      break;
    case 'dishRequested':
      if (isset($_POST['idChatRequest'], $_POST['dish'])) {
        $idChatRequest = $_POST['idChatRequest'];
        $dish = $_POST['dish'];

        $pdo = new PDO(DATABASE_URL, USER, PASSORD);

        $query = $pdo->prepare("INSERT INTO vin.DishRequested (idChatRequest, dish) VALUES (:idChatRequest, :dish)");
        $query->bindParam(':idChatRequest', $idChatRequest);
        $query->bindParam(':dish', $dish);

        $query->execute();
        echo 1;
      } else {
        echo 0;
      }
      break;
    case 'aromasRequested':
      if (isset($_POST['idChatRequest']) && !empty($_POST['aromas'])) {
        $idChatRequest = $_POST['idChatRequest'];
        $aromas = $_POST['aromas'];

        $pdo = new PDO(DATABASE_URL, USER, PASSORD);

        foreach ($aromas as $key => $aroma) {
          $aromas[$key] = "($idChatRequest, $aroma)";
        }
        $sql_aromas = implode(',', $aromas);
        $sql = "INSERT INTO vin.AromaRequested (idChatRequest, idAroma) VALUES $sql_aromas";
        $pdo->exec($sql);
        echo 1;
      } else {
        echo 0;
      }
      break;
    case 'grapeVarietyRequested':
      if (isset($_POST['idChatRequest']) && !empty($_POST['grapeVariety'])) {
        $idChatRequest = $_POST['idChatRequest'];
        $grapeVariety = $_POST['grapeVariety'];

        $pdo = new PDO(DATABASE_URL, USER, PASSORD);

        $query = $pdo->prepare("INSERT INTO vin.GrapeVarietyRequested (idChatRequest, idGrapeVariety) 
                SELECT :idChatRequest, idGrapeVariety FROM vin.GrapeVariety 
                WHERE lower(:grapeVariety) like CONCAT('%', lower(grapeVariety), '%')");
        $query->bindParam(':idChatRequest', $idChatRequest);
        $query->bindParam(':grapeVariety', $grapeVariety);

        $query->execute();
        echo 1;
      } else {
        echo 0;
      }
      break;
    case 'yearRequested':
      if (isset($_POST['idChatRequest'], $_POST['year'])) {
        $idChatRequest = $_POST['idChatRequest'];
        $year = $_POST['year'];

        $pdo = new PDO(DATABASE_URL, USER, PASSORD);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

        $query = $pdo->prepare("INSERT INTO vin.YearRequested (idChatRequest, year) VALUES (:idChatRequest, :year)");
        $query->bindParam(':idChatRequest', $idChatRequest);
        $query->bindParam(':year', $year);

        $query->execute();
        echo 1;
      } else {
        echo 0;
      }
      break;
    case 'opportunityRequested':
      if (isset($_POST['idChatRequest'], $_POST['opportunity'])) {
        $idChatRequest = $_POST['idChatRequest'];
        $opportunity = $_POST['opportunity'];

        $pdo = new PDO(DATABASE_URL, USER, PASSORD);

        $query = $pdo->prepare("INSERT INTO vin.OpportunityRequested (idChatRequest, opportunity) VALUES (:idChatRequest, :opportunity)");
        $query->bindParam(':idChatRequest', $idChatRequest);
        $query->bindParam(':opportunity', $opportunity);

        $query->execute();
        echo 1;
      } else {
        echo 0;
      }
      break;
    case 'marksRequested':
      if (isset($_POST['idChatRequest'], $_POST['marks'])) {
        $idChatRequest = $_POST['idChatRequest'];
        $marks = $_POST['marks'];

        $pdo = new PDO(DATABASE_URL, USER, PASSORD);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

        foreach ($marks as $key => $mark) {
          $marks[$key] = "($idChatRequest, $mark)";
        }
        $sql_marks = implode(',', $marks);
        $sql = "INSERT INTO vin.MarkRequested (idChatRequest, idMark) VALUES $sql_marks";
        $pdo->exec($sql);
        echo 1;
      } else {
        echo 0;
      }
      break;
    case 'priceRequested':
      if (isset($_POST['idChatRequest'], $_POST['price'])) {
        $idChatRequest = $_POST['idChatRequest'];
        $price = $_POST['price'];

        $pdo = new PDO(DATABASE_URL, USER, PASSORD);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

        $query = $pdo->prepare("INSERT INTO vin.PriceRequested (idChatRequest, price) VALUES (:idChatRequest, :price)");
        $query->bindParam(':idChatRequest', $idChatRequest);
        $query->bindParam(':price', $price);

        $query->execute();
        echo 1;
      } else {
        echo 0;
      }
      break;
    default:

  }
