import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '7ceab2e8cfca4a82a9305d494ddafd2f',
  isSearchEnabled: false,

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Sayed Mohammed Nouman',
  domain: 'skyhero.cf',
  author: 'Sayed Mohammed Nouman',

  // open graph metadata (optional)
  description: 'Sayed Mohammed Nouman | Full Stack Developer | Programmer ',

  // social usernames (optional)
  twitter: 'Skyhero_root',
  github: 'Skyhero-alt',
  linkedin: 'skyhero',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: 'e75bee594db143d1bf55568c5c974a6b'
    },
    {
      title: 'Contact',
      pageId: '605d09c6dbcd4db5bbea62baa52d9489'
    }
  ]
})
