import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"

const HeaderWrapper = styled.header`
  background: coral;
  margin-bottom: 1.45rem;
  img {
    margin-bottom: 0px;
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
