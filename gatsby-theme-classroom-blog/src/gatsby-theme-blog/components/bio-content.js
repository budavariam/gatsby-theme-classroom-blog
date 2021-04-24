import React from "react"
import { Styled } from "theme-ui"
import { withPrefix } from "gatsby"
import { Trans } from "react-i18next"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <>
      <Styled.a href={withPrefix("/slides")} target="_blank">
        <Trans i18nKey="header.bio.slides" ns="theme" />  
      </Styled.a>&nbsp;
      <Styled.a href={withPrefix("/cheatsheet")} target="_blank">
        <Trans i18nKey="header.bio.cheatsheet" ns="theme" />  
      </Styled.a>&nbsp;
      <Styled.a href={withPrefix("/course-info")} target="_blank">
        <Trans i18nKey="header.bio.course-info" ns="theme" />  
      </Styled.a>&nbsp;
    </>
  )
}
