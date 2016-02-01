/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

	grunt.config.set('copy', {
		dev: {
			files: [{
				expand: true,
				cwd: './assets',
				// src: ['**/*.!(coffee|less)'],
				src: ['**/*.!(coffee|less|scss|sass)'],
				dest: '.tmp/public'
			},

			//Add angular2
			{
				expand:true,
				cwd: './node_modules',
				src:[
						'rxjs/bundles/Rx.umd.js', 
					 	'angular2/bundles/angular2-polyfills.js',
					 	'angular2/bundles/angular2-all.umd.js'
					],
				dest: '.tmp/public/js/dependencies'
			},

			//Add JQuery
			{
				expand:true,
				cwd: './node_modules',
				src:[
						'jquery/dist/*'
					],
				dest: '.tmp/public/js/dependencies'
			},

			//Add Bootstrap SaSS JS files
			{
				expand:true,
				cwd: './node_modules',
				src:[
						'bootstrap-sass/assets/javascripts/bootstrap.js'
					],
				dest: '.tmp/public/js/dependencies'
			},

			//Add Bootstrap SaSS .scss files
			{
				expand:true,
				cwd: './node_modules/bootstrap-sass/assets/stylesheets/',
				src:[
						'*.scss',
						'bootstrap/*.scss',
						'bootstrap/mixins/*.scss'
					],
				dest: './assets/styles'
			}
			]
		},
		build: {
			files: [{
				expand: true,
				cwd: '.tmp/public',
				src: ['**/*'],
				dest: 'www'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
};
