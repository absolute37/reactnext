const request = async (method, url, payload = {}) => {
  const response = await fetch(url, {
    method,
    ...payload,
  })
    .then((res) => {
      return res.json()
    })
    .catch((err) => {
      return err
    })
  return response
}

export default request
