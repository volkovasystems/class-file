/*:
	@module-configuration:
		{
			"packageName": "class-file",
			"fileName": "class-file.js",
			"moduleName": "File",
			"className": "File",
			"authorName": "Richeve S. Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/class-file.git",
			"testCase": "class-file-test.js",
			"isGlobal": true
		}
	@end-module-configuration

	@module-documentation:

	@end-module-documentation

	@include:
		{			
			"fs": "fs"
		}
	@end-include

	@constructor-configuration:
        {
            "testCase": "class-file-constructor-test.js"
        }
	@end-construct-configuration

	@constructor-documentation:
		
	@end-constructor-documentation
*/
var File = function File( fileRawPath ){
	/*:
		@meta-configuration:
			{
				"fileRawPath:required": "string"
			}
		@end-meta-configuration
	*/

	this.filePath.appendToRawPath( fileRawPath );
};

File.prototype.filePath = new Path( "." );

File.prototype.readFile = function readFile( ){
	if( this.filePath.checkIfFile( ) ){
		return fs.readFileSync( this.filePath.toString( ), { "encoding": "utf8" } )
	}else{
		var error = new Error( "invalid file" );
		console.error( error );
		throw error;
	}
};

File.prototype.createFile = function createFile( ){

};

File.prototype.deleteFile = function deleteFile( ){

};

File.prototype.renameFile = function renameFile( fileName ){

};

File.prototype.moveFileToPath = function moveFileToPath( location ){

};

File.prototype.moveFileToRawPath = function moveFileToRawPath( location ){

};

File.prototype.writeContentToFile = function writeContentToFile( content ){

};

File.prototype.copyFileToPath = function copyFileToPath( location ){

};

File.prototype.copyFileToRawPath = function copyFileToRawPath( location ){

};

var Path = require( "./class-path/class-path.js" );

var fs = require( "fs" );

( module || { } ).exports = File;