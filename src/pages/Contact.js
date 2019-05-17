import React, { Component } from 'react';
import '../styles/bootstrap.css';
import '../styles/Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="form-align">
                <div> <br/>
                <h9 className="h9-font">
                    Qui sommes nous ? Que faisons nous ?
                </h9> <br/> <br/>
                    <div className="description-txt">
                        <h6 className="title-bold">
                            • Überschutz :
                        </h6>
                            <h7>
                                Nous sommes un groupe de 7 étudiants d'Epitech de la promo 2021. <br/>
                                Notre groupe a été créé en octobre 2018 (tout d'abord 3 personnes), lors de la Moonshot, puis s'est complété courant janvier 2019.
                            </h7> <br/> <br/>
                            <h6 className="title-bold">
                                • Notre but :
                            </h6>
                            <h7>
                                Nous voulons qu'Internet soit un lieu de partage, de détente et de recherche. <br/>
                                Beaucoup trop de personnes et d'enfants sont harcelés, arnaqués ou confrontés à du contenu inapproprié.<br/>
                                Ainsi, nous souhaitons guider les plus jeunes afin qu'ils apprennent à utiliser Internet de la meilleure manière possible pour eux selon l'éducation que leurs parents veulent leurs donner.
                            </h7> <br/> <br/>
                            <h6 className="title-bold">
                                • Notre solution :
                            </h6>
                            <h7>
                                Aujourd'hui, en tant que jeunes adultes, nous trouvons que certains contenus sont choquants sur Internet et que ce n'est pas assez sécurisé. <br/>
                                Donc qu'en est-il pour un enfant ? <br/>
                                C'est pour cela que nous proposons un logiciel capable de monitorer la navigation Internet. <br/>
                                De ce fait, les enfants pourront être avertis que leur recherche n'est pas adaptée pour eux selon leurs parents. <br/>
                                Afin de respecter la liberté de l'enfant, Überschutz n'est ni bloquant ni intrusif. <br/>
                                C'est à dire qu'en fonction du paramétrage que vous choisirez, le logiciel n'interviendra qu'en tant que superviseur. Il laissera l'enfant naviguer mais se permettera d'afficher un message lorsque le contenu du site visité risque d'être inapproprié. <br/>
                                En conséquence, les parents pourront visualiser un détail statistique sur l'environnement virutel dans lequel vit l'enfant pour arriver à une discussion si cela est nécessaire.
                            </h7> <br/>
                        <br/>
                    </div>
                </div>
                <Faq/>
                <Form/>
            </div>
        )
    }
}

class Form extends Component {
    render() {
        return (
            <div>
                <br/>
                <h9 className="h9-font">
                    Vous êtes intéressés par notre solution ?
                </h9><br/>
                <h11>
                    N'hésitez pas à vous tenir informés en remplissant ce formulaire !
                </h11><br/>
                <h11>
                    Ou en nous contactant à l'adresse suivante : <h11 className="address">
                    uberschutz_2021@labeip.epitech.eu</h11>
                </h11>
                <form><br/>
                <div className="form-group">
                    <div className="form-group form-align">
                        <label>Name or Surname</label>
                        <input type="text" className="form-control form-box" placeholder="Name or Surname"/>
                    </div>
                    <label>Email address</label>
                    <input type="email" className="form-control form-box" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted col-sm-8">
                        We'll never share your email with anyone else.
                    </small>
                </div><button type="submit" className="btn btn-primary button-footer">Submit</button>
                </form>
            </div>
        )
    }
}

