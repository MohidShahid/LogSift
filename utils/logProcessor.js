const fs = require("fs");
const readline = require("readline");

const stats = {
  totalLines: 0,
  parsedLines: 0,
  malformedLines: 0,

  methods: {},
  statusCodes: {},
  endpoints: {},
  ips: {},

  slowestRequests: [],

  malformedSamples: [],
};


const processLogs = async(filePath) => {
  const stream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity
  });
};


module.exports = processLogs;
