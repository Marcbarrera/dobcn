import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "./navbar"
import Portada from "./portada.js"

const Header = ({ siteTitle }) => (
  <div className="header">
  <Navbar/>
  <Portada/>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
