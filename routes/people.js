
const express = require('express');
const router = express.Router();

const  {
    getPhone,
    postPhone,
    getPostman,
    postPostman,
    putPostman,
    deletePostman
} = require("../controller/postman");



// router.get('/phone',getPhone)

// router.post('/phone',postPhone)

// router.get("/",getPostman);

// router.post("/",postPostman);

// router.put("/:id",putPostman);

// router.delete('/:id',deletePostman);

router.route('/').get(getPostman).post(postPostman);
router.route('/:id').put(putPostman).delete(deletePostman);
router.route('/phone').get(getPhone).post(postPhone);



module.exports = router;