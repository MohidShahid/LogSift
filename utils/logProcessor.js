const fs = require("fs");
const readline = require("readline");

const createStats = () => ({
  totalLines: 0,
  parsedLines: 0,
  malformedLines: 0,

  methods: {},
  statusCodes: {},
  endpoints: {},
  ips: {},

  slowestRequests: [],
  malformedSamples: [],
});

const processLogs = async (filePath) => {
  const stats = createStats(); // New Object Every Request
  const stream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    stats.totalLines++;

    const tokens = parseLine(line);

    if (tokens == null || tokens.length < 5) {
      stats.malformedLines++;
      continue;
    }
    const parsedLine = {
      timestamp: tokens[0],

      ip: tokens[1],

      method: tokens[2],

      path: tokens[3],

      statusCode: tokens[4] === "-" ? null : Number(tokens[4]),

      responseTimeMs: parseResponseTime(tokens[5]),
    };
    stats.parsedLines++;
    updateStats(stats, parsedLine);
  }
  return stats;
};

const updateStats = (stats, log) => {
  // METHODS

  stats.methods[log.method] = (stats.methods[log.method] || 0) + 1;

  // STATUS CODES

  if (log.statusCode) {
    stats.statusCodes[log.statusCode] =
      (stats.statusCodes[log.statusCode] || 0) + 1;
  }

  // IPS

  stats.ips[log.ip] = (stats.ips[log.ip] || 0) + 1;

  // ENDPOINTS

  if (!stats.endpoints[log.path]) {
    stats.endpoints[log.path] = {
      hits: 0,
      totalResponseTime: 0,
      errors: 0,
    };
  }

  const endpoint = stats.endpoints[log.path];

  endpoint.hits++;

  endpoint.totalResponseTime += log.responseTimeMs || 0;

  if (log.statusCode >= 400) {
    endpoint.errors++;
  }

  // STORE REQUEST FOR SLOWEST ANALYSIS

  stats.slowestRequests.push({
    path: log.path,
    responseTimeMs: log.responseTimeMs,
  });
};

const parseLine = (line) => {
  // Skip blank lines
  if (!line || !line.trim()) {
    return null;
  }

  const tokens = line.trim().split(/\s+/);

  // console.log(tokens);

  return tokens;
};

const parseResponseTime = (value) => {
  if (!value) return null;

  if (value.endsWith("ms")) {
    return parseFloat(value);
  }

  if (value.endsWith("s")) {
    return parseFloat(value) * 1000;
  }

  return parseFloat(value);
};

module.exports = { processLogs, updateStats };
