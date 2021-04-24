import React from "react"
import { Styled } from "theme-ui"
import { withPrefix } from "gatsby"
import { Trans } from "react-i18next"
import { useStaticQuery, graphql } from "gatsby"

/**
 * Change the content to add your own bio
 */

export default function BioContent({
  hasSlides, hasCheatsheet, hasCourseInfo
}) {
  return (
    <>
      {hasSlides && <Styled.a href={withPrefix("/slides")} target="_blank">
        <Trans i18nKey="header.bio.slides" ns="theme" />&nbsp;
      </Styled.a>}
      {hasCheatsheet && <Styled.a href={withPrefix("/cheatsheet")} target="_blank">
        <Trans i18nKey="header.bio.cheatsheet" ns="theme" />&nbsp;
      </Styled.a>}
      {hasCourseInfo && <Styled.a href={withPrefix("/course-info")} target="_blank">
        <Trans i18nKey="header.bio.course-info" ns="theme" />&nbsp;
      </Styled.a>}
    </>
  )
}
