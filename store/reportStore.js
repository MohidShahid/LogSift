const reports = new Map();

function saveReport(id, data) {
  reports.set(id, data);
}

function getReport(id) {
  return reports.get(id);
}

function getAllReports() {
  return Array.from(reports.values());
}

module.exports = {
  saveReport,
  getReport,
  getAllReports
};