const getQueryResult = queryResponse => {
  return { payloads: JSON.parse(queryResponse.payloads) };
};

export { getQueryResult };
