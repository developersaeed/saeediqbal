import React from 'react'
import { Helmet } from 'react-helmet';
import  FeaturedImage  from './featuredimage.png';

const MyCom = () => {
  return (
    
    <>
    
    <head>

<Helmet>
    <meta property="og:title" content="Saeed Iqbal | Portfolio Website" />
    <meta property="og:description" content=" Transform your online presence with tailor-made website solutions crafted for success! If you're seeking a seasoned and skilled website developer, your search ends here. I'm Saeed Iqbal, a proficient website developer with a wealth of experience dating back to 2019. Over the years, I've empowered 156+ businesses to thrive online through the creation of professional, bespoke websites.

Specializing in building websites from the ground up, revamping existing ones, and seamlessly converting design files into functional websites, I bring a versatile skill set to the table. Proficient in MERN stack, React, Next.js, and Tailwind CSS, I excel in both front-end and back-end tasks. My expertise extends to popular CMS platforms like WordPress and Shopify.

Whether you need a personal, blog, portfolio, membership, LMS, business, or e-commerce website, I've got you covered. Explore my portfolio and work samples to witness the quality of my work. Let's collaborate to bring your business goals to fruition. Ignite your success with a website that speaks to your brand and resonates with your audience. Connect with me today to embark on a journey towards online excellence!" />
    <meta property="og:image" content={FeaturedImage}/>
    <meta property="og:url" content="https://www.saeediqbal.dev" />
    <meta name="twitter:card" content="summary_large_image" />
  </Helmet>

</head>
    </>
  )
}

export default MyCom