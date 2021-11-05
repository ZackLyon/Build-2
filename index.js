module.exports = (httpReq) => {
  const splitReq = httpReq.split(' ');
  return splitReq[0];
};
