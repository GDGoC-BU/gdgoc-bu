import Events from './_sections/events';
import Hero from './_sections/hero';
import Introduction from './_sections/introduction';
import Mission from './_sections/mission';
import Newsletter from './_sections/newsletter';
import Vision from './_sections/vision';

export default function Home() {
  return (
    <div className='mt-4 flex flex-col gap-4'>
      <Hero />
      <Introduction />
      <Vision />
      <Mission />
      <Events />
      <Newsletter />
    </div>
  );
}
