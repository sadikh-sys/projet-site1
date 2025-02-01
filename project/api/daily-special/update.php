// api/daily-special/update.php
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

require_once '../config/database.php';

$data = json_decode(file_get_contents('php://input'), true);

if (!$data || !isset($data['dish_id'])) {
    die(json_encode(['error' => 'Invalid data']));
}

$dish_id = $conn->real_escape_string($data['dish_id']);

// Désactiver tous les plats du jour actuels
$sql = "UPDATE dishes SET is_daily_special = 0";
$conn->query($sql);

// Activer le nouveau plat du jour
$sql = "UPDATE dishes SET is_daily_special = 1 WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $dish_id);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Plat du jour mis à jour']);
} else {
    echo json_encode(['error' => 'Erreur lors de la mise à jour : ' . $conn->error]);
}

$stmt->close();
$conn->close();