export default function middlewares(req, res, middlewareList, handler) {
  function next(index) {
    if (index < middlewareList.length) {
      middlewareList[index](req, res, () => next(index + 1));
    } else {
      handler(req, res);
    }
  }
  next(0);
}