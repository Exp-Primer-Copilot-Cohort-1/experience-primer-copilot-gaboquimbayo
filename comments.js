// Create web server and listen on port 3000

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authenticate = require('../authenticate');

// Import models
const Dishes = require('../models/dishes');
const Comments = require('../models/comments');
const e = require('express');

// Create router
const commentRouter = express.Router();

// Use body-parser
commentRouter.use(bodyParser.json());

// Configure router
commentRouter.route('/')
    .get((req, res, next) => saveComment(req, res, next))

    .post(authenticate.verifyUser, (req, res, next) => {err = new Error('POST operation not supported on /comments'); err.status = 403; next(err);})
