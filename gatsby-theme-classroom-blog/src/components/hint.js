import React, { useState } from "react"
import { css } from "theme-ui"
import { Trans } from 'react-i18next'

export const Hint = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  return !isVisible
    ? <button css={css({ backgroundColor: `highlight`, color: `secondary` })} style={{
      borderRadius: `0.3em`,
      paddingTop: `0.15em`,
      paddingBottom: `0.05em`,
      paddingX: `0.2em`,
    }} onClick={() => { setIsVisible(true) }}>
      <Trans i18nKey="component.hint.label" ns="theme" />
    </button>
    : <span> {children} </span>
}
