import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </>
  );
}
