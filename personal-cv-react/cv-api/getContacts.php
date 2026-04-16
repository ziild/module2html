<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$conn = new mysqli("localhost", "root", "", "cv_database");
$sql = "SELECT * FROM contacts ORDER BY id DESC";
$result = $conn->query($sql);
$contacts = [];
while ($row = $result->fetch_assoc()) {
$contacts[] = $row;
}
echo json_encode($contacts);
?>