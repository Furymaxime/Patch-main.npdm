# Script de Patch Force Debug

Ce script Node.js permet d’appliquer des modifications précises à un fichier binaire. Il modifie des positions spécifiques dans le fichier `main.npdm` (généralement situé dans le dossier `exefs`) pour activer des fonctionnalités de débogage.

---

## Fonctionnalités

- **Modification ciblée** : Remplace des octets spécifiques à des positions définies dans un fichier binaire.
- **Activation de débogage** : Applique un patch (0x04) à deux emplacements connus.
- **Gestion des erreurs** : Gère les erreurs d'accès aux fichiers et d'E/S avec des messages explicites.

---

## Prérequis

- **Node.js** : Assurez-vous que Node.js est installé sur votre système. Téléchargez-le depuis [nodejs.org](https://nodejs.org).
- **Fichier cible** : Le fichier `main.npdm` doit être présent dans un dossier `exefs` situé dans le répertoire courant.

---

## Installation

1. Clonez ou téléchargez ce dépôt.
2. Assurez-vous que Node.js est installé en exécutant :
   ```bash
   node -v
   ```
   Si une version s'affiche, Node.js est correctement installé.

---

## Utilisation

1. Placez le fichier `main.npdm` dans un dossier `exefs` situé dans le même répertoire que le script.
2. Exécutez le script avec Node.js :
   ```bash
   node Patch_main.npdm_Switch_Atmosphere_V1.8.0PR.js
   ```
3. Si le fichier `main.npdm` est trouvé, le patch sera appliqué aux positions suivantes :
   - Offset `0x332` (818 en décimal)
   - Offset `0x3F2` (1010 en décimal)
4. Une confirmation s’affichera en cas de succès :
   ```
   Patch 0x04 applied to exefs/main.npdm
   ```

---

## Fonctionnement du script

1. **Recherche du fichier** : Le script vérifie la présence du fichier `main.npdm` dans le répertoire `exefs`.
2. **Modification ciblée** : Deux offsets (positions) sont modifiés avec la valeur `0x08`.
3. **Gestion des erreurs** :
   - Si le fichier n’est pas trouvé, un message d’erreur est affiché.
   - Les erreurs d’accès ou d’écriture sont également signalées.

---

## Exemple de sortie

- Fichier trouvé et patché avec succès :
   ```
   Found file: exefs/main.npdm
   Patched exefs/main.npdm at position 818 with data: <Buffer 08>
   Patched exefs/main.npdm at position 1010 with data: <Buffer 08>
   Patch 0x04 applied to exefs/main.npdm
   ```
- Fichier non trouvé :
   ```
   File not found: exefs/main.npdm
   ```

---

## Licence

Ce script est distribué sous licence MIT. Vous êtes libre de l'utiliser, de le modifier et de le redistribuer.

---

Si vous avez des questions ou des suggestions d'amélioration, n'hésitez pas à me contacter 😊
