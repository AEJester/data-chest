const fs = require("fs")
const src = require("../../index.js");
const { EOL } = require("os");

const langRunQuery = (file_or_query) => {
  if (file_or_query.split(".")[file_or_query.split(".").length-1] == "dq") {
    let raw_data = fs.readFileSync(file_or_query, "utf-8");
    let data = raw_data.split(EOL);
    let queries = [];
    for (let i = 0; i < data.length-1; i++) {
      let spldata = data[i].split(" ");
      let linequery = "src."+spldata[0].toLowerCase()+"(";
      for (let x = 1; x < spldata.length; x++) {
        if (x == spldata.length-1) {
          linequery +=  `"${spldata[x]}"`
        } else {
          linequery +=  `"${spldata[x]}",`
        }
      }
      linequery += ")"
      eval(linequery);
      linequery = "";
    }
  } else {
    file_or_query = file_or_query.split(" ");
    let linequery = "src."+file_or_query[0].toLowerCase()+"(";
    for (let x = 1; x < file_or_query.length; x++) {
      if (x == file_or_query.length-1) {
        linequery +=  `"${file_or_query[x]}"`
      } else {
        linequery +=  `"${file_or_query[x]}",`
      }
    }
    linequery += ")"
    eval(linequery);
    linequery = "";
  }
}

module.exports = langRunQuery;
