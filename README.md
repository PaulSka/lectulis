# Lectulis

Outil d'aide à la lecture.

### Fonctionnement

Lectulis parcours chaque mots d'une phrase et propose, sous forme de bouton, la diction de celui-ci.
Il est possible, suivant des indicateurs de niveau, proposer des boutons de couleurs différentes.

### Edition

Pour utiliser Lectulis et créer vos propres pages, vous pouvez effectuer une copie du fichier fable_lafontaine.html.
Dans celui-ci, vous trouvez le bloc suivant :

```
<span id="tts_this" class="hidden">
	<niv3>Maître</niv3> Corbeau , sur un arbre <niv2>perché</niv2> , 
	<niv2>Tenait</niv2> en son bec un <niv3>fromage</niv3> .
</span>
```
Le texte comprit entre les balises <span></span> sera automatique traduit sous forme de bouton.
Il est nécessaire de mettre un espace entre chaque signe de ponctuation et de point.
Différents niveaux sont possibles permettant une coloration du bouton différentes. Pour cela il suffit d'entourer le mot par les balises <niv2></niv2> où bien
<niv3></niv3>.

### Technologies

Lectulis est une application Web simple (HTML + code javascript simple).
Lectulis fonctionne aussi bien en local que sur un serveur Web.
Lectulis nécessite une connexion internet pour utiliser le module de diction Responsive Voice.

Lectulis utilise les outils suivants :

* Jquery pour booster Javascript
* Bootstrap pour la mise en forme
* Responsive Voice pour le modules de diction (TTS)

### Contacts

Pour les questions techniques : lysakowskimg@gmail.com

Pour les questions pédagogiques : lucie.trojanowski@gmail.com