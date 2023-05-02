import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import Table from '@/components/table'
import TablePlaceholder from '@/components/table-placeholder'
import ExpandingArrow from '@/components/expanding-arrow'

export const runtime = 'edge'
export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center pt-10">
      <Link
        href={`https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fstepzen-dev%2Fvercel-postgres-graphql&project-name=postgres-starter&repository-name=vercel-postgres-graphql&demo-title=Vercel%20Postgres%20GraphQL%20Starter&demo-description=Simple%20Next.js%20template%20that%20uses%20Vercel%20Postgres%20as%20the%20database.&demo-url=https%3A%2F%2Fpostgres-starter.vercel.app%2F&demo-image=https%3A%2F%2Fpostgres-starter.vercel.app%2Fopengraph-image.png&stores=%5B%7B"type"%3A"postgres"%7D%5D&integration-ids=oac_fS5U5f04cXnxV1N90Ws6SFXh&external-id=stepzen-dev%2Fvercel-postgres-graphql`}
        className="group mt-20 sm:mt-0 rounded-full flex space-x-1 bg-white/30 shadow-sm ring-1 ring-gray-900/5 text-gray-600 text-sm font-medium px-10 py-2 hover:shadow-lg active:shadow-sm transition-all"
      >
        <p>Deploy your own to Vercel</p>
        <ExpandingArrow />
      </Link>

      <div className="relative flex items-center justify-center space-x-5 pt-10 mt-10">
        <Image
          src="/postgres.svg"
          alt="Vercel Postgres"
          width={100}
          height={24}
          priority
        />
        <Image
          src="/graphql.svg"
          alt="GraphQL"
          width={100}
          height={24}
          priority
        />
      </div>

      <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Postgres + GraphQL on Vercel
      </h1>
      <Suspense fallback={<TablePlaceholder />}>
        {/* @ts-expect-error Async Server Component */}
        <Table />
      </Suspense>
      <p className="font-light text-gray-600 w-full max-w-lg text-center mt-6">
        <Link
          href="https://vercel.com/postgres"
          className="font-medium underline underline-offset-4 hover:text-black transition-colors"
        >
          Vercel Postgres
        </Link>{' '}
        demo. <br /> Built with{' '}
        <Link
          href="https://nextjs.org/docs"
          className="font-medium underline underline-offset-4 hover:text-black transition-colors"
        >
          Next.js App Router
        </Link> + <Link
          href="https://stepzen.com/docs"
          className="font-medium underline underline-offset-4 hover:text-black transition-colors"
        >
          StepZen
        </Link>
        .
      </p>

      <div className="sm:absolute sm:bottom-0 w-full px-20 py-10 flex justify-between">
        <div className='relative flex items-center justify-center space-x-5'>
          <Link href="https://stepzen.com">
            <Image
              src="/stepzen.svg"
              alt="StepZen Logo"
              width={160}
              height={36}
              priority
            />
          </Link>
          <Link href="https://vercel.com">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={125}
              height={32}
              priority
            />
          </Link>
        </div>

        <Link
          href="https://github.com/stepzen-dev%2Fvercel-postgres-graphql"
          className="flex items-center space-x-2"
        >
          <Image
            src="/github.svg"
            alt="GitHub Logo"
            width={24}
            height={24}
            priority
          />
          <p className="font-light">Source</p>
        </Link>
      </div>
    </main>
  )
}

