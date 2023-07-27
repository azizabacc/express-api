import usersRouter from './users/index.mjs';
import dishRouter from './dishes/index.mjs';

const setupRouter = (app) => {
    app.use('/users', usersRouter);
    app.use('/dishes',dishRouter);
}


export {setupRouter}