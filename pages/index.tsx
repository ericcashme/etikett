import React from 'react'
import type { NextPage } from 'next'
import { Home } from 'contents/Home'

const HomePage: NextPage = () => <Home />

export async function getStaticProps() {
  const data = []

  return {
    props: {
      data
    }
  }
}

export default HomePage
