import React, { Component } from 'react';
import Card from "./card";


 class Catalogo extends Component {
	state = {
		loading: true,
		lang: 'es',
		products: '',
		disgestcare: false,
		mantener: false,
		immuncare: false,
		sleepcare: false,
		vigorcare: false,
		vitalcare: false,
		filters: []
	}
	componentDidMount() {
    const { lang } = this.state;
    fetch(`https://dobcn-api.herokuapp.com/products/all/${lang}`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          products: json,
					loading: false,
        })
      })
	}

	handleCheckDigestcare = event => {
		this.setState({ disgestcare: event.target.checked})
		console.log(this.state);
		if(this.state.disgestcare===false){
			this.state.filters.push('digestcare');
		}
		else {
			this.state.filters.pop();
		}
	}

	handleCheckRedensificar = event => {
		this.setState({ mantener: event.target.checked})
		if(this.state.mantener===false){
			this.state.filters.push('mantener');
		}
		else {
			this.state.filters.pop();
		}
	}

	handleCheckImmuncare = event => {
		this.setState({ immuncare: event.target.checked})
		if(this.state.immuncare===false){
			this.state.filters.push('immuncare');
		}
		else {
			this.state.filters.pop();
		}
	}

	handleCheckSleepcare = event => {
		this.setState({ sleepcare: event.target.checked})
		if(this.state.sleepcare===false){
			this.state.filters.push('sleepcare');
		}
		else {
			this.state.filters.pop();
		}
	}

	handleCheckVigorcare = event => {
		this.setState({ vigorcare: event.target.checked})
		if(this.state.vigorcare===false){
			this.state.filters.push('vigorcare');
		}
		else {
			this.state.filters.pop();
		}
	}

	handleCheckVitalcare = event => {
		this.setState({ vitalcare: event.target.checked})
		if(this.state.vitalcare===false){
			this.state.filters.push('vitalcare');
		}
		else {
			this.state.filters.pop();
		}
	}

	
    render() {
			const { loading, products, filters } = this.state;
        return (
					

					<div className="main-wrapper">
						<div className="filter-container">
						
            	<h3>FAMILIAS EPAPLUS</h3>

							<div className="filter-form">
                <input type="checkbox" 
								checked={this.state.redensificar}
								onChange={this.handleCheckRedensificar}/> Articulaciones y huesos
								</div>


								<div className="filter-form">
                <input type="checkbox" 
								checked={this.state.disgestcare}
								onChange={this.handleCheckDigestcare}/> Aparato digestivo
								</div>

								<div className="filter-form">

								<input type="checkbox" 
								checked={this.state.immuncare}
								onChange={this.handleCheckImmuncare}/> Sistema inmunitario
								</div>

								<div className="filter-form">

								<input type="checkbox" 
								checked={this.state.sleepcare}
								onChange={this.handleCheckSleepcare}/> Sueño y descanso
								</div>

								<div className="filter-form">
							<input type="checkbox" 
								checked={this.state.vigorcare}
								onChange={this.handleCheckVigorcare}/> Vigor sexual
								</div>

								<div className="filter-form">
                <input type="checkbox" 
								checked={this.state.vitalcare}
								onChange={this.handleCheckVitalcare}/> vitalidad y energía
								</div>
            </div>

            {
							loading ?
									
                <h1 className="loading">loading...</h1>
                : products.map(product => {
									if(filters.length>0){
										for(let i=0;i<filters.length;i++){
											if(filters[i]===product.family){

                  return (	
										<>	
										<Card key={product._id} product={product}/>
										</>)

											}
										}
										}

									
									else {

                  return (	
										<>	
										<Card key={product._id} product={product}/>
										</>
										)
									}
								}
							)
						}

          </div>
            
        )
    }
}

export default Catalogo;