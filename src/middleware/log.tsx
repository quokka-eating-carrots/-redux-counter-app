const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  next(action)
}

// const middleware = applyMiddleware(loggerMiddleware)
export default loggerMiddleware