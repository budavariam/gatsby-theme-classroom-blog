import React from "react"
import { css, Styled } from "theme-ui"

export const Solution = ({ children, isVisible = true }) => {
    return isVisible
        ? <Styled.div css={css({ color: `primary`, display: "inline" })}>
            <details>
                <summary css={css`
                    outline: none;
                    cursor: pointer;
                `}>Solution</summary>
                {children}
            </details>
        </Styled.div>
        : null
}
