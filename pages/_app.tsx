import type { AppProps } from "next/app";
import SideBar from "../Components/SideBar/SideBar";
import Layout from "../Components/Layout/Layout";
import { Box, ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box display="flex" minHeight="100vh">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Box>
    </ChakraProvider>
  );
}
export default MyApp;
