// Pour obtenir une présentation du modèle Navigation, consultez la documentation suivante :
// http://go.microsoft.com/fwlink/?LinkId=232506
function testIDB(){

                //// Suppression BDD
                //DeleteDatabase('Test');
                //// Création structure BDD
                CreateIdbBibliodoc();
                //// Insertion jeu de test
                InsertDataTest();// Mode dev on simule le user connecté
}


function InsertDataTest() {
    InsertData('Test', 'utilisateur', [{ "nom": "ELIPCE", "prenom": "Informatique", "date_naissance": "2014-07-23", "mail": "yann.plantevin@elipce.com", "login": "elipce", "pwd": "7e54dad3d4b787512e80e6058a01ccecfef6b188", "first_conn": "0", "societe_id": 1 },
                                                { "nom": "PEREZ", "prenom": "Vivian", "date_naissance": "1985-02-26", "mail": "vivian.perez@elipce.com", "login": "viv", "pwd": "", "societe_id": 1, "item1": "a", "item2": "b" }]);

    InsertData('Test', 'societe', [{ "id": 1, "libelle": "EPS", "adresse": "", "adresse2": "", "code_postal": "", "ville": "", "tel": "" }, { "id": 2, "libelle": "APR", "adresse": "", "adresse2": "", "code_postal": "", "ville": "", "tel": "" }]);
    InsertData('Test', 'marque_societe', [{ "id": 2, "marque_id": 2, "societe_id": 1 },
                                                    { "id": 1, "marque_id": 1, "societe_id": 2 },
                                                    { "marque_id": 3, "societe_id": 1 },
                                                    { "marque_id": 4, "societe_id": 1 },
                                                    { "marque_id": 5, "societe_id": 1 },
                                                    { "marque_id": 6, "societe_id": 1 }]);
    InsertData('Test', 'marque', [{ "id": 1, "nom": "Promotions APR", "dossier_id": 1, "is_promo": 1 },
                                            { "id": 2, "nom": "Promotions EPS", "dossier_id": 2, "is_promo": 1 },
                                            { "id": 3, "nom": "Armani", "dossier_id": 3, "is_promo": false },
                                            { "id": 4, "nom": "Babar", "dossier_id": null, "is_promo": false },
                                            { "id": 5, "nom": "Birkenstock", "dossier_id": null, "is_promo": false },
                                            { "id": 6, "nom": "Beebop", "dossier_id": null, "is_promo": false },
    ]);
    InsertData('Test', 'dossier', [{ "id": 1, "nom": "Promotions APR", "dossier_id": null },
                                            { "id": 2, "nom": "Promotions EPS", "dossier_id": null },
                                            { "id": 3, "nom": "Armani folder", "dossier_id": null }, 
                                            { "id": 4, "nom": "parfums folder", "dossier_id": 3 },
                                            { "id": 5, "nom": "costumes folder", "dossier_id": 3 },
                                            { "id": 6, "nom": "Babar folder", "dossier_id": 4 },
                                            { "id": 7, "nom": "Birkenstock folder", "dossier_id": 5 },
                                            { "id": 8, "nom": "Beebop folder", "dossier_id": 6 },
                                            { "id": 9, "nom": "test1 folder", "dossier_id": 3 },
                                            { "id": 10, "nom": "test2 folder", "dossier_id": 3 },
                                            { "id": 11, "nom": "test3 folder", "dossier_id": 3 },
                                            { "id": 12, "nom": "test4 folder", "dossier_id": 3 },
                                            { "id": 13, "nom": "test5 folder", "dossier_id": 3 },
                                            { "id": 14, "nom": "test6 folder", "dossier_id": 3 },
                                            { "id": 15, "nom": "test7 folder", "dossier_id": 3 },
                                            { "id": 16, "nom": "test8 folder", "dossier_id": 3 },
                                            { "id": 17, "nom": "test9 folder", "dossier_id": 3 },
    ]);
    InsertData('Test', 'document', [{ "id": 1, "nom": "Armani code", "dossier_id": 4, 'chemin_fichier': '1.pdf' },
                                          { "id": 2, "nom": "Aqua di gio", "dossier_id": 4, 'chemin_fichier': '2.docx' },
                                          { "id": 3, "nom": "Emporio Armani droit", "dossier_id": 5, 'chemin_fichier': '3.gif' },
                                          { "id": 4, "nom": "Emporio Armani cintré", "dossier_id": 5, 'chemin_fichier': '4.pdf' },
                                            { "id": 5, "nom": "Doc1", "dossier_id": 3, 'chemin_fichier': '5.pdf' },
                                            { "id": 6, "nom": "promo1", "dossier_id": 2, 'chemin_fichier': '5.pdf' }
    ]);

}

function CreateIdbBibliodoc() {
    /// <summary>
    /// Création de la structure de la BDD bibliodoc-mobile
    /// </summary>

    // Structure BDD
    var aStruct = {
        'utilisateur': [['nom', false], ['prenom', false], ['date_naissance', false], ['mail', false], ['login', false],  ['societe_id', false]],
        'societe': [['libelle', false]],
        'marque_societe': [['marque_id', false], ['societe_id', false]],
        'marque': [['nom', false], ['dossier_id', false], ['is_promo', false]],
        'dossier': [['nom', false], ['dossier_id', false]],
        'document': [['nom', false], ['description', false], ['dossier_id', false]],
        'historique_synchro': [['version', true], ['table', false], ['operation', false], ['affected_id', false], ['societe_id', false]]
    }
    // Création BDD si elle n'existe pas.
    CreateDatabase('Test', aStruct);

}