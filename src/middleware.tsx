import { NextRequest , NextResponse } from "next/server";


export function middleware(request:NextRequest){
    // const url = request.nextUrl.clone()
    let isLogin = request.cookies.get('token')
    if(!isLogin){
        if(request.nextUrl.pathname.startsWith('/dashboard')){
            return NextResponse.rewrite(new URL('/' , request.url))
        }
    }
}