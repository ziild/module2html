<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$conn = new mysqli("localhost", "root", "", "cv_database");

$data = json_decode(file_get_contents("php://input"), true);

if (empty($data['name'])) {
    echo json_encode([
        "message" => "Name is required"
    ]);
    exit();
}

$name = $conn->real_escape_string($data['name']);

$sql = "INSERT INTO contacts (name) VALUES ('$name')";

if ($conn->query($sql) === TRUE) {
    echo json_encode([
        "message" => "Data saved successfully"
    ]);
} else {
    echo json_encode([
        "message" => "Error saving data"
    ]);
}
?>