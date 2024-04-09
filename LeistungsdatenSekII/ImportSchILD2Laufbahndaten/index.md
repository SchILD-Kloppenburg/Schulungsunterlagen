# Import von SchILD2-Laufbahndaten

Für diesen Aufgabenblock finden Sie im Ordner "..." eine SQLite-Spieldatenbank mit zugehörigen .lup und .blo-Dateien.

### Aufgabe: Download
Speichern Sie alle Beispiel-Dateien aus dem Ordner xxx 

### Aufgabe: Import der Spieldatenbank
Importieren Sie die SQLite Datenbank über das Admin-Tool im Client. Da einige Features derzeit noch nicht über den Client realisiert werden können (beispielsweise Gruppenprozesse), ist es hilfreich, eine Verbidungsdatei von SchILD-NRW3 zur Datenbank zu erstellen. Nutzen Sie dazu das Program migrate.db.    
Kontrollieren Sie anschließend im Client, 
+ ob in der Datenbank noch kein Abiturjahrgang angelegt ist und
+ ob bei den SchülerInnen noch keine Laufbahnplanung hinterlegt ist.

> [!NOTE]
> Es wird empfohlen, den Import über den Client-Admin auszuführen.  
> Rufen Sie dazu über den Brower die Seite *https://localhost/admin* auf.  
> Über "Backup wiederherstellen: SQLite-Schema importieren" kann die entsprechende Datenbank ausgewählt werden.

### Aufgabe: Import der Fachwahlen
Importieren Sie die Fachwahlen der EF, Q1 und Q2. (.lup-Dateien)

# Fehlerbehebung
Aufgrund von Altlasten aus der SchILD2-DB kann es zu Fehlern in der Laufbahnplanung kommen. 

### Aufgabe: Englischwahl korrigieren
In der vorliegenden Datenbank wurde neben dem Kürzel E auch E5 in der Oberstufe gepflegt:
![Englisch in der Oberstufe](./graphics/Schulungsmaterial_LeistungsdatenS2_LupImport_E5.png)

Korrigieren Sie diesen Fehler.
> [!NOTE]
> Kataloge --> Fächer

Nachdem E5 nun nicht mehr im Fächerkatalog der Oberstufe erscheint, ist das Fach E nach wie vor ausgegraut. Betrachtet man eine Laufbahnplanung eines Schülers, ist folgender Fehlercode ersichtlich:   
> Eine fortgeführte Fremdsprache wurde in der Sprachenfolge als neu einsetzend eingetragen. Die Sprachenfolge ist fehlerhaft.

Korrigieren Sie diesen Fehler. Da aktuell noch keine Gruppenprozesse über den SVWS-Client implementiert sind, kann dies mit SchILD-NRW3 schnell korrigiert werden.

![Sprachenfolge](./graphics/Schulungsmaterial_LeistungsdatenS2_LupImport_SprachenfolgeEintragen.png)

# Import einer Kurs42 Blockung
### Aufgaben: Import-Vorbereitung
Bevor eine alte Kurs42-Blockung im SVWS-Client importiert werden kann, müssen die dazu notwendigen Text-Dateien aus Kurs42 heraus exportiert und gezippt werden. Details dazu sind im SVWS-Client im Reiter Schule/Datenaustausch/Kurs42-Blockungen beschrieben.   
1. Öffnen Sie die Blockung für die EF xxxxx.blo und erstellen Sie einen zip-Ordner 
2. Importieren Sie die Blockung im SVWS-Client und sichten Sie diese im Abiturjahrgang der EF.
3. Optional: Erstellen Sie mit dem Client eine weitere Blockung und vergleichen Sie die Ergebisse

