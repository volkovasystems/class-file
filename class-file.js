/*:
	@include:
		{
			"fs": "fs",
			"check-if-empty": "checkIfEmpty",
			"class-path": "Path",
			"class-file": "File",
			"subset": "subset",
			"class-range": "Range"
		}
	@end-include

	@export:
		{
			"parseCommands": "parseCommands"
		}
	@end-export
*/
File = function File( path ){
	/*:
		@meta-configuration:
			{
				"path:required": "Path|string"
			}
		@end-meta-configuration
	*/
	if( parameter.path.isString( ) ){
		path = Path( path );
	}
	if( path.verify )
	if( this instanceof Path ){
		this.path = path;
		this.encoding = "utf8";
		this.decoding = "utf8";
	}else{
		return new File( path );
	}
};

File.prototype.read = function read( ){

};

File.prototype.write = function write( data ){

};

File.prototype.decodeAs = function decodeAs( decoding ){

};

File.prototype.encodeAs = function encodeAs( encoding ){

};

File.prototype.watch = function watch( handler ){

};

File.prototype.destroy = function destroy( ){

};

File.prototype.getLocation = function getLocation( ){

};