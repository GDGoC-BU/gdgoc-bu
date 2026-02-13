import Community from './_sections/community';
import FeaturedEvent from './_sections/featured-event';
import Hero from './_sections/hero';
import Newsletter from './_sections/newsletter';
import PastEvents from './_sections/past-events';

export default function Events() {
  return (
    <div className='mt-4 flex flex-col gap-4'>
      <Hero />
      <Community />
      <FeaturedEvent />
      <PastEvents />
      <Newsletter />
    </div>
  );
}
