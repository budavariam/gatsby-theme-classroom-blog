import React from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <>
      <Styled.a href="/slides" target="_blank">Slides</Styled.a>&nbsp;
      <Styled.a href="/cheatsheet" target="_blank">Cheatsheet</Styled.a>&nbsp;
      <Styled.a href="/course-info" target="_blank">Course Info</Styled.a>&nbsp;
    </>
  )
}
