import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicies from '../components/OurPolicies'
import Newsletter from '../components/Newsletter'

function Home() {
    return (
        <div>
            <Hero />
            <LatestCollection />
            <BestSeller />
            <OurPolicies />
            <Newsletter />
        </div>
    )
}

export default Home
