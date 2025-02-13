<?php
header('Content-Type: application/json');

// Récupérer les données POST
$data = json_decode(file_get_contents('php://input'), true);

// Chemin vers le fichier results.json dans le volume
$file = 'data/results.json';

// Lire les résultats existants
$results = [];
if (file_exists($file)) {
    $jsonContent = file_get_contents($file);
    if (!empty($jsonContent)) {
        $results = json_decode($jsonContent, true) ?? [];
    }
}

// Ajouter le nouveau résultat
$results[] = [
    'winner' => $data['winner'],
    'date' => date('c') // Format ISO 8601
];

// Sauvegarder dans le fichier
file_put_contents($file, json_encode($results, JSON_PRETTY_PRINT));

// Réponse
echo json_encode(['success' => true]);
