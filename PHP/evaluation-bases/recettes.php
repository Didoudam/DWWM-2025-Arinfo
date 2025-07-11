<?php
$title = 'Recettes';
require './data/recettesData.php';
include './functions/functions.php';

include './includes/header.php';
?>
<section class="recherche">
    <h1>Recherchez parmis nos nombreuses recettes</h1>
    <form action="" method="get">
        <div>
            <label for="categorie">Categorie:</label>
            <select name="categorie" id="categorie">
                <option value="Entree">Entrée</option>
                <option value="Plat principal">Plat principal</option>
                <option value="Dessert">Dessert</option>
            </select>
        </div>
        <div>
            <label for="difficulte">Difficulté:</label>
            <select name="difficulte" id="difficulte">
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
<?php
$categories = isset($_GET['categorie']) ? $_GET['categorie'] : null;
$difficulte = isset($_GET['difficulte']) ? $_GET['difficulte'] : null;
$vegetarien = isset($_GET['vegetarien']) ? true : null;

$recettesFiltrees = filtrerRecettes($recettes, $categories, $difficulte, $vegetarien);

if (!empty($recettesFiltrees)) {
    echo '<div class="recettesPopulaires-container">';
    foreach ($recettesFiltrees as $id) {
        $recette = $recettes[$id];
        echo '<a class="card" href="./recette.php?id=' . $id. '" >';
        echo '<img src="' . $recette['image'] . '" alt=" photo recette "/>';

        echo '<div class="card-content">';
        echo '<div>';
        echo '<h3>' . $recette['nom'] . '</h3>';
        echo '</div>';
        echo '<div>';
        echo '<span>temps moyen :' . calculerTempsTotal($recette) . ' minutes </span>';
        echo $recette['difficulte'] === "Facile" ? '<span class="easy">Facile</span>' : null;
        echo $recette['vegetarien'] === true ? '<span class="vege">Vegetarien</span>' : null;
        echo afficherEtoiles($recette);
        echo '</div>';
        echo '</div>';
        echo '</a>';
    }
    echo '</div>';
} else {
    echo '<span>Aucune recette trouvée.</span>';
}


?>
</section>
<?php
include './includes/footer.php';
?>
