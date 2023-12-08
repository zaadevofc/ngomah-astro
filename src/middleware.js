const middleware = async (ctx, next) => {
    // let rahasia = ['/dashboard(.*)']
    // let session = ctx.cookies.get('session')?.value || ''
    // let path = ctx.url.pathname;
    // const check = session && await prisma.user.findUnique({ where: { email: verifyJWT(session).token }})
    // if (rahasia.some(r => new RegExp(r).test(path)) && !check) return ctx.redirect('/'); 

    // if (check) {
    //     ctx.locals.user = check;
    //     ctx.locals.session = check.session;
    //     delete ctx.locals.user.password;
    //     delete ctx.locals.user.session;
    // }

    console.log(ctx);

    ctx.locals.pathname = ctx.url.pathname
    
    return next();
};

export const onRequest = middleware;