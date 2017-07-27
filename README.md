## JQuery Wildcard Selector

Extending jquery selection to allow a way of selecting DOM elements by attributes with wildcards

### Install for contribution
```
git clone https://github.com/Cambalab/jquery-wildcard-selector
npm install
```

### Install to use
```
npm install --save jquery-wildcard-selector
```

### Usage

Include after JQuery:
```
<script src="jquery/dist/jquery.min.js"></script>
<script src="jquery-wildcard-selector.js"></script>
```
Get all elements with given attribute that matches an expression with wildcards(*)
```
$(':withWildcard(name, foo-*-*)').css( 'color', 'red' );
// Matches all elements with attribute name='foo-*-*' E.g: name=foo-1-1
```
See example folder for a working example
