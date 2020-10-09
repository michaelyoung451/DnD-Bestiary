
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", "bestiary.xml", false);
            xhttp.send();
            var xmlDoc = xhttp.responseXML;
            var bestiary = xmlDoc.getElementsByTagName('monster')
            var table="<tr><th>Name</th><th>CR</th></tr>";

            function searchBestiary() {
                
                    for (i = 0; i < bestiary.length; i++) { 
                        var currentMonster = bestiary[i];
        
                        var name = "Name: " + bestiary[i].getElementsByTagName("name")[0].firstChild.data;
                        var size = "Size: " + bestiary[i].getElementsByTagName("size")[0].firstChild.data;
                        var type = "Type: " + bestiary[i].getElementsByTagName("type")[0].firstChild.data;
        
        
                        
                        table += "<tr onclick='selectMonster(" + i + ")'><td>"; 
                        table += bestiary[i].getElementsByTagName("name")[0].firstChild.data;
                        table += "</td><td>";
                        table += bestiary[i].getElementsByTagName("cr")[0].firstChild.data;
                        table += "</td></tr>";
                    }
                    
                return table;
            }
            
            searchBestiary();
            window.addEventListener("load", function() {
                document.getElementById("list").innerHTML = table;
            })

            function searchList(searchInput) {
                var table="<tr><th>Name</th><th>CR</th></tr>";
                for (i = 0; i < bestiary.length; i++) { 
                var currentMonster = bestiary[i];

                if (currentMonster.getElementsByTagName("name")[0].firstChild.data.includes(searchInput) == True) {
                    var name = "Name: " + bestiary[i].getElementsByTagName("name")[0].firstChild.data;
                    var size = "Size: " + bestiary[i].getElementsByTagName("size")[0].firstChild.data;
                    var type = "Type: " + bestiary[i].getElementsByTagName("type")[0].firstChild.data;


                
                    table += "<tr onclick='selectMonster(" + i + ")'><td>"; 
                    table += bestiary[i].getElementsByTagName("name")[0].firstChild.data;
                    table += "</td><td>";
                    table += bestiary[i].getElementsByTagName("cr")[0].firstChild.data;
                    table += "</td></tr>";
                }
            }
            }
            

            function selectMonster(i) {
                
                var name = "Name: " + bestiary[i].getElementsByTagName("name")[0].firstChild.data;
                var ac = "AC: " + bestiary[i].getElementsByTagName("ac")[0].firstChild.data;
                var hp = "HP: " + bestiary[i].getElementsByTagName("hp")[0].firstChild.data;
                var cr = "CR: " + bestiary[i].getElementsByTagName("cr")[0].firstChild.data;

                document.getElementById("showMonster").innerHTML +=
                    "<div>" +
                    "<p onclick='displayMonster(" + i + ")'>" + name + "<br>" + ac + "<br>" + hp + "<br>" + cr + "<br><br></p" +
                    "</div>";

                
            }

             function displayMonster(i) {

                var name = "Name: " + bestiary[i].getElementsByTagName("name")[0].firstChild.data + "\n";
                var size = "Size: " + bestiary[i].getElementsByTagName("size")[0].firstChild.data + "\n";
                var type = "Type: " + bestiary[i].getElementsByTagName("type")[0].firstChild.data + "\n";
                var alignment = "Alignment: " + bestiary[i].getElementsByTagName("alignment")[0].firstChild.data + "\n";
                var hp = "HP: " + bestiary[i].getElementsByTagName("hp")[0].firstChild.data + "\n";
                var ac = "AC: " + bestiary[i].getElementsByTagName("ac")[0].firstChild.data + "\n";
                var speed = "Speed: " + bestiary[i].getElementsByTagName("speed")[0].firstChild.data + "\n";
                var strength = "STR: " + bestiary[i].getElementsByTagName("str")[0].firstChild.data + "\n";
                var dexterity = "DEX: " + bestiary[i].getElementsByTagName("dex")[0].firstChild.data + "\n";
                var constitution = "CON: " + bestiary[i].getElementsByTagName("con")[0].firstChild.data + "\n";
                var intellect = "INT: " + bestiary[i].getElementsByTagName("int")[0].firstChild.data + "\n";
                var wisdom = "WIS: " + bestiary[i].getElementsByTagName("wis")[0].firstChild.data + "\n";
                var charisma = "CHA: " + bestiary[i].getElementsByTagName("cha")[0].firstChild.data + "\n";
                var savingThrows;
                if(bestiary[i].getElementsByTagName("save")[0] != undefined) {
                    savingThrows = "Saving Throws: " + bestiary[i].getElementsByTagName("save")[0].firstChild.data  + "\n";
                }else {
                    savingThrows = "";
                }
                if(bestiary[i].getElementsByTagName("skill")[0] != undefined) {
                    skills = "Skills: " + bestiary[i].getElementsByTagName("skill")[0].firstChild.data  + "\n";
                }else {
                    skills = "";
                }
                if(bestiary[i].getElementsByTagName("senses")[0] != undefined) {
                    senses = "Senses: " + bestiary[i].getElementsByTagName("senses")[0].firstChild.data  + "\n";
                }else {
                    senses = "";
                }
                var passive = "Passive Perception: " + bestiary[i].getElementsByTagName("passive")[0].firstChild.data + "\n";
                var languages = "Languages: " + bestiary[i].getElementsByTagName("languages")[0].firstChild.data + "\n";
                var cr = "CR: " + bestiary[i].getElementsByTagName("cr")[0].firstChild.data + "\n";
                if(bestiary[i].getElementsByTagName("trait")[0] != undefined) {
                    var traits = "\nTraits: \n" 
                    var traitsList = bestiary[i].getElementsByTagName("trait")
                    for (j = 0; j < traitsList.length; j++) {
                        traits += "\n" + traitsList[j].getElementsByTagName("name")[0].firstChild.data + ": \n";
                        traits += traitsList[j].getElementsByTagName("text")[0].firstChild.data + "\n";

                    }
                }else {
                    traits = "";
                }
                if(bestiary[i].getElementsByTagName("action")[0] != undefined) {
                    var actions = "\nActions: \n" 
                    var actionsList = bestiary[i].getElementsByTagName("action")
                    for (j = 0; j < actionsList.length; j++) {
                        actions += "\n" + actionsList[j].getElementsByTagName("name")[0].firstChild.data + ": \n";
                        actions += actionsList[j].getElementsByTagName("text")[0].firstChild.data + "\n";
                        if(actionsList[j].getElementsByTagName("attack")[0] != undefined) {
                            actions += actionsList[j].getElementsByTagName("attack")[0].firstChild.data + ": \n";
                        }
                    }
                }else {
                    actions = "";
                }
                if(bestiary[i].getElementsByTagName("legendary")[0] != undefined) {
                    var legendaries = "\nLegendaries: \n" 
                    var legendariesList = bestiary[i].getElementsByTagName("legendary")
                    for (j = 0; j < legendariesList.length; j++) {
                        legendaries += "\n" + legendariesList[j].getElementsByTagName("name")[0].firstChild.data + ": \n";
                        legendaries += legendariesList[j].getElementsByTagName("text")[0].firstChild.data + "\n";
                    }
                }else {
                    legendaries = "";
                }
                if(bestiary[i].getElementsByTagName("description")[0] != undefined) {
                    description = "Description: " + bestiary[i].getElementsByTagName("description")[0].firstChild.data  + "\n";
                }else {
                    description = "";
                }if(bestiary[i].getElementsByTagName("spells")[0] != undefined) {
                    spells = "Spells: " + bestiary[i].getElementsByTagName("spells")[0].firstChild.data  + "\n";
                }else {
                    spells = "";
                }if(bestiary[i].getElementsByTagName("slots")[0] != undefined) {
                    slots = "Spell Slots: " + bestiary[i].getElementsByTagName("slots")[0].firstChild.data  + "\n";
                }else {
                    slots = "";
                }

                

                 alert( 
                        name +  
                        size +  
                        type + 
                        alignment +
                        hp + 
                        ac + 
                        speed + 
                        strength + 
                        dexterity + 
                        constitution + 
                        intellect + 
                        wisdom + 
                        charisma +
                        savingThrows +
                        skills +
                        senses +
                        passive +
                        languages +
                        cr +
                        traits +
                        actions +
                        legendaries +
                        description +
                        spells +
                        slots +
                "\n")
            };
            