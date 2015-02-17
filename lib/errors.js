"use strict";

module.exports = {
  UNRECOGNIZED_QUERY: {
    status: 400,
    error: 'not_recognized',
    reason: 'Format of input query is not valid'
  },
  LEXER_ERROR: function (message, index) {
    return {
      status: 400,
      error: "tokenizing_error",
      reason: message + " on character " + index + "." || "Generic tokenizing error"
    };
  },
  PARSING_ERROR: function (message) {
    return {
      status: 400,
      error: "parsing_error",
      reason: message || "Generic parsing error"
    };
  },
  SELECT_ERROR: function (message) {
    return {
      status: 400,
      error: "select_error",
      reason: message || "Generic select error"
    };
  },
  PIVOT_ERROR: function (message) {
    return {
      status: 400,
      error: "pivot_error",
      reason: message || "Generic pivot error"
    };
  }
};
