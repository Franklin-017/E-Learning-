const router = require('express').Router();
const User = require('../modal/User');

router.post('/', async (req, res) => {
	const user = new User(req.body);
	try {
		await user.save();
		res.json(user);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;
