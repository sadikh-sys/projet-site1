<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

require_once '../config/database.php';



$sql = "SELECT * FROM dishes WHERE is_daily_special = 1 LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $daily_special = $result->fetch_assoc();
} else {
    $sql = "SELECT * FROM dishes ORDER BY RAND() LIMIT 1";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $daily_special = $result->fetch_assoc();
    } else {
        echo json_encode(['error' => 'Aucun plat disponible.']);
        exit;
    }
}

echo json_encode($daily_special);
$conn->close();
