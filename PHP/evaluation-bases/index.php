<?php
require './data/recettesData.php';
include './functions/functions.php';

include './includes/header.php';
?>
<section id="hero">

    <h1>Chez l'Alchemist, <br>Nous vous proposons une sélection de <?php echo count($recettes); ?> recettes</h1>
    <div id="news">
        <div class="main-new new">
            <div class="img-container">
                <img src="https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg" alt="">
            </div>
            <div class="news-content">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet illum quia excepturi molestias distinctio nihil vitae aperiam atque, sunt dignissimos delectus explicabo, possimus ullam unde!</p>
            </div>
        </div>
        <div class="secondary-news">
            <div class="new">
                <div class="img-container">
                    <img src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg" alt="">
                </div>
                <div class="news-content">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur </p>
                </div>
            </div>
            <div class="new">
                <div class="img-container">
                    <img src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg" alt="">
                </div>
                <div class="news-content">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur </p>
                </div>
            </div>

        </div>

    </div>


</section>
<section id="recettesPopulaires">

    <h2>Recettes populaires</h2>
    <div class="recettesPopulaires-container">
        <?php
        $recettesPopulaires = getRecettesPopulaires($recettes, 8);
        foreach ($recettesPopulaires as $recette) {

            echo '<a href="./recette.php?id=' . $recette['id'] . '" class="card">';
            echo '<div class="hero-card">';
            echo '<img src="' . $recette['image'] . '" alt=" photo recette "/>';
            echo '<div class="etiquettes">';
            echo afficherEtoiles($recette);
            echo '<div class="etiquette-right">';
            echo $recette['difficulte'] === "Facile" ? '<span class="easy">Facile</span>' : null;
            echo $recette['vegetarien'] === true ? '<span class="vege">Vegetarien</span>' : null;
            echo '</div>';
            echo '</div>';
            echo '</div>';

            echo '<div class="card-content">';
            echo '<div>';
            echo '<h3>' . $recette['nom'] . '</h3>';
            echo '</div>';
            echo '<div class="card-info">';
            echo '<div class="card-info-time">';
            echo '<img src="../assets/img/chrono.png" alt="icone temps" class="icone">';
            echo '<span>' . calculerTempsTotal($recette) . ' min </span>';
            echo '</div>';
            echo '</div>';
            echo '</div>';


            echo '</a>';
        }
        ?>
    </div>
</section>
<?php

include './includes/footer.php';
?>