/**
* BlogPosts.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  		title: {
  			type:'string'
  		},
  		category: {
  			type:'string',
        enum: ['Lifestyle', 'Food', 'Workout', 'Gear', 'Technical Skills', 'Tutorials'],
  		},
  		content: {
  			type: 'string'
  		},
  		pictureUrl: {
  			type:'string'
  		}
  }
};

