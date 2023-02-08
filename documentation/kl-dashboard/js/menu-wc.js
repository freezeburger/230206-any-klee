'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">altas documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-5a197a803f136f3fc5ddf041daa3298a5ca6d17bf5ffed7a416c916dd8a5175d50d63875e0e55a8a1bfaa0fbe47877cdafae376bc14325bb06cd6e7691a336b3"' : 'data-target="#xs-components-links-module-AppModule-5a197a803f136f3fc5ddf041daa3298a5ca6d17bf5ffed7a416c916dd8a5175d50d63875e0e55a8a1bfaa0fbe47877cdafae376bc14325bb06cd6e7691a336b3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-5a197a803f136f3fc5ddf041daa3298a5ca6d17bf5ffed7a416c916dd8a5175d50d63875e0e55a8a1bfaa0fbe47877cdafae376bc14325bb06cd6e7691a336b3"' :
                                            'id="xs-components-links-module-AppModule-5a197a803f136f3fc5ddf041daa3298a5ca6d17bf5ffed7a416c916dd8a5175d50d63875e0e55a8a1bfaa0fbe47877cdafae376bc14325bb06cd6e7691a336b3"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-b0e6d83debc6c5a5c14898f0e004bda3052e3f7d625972fc553551c15efc9e49b52597c0a79efbb54658a595d25832497c11807c80411b22c181f7bca836e00e"' : 'data-target="#xs-injectables-links-module-CoreModule-b0e6d83debc6c5a5c14898f0e004bda3052e3f7d625972fc553551c15efc9e49b52597c0a79efbb54658a595d25832497c11807c80411b22c181f7bca836e00e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-b0e6d83debc6c5a5c14898f0e004bda3052e3f7d625972fc553551c15efc9e49b52597c0a79efbb54658a595d25832497c11807c80411b22c181f7bca836e00e"' :
                                        'id="xs-injectables-links-module-CoreModule-b0e6d83debc6c5a5c14898f0e004bda3052e3f7d625972fc553551c15efc9e49b52597c0a79efbb54658a595d25832497c11807c80411b22c181f7bca836e00e"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DispatcherService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DispatcherService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MessageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StorageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StorageService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeatMessageModule.html" data-type="entity-link" >FeatMessageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FeatMessageModule-9c442e4f2cb3ec553b25a288a7391f5bdff278ddb19268bb015c68ce123a8463584e7d7640310ac9b3f4884bebe1ce4abb86c9f601449f7e9448aa9c4f3a0962"' : 'data-target="#xs-components-links-module-FeatMessageModule-9c442e4f2cb3ec553b25a288a7391f5bdff278ddb19268bb015c68ce123a8463584e7d7640310ac9b3f4884bebe1ce4abb86c9f601449f7e9448aa9c4f3a0962"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FeatMessageModule-9c442e4f2cb3ec553b25a288a7391f5bdff278ddb19268bb015c68ce123a8463584e7d7640310ac9b3f4884bebe1ce4abb86c9f601449f7e9448aa9c4f3a0962"' :
                                            'id="xs-components-links-module-FeatMessageModule-9c442e4f2cb3ec553b25a288a7391f5bdff278ddb19268bb015c68ce123a8463584e7d7640310ac9b3f4884bebe1ce4abb86c9f601449f7e9448aa9c4f3a0962"' }>
                                            <li class="link">
                                                <a href="components/FeatMessageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeatMessageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeaturesModule.html" data-type="entity-link" >FeaturesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/KlgImportModule.html" data-type="entity-link" >KlgImportModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutsModule.html" data-type="entity-link" >LayoutsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutsModule-ac3e327a7cae4a77a99413749ecd96189c7fe4486efd05db1c1d8d960ac79d67f386fbb6ccbf22fa957a3218e24166dbc355bc56081c6821b87377985e5d25e8"' : 'data-target="#xs-components-links-module-LayoutsModule-ac3e327a7cae4a77a99413749ecd96189c7fe4486efd05db1c1d8d960ac79d67f386fbb6ccbf22fa957a3218e24166dbc355bc56081c6821b87377985e5d25e8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutsModule-ac3e327a7cae4a77a99413749ecd96189c7fe4486efd05db1c1d8d960ac79d67f386fbb6ccbf22fa957a3218e24166dbc355bc56081c6821b87377985e5d25e8"' :
                                            'id="xs-components-links-module-LayoutsModule-ac3e327a7cae4a77a99413749ecd96189c7fe4486efd05db1c1d8d960ac79d67f386fbb6ccbf22fa957a3218e24166dbc355bc56081c6821b87377985e5d25e8"' }>
                                            <li class="link">
                                                <a href="components/LayoutGenericComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutGenericComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutTileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutTileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutTwoColumnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutTwoColumnComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NgImportModule.html" data-type="entity-link" >NgImportModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PagesModule.html" data-type="entity-link" >PagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PagesModule-a259b13a39fec3c616186655e86ea4d6d9504ef765c15d8864e793d4e35ae91cc05182468e959ea32390fa8e810b51043a3fd54637fe1375b4f050bd80ec50a8"' : 'data-target="#xs-components-links-module-PagesModule-a259b13a39fec3c616186655e86ea4d6d9504ef765c15d8864e793d4e35ae91cc05182468e959ea32390fa8e810b51043a3fd54637fe1375b4f050bd80ec50a8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PagesModule-a259b13a39fec3c616186655e86ea4d6d9504ef765c15d8864e793d4e35ae91cc05182468e959ea32390fa8e810b51043a3fd54637fe1375b4f050bd80ec50a8"' :
                                            'id="xs-components-links-module-PagesModule-a259b13a39fec3c616186655e86ea4d6d9504ef765c15d8864e793d4e35ae91cc05182468e959ea32390fa8e810b51043a3fd54637fe1375b4f050bd80ec50a8"' }>
                                            <li class="link">
                                                <a href="components/PageHomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageInfosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageInfosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageLoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageMessageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageMessageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DispatcherService.html" data-type="entity-link" >DispatcherService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link" >MessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StorageService.html" data-type="entity-link" >StorageService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppAction.html" data-type="entity-link" >AppAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AppDispatcher.html" data-type="entity-link" >AppDispatcher</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link" >AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Message.html" data-type="entity-link" >Message</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});