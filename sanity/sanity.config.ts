import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'
import {visionTool} from '@sanity/vision'
export default defineConfig({
  name: 'default',
  title: 'Sanity Project',
  projectId: 'pctozvsn',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
