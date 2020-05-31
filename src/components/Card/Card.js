import React from 'react';
import './Card.css';
import SymptomChecker from './SymptomChecker.png';
import TestCenters from './TestCenters.png';
import Statistics from './Statistics.jpg';
import FAQs from './FAQs.jpg';
import HelpLine from './HelpLine.jpg';

const Card = ({onRouteChange}) => {
    return(
        <div className = 'crd pa4'>
            <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5 pointer grow" onClick = {() => onRouteChange('SymptomChecker')}>
                <div className="tc">
                <img alt = '' src = {SymptomChecker} className = "br-100 h4 w4 dib ba b--black-05 pa2"/>
                <h1 className="f3 mb2">SymptomChecker</h1>
                <h2 className="f5 fw4 gray mt0">Check your Symptoms for Covid-19</h2>
                </div>
            </article>
            <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5 pointer grow" onClick = {() => onRouteChange('TestCenters')}>
                <div className="tc">
                <img alt = '' src = {TestCenters} className="br-100 h4 w4 dib ba b--black-05 pa2"/>
                <h1 className="f3 mb2">Test Centers</h1>
                <h2 className="f5 fw4 gray mt0">Know the Test Centers located near you</h2>
                </div>
            </article> 
            <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5 pointer grow" onClick = {() => onRouteChange('Statistics')}>
                <div className="tc">
                <img alt = '' src = {Statistics} className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you"/>
                <h1 className="f3 mb2">Statistics</h1>
                <h2 className="f5 fw4 gray mt0">Know the Nation-Wide and World-Wide Statistics</h2>
                </div>
            </article>  
            <a className = 'no-underline' href = 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses'>
            <article className="mw5 center bg-white black br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5 pointer grow">
                <div className="tc">
                <img alt = '' src={FAQs} className="br-100 h4 w4 dib ba b--black-05 pa2" />
                <h1 className="f3 mb2">FAQs</h1>
                <h2 className="f5 fw4 gray mt0">Answers to common question about corona</h2>
                </div>
            </article>  
            </a> 
            <a className = 'no-underline' href ='https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf'>         
            <article className="mw5 center black bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5 pointer grow">
                <div className="tc">
                <img alt = '' src={HelpLine} className="br-100 h4 w4 dib ba b--black-05 pa2"/>
                <h1 className="f3 mb2">HelpLine</h1>
                <h2 className="f5 fw4 gray mt0">National and State HelpLine Numbers</h2>
                </div>
            </article>
            </a>
        </div>
    )
}
export default Card;