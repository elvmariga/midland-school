import React from 'react';
import {Navbar} from './components/navbar/Navbar';
import { Homepage } from './components/homepage/Homepage';
import {Strive} from './components/strive/Strive';
import {Glance} from './components/glance/Glance';
import {Whatweoffer} from './components/what-we-offer/Whatweoffer';
import { Events } from './components/events/events/Events';
import { Ourteam } from './components/ourTeam/Ourteam';
import { Testimonials } from './components/testimonials/Testimonials';
import { Footer } from './components/footer/Footer';
import {History} from './components/history/History';
import {Mission} from './components/mission/Mission';
import { Vision } from './components/vision/Vision';

export const App = () => {
  return (
    <section>
      <Navbar/>
      <Homepage/>
      <Strive/>
      <Glance/>
      <Whatweoffer/>
      <Events/>
      <Ourteam/>
      <Testimonials/>
      <Footer/>
      <History/>
      <Mission/>
      <Vision/>
    </section>

  )
}

