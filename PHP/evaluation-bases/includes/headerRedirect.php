<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="refresh" content="<?php echo $delai; ?>;url=<?php echo $url; ?>">

    <title><?php isset($title) ? 'Alchemist Cook Book - ' . $title : 'Alchemist Cook Book'; ?></title>
    <link rel="icon" type="image/x-icon" href="../assets/img/pngtree-cooking-logo-vector-png-image_6697779.png" />
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
    <header class="header">
        <a href="../index.php" class="header-logo-container">
            <img src="../assets/img/pngtree-cooking-logo-vector-png-image_6697779.png" alt="logo" class="header-logo">
            <span>Alchemist Cook Book</span>
        </a>
        <div>
            <?php include 'navigation.php' ?>
        </div>
    </header>
    <main>

    