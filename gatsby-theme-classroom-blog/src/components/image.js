import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export const Image = ({ src, alt }) => {
    const { allImageSharp } = useStaticQuery(graphql`
        query {
            allImageSharp {
                edges {
                    node {
                        fluid(maxWidth: 500) {
                            ...GatsbyImageSharpFluid
                            originalName
                        }
                    }
                }
            }
        }
    `);
    const image = allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === src
    );
    // Debug to see the possible image values:
    // return allImageSharp.edges.map(edge => edge.node.fluid.originalName).join(",")
    if (!image) {
        return null;
    }
    return <Img fluid={image.node.fluid} alt={alt} />;
}