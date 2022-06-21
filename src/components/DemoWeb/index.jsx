import React from 'react'
import TheHeader from './TheHeader';
import TheBanner from './TheBanner';
import ServicesList from './ServicesList';
import ServicesItem from './ServicesItem';
import TheFooter from './TheFooter';
function DemoWeb() {
    return (
        <div>
            <TheHeader> </TheHeader>
            <TheBanner> </TheBanner>
            <ServicesList> </ServicesList>
            <ServicesItem> </ServicesItem>
            <TheFooter> </TheFooter>
        </div>
    )
}
export default DemoWeb;
