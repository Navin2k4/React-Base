export const responseHandler = ( 
    res, 
    statusCode = 200, 
    message = "Success", 
    data = {}, 
    meta = null
) => {
  const response = {
    success: true,
    message,
    data,
  };
  if (meta) {
    response.meta = meta;
  }
  return res.status(statusCode).json(response);
};