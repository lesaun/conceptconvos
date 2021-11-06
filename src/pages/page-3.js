import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 3</p>
    <p>This is some more test text</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
