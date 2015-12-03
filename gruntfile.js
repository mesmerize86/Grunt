module.exports = function(grunt){

	//Loadn NPM Plugins
	'use strict'
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	//Loading Brand Config
	var lawConfigJson = grunt.file.readJSON('config.json');

	//Project Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			winepeople:{
				options: {
					port: 9002,
					hostname: 'localhost',
					base: '.',
					open: true,
					keepalive: false,
					livereload: true
				}
			}
		},
		watch:{
			options: {
					livereload: true
			},
			sass:{
				files: '**/*.scss',
				tasks: ['sass'],
			},
			html:{
				files: ['winepeople/*.html', '**/*.css']
			}

		},
		sass:{
			dist: {
				files:{
					'assets/css/au/wp/main.css' : 'sass/au/wpe/main.scss'
				}
			}
		}
	});

	grunt.registerTask('winepeople', ['connect:winepeople', 'watch']);
	
	//country:brand:main:module
	
	//Register The Tasks
// 	grunt.registerTask('debug','Watch styles and scripts changes [DEBUG]', registerWatchTask);
// 	grunt.registerTask('release','Watch styles and scripts changes [DEBUG]', registerWatchTask);

// 	function registerWatchTask(country, brand, main, module){

// 		if(country === undefined){
// 			grunt.log.error('Please specify a country');
// 			grunt.log.warn('mode:country:brand:main:module - eg: debug:au:wpe:main:css');
// 		}

// 		if(brand === undefined){
// 			grunt.log.error('Please specify a brand');
// 			grunt.log.warn('mode:country:brand:main:module - eg: debug:au:wpe:main:css');
// 		}
// 		if(main === undefined){
// 			grunt.log.error('Please specify a main or common');
// 			grunt.log.warn('mode:country:brand:main:module - eg: debug:au:wpe:main:css');
// 		}

// 		if(module === undefined){
// 			module = 'all';
// 		}

// 		brand = brand.toLowerCase();
// 		main = brand.toLowerCase();
// 		module = brand.toLowerCase();
// 		var mode = this.name.toLowerCase();
// 		var isDebugMode = mode == 'debug';

// 		var brandConfig = lawConfigJson[brand];
		
// 		var lawConfig = require('./lawConfig.js')(brandConfig, mode, country, brand, main, module, grunt);

// 		//setting up the grunt target configs
// 		register(isDebugMode, module, lawConfig);

// 		//executing targets before watching
// 		run(isDebugMode, module);
// 	}

// 	function register(isDebugMode, module, lawConfig){
// 		var gruntConfig = {};

// 		if(module == 'css' || module == 'all'){
// 			gruntConfig.sass = lawConfig.sass();
// 			gruntConfig.bustMyCache = lawConfig.bustMyCache();
// 		}

// 		if(module == 'js' || module == 'all'){
// 			gruntConfig.uglify = lawConfig.uglify();
// 			gruntConfig.bustMyCache = lawConfig.bustMyCache();
// 		}

// 		gruntConfig.watch = lawConfig.watch();
// 		grunt.config.merge(gruntConfig);
// 	}

// 	function run(isDebugMode, module){
// 		if(module == 'css' || module == 'all'){
// 			var cssTasks = ['sass', 'bustMyCache'];
// //
// 			grunt.task.run(cssTasks);
// 		}

// 		if(module == 'js' || module == 'all'){
// 			var jsTasks = ['uglify', 'bustMyCache'];

// 			grunt.task.run(jsTasks);
// 		}

// 		if(isDebugMode)
// 			grunt.task.run(['connect', 'watch' + (module == 'all' ? "" : ":" + module)]);
// 	}
};
