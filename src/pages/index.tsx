import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Star Wars Explained"
        description="Discover new contents about the amazing world of Star Wars."
        canonical=""
        openGraph={{
          url: '',
          title: 'Star Wars',
          description:
            'Discover new contents about the amazing world of Star Wars.',
          site_name: 'Star Wars Explained'
        }}
      />
      <h1>Maybe the Force be with you!</h1>
    </>
  )
}
