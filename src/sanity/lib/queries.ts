import { groq } from 'next-sanity'

// ─── Global Settings ─────────────────────────────────────────────────────────
export const settingsQuery = groq`*[_type == "settings"][0]{
  companyName,
  logoUrl,
  footerText,
  contactInfo,
  socialLinks[]{
    platform,
    url,
    handle
  },
  seo {
    ...,
    shareImageUrl
  }
}`

// ─── Home Page ───────────────────────────────────────────────────────────────
export const homePageQuery = groq`*[_type == "homePage"][0]{
  hero,
  stats,
  brandQuote,
  ctaBanner,
  seo {
    ...,
    shareImageUrl
  }
}`

// ─── About Page ──────────────────────────────────────────────────────────────
export const aboutPageQuery = groq`*[_type == "aboutPage"][0]{
  hero,
  story,
  seo {
    ...,
    shareImageUrl
  }
}`

// ─── Contact Page ────────────────────────────────────────────────────────────
export const contactPageQuery = groq`*[_type == "contactPage"][0]{
  hero,
  seo {
    ...,
    shareImageUrl
  }
}`

// ─── Collections ─────────────────────────────────────────────────────────────
export const productsQuery = groq`*[_type == "product"] | order(order asc, _createdAt desc){
  _id,
  title,
  "slug": slug.current,
  category,
  description,
  priceLabel,
  mainImageUrl,
  features[]
}`

export const servicesQuery = groq`*[_type == "service"] | order(order asc, _createdAt desc){
  _id,
  title,
  "slug": slug.current,
  tagline,
  description,
  deliverables,
  iconName
}`

export const galleryItemsQuery = groq`*[_type == "galleryItem" && isVisible == true] | order(_createdAt desc){
  _id,
  title,
  category,
  imageUrl,
  mediaType,
  videoUrl,
  description,
  isFeatured
}`

export const partnersQuery = groq`*[_type == "partner"] | order(order asc, _createdAt desc){
  _id,
  name,
  industry,
  logoUrl
}`

export const testimonialsQuery = groq`*[_type == "testimonial"] | order(isFeatured desc, _createdAt desc){
  _id,
  author,
  role,
  companyName,
  quote,
  rating,
  reviewSource,
  reviewUrl,
  profileImageUrl,
  isFeatured
}`

export const teamMembersQuery = groq`*[_type == "teamMember"] | order(order asc, _createdAt desc){
  _id,
  name,
  role,
  bio,
  initials,
  imageUrl
}`

// ─── Marketplace ─────────────────────────────────────────────────────────────
export const marketplaceListingsQuery = groq`*[_type == "marketplaceListing" && isVisible == true] | order(featured desc, _createdAt desc){
  _id,
  businessName,
  "slug": slug.current,
  category,
  logoUrl,
  shortDescription,
  featured
}`

export const marketplaceListingBySlugQuery = groq`*[_type == "marketplaceListing" && slug.current == $slug && isVisible == true][0]{
  _id,
  businessName,
  "slug": slug.current,
  category,
  logoUrl,
  coverImageUrl,
  shortDescription,
  fullDescription,
  location,
  contact,
  services,
  products,
  featured
}`
