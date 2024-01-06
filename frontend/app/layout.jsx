import Navbar from '@components/commom/navbar/Navbar';
import '@styles/globals.css'
import { Toaster } from 'sonner';

export const metadata={
    title:"Airbnb",
    description:"Find your next best suite"
}

const RootLayout=({children})=>{
    return(
        <html lang='en'>
            <body>
                <div className='flex flex-col min-h-screen w-full'>
                    <Navbar/>
                    <div>{children}</div>
                    <Toaster position='top-right' richColors/>
                </div>
            </body>
        </html>
    );
}

export default RootLayout;