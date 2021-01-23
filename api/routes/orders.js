const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.status(200).json({
		message: 'Handling GET requests on /orders'
	});
});

router.post('/', (req, res, next) => {
	const order = {
		productId: req.body.productId,
		quantity: req.body.quantity
	};
	res.status(200).json({
		message: 'Handling POST requests on /orders',
		createdOrder: order
	});
});

router.get('/:orderId', (req, res, next) => {
	const id = req.params.productId;

	if (id === 'special') {
		res.status(200).json({
			message: 'Found the special order'
		});
	} else {
		res.status(200).json({
			message: 'You passed an ID'
		});
	}
});

router.delete('/:orderId', (req, res, next) => {
	res.status(200).json({
		message: 'Cancelled an order'
	});
});

module.exports = router;
