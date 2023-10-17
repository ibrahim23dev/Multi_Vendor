const adminmodel = require('../models/adminmodel');
class authController{
    adminlogin = async (req, res) => {
        const { email, password } = req.body;
        try {
            const admin = await adminmodel.findOne({ email });
            console.log(email);
        } catch (error) {
            
        }
    }
}

module.exports = new authController;

// register: async (req, res) => {
//         try {
//             const { email, phone, fullname,age } = req.body;

//             // Validate incoming data
//             if (!email || !phone || !fullname || !age) {
//                 return res.status(400).json({ success: false, msg: 'Incomplete data provided' });
//             }

//             const check = await User.findOne({ email });

//             if (check) {
//                 return res.status(409).json({ success: false, msg: 'Email already taken' });
//             }

//             const user = new User({
//                 email,
//                 phone,
//                 fullname,
//                 age
//             });

//             const data = await user.save();

//             return res.status(200).json({ success: true, data });
//         } catch (error) {
//             return res.status(500).json({ success: false, msg: error?.message });
//         }
//     },

//module.exports = authController;
