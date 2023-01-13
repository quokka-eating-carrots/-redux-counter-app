const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log(store)
  console.log(action)
  next(action)
}

// const middleware = applyMiddleware(loggerMiddleware)
export default loggerMiddleware