import multer from "multer";
import path from "path";


export const multerMiddleware = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/');
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now());
        },
        fileFilter: fileFilter,
        limits: {
            fileSize: 1024 * 1024 * 5
        }

    })
});


// file filter:-> 
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}








