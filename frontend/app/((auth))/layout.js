import AuthProvider from '@app/authProvider'
import AuthContextProvider from '@context/authContext';
import '@styles/globals.css'

export const metadata={
    title:"Airbnb",
    description:"Find your next best suite"
}

const RootLayout=({children})=>{
    return(
        <html lang='en'>
            <body>
                <AuthProvider>
                    <AuthContextProvider>{children}</AuthContextProvider>
                </AuthProvider>
            </body>
        </html>
    );
}

export default RootLayout;