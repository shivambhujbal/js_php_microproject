<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$servername = "localhost";
$username = "root";  // Default XAMPP user
$password = "";      // Default XAMPP password is empty
$dbname = "auth_system";

// Connect to MySQL
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["message" => "Database connection failed"]));
}

// Get JSON input
$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_DEFAULT);

// Validate input
if (!$email || !$data['password']) {
    die(json_encode(["message" => "Missing required fields"]));
}

// Check if the email already exists
$check_sql = "SELECT * FROM users WHERE email = ?";
$stmt = $conn->prepare($check_sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    die(json_encode(["message" => "User already exists"]));
}

// Insert new user
$sql = "INSERT INTO users (email, password) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $email, $password);

if ($stmt->execute()) {
    echo json_encode(["message" => "Registration successful"]);
} else {
    echo json_encode(["message" => "Registration failed"]);
}

$conn->close();
?>
