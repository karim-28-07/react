import React from 'react'
import Logo from '../components/Logo';

import Navigation from '../components/Navigation';




const About = () => {
    return (

        <div>
            <Navigation />
            <Logo />
            <h1>À propos</h1>
            <br />
            <p> Lorem Ipsum est simplement du faux texte
            employé dans la composition et la mise en
            page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis
            les années 1500, quand un imprimeur anonyme
            assembla ensemble des morceaux de texte pour
            réaliser un livre spécimen de polices de texte.
            'a pas fait que survivre cinq siècles, mais
            s'est aussi adapté à la bureautique informatique,
            ns que son contenu n'en soit modifié.
            Il a été popularisé dans les années 1960
            grâce à la vente de feuilles Letraset contenant
            des passages du Lorem Ipsum, et, plus récemment,
            par son inclusion dans des applications de mise
                en page de texte, comme Aldus PageMaker.</p>
            <br />
            <p>Lorem Ipsum est simplement du faux texte employé
            dans la composition et la mise en page avant
            impression. Le Lorem Ipsum est le faux texte
            standard de l'imprimerie depuis les années 1500,
            nd un imprimeur anonyme assembla ensemble des
            morceaux de texte pour réaliser un livre spécimen
                      olices de texte. .</p>

        </div>

    );
}

export default About;

