import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { Styled } from "theme-ui"

export const TrackedLink = (props) => {
    const { href, target, children } = props
    return <Styled.a
        as={OutboundLink}
        href={href}
        target={target || "_self"}>
        {children}
    </Styled.a>
}