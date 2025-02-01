<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

require_once '../config/database.php';

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    die(json_encode(['error' => 'Invalid data']));
}

$dish_id = $conn->real_escape_string($data['dish_id']);
$quantity = (int)$data['quantity'];
$building = $conn->real_escape_string($data['building']);
$room_number = $conn->real_escape_string($data['room_number']);
$payment_method = $conn->real_escape_string($data['payment_method']);

$sql = "INSERT INTO orders (id, dish_id, quantity, building, room_number, payment_method, status) 
        VALUES (UUID(), ?, ?, ?, ?, ?, 'pending')";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sisss", $dish_id, $quantity, $building, $room_number, $payment_method);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Order created successfully']);
} else {
    echo json_encode(['error' => 'Error creating order: ' . $conn->error]);
}

$stmt->close();
$conn->close();