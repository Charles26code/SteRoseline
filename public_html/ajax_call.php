<?php
  CONST DATABASE_URL = "mysql:host=mysql;dbname=vin";
  CONST USER = "dev";
  CONST PASSORD = "dev";
  if (isset($_POST['request'])) {
    $request = $_POST['request'];

    $pdo = new PDO(DATABASE_URL, USER, PASSORD);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $query = $pdo->prepare("INSERT INTO vin.ChatRequest (firstRequest) VALUES (:firstRequest)");
    $query->bindParam(':firstRequest', $request);

    $query->execute();

  }
