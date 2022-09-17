const User = require('../models/userModel');

module.exports.getUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');

        return res.status(200).json({
            status: 'success',
            result: users.length,
            data: {
                users
            }
        });

    } catch (err) {
        return res.status(404).json({
            status: 'error',
            error: err.message
        });
    }
}

module.exports.getUser = async (req, res) => {
    try {
        
        const user = await User.findById(req.params.id).select('-password');

        if (!user) {
            return res.status(404).json({
                status: 'error',
                error: 'No User Under That Id'
            });
        }

        return res.status(200).json({
            status: 'success',
            data: {
                user
            }
        });
    } catch (err) {
        return res.status(404).json({
            status: 'error',
            error: err.message
        });
    }
} 

module.exports.createUser = async (req, res) => {
    try {
        const { userName, email, password } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(404).json({
                status: 'error',
                error: 'Email Already Exist'
            });
        }

        const newUser = await User.create({ userName, email, password });

        if (!newUser) {
            return res.status(301).json({
                status: 'error',
                error: 'Sommething Wrong With The Creation Of Your Account'
            });
        }

        return res.status(200).json({
            status: 'success',
            data: {
                newUser
            }
        });
    } catch (err) {
        return res.status(404).json({
            status: 'error',
            error: err.message
        });
    }
} 

module.exports.updateUser = async (req, res) => {
    try {

        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!updatedUser) {
            return res.status(404).json({
                status: 'error',
                error: 'No User Under That Id'
            });
        }

        return res.status(200).json({
            satatus: 'success',
            data: {
                updatedUser
            }
        });
    } catch (err) {
        return res.status(404).json({
            status: 'error',
            error: err.message
        });
    }
} 

module.exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id, {
            new: true,
        });

        if (!deletedUser) {
            return res.status(404).json({
                status: 'error',
                error: 'No User Under That Id'
            });
        }

        return res.status(200).json({
            satatus: 'success',
            data: {
                deletedUser
            }
        });
    } catch (err) {
        return res.status(404).json({
            status: 'error',
            error: err.message
        });
    }
} 