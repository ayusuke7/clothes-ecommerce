const fileType = require("file-type/browser");

const createObjectFile = async (file, overname) => {
  const buffer = Buffer.from(file, "base64");
  const fileMime = await fileType.fromBuffer(buffer);

  const fileExt = fileMime?.ext;
  const now = new Date().toISOString();
  const fileName = `${overname || now}.${fileExt}`;
  const fileFullPath = `${process.env.BUCKET_URL}/${fileName}`;

  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: fileName,
    Body: buffer,
  };

  const data = {
    size: buffer.toString("ascii").length,
    type: fileMime?.mime,
    name: fileName,
    ext: fileExt,
    fullPath: fileFullPath,
  };

  return {
    params,
    data,
  };
};

module.exports = createObjectFile;
