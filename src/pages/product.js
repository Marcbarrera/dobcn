
import React, { Component } from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/SEO";

class ProductPage extends Component {
  state = {
    loading: true,
    product: {}
  }

  componentDidMount() {
    const id = this.props['*'];
    fetch(`https://dobcn-api.herokuapp.com/products/product/${id}`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          product: json,
          loading: false
        })
      })
  }

  

  render() {
    let title = 'epaplus';
    let family = '';
    if (this.state.product[0]) {
      title = this.state.product[0].title;
      family = this.state.product[0].family;
    }
    const { loading, product } = this.state;
    return (
      <>
      <Header/>
        <SEO title={title} />
        <section className="index-header" id={family}>
          <p>{title}</p>
          <div className="triangle" id={`triangle-${family}`}></div>
        </section>
        <section className="product-main">
          <div className="product-main-container">
            {
              loading ? <h1>Cargando...</h1> : product.map(el => {
                return (
                  <div key={el._id}>
                    <section className="product-main-header">
                      <img src={el.image} alt={el.title} />
                      <div className="spec-box">
                        <section className="product-card-name">
                          <h2>{el.title}</h2>
                          <p>{el.subtitle}</p>
                        </section>
                        <section className="product-card-specs" >
                          <p>{el.packing}</p>
                          <p>{el.cn}</p>
                        </section>
                        <Link to={`/product/`} className={`button ${family}`}>Dónde comprar</Link>
                      </div>
                      <div>
                        <p className="description-box">{el.description}</p>
                        <div className="features-box">
                          {
                            el.features.map((feat, i) => {
                              return (
                                <div key={i}>
                                  <img src={feat.icon} alt={feat.name} />
                                  <span>{feat.name}</span>
                                </div>
                              )
                            })
                          }
                        </div>
                      </div>
                    </section>
                    <section className="collapsible-body">
                      <a className="collapse-button" name="formula" onClick={(event) => { this.collapse(event) }}>Fórmula</a>
                      <section data-collapsed="true" id="formula" className="section formula">
                      </section>
                      <a className="collapse-button" name="format" onClick={(event) => { this.collapse(event) }}>Formato</a>
                      <section data-collapsed="true" id="format" className="section formato">
                        {el.format}
                      </section>
                      <a className="collapse-button" name="empleo" onClick={(event) => { this.collapse(event) }}>Empleo</a>
                      <section data-collapsed="true" id="empleo" className="section empleo">
                        {el.use}
                      </section>
                      <a className="collapse-button" name="warning" onClick={(event) => { this.collapse(event) }}>Advertencias</a>
                      <section data-collapsed="true" id="warning" className="section warning">
                      </section>
                      <a className="collapse-button" name="info" onClick={(event) => { this.collapse(event) }}>Información técnica</a>
                      <section data-collapsed="true" id="info" className="section info" dangerouslySetInnerHTML={{ __html: el.info[0] }}>

                      </section>
                    </section>
                  </div>
                )
              })
            }
          </div>
        </section>
      <Footer/>
      </>
    )
  }
}

export default ProductPage