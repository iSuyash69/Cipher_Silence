import '@styles/globals.css'

export const metadata={
    title:"Airbnb",
    description:"Find your next best suite"
}

const RootLayout=({children})=>{
    return(
        <html lang='en'>
            <body>
                <div>
                    <div>{children}</div>
                </div>
            </body>
        </html>
    );
}

export default RootLayout;