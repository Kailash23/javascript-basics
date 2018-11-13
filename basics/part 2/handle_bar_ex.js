var htmlTemplate = '<div>{{title}}</div>';
var handlebarsTemplate = Handlebars.compile(htmlTemplate);
handlebarsTemplate({
	title: 'Tell a friend about Watch and Code'
});

/*
  "<div>Tell a friend about Watch and Code</div>"
*/

var data = {
	todos: [{
		title: 'First'
	}, {
		title: 'Second'
	}, {
		title: 'Third'
	}]
};
var htmlTemplate = '<ul> {{#todos}} <li>{{title}}</li> {{/todos}} </ul>';
var handlebarsTemplate = Handlebars.compile(htmlTemplate);

handlebarsTemplate(data);

/*
  "<ul>  <li>First</li>  <li>Second</li>  <li>Third</li>  </ul>"
*/

var data = [{
	title: 'First'
}, {
	title: 'Second'
}, {
	title: 'Third'
}];
var htmlTemplate = '<ul> {{#this}} <li>{{title}}</li> {{/this}} </ul>';
var handlebarsTemplate = Handlebars.compile(htmlTemplate);

handlebarsTemplate(data);

/*
  "<ul>  <li>First</li>  <li>Second</li>  <li>Third</li>  </ul>"
*/

var htmlTemplate = '<div>{{#if show}}TRUE{{/if}}</div>';
var handlebarsTemplate = Handlebars.compile(htmlTemplate);
handlebarsTemplate({
	show: true
});

/*
  "<div>TRUE</div>"
*/

handlebarsTemplate({
	show: false
});

/*
  "<div></div>"
*/
