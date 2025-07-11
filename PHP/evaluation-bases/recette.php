<?php
$title = 'Recettes';
require './data/recettesData.php';
include './functions/functions.php';

include './includes/header.php';
$id = $_GET['id'];
$recette = $recettes[$id];
if (!isset($recette)) {
    echo "La recette n'existe pas";
    return;
}
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