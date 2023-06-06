import React from 'react'
import { client } from '@/sanity/lib/client'


export async function getStaticProps() {
  const collections = await client.fetch('*[_type == "collections"]')
  return { props: { collections } }
}

interface CollectionsProps {
  collections: any
}



const Collections: React.FC<CollectionsProps> = ({ collections }) => {
  return (
    <div>
      {collections.map((collection: { _id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; image: { asset: { url: string | undefined }; alt: string | undefined }; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => (
        <div key={collection._id}>
          <h2>{collection.title}</h2>
          <img src={collection.image.asset.url} alt={collection.image.alt} />
          <p>{collection.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Collections