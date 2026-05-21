

const generateReport = async(req, res)=>{
    console.log(req.file);

  res.send("File uploaded successfully");
}

module.exports = {generateReport}