export const validatePostData = (req, res, next) => {
    const { title, image, category_id, description, content, status_id } = req.body;
  
    // 1. ตรวจสอบว่าต้องถูกส่งเข้ามา (Required)
    if (!title || !image || !category_id || !description || !content || !status_id) {
      return res.status(400).json({
        message: "Please provide all required fields: title, image, category_id, description, content, status_id"
      });
    }
  
    // 2. ตรวจสอบ Type ให้ตรงตาม Requirement
    const isString = (val) => typeof val === 'string';
    const isNumber = (val) => typeof val === 'number';
  
    if (!isString(title) || !isString(image) || !isString(description) || !isString(content)) {
      return res.status(400).json({
        message: "title, image, description, and content must be strings"
      });
    }
  
    if (!isNumber(category_id) || !isNumber(status_id)) {
      return res.status(400).json({
        message: "category_id and status_id must be numbers"
      });
    }
  
    next();
  };