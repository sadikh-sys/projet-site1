<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');


require_once '../config/database.php';

$sql = "SELECT * FROM dishes";
$result = $conn->query($sql);

$dishes = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $dishes[] = $row;
    }
}

echo json_encode($dishes);
$conn->close();