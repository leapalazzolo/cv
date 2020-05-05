import { useStaticQuery, graphql } from 'gatsby'
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
    query siteMetaDataQuery {
      site {
        siteMetadata {
          description
          author
          authorName
          display
          githubUsername
          siteDescription
          authorAvatar
          background_color
          googleAnalyticsId
          headerLinks {
            label
            url
          }
          icon
          keyWords
          pathPrefix
          siteCover
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
  return site.siteMetadata
}
