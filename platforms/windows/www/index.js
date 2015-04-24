/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
       if(navigator.userAgent.match(/Chrome|Trident/)){
            app.onDeviceReady();
        }
        else{
            document.addEventListener("deviceready", app.onDeviceReady, false);
        }

},
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent("deviceready");
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('user : '+ navigator.userAgent);
        testID();
    }
};

app.initialize();

// Pour obtenir une présentation du modèle Navigation, consultez la documentation suivante :
// http://go.microsoft.com/fwlink/?LinkId=232506
function testIDB(){

    document.getElementById("addButton").addEventListener("click", InsertDataTest, false);
                //// Suppression BDD
                //DeleteDatabase("Test");
                //// Création structure BDD
                CreateIdbBibliodoc();
                //// Insertion jeu de test
                //InsertDataTest();
                //testIDB();
}

function testID(){
    //DeleteDatabase("idarticle_people");
    var aStruct = {
        'people': [['name', false], ['email', false], ['created', false]]
    }
    CreateDatabase("idarticle_people",aStruct);
    document.getElementById("addButton").addEventListener("click", addPerson, false);
    var IDB = window.indexedDB || 
                    window.mozIndexedDB ||
                    window.webkitIndexedDB || 
                    window.msIndexedDB || 
                    window.shimIndexedDB;
    var openRequest = IDB.open("idarticle_people",2);

    openRequest.onupgradeneeded = function(e) {
        var thisDB = e.target.result;
 
        if(!thisDB.objectStoreNames.contains("people")) {
            thisDB.createObjectStore("people",{autoIncrement:true});
        }
    }
    openRequest.onsuccess = function(e) {

    
        console.log("running onsuccess");
 
        db = e.target.result;
 
        //Listen for add clicks
        
        var a=document.createElement("p");
        var b=document.createTextNode('device ready');
        a.appendChild(b);
        document.getElementById("anduin").appendChild(a);
    }
}


function addPerson(e) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
 
    //console.log("About to add "+name+"/"+email);
    //Define a person
    var person = [{
        "name":name,
        "email":email,
        "created":new Date()
    }]
    //InsertData("idarticle_people","people",person);
    var transaction = db.transaction(["people"],"readwrite");
    var store = transaction.objectStore("people",{autoIncrement:true});
 

 
    //Perform the add
    var request = store.add(person);
 
    request.onerror = function(e) {
        console.log("Error",e.target.error.name);
        //some type of error handler
    }
 
    request.onsuccess = function(e) {
        var a=document.createElement("p");
        var b=document.createTextNode('ajout effectué');
        a.appendChild(b);
        document.getElementById("anduin").appendChild(a);

    }
}


function InsertDataTest() {
    InsertData("Test", 'utilisateur', [{ "nom": "ELIPCE", "prenom": "Informatique", "date_naissance": "2014-07-23", "mail": "yann.plantevin@elipce.com", "login": "elipce", "pwd": "7e54dad3d4b787512e80e6058a01ccecfef6b188", "first_conn": "0", "societe_id": 1 },
                                                { "nom": "PEREZ", "prenom": "Vivian", "date_naissance": "1985-02-26", "mail": "vivian.perez@elipce.com", "login": "viv", "pwd": "", "societe_id": 1, "item1": "a", "item2": "b" }]);

    InsertData("Test", 'societe', [{ "id": 1, "libelle": "EPS", "adresse": "", "adresse2": "", "code_postal": "", "ville": "", "tel": "" }, { "id": 2, "libelle": "APR", "adresse": "", "adresse2": "", "code_postal": "", "ville": "", "tel": "" }]);
    InsertData("Test", 'marque_societe', [{ "id": 2, "marque_id": 2, "societe_id": 1 },
                                                    { "id": 1, "marque_id": 1, "societe_id": 2 },
                                                    { "marque_id": 3, "societe_id": 1 },
                                                    { "marque_id": 4, "societe_id": 1 },
                                                    { "marque_id": 5, "societe_id": 1 },
                                                    { "marque_id": 6, "societe_id": 1 }]);
    InsertData("Test", 'marque', [{ "id": 1, "nom": "Promotions APR", "dossier_id": 1, "is_promo": 1 },
                                            { "id": 2, "nom": "Promotions EPS", "dossier_id": 2, "is_promo": 1 },
                                            { "id": 3, "nom": "Armani", "dossier_id": 3, "is_promo": false },
                                            { "id": 4, "nom": "Babar", "dossier_id": null, "is_promo": false },
                                            { "id": 5, "nom": "Birkenstock", "dossier_id": null, "is_promo": false },
                                            { "id": 6, "nom": "Beebop", "dossier_id": null, "is_promo": false },
    ]);
    InsertData("Test", 'dossier', [{ "id": 1, "nom": "Promotions APR", "dossier_id": null },
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
    InsertData("Test", 'document', [{ "id": 1, "nom": "Armani code", "dossier_id": 4, 'chemin_fichier': '1.pdf' },
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
    CreateDatabase("Test", aStruct);

}