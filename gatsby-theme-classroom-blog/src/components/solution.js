import React from "react"
import { css, Styled } from "theme-ui"
import { Trans } from 'react-i18next'

export const Solution = ({ children, isVisible = true }) => {
    return isVisible
        ? <Styled.div css={css({ color: `primary`, display: "inline" })}>
            <details>
                <summary css={css`
                    outline: none;
                    cursor: pointer;
                `}>
                    <Trans i18nKey="component.solution.label" ns="theme" />
                </summary>
                {children}
            </details>
        </Styled.div>
        : null
}
