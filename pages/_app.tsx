import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '@/components/Layout'

import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import { AuthenticationProvider } from '@/context/auth';
config.autoAddCss = false; 

export default function App({ Component, pageProps }: AppProps) {
  return <AuthenticationProvider>
  
      <ChakraProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
      </ChakraProvider>
      </AuthenticationProvider>

}
