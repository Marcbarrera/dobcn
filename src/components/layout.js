import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Catalogo from "./catalogo";
import Header from "./header";
import Footer from "./footer";
import  "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main id="site-main">{children}
        <h2>Nuestra gama de productos</h2>
        <p>Soluciones para el cuidado de articulaciones, bienestar digestivo
          ,un sueño reparador, y para reforzar el sistema inmunitario
        </p>
        <Catalogo/>
        </main>
        <Footer/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
