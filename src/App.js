import React from 'react';
import './App.css';
import Logo from './components/logo/Logo';
import Info from './components/Info/Info';
import Card from './components/Card/Card';
import SymptomChecker from './components/SymptomChecker/SymptomChecker';
import TestCenters from './components/Test Centers/TestCenters';
import Statistics from './components/Statistics/Statistics';
import Result from './Result/Result';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      route : 'home'
    }
  }
  patient = {
    name : '',
    email : '',
    phone : '',
    disease : false,
    visitedAnotherCountry : false,
    age : '',
    contactWithPatient : false,
    fever : false,
    headache : false,
    cough : false,
    cold : false,
    soreThroat : false
  }

  validate = () => {
    if(this.patient.name === '' || this.patient.email === '' || this.patient.phone === '' || this.patient.age === ''){
      this.onRouteChange('validate');
    }else if(this.patient.age !== Number || this.patient.phone !== Number){
      this.onRouteChange('validate');
    }
    else{
      this.onRouteChange('result');
    }
  }

  onDataChange = (event) => {
      switch(event.target.name){
        case 'name':
          this.patient.name = event.target.value;
          break;
        case 'email':
          this.patient.email = event.target.value;
          break;
        case 'phone':
          this.patient.phone = event.target.value;
          break;
        case 'disease':
          if(event.target.id === 'NoneOfTheAbove'){
            this.patient.disease = false;
          }else{
            this.patient.disease = true;
          }
          break;
        case 'VisitedAnotherCountry':
          if(event.target.id === 'Yes'){
            this.patient.visitedAnotherCountry = true;
          }
          break;
        case 'age':
          this.patient.age = event.target.value;
          break;
        case 'contactWithPatient':
          if(event.target.id === 'Yes'){
            this.patient.contactWithPatient = true;
          }  
          break;
        case 'fever':
          if(event.target.id === 'Yes'){
            this.patient.fever = true;
          } 
          break;
        case 'headache':
          if(event.target.id === 'Yes'){
            this.patient.headache = true;
          } 
          break;
        case 'cough':
          if(event.target.id === 'Yes'){
            this.patient.cough = true;
          } 
          break;
        case 'cold':
          if(event.target.id === 'Yes'){
            this.patient.cold = true;
          } 
          break;
        case 'throat':
          if(event.target.id === 'Yes'){
            this.patient.soreThroat = true;
          } 
          break;
        default:
          console.log('done');   
      }
  }

  onRouteChange = (data) =>{
      this.setState({route : data});
  }

  render(){
    return(
      this.state.route === 'home' 
      ?
      <div>
        <Logo/>
        <Info/>
        <Card onRouteChange = {this.onRouteChange}/>        
      </div>
      :
      (
          this.state.route === 'SymptomChecker'
          ?
          <div>
            <SymptomChecker validate = {this.validate} onDataChange= { this.onDataChange } onRouteChange = {this.onRouteChange}/>
          </div>
          :
          (
            this.state.route === 'result'
            ?
            <div>
              <Result onRouteChange = {this.onRouteChange} patient = {this.patient}/>
            </div>
            :
            (
              this.state.route === 'validate'
              ?
              <div>
                <center><h1 className = 'red'>Please Fill in All the Entries correctly</h1></center>
                <SymptomChecker validate = {this.validate} onDataChange= { this.onDataChange } onRouteChange = {this.onRouteChange}/>
              </div>
              :
              (
                this.state.route === 'TestCenters'
                ?
                <div>
                  <TestCenters onRouteChange = {this.onRouteChange}/>
                </div>
                :
                <div>
                  <Statistics onRouteChange = {this.onRouteChange}/>
                </div>
              )
            )

          )
      )
      

    )
  }
}

export default App;
