export const getError = (error) => {
  //accept an error object
  //FIXME: the error.response.data.message is undefined, but it exists in error.response
  //Check by inspection in browser.
  if (error.response) console.log(error.response);
  if (!error.response.data.message) console.log(error.response.data.message);

  return error.response && error.response.data.message // if these two esixt,
    ? error.response.data.message //use this message if it esixts: server.js: res.status(404).send({messsage: 'Product Not Found'});
    : error.message; //general error message
};
