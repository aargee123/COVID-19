import React from 'react';
import back from '../back.png';
import './SymptomChecker.css';

const SymptomChecker = ({validate,onDataChange, onRouteChange}) => { 
    return(
        <div>
            <nav className="db dt-l w-100 border-box pa3 ph5-l">
                <p className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l pointer grow" title="Home" onClick = {() => onRouteChange('home')}>
                    <img src={back} className="dib w2 h2 br-100" alt="Site Name"/>
                </p>
                <div className="db dtc-l v-mid w-100 w-75-l tc tr-l padd">
                    <h1>Symptom Checker </h1>
                </div>
            </nav>
            <article className="mw7 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
                <form action="sign-up_submit" method="get">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
                        <div className="mt3">
                            <center>
                            <label className="db fw4 lh-copy f6">Name</label>
                            <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" id="name" required name = 'name' onChange = {onDataChange}/>
                            <label className="db fw4 lh-copy f6">email</label>
                            <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" required name="email"  id="email" onChange = {onDataChange}/>
                            <label className="db fw4 lh-copy f6">Phone Number</label>
                            <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="phone" required id="phone" onChange = {onDataChange}/>
                            </center>
                        </div>
                    </fieldset>
                </form>
            </article>
            <article className="mw7 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
                <center><h1 className="f4 bold center mw6">Do you have any of these health Condition?</h1></center><br/>
                    <center>
                        <input type = 'radio' id = 'Asthama' name = 'disease' value = 'Asthama' onChange = {onDataChange}/><label>Asthama</label><br/><br/>
                        <input type = 'radio' id = 'copd' name = 'disease' value = 'copd' onChange = {onDataChange}/><label>Chronic lung disease (COPD)</label><br/><br/>
                        <input type = 'radio' id = 'Diabetes' name = 'disease' value = 'Diabetes' onChange = {onDataChange}/><label>Diabetes</label><br/><br/>
                        <input type = 'radio' id = 'HeartDisease' name = 'disease' value = 'HeartDisease' onChange = {onDataChange}/><label>Heart Disease</label><br/><br/>
                        <input type = 'radio' id = 'ImunoCompromised' name = 'disease' value = 'ImunoCompromised' onChange = {onDataChange}/><label>Imuno-Compromised conditions</label><br/><br/>
                        <input type = 'radio' id = 'Pregnancy' name = 'disease' value = 'Pregnancy' onChange = {onDataChange}/><label>Pregnancy</label><br/><br/>
                        <input type = 'radio' id = 'NoneOfTheAbove' name = 'disease' value = 'NoneOfTheAbove' onChange = {onDataChange}/><label>None of the above</label><br/><br/>
                    </center>
            </article>
            <article className="mw7 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
                <center><h1 className="f4 bold center mw6">Have you or someone in your family visited another country in last 1 month?</h1></center><br/>
                    <center>
                    <input type = 'radio' id = 'Yes' name = 'VisitedAnotherCountry' value = 'Yes' onChange = {onDataChange}/><label>Yes</label><br/><br/>
                    <input type = 'radio' id = 'No' name = 'VisitedAnotherCountry' value = 'No' onChange = {onDataChange}/><label>No</label><br/><br/>
                    </center>
            </article>
            <article className="mw7 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
                <center><h1 className="f4 bold center mw6">What is Your age?</h1></center><br/>
                    <center>
                    <input type = 'text' id = 'age' name = 'age' onChange = {onDataChange}/>
                    </center>
            </article>  
            <article className="mw7 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
                <center><h1 className="f4 bold center mw6">Have you or someone in your family come in close contact with a confirmed COVID-19 patient in the last 14 days?</h1></center><br/>
                    <center>
                    <input type = 'radio' id = 'Yes' name = 'contactWithPatient' value = 'Yes' onChange = {onDataChange}/><label>Yes</label><br/><br/>
                    <input type = 'radio' id = 'No' name = 'contactWithPatient' value = 'No' onChange = {onDataChange}/><label>No</label><br/><br/>
                    </center>
            </article> 
            <article className="mw7 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
                <center><h1 className="f4 bold center mw6">Do you have fever?</h1></center><br/>
                    <center>
                    <input type = 'radio' id = 'Yes' name = 'fever' value = 'Yes' onChange = {onDataChange}/><label>Yes</label><br/><br/>
                    <input type = 'radio' id = 'No' name = 'fever' value = 'No' onChange = {onDataChange}/><label>No</label><br/><br/>
                    </center>
            </article>            
            <article className="mw7 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
                <center><h1 className="f4 bold center mw6">Do you have headache?</h1></center><br/>
                    <center>
                    <input type = 'radio' id = 'Yes' name = 'headache' value = 'Yes' onChange = {onDataChange}/><label>Yes</label><br/><br/>
                    <input type = 'radio' id = 'No' name = 'headache' value = 'No' onChange = {onDataChange}/><label>No</label><br/><br/>
                    </center>
            </article>
            <article className="mw7 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
                <center><h1 className="f4 bold center mw6">Do you have cough?</h1></center><br/>
                    <center>
                    <input type = 'radio' id = 'Yes' name = 'cough' value = 'Yes' onChange = {onDataChange}/><label>Yes</label><br/><br/>
                    <input type = 'radio' id = 'No' name = 'cough' value = 'No' onChange = {onDataChange}/><label>No</label><br/><br/>
                    </center>
            </article>         
            <article className="mw7 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
                <center><h1 className="f4 bold center mw6">Do you have cold?</h1></center><br/>
                    <center>
                    <input type = 'radio' id = 'Yes' name = 'cold' value = 'Yes' onChange = {onDataChange}/><label>Yes</label><br/><br/>
                    <input type = 'radio' id = 'No' name = 'cold' value = 'No' onChange = {onDataChange}/><label>No</label><br/><br/>
                    </center>
            </article>   
            <article className="mw7 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5">
                <center><h1 className="f4 bold center mw6">Do you have sore throat?</h1></center><br/>
                    <center>
                    <input type = 'radio' id = 'Yes' name = 'throat' value = 'Yes' onChange = {onDataChange}/><label>Yes</label><br/><br/>
                    <input type = 'radio' id = 'No' name = 'throat' value = 'No' onChange = {onDataChange}/><label>No</label><br/><br/>
                    </center>
            </article>
            <div>
                <center><p className="f6 link dim ba bw1 ph3 pv2 mb2 dib near-black pointer" onClick = {validate}>Submit</p></center>
            </div>
        </div>
        
    )
}
export default SymptomChecker;