import axios from "axios";
import Credentials from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";

const baseUrl=process.env.NEXT_PUBLIC_BASE_API_URL;
const nextSecret=process.env.NEXT_AUTH_SECRET;

export const authOptions={

    providers: [
        Credentials({
            name:"credentials",
            credentials:{},
            authorize(credentials){
                const {email,password}=credentials;
                return(
                    axios.post(`${baseUrl}/user/login`,{email,password})
                    .then((response)=>{
                        const {user}=response.data;
                        if(response.status===200){
                            return user;
                        }
                    })
                    .catch((err)=>{
                        console.log("Invalid Credentials",err);
                    })
                );
            },
        }),
    ],
    session: {
        strategy:"jwt",
    },
    callbacks: {
        jwt({token,user}){
            if(user){
                return{
                    ...token,
                    id:user.id
                };
            }
            return token;
        },
        session({session,token}){
            if(token){
                return{
                    ...session,
                    user: {
                        ...session.user,
                        id:token.id,
                    },
                };
            }
            return session;
        },
    },
    secret:nextSecret,
    pages:{
        login:"/login",
    },
};

const handler=NextAuth(authOptions);

export {handler as GET, handler as POST};