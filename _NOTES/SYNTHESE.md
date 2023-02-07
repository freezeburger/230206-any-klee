# Angular

# Code Smell

> Actant que angular utilise une **component based architecture**
* Trop d'injections
* Composant trop gros composant (template ou classe)
     * Mettre une limite au nombre de ligne
* Propagation de données au dela des couches immédiatement supérieure ou inférieure

# Angular Workspace

> Un projet angular est un workspace.

* Il ests possible de créer :
    * Des applications `ng g app NAME`
    * Des librairies  `ng g lib NAME`


> Une librairie est un simple module sans démarrage applicatif.

**Cas d'usage**
* Rationaliser des composants de base réutilisables.
* Créer des composants partagés entre plusieur app (même projet)
* Créer des composants distribuables.

**Avantages**
* Réutilisation.
* Simplification (API connue).
* Evolution / Versionning.
* Responsabilité Limitée.

## Angular 

# Décorateurs

## Création

* @NgModule
    * @Component
    * @Directive
    * @Pipe
* @Injectable

## Communication (composant)

* @Input
* @Output
* @ViewChild
* @ViewChildren
* @ContentChild
* @ContentChildren
* @Attribute
* @HostListener ( event )
* @HostBinding ( styles, attributes, surtout pour les directives )

## Injection de Dépendances

* @Inject
* @Optional
* @Host
* @Self
* @SkipSelf

# Documentation

> Compodoc https://compodoc.app/
* Configurer le `package.json`

# Choisir un modèle d'architecture

* Feature First
     * Chaque vue est une fonctioanlité connectée au service.
     * **pro** *implémentation rapide*
     * **cons** *peu de réusabilité*

* Classifiée
    * Les vues **utilisent** des **layouts** pour présenter des **features** (construite avec des **composant de base**)
    * View - est routée
    * Layout - Model de disposition
    * Feature - Une fonctionalité utilisateur
    * Base - Brique graphique
    * **pro** *plus lisible (maintenable et évolutif)*
    * **cons** *demande une étude de l'architecture*

* Hybride - Solution adaptée spécfiquement.

## Angular Injection Token

> Un token est une représentation souple d'une valuer injectable.
> *Un token est une forme de question*

eg. *Je (Angular) suis en phase de démarrage avez vous du code à exécuter?*
eg. `APP_INITIALIZER`

eg. *Je (HttClient) vais traiter une requête avez vous du code à exécuter?*
eg. `HTTP_INTERCEPTORS`

eg. *Je (FormGroup) suis un formulaire souhaitez vous particpez à mon cycle ?*
eg. `NG_VALUE_ACCESSOR`

**Créer un Injection Token est donc créer une représentation souple d'une valuer injectable**
** on permet de poser la question correspondante.

> La réponse au Token est fournie par la re configuration de l'injecteur (Injector) au niveau des `providers`.
* NgModule
* Component
* Directive