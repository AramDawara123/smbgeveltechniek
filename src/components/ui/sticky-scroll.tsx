
'use client';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef } from 'react';

const Component = forwardRef<HTMLElement>((props, ref) => {
  return (
    <ReactLenis root>
      <main className='bg-black' ref={ref}>
        <div className='wrapper'>
          <section className='text-white h-screen w-full bg-slate-950 grid place-content-center sticky top-0'>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

            <h1 className='2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
              Onze Projecten Gallery
              <br />
              Scroll door onze mooiste werken <br />
              Scroll naar beneden! 👇
            </h1>
          </section>
        </div>

        <section className='text-white w-full bg-slate-950'>
          <div className='grid grid-cols-12 gap-2 px-4'>
            <div className='grid gap-2 col-span-12 md:col-span-4'>
              <figure className='w-full'>
                <img
                  src='/lovable-uploads/7af29c8f-83cb-4315-9b65-268c3c983047.png'
                  alt='Historisch pand renovatie Amsterdam'
                  className='transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='/lovable-uploads/1e0914bc-1527-4823-a9b1-50957f0e3c6f.png'
                  alt='Nieuwbouw wooncomplex Rotterdam'
                  className='transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop'
                  alt='Kantoorgebouw Den Haag'
                  className='transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&auto=format&fit=crop'
                  alt='Renovatieankers project Utrecht'
                  className='transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=500&auto=format&fit=crop'
                  alt='Metselwerk woonwijk'
                  className='transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md'
                />
              </figure>
            </div>
            <div className='sticky top-0 h-screen w-full col-span-12 md:col-span-4 gap-2 grid grid-rows-3'>
              <figure className='w-full h-full'>
                <img
                  src='https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&auto=format&fit=crop'
                  alt='Gevelrenovatie project'
                  className='transition-all duration-300 h-full w-full align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full h-full'>
                <img
                  src='https://images.unsplash.com/photo-1448630360428-65456885c650?w=500&auto=format&fit=crop'
                  alt='Modern metselwerk'
                  className='transition-all duration-300 h-full w-full align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full h-full'>
                <img
                  src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&auto=format&fit=crop'
                  alt='Restauratie monumentaal pand'
                  className='transition-all duration-300 h-full w-full align-bottom object-cover rounded-md'
                />
              </figure>
            </div>
            <div className='grid gap-2 col-span-12 md:col-span-4'>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&auto=format&fit=crop'
                  alt='Bedrijfspand renovatie'
                  className='transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&auto=format&fit=crop'
                  alt='Scheurherstel specialist'
                  className='transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&auto=format&fit=crop'
                  alt='Duurzame geveloplossingen'
                  className='transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=500&auto=format&fit=crop'
                  alt='Traditioneel vakmanschap'
                  className='transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md'
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&auto=format&fit=crop'
                  alt='Moderne bouwtechnieken'
                  className='transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md'
                />
              </figure>
            </div>
          </div>
        </section>

        <footer className='group bg-slate-950'>
          <h1 className='text-[16vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear'>
            SMB Geveltechniek
          </h1>
          <div className='bg-black h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full'></div>
        </footer>
      </main>
    </ReactLenis>
  );
});

Component.displayName = 'StickyScrollGallery';

export default Component;
