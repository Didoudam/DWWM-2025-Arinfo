<?php
$title = 'Recettes';
require './data/recettesData.php';
include './functions/functions.php';

$id = $_GET['id'] ?? null;

if (!$id || !isset($recettes[$id])) {
    $delai = 5;
    $url = '../index.php';
    include './includes/headerRedirect.php'; // ← Le chemin était incorrect
    ?>
    <main class="main-content">
        <div class="redirection-container">
            <h1>Erreur 404</h1>
            <p>La recette n'existe pas. Vous allez être redirigé dans 5 secondes.</p>
            <p><a href="<?php echo htmlspecialchars($url); ?>">Cliquez ici pour accéder directement</a></p>
        </div>
    </main>
    </body>
    </html>
    <?php
    exit();
}

$recette = $recettes[$id];
include './includes/header.php';
?>

<div id="page-recette">
    <section id="recetteHero">
        <div class="hero-info">
            <h1><?php echo $recette['nom']; ?></h1>
            <div >
                <div class="hero-text">
                    <span class="bg-green">Difficulté : <?php echo $recette['difficulte']; ?></span>
                    <span class="bg-dark"><?php echo afficherEtoiles($recette); ?></span>

                </div>
            </div>
        </div>
<div class="hero-img">
            <img src="<?php echo $recette['image'] ?>" alt="photo de la recette">
    
</div>    </section>
    <section id="recette">
        <div class="recette-info">

            <h2>ingredients</h2>
            <ul>
                <?php
                foreach ($recette['ingredients'] as $ingredient) {
                    echo "<li>$ingredient</li>";
                }
                ?>
            </ul>
        </div>
        <div class="recette-info">
            <h2>Instructions</h2>
            <ol>
                <?php
                foreach ($recette['instructions'] as $instruction) {
                    echo "<li>$instruction</li>";
                }
                ?>
            </ol>
        </div>
    </section>
</div>



<?php
include './includes/footer.php';
?>