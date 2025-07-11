<?php
function calculerTempsTotal($recette)
{
    if (isset($recette['temps_preparation'])) {
        return $recette['temps_preparation'] + (isset($recette['temps_cuisson']) ? $recette['temps_cuisson'] : 0);
    }
}

function getRecetteParId($recettes, $id)
{
    foreach ($recettes as $idRecette) {
        if (isset($idRecette) && $id === $idRecette) {
            return $idRecette;
        }
    }
}

function afficherEtoiles($recette)
{
    if (isset($recette['note'])) {

        echo '<div class="etoiles" style="--rating:' . ($recette['note']/2) . '"></div>';
    }
}


function filtrerRecettes($recettes, $categorie, $difficulte, $vegetarien)
{
    $elementsFiltres = [];
    $recettesFilterCategory = [];
    $recettesFilterDifficulte = [];
    $recettesFilterVegetarien = [];

    if (isset($categorie)) {
        foreach ($recettes as $recette => $info) {
            if (isset($info['categories']) && $info['categories'] === $categorie) {
                array_push($recettesFilterCategory, $recette);
            }
        };
        array_push($elementsFiltres, $recettesFilterCategory);
    };
    if (isset($difficulte)) {
        foreach ($recettes as $recette => $info) {
            if (isset($info['difficulte']) && $info['difficulte'] === $difficulte) {
                array_push($recettesFilterDifficulte, $recette);
            }
        };
        array_push($elementsFiltres, $recettesFilterDifficulte);
    };
    if (isset($vegetarien)) {
        foreach ($recettes as $recette => $info) {
            if (isset($info['vegetarien']) && $info['vegetarien'] === $vegetarien) {
                array_push($recettesFilterVegetarien, $recette);
            }
        };
        array_push($elementsFiltres, $recettesFilterVegetarien);
    };
    $elementsFiltres = array_filter($elementsFiltres, function ($item){
        return !empty($item);
    });
    if (count($elementsFiltres) >0){
        return array_intersect(...$elementsFiltres);
    }else{
        return false;
    }

    
}


function getRecettesPopulaires($recettes, $limites)
{
    $populaires = [];
    foreach ($recettes as $key => $value) {
        if (count($populaires) >= 6) {
            break;
        }
        if (isset($value['note'])) {
            if ($value['note'] > $limites) {
                array_push($populaires, $recettes[$key]);
            }
        }
    }
    return $populaires;
}

?>