import Hero from '../components/Hero';

import Outlets from '@/components/Outlets';
import AaojiAbout from '@/components/AaojiAbout';
import MenuSection from '@/components/MenuSection';
import GallerySection from '@/components/GallerySection';
import TestimonialContactSection from '@/components/TestimonialContactSection';
import SubFooter from '@/components/SubFooter';
import CopyrightFooter from '@/components/CopyrightFooter';

export default function Home() {
    return (
        <div>
            <Hero />
            <AaojiAbout />
            <Outlets />
            <MenuSection />
            <GallerySection />
            <TestimonialContactSection />
            <SubFooter />
            <CopyrightFooter />
        </div>
    );
}
