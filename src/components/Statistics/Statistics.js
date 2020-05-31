import React from 'react';
import './Statistics.css';
import back from '../back.png';

class Statistics extends React.Component{
    constructor(){
        super();
        this.state = {
            Global : {
                total_cases:123,
                total_recovered:274,
                total_unresolved:2255875,
                total_deaths:3715,
                total_new_cases_today:21819,
                total_new_deaths_today:669,
                total_active_cases:2783359,
                total_serious_cases:53460,
                total_affected_countries:213,
            },
            Indian_stats : {
                dailyconfirmed: "",
                dailydeceased: "",
                dailyrecovered: "",
                date: "",
                totalconfirmed: "",
                totaldeceased: "",
                totalrecovered: ""
            }
        }
    }
   
    componentDidMount(){
        fetch('https://api.thevirustracker.com/free-api?global=stats').then(response => response.json()).then(data => {
            this.setState({Global  : data.results[0]});
        });
        fetch('https://api.covid19india.org/data.json').then(response => response.json()).then(data => {
            var l = data.cases_time_series.length;
            this.setState({Indian_stats : data.cases_time_series[l-1]});
        });
    }
    render(){
        return(
            <div>
                <nav className="db dt-l w-100 border-box pa3 ph5-l">
                <p className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l pointer grow" title="Home" onClick = {() => this.props.onRouteChange('home')}>
                    <img src={back} className="dib w2 h2 br-100" alt="Site Name"/>
                </p>
                <div className="db dtc-l v-mid w-100 w-75-l tc tr-l padd">
                    <h1>Statistics </h1>
                </div>
                </nav>
                <div className = 'inline'>
                    <article className="mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-blue mb5 shadow-4">
                        <center><p className = 'f3'>World Wide Statistics for COVID-19</p></center>
                        <p className = 'f4 dark-red times'>Total Cases : {this.state.Global.total_cases}</p>
                        <p className = 'f4 green times'>Total Recovered : {this.state.Global.total_recovered}</p>
                        <p className = 'f4 dark-red times'>Total Unresolved : {this.state.Global.total_unresolved}</p>
                        <p className = 'f4 dark-red times'>Total Deaths : {this.state.Global.total_deaths}</p>
                        <p className = 'f4 dark-red times'>New Cases for Today : {this.state.Global.total_new_cases_today}</p>
                        <p className = 'f4 dark-red times'>New Deaths for Today : {this.state.Global.total_new_deaths_today}</p>
                        <p className = 'f4 dark-red times'>Total Active Cases : {this.state.Global.total_active_cases}</p>
                        <p className = 'f4 dark-red times'>Total Serious Cases : {this.state.Global.total_serious_cases}</p>
                        <p className = 'f4 dark-red times'>Total Affected Countries : {this.state.Global.total_affected_countries}</p>
                    </article>
                    <article className="mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-blue mb5 shadow-4">
                        <center><p className = 'f3'>Indian Statistics for COVID-19</p></center>
                        <p className = 'f4 dark-red times'>Daily Confirmed cases : {this.state.Indian_stats.dailyconfirmed}</p>
                        <p className = 'f4 dark-red times'>Daily Deceased : {this.state.Indian_stats.dailydeceased}</p>
                        <p className = 'f4 green times'>Daily Recovered : {this.state.Indian_stats.dailyrecovered}</p>
                        <p className = 'f4 dark-red times'>Date : {this.state.Indian_stats.date}</p>
                        <p className = 'f4 dark-red times'>Total Confirmed : {this.state.Indian_stats.totalconfirmed}</p>
                        <p className = 'f4 dark-red times'>Total Deceased : {this.state.Indian_stats.totaldeceased}</p>
                        <p className = 'f4 green times'>Total Recovered : {this.state.Indian_stats.totalrecovered}</p>
                    </article>
                </div>
            </div>
        );
    }
}
export default Statistics;
