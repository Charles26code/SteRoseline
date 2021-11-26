<?php
  $request = (isset($_POST['request'])) ? $_POST['request'] : '';

  $dsn = "mysql:host=mysql;dbname=vin";
  $user = "dev";
  $passwd = "dev";

  $pdo = new PDO($dsn, $user, $passwd);
  $pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING );

  $query = $pdo->prepare("INSERT INTO vin.ChatRequest (firstRequest) VALUES (:firstRequest)");
  $query->bindParam(':firstRequest', $request);

  $query->execute();

