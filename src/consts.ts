export const SITE = {
  title: 'Docs',
  description: 'Your website description.',
  defaultLanguage: 'en-us'
} as const

export const OPEN_GRAPH = {
  image: {
    src: 'default-og-image.png',
    alt:
      'astro logo on a starry expanse of space,' +
      ' with a purple saturn-like planet floating in the right foreground'
  },
  twitter: 'astrodotbuild'
}

export const KNOWN_LANGUAGES = {
  Japanese: 'ja',
  English: 'en'
} as const
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES)

export const EDIT_URL = `https://github.com/advanced-astro/astro-docs-template/tree/main`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'XXXXXXXXXX',
  appId: 'XXXXXXXXXX',
  apiKey: 'XXXXXXXXXX'
}

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>
export const SIDEBAR: Sidebar = {
  ja: {
    'ガイド': [
      { text: 'Introduction', link: 'ja/introduction' },
      { text: 'アーキテクチャ', link: 'ja/about_architecture' },
      { text: '水Protocolに参加', link: 'ja/howtodeploy' },
      { text: '水の哲学（見なくてもよい）', link: 'ja/about' }
    ],
    '開発者向けドキュメント': [
      { text: 'Page 1', link: 'ja/page-1' },
      { text: 'Page 2', link: 'ja/page-2' },
      { text: 'Page 3', link: 'ja/page-3' }
    ]
  },
  en: {
    'guide': [
      { text: 'Introduction', link: 'en/introduction' },
      { text: 'Page 2', link: 'en/page-2' },
      { text: 'Page 3', link: 'en/page-3' }
    ],
    'specification': [
      { text: 'Page 1', link: 'en/page-1' },
      { text: 'Page 2', link: 'en/page-2' },
      { text: 'Page 3', link: 'en/page-3' }
    ]
  }
}
