import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import Layout from '@/components/Layout'
import {Provider} from 'react-redux';
import "@fortawesome/fontawesome-svg-core/styles.css";
import {config} from "@fortawesome/fontawesome-svg-core";
import {AuthenticationProvider} from '@/context/auth';
import { useStore } from '@/store';

config.autoAddCss = false;

export default function App({Component, pageProps}: AppProps) {

    const store = useStore(pageProps.initialReduxState);

    return (
        <Provider store={store}>
            <AuthenticationProvider>

                <ChakraProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ChakraProvider>
            </AuthenticationProvider>
        </Provider>
    )
}
