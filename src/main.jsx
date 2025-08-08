import {createRoot} from 'react-dom/client'
import "@fortawesome/fontawesome-free/css/all.min.css"
import './index.css'
import App from './App.jsx'
import AuthContextProvider from "./context/Auth.context.jsx";
import ThemeContextProvider from "./context/Theme.context.jsx";

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider, QueryClient} from '@tanstack/react-query'


const queryClient = new QueryClient(
    {
        defaultOptions:{
            queries:{
                refetchOnWindowFocus:false,
                staleTime: 60000,
                retry: 3,

            }

        }
    }
)


createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
    <ThemeContextProvider>
        <AuthContextProvider>
            <App/>
        </AuthContextProvider>
    </ThemeContextProvider>
    </QueryClientProvider>,
)
