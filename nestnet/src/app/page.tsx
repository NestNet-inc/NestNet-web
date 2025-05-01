import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-800">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto py-12 px-4 md:py-16 md:flex md:items-center md:gap-8">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-800 mb-4">From Dream to Doorstep</h1>
          <p className="text-neutral-700 mb-8 max-w-md">
            NestNet connects visionary home seekers with community investors to build and own property together
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-amber-800 hover:bg-amber-900 text-white">Start your home</Button>
            <Button variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-50">
              Become an investor
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="overflow-hidden">
            <Image
              src="/house image.png"
              alt="Modern home"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
<section className="container mx-auto py-16 px-4">
  <h2 className="text-2xl md:text-3xl font-bold text-amber-800 text-center mb-12">How It Works</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <div className="flex flex-col items-center text-center">
      <Image
        src="/pitch.png"
        alt="Pitch your home idea"
        width={150}
        height={150}
        className="mb-4 w-[150px] h-[150px] object-contain"
      />
      <h3 className="font-bold text-lg mb-2">Pitch your home idea</h3>
      <p className="text-neutral-600 text-sm">Describe your vision and funding goal</p>
    </div>

    <div className="flex flex-col items-center text-center">
      <Image
        src="/backers.png"
        alt="Attract Backers"
        width={150}
        height={150}
        className="mb-4 w-[150px] h-[150px] object-contain"
      />
      <h3 className="font-bold text-lg mb-2">Attract Backers</h3>
      <p className="text-neutral-600 text-sm">Get supported by community investors</p>
    </div>

    <div className="flex flex-col items-center text-center">
      <Image
        src="/ownership.png"
        alt="Tokenize Ownership"
        width={150}
        height={150}
        className="mb-4 w-[150px] h-[150px] object-contain"
      />
      <h3 className="font-bold text-lg mb-2">Tokenize Ownership</h3>
      <p className="text-neutral-600 text-sm">Secure your stake via blockchain</p>
    </div>

    <div className="flex flex-col items-center text-center">
      <Image
        src="/track.png"
        alt="Track & Earn"
        width={150}
        height={150}
        className="mb-4 w-[150px] h-[150px] object-contain"
      />
      <h3 className="font-bold text-lg mb-2">Track & Earn</h3>
      <p className="text-neutral-600 text-sm">
        Watch construction progress, rental returns, and appreciation grow
      </p>
    </div>
  </div>
</section>




      {/* Why NestNet */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-amber-800 text-center mb-12">Why NestNet?</h2>

        {/* No massive debt */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
          <div className="md:w-1/2">
            <Image
              src="/debt.png"
              alt="Handing over house keys"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl md:text-2xl font-bold mb-4">No massive debt</h3>
            <p className="text-neutral-700 mb-6">
              Own property without the stress of bank loans, high interest, or long-term debt. Together with a smaller
              community down-payment to ownership.
            </p>
            <Button className="bg-amber-800 hover:bg-amber-900 text-white">Get Started</Button>
          </div>
        </div>

        {/* Blockchain Security */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-20">
          <div className="md:w-1/2">
            <Image
              src="/blockchain security.png"
              alt="Blockchain security illustration"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Blockchain Security</h3>
            <p className="text-neutral-700 mb-6">
              NestNet uses blockchain to record every transaction transparently and securely, ensuring trust, clear
              ownership, and full visibility for all investors and homeowners.
            </p>
            <Button className="bg-amber-800 hover:bg-amber-900 text-white">Get Started</Button>
          </div>
        </div>

        {/* Community Co-Ownership */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
          <div className="md:w-1/2">
            <Image
              src="/community.png"
              alt="Handshake over blueprints"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Community Co-Ownership</h3>
            <p className="text-neutral-700 mb-6">
              Invest in homes that matter to you, alongside others who share your vision. Build lasting value together,
              while sharing the rewards of ownership without carrying the full burden alone.
            </p>
            <Button className="bg-amber-800 hover:bg-amber-900 text-white">Get Started</Button>
          </div>
        </div>

        {/* Earn Passive Income */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="/passive income.png"
              alt="Person holding money"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Earn Passive Income</h3>
            <p className="text-neutral-700 mb-6">
              Benefit from steady rental income and long-term property value growth. With every project you back, you
              build a stream of passive earnings—while the home grows in worth over time.
            </p>
            <Button className="bg-amber-800 hover:bg-amber-900 text-white">Get Started</Button>
          </div>
        </div>
      </section>

    </div>
  )
}
