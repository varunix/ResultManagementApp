const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const TeacherAuth = require('../models/teacher');
const StudentAuth = require('../models/student');

//authentication using passport
