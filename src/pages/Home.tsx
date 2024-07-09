import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import CollectionList from '../components/CollectionList';

const Home: React.FC = () => (
  <>
    <Header />
    <Hero />
    <section className="max-width my-8 flex flex-col sm:flex-row items-center justify-between gap-2">
      <h2 className="font-medium text-lg sm:text-xl md:text-2xl">Categories</h2>
      <div className="flex items-center gap-2">
        <span className="btn btn-active">Men</span>
        <span className="btn">Women</span>
        <span className="btn">Children</span>
      </div>
    </section>
    <CollectionList />
    <Testimonials />
    <Footer />
  </>
);

export default Home;
