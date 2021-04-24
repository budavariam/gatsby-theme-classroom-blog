import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Hint } from "../../components/hint"
import { Solution } from "../../components/solution"
import { TrackedLink } from "../../components/trackedLink"
import { withTrans } from "../../i18n/withTrans"
import { css, Styled } from "theme-ui"
import Header from "gatsby-theme-blog/src/components/header"
import useBlogThemeConfig from "gatsby-theme-blog/src/hooks/configOptions"
import Helmet from "react-helmet"

const Layout = withTrans(({ children, ...props }) => {
  const blogThemeConfig = useBlogThemeConfig()
  const { webfontURL } = blogThemeConfig

  return (
    <Styled.root>
      <Helmet>
        <link rel="stylesheet" href={webfontURL} />
      </Helmet>
      <Header {...props} />
      <div>
        <div
          css={css({
            maxWidth: `container`,
            mx: `auto`,
            px: 4,
            py: 0,
          })}
        >
          {children}
        </div>
      </div>
    </Styled.root>
  )
})

const shortcodes = { Hint, TrackedLink, Solution }

export default ({ children, ...props }) => {
  return <MDXProvider components={shortcodes}>
    <Layout {...props}>{children}</Layout>
  </MDXProvider>
}
