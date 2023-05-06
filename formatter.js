/**
 * Formats output (sort etc.)
 *
 * @param type Generator type
 * @param order Order type
 * @param data Output data
 * @returns formatted data
 */
function formatOutput(type, order, data) {
  switch (type) {
    case "int": {
      break;
    }
    case "int_arr": {
      if (order === "asc") {
        data = data.sort((a, b) => a - b);
      } else if (order === "desc") {
        data = data.sort((a, b) => b - a);
      }
      break;
    }
  }

  return data;
}

module.exports = formatOutput;
