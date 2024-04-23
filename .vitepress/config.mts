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
        text: 'Leistungsdate Sek II',
        items: [
          { text: 'Allgemeine Vorlage', link: '/Allgmein_Vorlage' },
          { text: 'Unterrichtsfächer', link: '/Unterrichtsfaecher' },
          { text: 'Blockung EF', link: '/BlockungKommendeEF' },
          { text: 'Import SchILD2 Laufbahndaten', link: '/ImportSchILD2Laufbahndaten' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
