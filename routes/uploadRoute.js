const express = require("express");
const { uploadImages, deleteImages } = require("../controller/uploadController");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const { uploadPhoto, productImgResize, blogImgResize } = require("../middlewares/uploadImage");
const router = express.Router();

router.post(
  "/products/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImgResize,
  uploadImages
);

router.post(
    "/blogs/:id",
    authMiddleware,
    isAdmin,
    uploadPhoto.array("images", 2),
    blogImgResize,
    uploadImages
  );

router.delete("/delete-img/:id", authMiddleware, isAdmin, deleteImages);

module.exports = router;