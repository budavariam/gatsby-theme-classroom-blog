import React from "react"
import { Styled } from "theme-ui"
import { withPrefix } from "gatsby"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <>
      <Styled.a href={withPrefix("/slides")} target="_blank">Slides</Styled.a>&nbsp;
      <Styled.a href={withPrefix("/cheatsheet")} target="_blank">Cheatsheet</Styled.a>&nbsp;
      <Styled.a href={withPrefix("/course-info")} target="_blank">Course Info</Styled.a>&nbsp;
    </>
  )
}
