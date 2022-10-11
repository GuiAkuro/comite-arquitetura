import type { NextPage } from 'next'
import Head from 'next/head'
import { Todos } from "src/components/templates/todos"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Comite de Arquitetura</title>
        <meta name="description" content="apresentação do comite de arquitetura" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Todos />
    </div>
  )
}

export default Home
