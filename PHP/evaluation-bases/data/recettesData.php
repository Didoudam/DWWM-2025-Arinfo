<?php

$recettes = [
    1 => [
        'id' => 1,
        'nom' => 'Ratatouille Explosive',
        'image' => 'https://picsum.photos/400/300?random=1',
        'categories' => 'Plat principal',
        'difficulte' => 'Facile',
        'temps_preparation' => 20,
        'temps_cuisson' => 45,
        'portions' => 4,
        'ingredients' => [
            '2 aubergines moyennes',
            '3 courgettes',
            '4 tomates',
            '1 poivron rouge',
            '1 poivron jaune',
            '1 oignon',
            '4 gousses d\'ail',
            '100ml d\'huile d\'olive',
            'Herbes de Provence',
            'Sel et poivre'
        ],
        'instructions' => [
            'Couper tous les légumes en dés réguliers',
            'Faire revenir l\'oignon et l\'ail dans l\'huile d\'olive',
            'Ajouter les aubergines et faire cuire 10 minutes',
            'Incorporer les courgettes et poivrons',
            'Ajouter les tomates et les herbes',
            'Laisser mijoter 30 minutes à feu doux',
            'Assaisonner et servir chaud'
        ],
        'note' => 8.5,
        'vegetarien' => true
    ],

    2 => [
        'id' => 2,
        'nom' => 'Coq au Vin Révolutionnaire',
        'image' => 'https://picsum.photos/400/300?random=2',
        'categories' => 'Plat principal',
        'difficulte' => 'Moyen',
        'temps_preparation' => 30,
        'temps_cuisson' => 90,
        'portions' => 6,
        'ingredients' => [
            '1 coq découpé (ou poulet)',
            '750ml de vin rouge',
            '200g de lardons',
            '250g de champignons de Paris',
            '12 petits oignons',
            '2 carottes',
            '3 gousses d\'ail',
            '2 feuilles de laurier',
            'Thym frais',
            'Beurre et farine'
        ],
        'instructions' => [
            'Faire mariner le coq dans le vin rouge 4 heures',
            'Faire revenir les lardons dans une cocotte',
            'Saisir les morceaux de coq égouttés',
            'Ajouter les légumes et faire suer',
            'Flamber avec la marinade',
            'Ajouter les herbes et laisser mijoter 1h30',
            'Lier la sauce avec le beurre manié'
        ],
        'note' => 9.2,
        'vegetarien' => false
    ],

    3 => [
        'id' => 3,
        'nom' => 'Buddha Bowl Anarchiste',
        'image' => 'https://picsum.photos/400/300?random=3',
        'categories' => 'Plat principal',
        'difficulte' => 'Facile',
        'temps_preparation' => 15,
        'temps_cuisson' => 25,
        'portions' => 2,
        'ingredients' => [
            '150g de quinoa',
            '200g de patate douce',
            '100g d\'épinards frais',
            '1 avocat',
            '100g de pois chiches',
            '50g de graines de tournesol',
            '2 c.à.s de tahini',
            '1 citron',
            'Huile d\'olive',
            'Paprika fumé'
        ],
        'instructions' => [
            'Cuire le quinoa selon les instructions',
            'Rôtir la patate douce au four avec paprika',
            'Faire sauter les épinards rapidement',
            'Préparer la sauce tahini-citron',
            'Disposer harmonieusement dans les bols',
            'Garnir avec avocat et graines',
            'Arroser de sauce et servir'
        ],
        'note' => 8.8,
        'vegetarien' => true
    ],

    4 => [
        'id' => 4,
        'nom' => 'Carbonara Subversive',
        'image' => 'https://picsum.photos/400/300?random=4',
        'categories' => 'Plat principal',
        'difficulte' => 'Moyen',
        'temps_preparation' => 10,
        'temps_cuisson' => 15,
        'portions' => 4,
        'ingredients' => [
            '400g de spaghetti',
            '200g de pancetta',
            '4 œufs entiers',
            '100g de parmesan râpé',
            '2 gousses d\'ail',
            'Poivre noir concassé',
            'Sel',
            'Huile d\'olive'
        ],
        'instructions' => [
            'Faire revenir la pancetta jusqu\'à croustillant',
            'Cuire les pâtes al dente',
            'Mélanger œufs et parmesan dans un bol',
            'Réserver un peu d\'eau de cuisson',
            'Mélanger pâtes chaudes avec pancetta',
            'Incorporer le mélange œuf-fromage hors du feu',
            'Ajouter l\'eau de cuisson si nécessaire'
        ],
        'note' => 9.0,
        'vegetarien' => false
    ],

    5 => [
        'id' => 5,
        'nom' => 'Tarte Tatin Rebelle',
        'image' => 'https://picsum.photos/400/300?random=5',
        'categories' => 'Dessert',
        'difficulte' => 'Difficile',
        'temps_preparation' => 45,
        'temps_cuisson' => 35,
        'portions' => 8,
        'ingredients' => [
            '1 pâte brisée',
            '8 pommes Granny Smith',
            '150g de sucre',
            '50g de beurre',
            '1 c.à.s de calvados',
            '1 pincée de cannelle',
            'Sel'
        ],
        'instructions' => [
            'Éplucher et couper les pommes en quartiers',
            'Faire un caramel avec le sucre',
            'Ajouter le beurre et les pommes',
            'Cuire 15 minutes en remuant',
            'Disposer dans un moule à tarte',
            'Recouvrir de pâte en rentrant les bords',
            'Cuire 25 minutes à 200°C puis démouler'
        ],
        'note' => 8.7,
        'vegetarien' => true
    ],

    6 => [
        'id' => 6,
        'nom' => 'Curry Rouge Insurrectionnel',
        'image' => 'https://picsum.photos/400/300?random=6',
        'categories' => 'Plat principal',
        'difficulte' => 'Moyen',
        'temps_preparation' => 25,
        'temps_cuisson' => 30,
        'portions' => 4,
        'ingredients' => [
            '500g de blanc de poulet',
            '400ml de lait de coco',
            '3 c.à.s de pâte de curry rouge',
            '2 aubergines thaï',
            '150g de haricots verts',
            '2 feuilles de kaffir',
            '2 c.à.s de sauce poisson',
            '1 c.à.s de sucre de palme',
            'Basilic thaï',
            'Piment rouge'
        ],
        'instructions' => [
            'Faire chauffer 1/3 du lait de coco',
            'Faire revenir la pâte de curry 2 minutes',
            'Ajouter le poulet et saisir',
            'Incorporer le reste du lait de coco',
            'Ajouter les légumes et assaisonnements',
            'Laisser mijoter 20 minutes',
            'Garnir de basilic et servir avec du riz'
        ],
        'note' => 9.1,
        'vegetarien' => false
    ],

    7 => [
        'id' => 7,
        'nom' => 'Risotto aux Champignons Clandestins',
        'image' => 'https://picsum.photos/400/300?random=7',
        'categories' => 'Plat principal',
        'difficulte' => 'Moyen',
        'temps_preparation' => 20,
        'temps_cuisson' => 40,
        'portions' => 4,
        'ingredients' => [
            '300g de riz arborio',
            '500g de champignons mélangés',
            '1L de bouillon de légumes',
            '1 oignon',
            '2 gousses d\'ail',
            '100ml de vin blanc',
            '50g de parmesan',
            '30g de beurre',
            'Persil frais',
            'Huile d\'olive'
        ],
        'instructions' => [
            'Faire suer l\'oignon dans l\'huile',
            'Ajouter le riz et nacrer 2 minutes',
            'Déglacer avec le vin blanc',
            'Ajouter le bouillon louche par louche',
            'Faire revenir les champignons séparément',
            'Incorporer champignons et parmesan',
            'Finir avec le beurre et le persil'
        ],
        'note' => 8.6,
        'vegetarien' => true
    ],

    8 => [
        'id' => 8,
        'nom' => 'Bœuf Bourguignon Dissident',
        'image' => 'https://picsum.photos/400/300?random=8',
        'categories' => 'Plat principal',
        'difficulte' => 'Difficile',
        'temps_preparation' => 40,
        'temps_cuisson' => 180,
        'portions' => 6,
        'ingredients' => [
            '1.2kg de bœuf à braiser',
            '750ml de vin rouge de Bourgogne',
            '200g de lardons',
            '250g de champignons',
            '20 petits oignons',
            '2 carottes',
            '1 bouquet garni',
            '2 c.à.s de farine',
            'Beurre',
            'Cognac'
        ],
        'instructions' => [
            'Faire mariner la viande 12h dans le vin',
            'Égoutter et fariner les morceaux',
            'Saisir la viande dans une cocotte',
            'Faire revenir les lardons et légumes',
            'Flamber au cognac',
            'Ajouter la marinade et le bouquet garni',
            'Braiser 3h à feu très doux'
        ],
        'note' => 9.5,
        'vegetarien' => false
    ],

    9 => [
        'id' => 9,
        'nom' => 'Crème Brûlée Pyromane',
        'image' => 'https://picsum.photos/400/300?random=9',
        'categories' => 'Dessert',
        'difficulte' => 'Moyen',
        'temps_preparation' => 30,
        'temps_cuisson' => 45,
        'portions' => 6,
        'ingredients' => [
            '500ml de crème liquide',
            '6 jaunes d\'œufs',
            '80g de sucre',
            '1 gousse de vanille',
            '60g de sucre roux pour caraméliser',
            'Pincée de sel'
        ],
        'instructions' => [
            'Faire infuser la vanille dans la crème',
            'Blanchir les jaunes avec le sucre',
            'Incorporer la crème chaude progressivement',
            'Passer au chinois et écumer',
            'Cuire au bain-marie 40 minutes à 150°C',
            'Laisser refroidir 4h au frigo',
            'Caraméliser le sucre au chalumeau'
        ],
        'note' => 8.9,
        'vegetarien' => true
    ],

    10 => [
        'id' => 10,
        'nom' => 'Paella Valenciana Contestataire',
        'image' => 'https://picsum.photos/400/300?random=10',
        'categories' => 'Plat principal',
        'difficulte' => 'Difficile',
        'temps_preparation' => 35,
        'temps_cuisson' => 50,
        'portions' => 8,
        'ingredients' => [
            '400g de riz bomba',
            '1 poulet découpé',
            '500g de lapin',
            '200g de haricots verts',
            '200g de garrofón',
            '100g de tomate râpée',
            '1L de bouillon',
            'Safran',
            'Paprika doux',
            'Huile d\'olive'
        ],
        'instructions' => [
            'Saisir les viandes dans la paellera',
            'Ajouter les légumes et faire revenir',
            'Incorporer tomate et épices',
            'Ajouter le riz et bien mélanger',
            'Verser le bouillon chaud avec safran',
            'Cuire 20 minutes sans remuer',
            'Laisser reposer 5 minutes avant de servir'
        ],
        'note' => 9.3,
        'vegetarien' => false
    ]
];

?>