# WUI

A modest attempt at a generic way to design web user interfaces using only JavaScript


## Why ?

Tired of juggling three different languages to draft the simplest web interaction.

## What is what ?

* structure.js : the structure of what will be rendered, described as JavaScript objects. Intended to be modified at will according to desired result.

* style.js : ditto, resp. styles and layout

* wui.js : ties everything together. No modification required.

* index.html : the bare minimum to load the scripts in the browser. No modification required.

## Very basic how-to

The '<body>' is an array of elements.

An element is either an object or an array of objects.

An elemental object looks like this :

	element = {
		tag:'div',
		content:[someParagraph, aTable, anotherDiv],
		class:'styleClass',
		style:{
			fontColor:'red',
			fontWeight:'bold'
			},
		data-foo:'bar'
	}

A style object looks pretty much like its CSS couterpart, and works the same :

	body:{
		position:absolute,
		margin:0,
		fontFamily:'sans serif'
	}

	'.fancy':{
		border:'10px solid gold'
	}

	'#thatDiv':{
		backgroundColor:'black',
		color:'red',
		fontSize:'45px'
	}


## TODO

* assess if viable and interesting

* contain global variables, duh

* whatabout edge cases and darker corners of the DOM

* turn objects to proper JSON

* store objects in a database for eventual reuse and share

* enable fetching object via HTTP

* somehow, maybe, diminish the remnants of HTML and CSS syntax

* consider legacy browsers ?

* undoubtedly much more
