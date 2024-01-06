import { defineConfig } from "vitepress";
import { withPwa } from "@vite-pwa/vitepress";

const ogUrl = "https://civyoahtl.github.io/";
const ogImage = "https://civyoahtl.github.io/yoahtl-flag.png";

export default withPwa(
  defineConfig({
    title: "Yoahtl Gov",
    description: "The website for the Yoahtlan government",
    head: [
      ["meta", { name: "theme-color", content: "#ffffff" }],
      // ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
      // ['link', { rel: 'alternate icon', href: '/favicon.ico', type: 'image/png', sizes: '16x16' }],
      [
        "link",
        {
          rel: "icon",
          href: "/favicon.ico",
          type: "image/png",
          sizes: "16x16",
        },
      ],
      [
        "link",
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#ffffff" },
      ],
      [
        "link",
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
          sizes: "180x180",
        },
      ],
      [
        "meta",
        {
          name: "keywords",
          content: "Civ, Minecraft, Wiki, Government",
        },
      ],
      // open graph
      ["meta", { property: "og:type", content: "website" }],
      ["meta", { property: "og:title", content: "The Government of Yoahtl" }],
      ["meta", { property: "og:image", content: ogImage }],
      [
        "meta",
        {
          property: "og:description",
          content: "The website for the Yoahtlan government",
        },
      ],
      ["meta", { property: "og:url", content: ogUrl }],
      // twitter's og because special
      [
        "meta",
        {
          name: "twitter:description",
          content: "The website for the Yoahtlan government",
        },
      ],
      ["meta", { name: "twitter:title", content: "The Government of Yoahtl" }],
      ["meta", { name: "twitter:card", content: "summary_large_image" }],
      ["meta", { name: "twitter:image", content: ogImage }],
      ["meta", { name: "twitter:url", content: ogUrl }],
      // PWA manifest
      ["link", { rel: "preconnect", href: "/manifest.webmanifest" }],
      ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ],
    lastUpdated: true,
    appearance: "dark",
    themeConfig: {
      siteTitle: "Government of Yoahtl",
      logo: "/yoahtl-flag.png",
      externalLinkIcon: true,
      nav: [
        { text: "Culture & History", link: "/culture/index" },
        {
          text: "Constitution",
          link: "/constitution/charter",
          activeMatch: "/constitution/",
        },
        {
          text: "Government",
          link: "/government/introduction",
          activeMatch: "/government/",
        },
        {
          text: "Judiciary",
          link: "/judiciary/",
          activeMatch: "/judiciary/",
        },
        {
          text: "Misc",
          items: [
            { text: "Dead Letters", link: "/deadLetters" },
            { text: "Edit Guide", link: "/editGuide" },
          ],
        },
      ],
      socialLinks: [
        {
          icon: "discord",
          link: "https://discord.gg/NwjJKRvk2P",
        },
        {
          icon: {
            svg: '<svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547l-.8 3.747c1.824.07 3.48.632 4.674 1.488c.308-.309.73-.491 1.207-.491c.968 0 1.754.786 1.754 1.754c0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87c-3.874 0-7.004-2.176-7.004-4.87c0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754c.463 0 .898.196 1.207.49c1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197a.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248c.687 0 1.248-.561 1.248-1.249c0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25c0 .687.561 1.248 1.249 1.248c.688 0 1.249-.561 1.249-1.249c0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094a.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913c.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463a.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73c-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>',
          },
          link: "https://www.reddit.com/r/CivYoahtl/",
        },
        {
          icon: "github",
          link: "https://github.com/CivYoahtl/civyoahtl.github.io",
        },
      ],
      editLink: {
        pattern:
          "https://github.com/civyoahtl/civyoahtl.github.io/edit/main/docs/:path",
        text: "Edit this page on GitHub",
      },
      sidebar: {
        "/constitution/": [
          {
            text: "Constitution",
            items: [
              { text: "The Third Charter", link: "/constitution/charter" },
              { text: "Treaties", link: "/constitution/treaties" },
            ],
          },
          {
            text: "Historical",
            items: [
              {
                text: "Articles of Governance",
                link: "/constitution/articles-of-governance",
              },
              {
                text: "The First Charter",
                link: "/constitution/first-charter",
              },
              {
                text: "The First Charter (Revised)",
                link: "/constitution/first-charter-revised",
              },
              {
                text: "The Second Charter",
                link: "/constitution/secound-charter",
              },
            ],
          },
        ],
        "/government/": [
          {
            text: "Government",
            items: [
              {
                text: "Introduction",
                link: "/government/introduction",
              },
              {
                text: "Officials",
                link: "/government/officials",
              },
              {
                text: "Procedures",
                link: "/government/procedures",
              },
              {
                text: "Conventions",
                link: "/government/conventions",
              },
              {
                text: "Government History",
                link: "/government/government-composition-history",
              },
            ],
          },
          {
            text: "Council",
            items: [
              {
                text: "Acts",
                link: "/government/council-acts",
              },
            ],
          },
          {
            text: "Olotic",
            items: [
              {
                text: "Proposals",
                link: "/government/ololtic-proposals",
              },
            ],
          },
          {
            text: "Gov Documents",
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: "Introduction",
                link: "/government/documents/introduction",
              },
              {
                text: "Yoahtl Crimes Act",
                link: "/government/documents/yoahtl-crimes-act",
              },
              {
                text: "Treaty of Siccufrigus",
                link: "/government/documents/siccufrigus",
              },
            ],
          },
        ],
        "/judiciary/": [
          {
            text: "Judiciary",
            items: [
              {
                text: "Index",
                link: "/judiciary/",
              },
              {
                text: "Code of Court Procedure",
                link: "/judiciary/code-of-court",
              },
              {
                text: "Cases and Precedents",
                link: "/judiciary/court-cases-precedents/",
              },
            ],
          },
        ],
      },
      search: {
        provider: "local",
      },
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2015-present The Citizens of Yoahtl'
      }
    },
    sitemap: {
      hostname: ogUrl,
      lastmodDateOnly: false,
      xmlns: { // trim the xml namespace
        news: false,
        video: false,
        // custom: [
        //   'xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"',
        //   'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"',
        // ],
      }
    },
    pwa: {
      // disable pwa completely
      selfDestroying: true,

      // mode: "development",
      base: "/",
      scope: "/",
      registerType: "autoUpdate",
      workbox: {
        // if navigation fails, fallback to 404 page
        navigateFallback: "404.html",
        // instruct sw to not intercet requests pdf files
        navigateFallbackDenylist: [/.+\.pdf/, /robots\.txt/, /sitemap\.xml/],
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],
      },
      includeAssets: ["favicon.ico", "**/*.png", "**/*.svg"],
      devOptions: {
        enabled: true,
        /* other options */
      },
      manifest: {
        name: "The Government of Yoahtl",
        short_name: "Yoahtl Gov",
        description: "The website for the Yoahtlan government",
        theme_color: "#ffcd30",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    },
  })
);
