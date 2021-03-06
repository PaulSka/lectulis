# Lectulis

Outil d'aide � la lecture.

### Fonctionnement

Lectulis parcours chaque mots d'une phrase et propose, sous forme de bouton, la diction de celui-ci.
Il est possible, suivant des indicateurs de niveau, proposer des boutons de couleurs diff�rentes.

### Edition

Pour utiliser Lectulis et cr�er vos propres pages, vous pouvez effectuer une copie du fichier fable_lafontaine.html.
Dans celui-ci, vous trouvez le bloc suivant :

```html
<span id="tts_this" class="hidden">
	<niv3>Ma�tre</niv3> Corbeau , sur un arbre <niv2>perch�</niv2> , 
	<niv2>Tenait</niv2> en son bec un <niv3>fromage</niv3> .
</span>
```
Le texte comprit entre les balises <span></span> sera automatique traduit sous forme de bouton.
Il est n�cessaire de mettre un espace entre chaque signe de ponctuation et de point.
Diff�rents niveaux sont possibles permettant une coloration du bouton diff�rentes. Pour cela il suffit d'entourer le mot par les balises <niv2></niv2> o� bien
<niv3></niv3>.

### Technologies

Lectulis est une application Web simple (HTML + code javascript simple).
Lectulis fonctionne aussi bien en local que sur un serveur Web.
Lectulis n�cessite une connexion internet pour utiliser le module de diction Responsive Voice.

Lectulis utilise les outils suivants :

* Jquery pour booster Javascript
* Bootstrap pour la mise en forme
* Responsive Voice pour le modules de diction (TTS)

Un QRCode est disponible permettant de pointer directement sur l'adresse du site

Reference-style: 
![alt text][logo]

[logo]: qrcode_lectulis.png "Lectulis"

### Licence

Lectulis est sous licence GPL v3

Lectulis
Copyright (C) 2016-2017  Lucie TROJANOWSKI, Mathieu LYSAKOWSKI

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

### Contacts

Pour les questions techniques : lysakowskimg@gmail.com

Pour les questions p�dagogiques : lucie.trojanowski@gmail.com
