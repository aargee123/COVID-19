import React from 'react';

const Result = ({onRouteChange , patient}) => {

    if(patient.contactWithPatient){
        return(
            <div>
                <h1>Results :-</h1>
                <article className="mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-yellow dark-red mb5">
                    <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">
                        HIGH RISK
                    </h1>
                    <h2 className="fw2 f4 lh-copy mt0 mb3">
                        Hello, {patient.name}
                    </h2>
                    <p className="fw1 f5 mt0 mb3">
                        There are very high chances that you may have got affected by COVID-19. Please visit your nearest test center to get Tested  
                    </p>
                    <div>
                        <p className="f6 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3 pointer" onClick = {() => onRouteChange('home')}>
                        Check Again
                        </p>
                        <a className="f6 br-pill dark-green no-underline ba grow pv2 ph3 dib pointer" href = 'https://www.mygov.in/covid-19'>
                        Learn More
                        </a>
                    </div>
                </article>
            </div>
        )
    }else if((patient.disease) && (patient.visitedAnotherCountry)){
        if((patient.fever) || (patient.headache) || (patient.cough) || (patient.cold) || (patient.soreThroat)){
            return(
                <div>
                     <h1>Results :-</h1>
                <article className="mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-yellow dark-red mb5">
                    <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">
                        HIGH RISK
                    </h1>
                    <h2 className="fw2 f4 lh-copy mt0 mb3">
                        Hello, {patient.name}
                    </h2>
                    <p className="fw1 f5 mt0 mb3">
                        There are very high chances that you may have got affected by COVID-19. Please visit your nearest test center to get Tested  
                    </p>
                    <div>
                        <p className="f6 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3 pointer" onClick = {() => onRouteChange('home')}>
                        Check Again
                        </p>
                        <a className="f6 br-pill dark-green no-underline ba grow pv2 ph3 dib pointer" href = 'https://www.mygov.in/covid-19'>
                        Learn More
                        </a>
                    </div>
                </article>
            </div>
            )
        }else if(Number(patient.age > 40)){
            return(
                <div>
                <h1>Results :-</h1>
                <article className="mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-yellow dark-red mb5">
                    <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">
                        MODERATE RISK
                    </h1>
                    <h2 className="fw2 f4 lh-copy mt0 mb3">
                        Hello, {patient.name}
                    </h2>
                    <p className="fw1 f5 mt0 mb3">
                        There are some chances that you may have got affected by COVID-19. Please visit your nearest test center and get Tested for it 
                    </p>
                    <div>
                        <p className="f6 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3 pointer" onClick = {() => onRouteChange('home')}>
                        Check Again
                        </p>
                        <a className="f6 br-pill dark-green no-underline ba grow pv2 ph3 dib pointer" href = 'https://www.mygov.in/covid-19'>
                        Learn More
                        </a>
                    </div>
                </article>
            </div>
            )
        }
    }else if((patient.fever) && (patient.headache) && (patient.cough) && (patient.cold) && (patient.soreThroat)){
        return(
            <div>
                <h1>Results :-</h1>
            <article className="mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-yellow dark-red mb5">
                <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">
                    MODERATE RISK
                </h1>
                <h2 className="fw2 f4 lh-copy mt0 mb3">
                    Hello, {patient.name}
                </h2>
                <p className="fw1 f5 mt0 mb3">
                    There are some chances that you may have got affected by COVID-19. Please visit your nearest test center and get Tested for it 
                </p>
                <div>
                    <p className="f6 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3 pointer" onClick = {() => onRouteChange('home')}>
                    Check Again
                    </p>
                    <a className="f6 br-pill dark-green no-underline ba grow pv2 ph3 dib pointer" href = 'https://www.mygov.in/covid-19'>
                    Learn More
                    </a>
                </div>
            </article>
        </div>
        )
    }else{
        return(
            <div>
                <h1>Results :-</h1>
            <article className="mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-green dark-green mb5">
                <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">
                    No RISK
                </h1>
                <h2 className="fw2 f4 lh-copy mt0 mb3">
                    Hello, {patient.name}
                </h2>
                <p className="fw1 f5 mt0 mb3">
                    It Seems that you are currently safe and secure from the affects of COVID-19. Stay safe and stay at home 
                </p>
                <div>
                    <p className="f6 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3 pointer" onClick = {() => onRouteChange('home')}>
                    Check Again
                    </p>
                    <a className="f6 br-pill dark-green no-underline ba grow pv2 ph3 dib pointer" href = 'https://www.mygov.in/covid-19'>
                    Learn More
                    </a>
                </div>
            </article>
        </div>
        )
    }

}

export default Result;