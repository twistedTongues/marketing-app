import Image from 'next/image'
import Link from 'next/link'
import IntroImage from '../public/intro.jpg'
import HeroImage from '../public/hero.jpg'

export default function Home() {
  return (
    <main>
      <section> 
        <div className="relative">
            <Image
              priority
              src={HeroImage}
              alt="hero"
              objectFit="cover"
              fill
              className="opacity-20" 
            />
          <div className="relative py-20 lg:py-60 px-5 lg:px-10 max-w-screen-lg mx-auto">
            <h1 className="pb-7 text-5xl">Bla Bla Startup Name</h1>
            <p className="pb-7">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
            </p>
            <a href="google.com" className="px-4 py-2 text-2xl uppercase bg-white text-blue-500 rounded-sm">View Link</a>
          </div>
        </div>
      </section>

      <section className="bg-blue-500">
          <div className="flex items-center py-20 lg:py-40 px-5 lg:px-10 max-w-screen-lg mx-auto">
          <div className="w-1/2 px-5">
            <h2 className="pb-7 text-3xl font-light">Our product makes your life easier.</h2>
            <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation ameSit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidat. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
          </div>
          <div className="relative h-60 w-1/2">
            <Image src={IntroImage} alt="intro" fill objectFit="cover"/> 
          </div>
          </div>
      </section>

      <section>
        <div className="max-w-screen-md mx-auto">
          <ul className="flex justify-around py-20 text-center">
            <li><span className="text-5xl">15</span><p className="text-sm">Awards Won</p></li>
            <li><span className="text-5xl">104</span><p className="text-sm">Happy Customers</p></li>
            <li><span className="text-5xl">0</span><p className="text-sm">Hassle</p></li>
          </ul>
          </div>
      </section>

      <section className="bg-blue-500">
        <div className="py-20 lg:py-60 px-5 lg:px-10 max-w-screen-lg mx-auto">
          <h3 className="text-4xl lg:text-5xl font-light pb-7">Featured Posts</h3>
          <div className="pb-7">
            <ul className="flex flex-col md:flex-row md:justify-between">
              <li className="pb-7"> 
                <Link href="/" className="flex">
                  <div className="relative h-20 w-20">
                    <Image src={HeroImage} alt="post" fill objectFit="cover"/>
                  </div>
                  <div className="pl-5">
                    <h5 className="text-xl font-semibold">Placeholder</h5>
                    <p>Apr dd, yyyy</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/" className="flex">
                  <div className="relative h-20 w-20">
                    <Image src={IntroImage} alt="post" fill objectFit="cover"/>
                  </div>
                  <div className="pl-5">
                    <h5 className="text-xl font-semibold">Placeholder</h5>
                    <p>Apr dd, yyyy</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Link href="/blog" className="px-4 py-2 text-xl uppercase bg-white text-blue-500 rounded-sm">View all posts</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="py-20 lg:py-40 px-5 lg:px-10 text-center max-w-screen-lg mx-auto">
          <h4 className="pb-7 text-5xl font-light">Ready to take the next step?</h4>
          <p className="pb-7">Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
          <div className="flex justify-center">
            <Link href="/contact" className="px-4 py-2 text-xl uppercase bg-white text-blue-500 rounded-sm">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
