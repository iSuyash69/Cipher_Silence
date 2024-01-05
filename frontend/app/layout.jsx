import Navbar from '@components/commom/navbar/Navbar';
import '@styles/globals.css'

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
                </div>
            </body>
        </html>
    );
}

export default RootLayout;