class Faq extends Component {
    render() {
        return (
            <div className="form-align uber-color2">
                <h4 className="h9-font">
                    <br/>FAQ :
                </h4>
                <div className="uber-color2 description-txt">
                    <h6 className="question">
                        • Comment Überschutz protège mon enfant ?
                    </h6>
                    <h7>
                        Überschutz propose plusieurs manières de protéger son enfant. <br/>
                        Cela va de bloquer complètement Internet, jusqu'à bloquer uniquement certains sites tout en passant par d'autres moyens comme la restriction de sites ou la prévention.
                    </h7> <br/><br/>
                    <h6 className="question">
                        • En quoi Überschutz est différent d'un contrôle parental ?
                    </h6>
                    <h7>
                        (même réponse qu'en bas ?)
                    </h7> <br/><br/>
                    <h6 className="question">
                        • En quoi Überschutz protège mieux qu'un contrôle parental ?
                    </h6>
                    <h7>
                        Überschutz est mieux qu'un contrôle parental car il ne se contente pas uniquement de bloquer certains sites. <br/>
                        Überschutz est paramétré selon les envies et les règles que les parents veulent imposer à leurs enfants. A eux de choisir le meilleur moyen pour les protéger.
                    </h7> <br/><br/>
                    <h6 className="question">
                        • Qu'est-ce que les parents peuvent faire avec ce logiciel <h7 className="address">(bloquer, avertir, être prévenu ...)</h7> ?
                    </h6>
                    <h7>
                        Les parents peuvent protéger leurs enfants sur Internet de la manière dont ils l'entendent. <br/>
                        Si couper leur connexion lorsqu'ils dépassent les limites leurs paraît être la bonne solution, Überschutz le fera. <br/>
                        Si ils préfèrent jouer sur la patience de leurs enfants pour accéder à un site particulier, Überschutz le fera. <br/>
                        Si pour eux, l'apprentissage autonome d'Internet est la meilleure solution, Überschutz préviendra les enfants lorsqu'ils dépasseront les limites imposées par les parents, leurs laissant le choix de continuer ou non avec un pop-up. <br/>
                        A tout moment, les parents peuvent voir l'activité qu'ont leurs enfants sur Internet grâce au monitoring disponible avec le logiciel. Cela leur permettra de voir si l'enfant est aggressif ou agressé, s'il visite des sites peu recommandé ou si c'est un élément toxique sur Internet.
                    </h7> <br/><br/>
                    <h6 className="question">
                        • A quel prix pouvez-vous protéger votre enfant ?
                    </h6>
                    <h7>
                        Nous proposons plusieurs formules et plusieurs types de logiciels. <br/>
                        Si vous voulez en savoir plus, rendez-vous sur la page <h7 className="address">"Produits"</h7> ou envoyer nous un mail à <h7 className="address">uberschutz_2021@labeip.epitech.eu</h7> pour avoir des renseignements supervisés.
                    </h7> <br/><br/>
                    <h6 className="question">
                        • Comment paramétrer l'application <h7 className="address">(web et mobile)</h7> ?
                    </h6>
                    <h7>
                        Pour les 2 plateformes, rendez-vous sur la page <h7 className="address">"Paramètres"</h7>, cliquez sur le prénom de l'enfant que vous voulez protéger et cochez les options que vous voulez appliquer à sa navigation Internet. <br/>
                        Choisissez le type de restriction que vous voulez <h7 className="address">(bloquer, limiter, avertir).</h7>
                    </h7> <br/><br/>
                    <h6 className="question">
                        • Comment initialiser Überschutz sur les appareils de mes enfants ?
                    </h6>
                    <h7>
                        Lors de votre 1ere visite, allez sur la page <h7 className="address"> "Connexion"</h7> et remplissez les champs demandés dans <h7 className="address">"Inscription".</h7> <br/>
                        Sur l'appareil fourni lors de l'achat de Überschutz, un numéro de série est présent. C'est celui-ci qu'il faut renseigner dans la partie <h7 className="address">"Numéro de série".</h7> <br/>
                        Vous serez ensuite redirigés vers votre profil où vous pourrez ajouter et paramétrer les options que vous voulez attribuer à la navigation Internet de votre enfant. <br/>
                        Branchez votre boîtier et ils seront automatiquement associés à ses appareils.
                    </h7> <br/> <br/>
                </div>
            </div>
        )
    }
}


/* ------- Definir "non bloquant" et "non intrusif"
* ---------Comment paramétrer l'application / logiciel ?
* ---------Comment initialiser le controle parental sur mon appareil ?
* ---------Aborder question du prix (abonnement)
* ---------Qu'est ce que peuvent faire les parents avec logiciel (bloqué, ou avertir, tout en étant prévenus ...) par systeme d'option
* ----------Comment Üz protège mon enfant ?
* ---------En quoi Üz est différent d'un contrôle parental ?
* ---------En quoi Üz protége mieux qu'un contrôle parental ?*/


export { Contact, Form, Faq };