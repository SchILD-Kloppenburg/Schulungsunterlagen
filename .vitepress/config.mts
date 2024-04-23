import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Schulungsunterlagen/',
  title: "Schulungsunterlagen",
  description: "Schulungen SVWS-Server NRW",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Handbuch', link: 'https://help.svws-nrw.de' }
    ],

    sidebar: [
      {
        text: 'Leistungsdaten Sek II', link: '/LeistungsdatenSekII/', collapsed: true, 
        items: [
          { text: 'Allgemeine Vorlage', link: '/LeistungsdatenSekII/Allgemein_Vorlage/' },
          { text: 'Unterrichtsfächer', link: '/LeistungsdatenSekII/Unterrichtsfaecher/' },
          { text: 'Blockung EF', link: '/LeistungsdatenSekII/BlockungKommendeEF/' },
          { text: 'Import SchILD2 Laufbahndaten', link: '/LeistungsdatenSekII/ImportSchILD2Laufbahndaten/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
