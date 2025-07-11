<?php
$title = 'Recettes';
require './data/recettesData.php';
include './functions/functions.php';

include './includes/header.php';
?>
<section class="recherche">
<div class="search">
    <form action="" method="get">
        <h1>Recherchez parmis nos nombreuses recettes</h1>
        <div>
            <label for="categorie">Categorie:</label>
            <select name="categorie" id="categorie">
                <option value="">Toutes les catégories</option>
                <option value="Entree">Entrée</option>
                <option value="Plat principal">Plat principal</option>
                <option value="Dessert">Dessert</option>
            </select>
        </div>
        <div>
            <label for="difficulte">Difficulté:</label>
            <select name="difficulte" id="difficulte">
                <option value="">Toutes les difficultés</option>
                <option value="Facile">Facile</option>
                <option value="Moyen">Moyen</option>
                <option value="Difficile">Difficile</option>
            </select>
        </div>
        <div>
            <label for="vegetarien">Végétarien:</label>
            <input type="checkbox" name="vegetarien" id="vegetarien">
        </div>
        <button type="submit">Filtrer</button>
    </form>
</div>
    <?php
    $categories = isset($_GET['categorie']) ? $_GET['categorie'] : null;
    $difficulte = isset($_GET['difficulte']) ? $_GET['difficulte'] : null;
    $vegetarien = isset($_GET['vegetarien']) ? true : null;

    $categories = htmlentities($categories);
    $difficulte = htmlentities($difficulte);

    $recettesFiltrees = filtrerRecettes($recettes, $categories, $difficulte, $vegetarien);
    ?>
    <div class="recettesPopulaires-container recettes-total">
    <?php
    if ((empty($categories) && !isset($recettesFiltrees)) || (empty($difficulte)&& !isset($recettesFiltrees))) {
        var_dump($categories);
        var_dump($recettesFiltrees);

        foreach ($recettes as $recette) {

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
    }elseif (!empty($recettesFiltrees)) {
        foreach ($recettesFiltrees as $id) {
            $recette = $recettes[$id];
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
            echo '</a>';
        }
    } elseif (!empty($categories) || !empty($difficulte)) {
        echo '</div>';
        echo '<span class="no-result">Aucune recette trouvée.</span>';
    }


    ?>
</section>
<?php
include './includes/footer.php';
?>