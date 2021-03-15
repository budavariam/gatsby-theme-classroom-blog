import { useStaticQuery } from "gatsby"
import React, { useState } from "react"
import { css } from "theme-ui"

export const Hint = ({ children }) => {
    const data = useStaticQuery(hintQuery)
    const {
        site: {
            siteMetadata: { language },
        },
    } = data

    const [isVisible, setIsVisible] = useState(false)
    const text = language === "en" ? "Hint" : "Segítség"
    return !isVisible
        ? <button css={css({ backgroundColor: `highlight`, color: `secondary` })} style={{
            borderRadius: `0.3em`,
            paddingTop: `0.15em`,
            paddingBottom: `0.05em`,
            paddingX: `0.2em`,
        }} onClick={() => { setIsVisible(true) }}>{text}</button>
        : <span> {children} </span>
}

const hintQuery = graphql`
  query HintQuery {
    site {
      siteMetadata {
        language
      }
    }
  }
`