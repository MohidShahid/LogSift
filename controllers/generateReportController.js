const { processLogs, updateStats } = require("../utils/logProcessor");

const generateReport = async (req, res) => {
  // console.log(req.file);
  const stats = await processLogs(req.file.path);
  // console.log(stats);

  let highestRequestedIp = Object.entries(stats.ips)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  const slowestEndpoints = stats.slowestRequests
    .sort((a, b) => b.responseTimeMs - a.responseTimeMs)
    .slice(0, 10);
  const mostHittedEndpoints = Object.entries(stats.endpoints)

    .map(([path, data]) => ({
      path,
      hits: data.hits,
    }))

    .sort((a, b) => b.hits - a.hits)

    .slice(0, 5);

  const mostErrorsEndpoints = Object.entries(stats.endpoints)
    .map(([path, data]) => ({
      path,
      errors: data.errors,
    }))
    .sort((a, b) => b.errors - a.errors)
    .slice(0, 5);

  const data = {
    highestRequestedIp,
    slowestEndpoints,
    totalLines: stats.totalLines,
    parsedLines: stats.parsedLines,
    malformedLines: stats.malformedLines,
    mostErrorsEndpoints,
    mostHittedEndpoints,
  };
  console.log(data);
  res.json(data);
};

module.exports = { generateReport };
