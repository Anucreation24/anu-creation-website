import { type SchemaTypeDefinition } from 'sanity'

import { seoSchema } from './objects/seo'
import { socialLinkSchema } from './objects/socialLink'

import { settingsSchema } from './documents/settings'
import { homePageSchema } from './documents/homePage'
import { aboutPageSchema } from './documents/aboutPage'
import { contactPageSchema } from './documents/contactPage'
import { productSchema } from './documents/product'
import { serviceSchema } from './documents/service'
import { galleryItemSchema } from './documents/galleryItem'
import { partnerSchema } from './documents/partner'
import { testimonialSchema } from './documents/testimonial'
import { teamMemberSchema } from './documents/teamMember'

import { marketplaceListingSchema } from './documents/marketplaceListing'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    seoSchema,
    socialLinkSchema,
    settingsSchema,
    homePageSchema,
    aboutPageSchema,
    contactPageSchema,
    productSchema,
    serviceSchema,
    galleryItemSchema,
    partnerSchema,
    testimonialSchema,
    teamMemberSchema,
    marketplaceListingSchema,
  ],
}
