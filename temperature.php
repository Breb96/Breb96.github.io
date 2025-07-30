<?php
$weatherData = null;
$error = null;

if ($_SERVER["REQUEST_METHOD"] == "POST" && !empty($_POST["city"])) {
    $city = urlencode($_POST["city"]);
    $apiKey = "94c4ca3fa33541a8a1d40312252907"; // 🔑 Replace with your actual API key
    $units = "imperial"; // Use "metric" for Celsius
    $url = "https://api.openweathermap.org/data/2.5/weather?q={$city}&units={$units}&appid={$apiKey}";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    $weatherData = json_decode($response, true);
    if (!$weatherData || $weatherData['cod'] != 200) {
        $error = "City not found or weather data unavailable.";
        $weatherData = null;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Temperature Table</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      padding: 20px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }
    th, td {
      padding: 10px;
      text-align: center;
      border: 1px solid #ddd;
    }
    th {
      background-color: #333;
      color: white;
    }
    .legend {
      display: flex;
      margin-top: 30px;
      align-items: center;
      font-size: 14px;
    }
    .gradient-bar {
      flex: 1;
      height: 20px;
      background: linear-gradient(to right, rgb(0, 0, 255), rgb(255, 0, 0));
      margin: 0 10px;
      border-radius: 5px;
    }
    .weather-box {
      margin-top: 30px;
      padding: 20px;
      border-radius: 10px;
      color: white;
      text-align: center;
    }
    form {
      margin-top: 20px;
    }
    input[type="text"] {
      padding: 8px;
      width: 200px;
    }
    input[type="submit"] {
      padding: 8px 12px;
    }
  </style>
</head>
<body>

  <h1>Temperature Conversion Table (°F to °C)</h1>

  <form method="POST">
    <label for="city">Enter a City:</label>
    <input type="text" name="city" id="city" required>
    <input type="submit" value="Get Weather">
  </form>

  <?php if ($weatherData): 
    $tempF = $weatherData['main']['temp'];
    $tempC = round(($tempF - 32) * 5 / 9, 1);
    $description = ucfirst($weatherData['weather'][0]['description']);
    $cityName = $weatherData['name'];
    $icon = $weatherData['weather'][0]['icon'];

    // Background color based on temp
    $minC = -18;
    $maxC = 40;
    $clampedC = max($minC, min($tempC, $maxC));
    $normalized = ($clampedC - $minC) / ($maxC - $minC);
    $red = round($normalized * 255);
    $blue = round((1 - $normalized) * 255);
    $bgColor = "rgb($red, 0, $blue)";
  ?>
    <div class="weather-box" style="background-color: <?= $bgColor ?>;">
      <h2>Current Weather in <?= $cityName ?></h2>
      <img src="http://openweathermap.org/img/wn/<?= $icon ?>@2x.png" alt="<?= $description ?>">
      <p><strong><?= $tempF ?>°F / <?= $tempC ?>°C</strong></p>
      <p><?= $description ?></p>
    </div>
  <?php elseif ($error): ?>
    <p style="color:red;"><?= $error ?></p>
  <?php endif; ?>

  <table>
    <tr>
      <th>#</th>
      <th>Fahrenheit (°F)</th>
      <th>Celsius (°C)</th>
      <th>Description</th>
    </tr>
    <?php
    $entryNumber = 1;
    $fahrenheit = 0;

    while ($entryNumber <= 101) {
      $celsius = round(($fahrenheit - 32) * 5 / 9, 1);
      $minC = -18;
      $maxC = 40;
      $clampedC = max($minC, min($celsius, $maxC));
      $normalized = ($clampedC - $minC) / ($maxC - $minC);
      $red = round($normalized * 255);
      $blue = round((1 - $normalized) * 255);
      $bgColor = "rgb($red, 0, $blue)";
      if ($celsius < 15) {
        $description = "cold";
      } elseif ($celsius < 25) {
        $description = "nice";
      } else {
        $description = "hot";
      }

      echo "<tr style='background-color: $bgColor; color: white;'>
        <td>$entryNumber</td>
        <td>$fahrenheit °F</td>
        <td>$celsius °C</td>
        <td>$description</td>
      </tr>";

      $fahrenheit++;
      $entryNumber++;
    }
    ?>
  </table>

  <div class="legend">
    <span>Cold</span>
    <div class="gradient-bar"></div>
    <span>Hot</span>
  </div>

</body>
</html>
