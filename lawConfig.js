'use strict'
var lawConfig = function(brandConfig, mode, country, brand, main, module, grunt){
	
	var config = {
		sass: configureSass,
		watch: configureWatch
	};

	var isDebugMode = mode == "debug";
	var defaultConfig = extendOptions({}, brandConfig.config, brandConfig["interface"][main].config || {});

	
	function configureWatch(){
		var watchConfig = {};

		watchConfig = {
			options: {
				atBegin: true,
				nospawn: true,
				livereload: true
			}
		};

		if(module == 'css' || module == 'all'){
			watchConfig.css={
				files: [defaultConfig.sassPath + '/**/*/.{sass,scss}'],
				tasks: ['sass']
			}
		}

		return watchConfig;
	}

	function configureSass(){
		var sassConfig = {};

		sassConfig[defaultConfig.brandName + '-' + main + '-css'] = {
			options: {
				style: isDebugMode ? 'expanded' : 'compress',
			},
			files: [
				{
					expand: true,
					cwd: defaultConfig.sassPath,
					src: ['*.{sass,scss}'],
					dest: brandConfig["interface"][main].css,
					ext: '.css'
				}
			]
		};
		return sassConfig;
	}

	function extendOptions() {
        for (var i = 1; i < arguments.length; i++)
            for (var key in arguments[i])
                if (arguments[i].hasOwnProperty(key))
                    arguments[0][key] = arguments[i][key];

        return arguments[0];
    }

	return config;
};

module.exports = lawConfig;