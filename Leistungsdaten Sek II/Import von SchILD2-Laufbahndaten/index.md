# Import von SchILD2-Laufbahndaten

Für diesen Aufgabenblock finden Sie im Ordner "..." eine SQLite-Spieldatenbank mit zugehörigen .lup und .blo-Dateien.

### Aufgabe: Download
Speichern Sie alle Beispiel-Dateien aus dem Ordner xxx 

### Aufgabe: Import der Spieldatenbank
Importieren Sie die SQLite Datenbank und sichten Sie diese.  
Kontrollieren Sie, 
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

Korrigieren Sie diesen Fehler.
> [!NOTE]
> Da aktuell noch keine Gruppenprozesse über den SVWS-Client implementiert sind, kann dies mit SchILD-NRW3 schnell korrigiert werden.
### Aufgabe: Englisch 


### Aufgaben zur Blockung
In Arbeit
