import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
  const {
    site: { siteMetadata },
    cover,
    avatar,
    notFound,
  } = useStaticQuery(
    graphql`
      query siteMetaDataQuery {
        cover: file(relativePath: { eq: "cover.jpg" }) {
          childImageSharp {
            original {
              src
            }
          }
        }
        avatar: file(relativePath: { eq: "avatar.jpg" }) {
          childImageSharp {
            fixed(width: 200, height: 220) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        notFound: file(relativePath: { eq: "404.jpg" }) {
          childImageSharp {
            original {
              src
            }
          }
        }
        site {
          siteMetadata {
            description
            author
            display
            githubUsername
            description
            authorAvatar
            background_color
            googleAnalyticsId
            headerLinks {
              label
              url
            }
            keyWords
            pathPrefix
            tabTitle
            skills {
              level
              name
            }
            social {
              github
              linkedin
              email
              whatsApp
            }
            theme_color
            titles {
              keys
              name
            }
            jobs {
              keys
              name
              number
            }
            error {
              name
              keys
              notFound
              ufoAndCow
            }
            education {
              keys
              name
              number
            }
            courses {
              date
              certification
              license
              url
              name
            }
          }
        }
      }
    `
  )
  return { siteMetadata, cover, avatar, notFound }
}
