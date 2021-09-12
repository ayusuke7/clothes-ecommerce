const createObjectFile = require("../utils/create-file-s3");
const fileType = require("file-type/browser");
const aws = require("../config/aws");
const Resource = require("../models/resouce");

const s3 = new aws.S3();

const resourceController = {
  async uploadFile(req, res) {
    try {
      const { file, name } = req.body;
      const { params, data } = await createObjectFile(file, name);

      s3.putObject(params, async (err) => {
        if (err) {
          return res.status(400).json({ message: err });
        }

        const resource = await Resource.create({
          name: params.Key,
          path: data.fullPath,
          extension: data.ext,
        });

        return res.send({ result: resource });
      });
    } catch (e) {
      return res.status(500).send({ message: e });
    }
  },

  async getFile(req, res) {
    const { filename } = req.query;

    try {
      const reqS3 = {
        Bucket: process.env.BUCKET_NAME,
        Key: filename,
      };

      s3.getObject(reqS3, async (err, data) => {
        if (err) return res.status(400).json({ message: err?.message });

        const base64 = data.Body;
        const buffer = Buffer.from(base64, "base64");
        const file = await fileType.fromBuffer(buffer);

        res.set("Content-Type", file?.mime);

        return res.send(base64);
      });
    } catch (e) {
      return res.status(500).send({ message: e });
    }
  },

  async deleteFile(req, res) {
    try {
      const resource = await Resource.findOne({
        where: { id: req.params.id },
      });

      if (!resource) {
        return res.status(400).json({ message: "resource not found" });
      }

      const reqS3 = {
        Bucket: process.env.BUCKET_NAME,
        Key: resource.name,
      };

      s3.deleteObject(reqS3, async (err, data) => {
        if (err) return res.status(400).json({ message: err?.message });

        await resource.destroy();

        return res.json({ message: `removed resource` });
      });
    } catch (e) {
      return res.status(500).send({ message: e });
    }
  },
};

module.exports = resourceController;
