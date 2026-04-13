import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schema } from './src/sanity/schema'
import { projectId, dataset } from './src/sanity/env'

// ─── Singleton types to hide from "Create" ──────────────────────────────────
const singletonTypes = new Set(['settings', 'homePage', 'aboutPage', 'contactPage'])

export default defineConfig({
  basePath: '/studio',
  name: 'ANU_CREATION_Studio',
  title: 'ANU CREATION Studio',

  projectId,
  dataset,

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Website Content')
          .items([
            // Singleton: Settings
            S.listItem()
              .title('Global Settings')
              .id('settings')
              .icon(() => '⚙️')
              .child(S.document().schemaType('settings').documentId('settings')),

            S.divider(),

            // Singletons: Pages
            S.listItem()
              .title('Home Page')
              .icon(() => '🏠')
              .child(S.document().schemaType('homePage').documentId('homePage')),
            S.listItem()
              .title('About Page')
              .icon(() => 'ℹ️')
              .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
            S.listItem()
              .title('Contact Page')
              .icon(() => '✉️')
              .child(S.document().schemaType('contactPage').documentId('contactPage')),

            S.divider(),

            // Filter out singletons from the main list
            ...S.documentTypeListItems().filter(
              (listItem) => !singletonTypes.has(listItem.getId() || '')
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schema.types,
    // Filter out singleton types from "Create new document" menu
    templates: (prev) =>
      prev.filter((template) => !singletonTypes.has(template.schemaType)),
  },

  document: {
    // For singleton types, restrict destructive or duplicative actions
    actions: (prev, { schemaType }) => {
      if (singletonTypes.has(schemaType)) {
        return prev.filter(
          ({ action }) =>
            action !== 'duplicate' &&
            action !== 'delete' &&
            action !== 'unpublish' &&
            action !== 'discardChanges'
        )
      }
      // All other types (Collections) retain full document actions
      return prev
    },
  },
})
