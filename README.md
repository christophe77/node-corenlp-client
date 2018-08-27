# Corenlp-client
[![NPM version](https://badge.fury.io/js/corenlp-client.svg)](http://badge.fury.io/js/corenlp-client-multilang) 

Simple corenlp client to the corenlp http server using request-promise

## Installation

`npm install corenlp-client-multilang`

## Example
ES6
```js
const StanfordCoreNLPClient=require('corenlp-client-multilang');

const client=new StanfordCoreNLPClient("http://localhost:9000","tokenize,ssplit,pos,parse,sentiment","en");

client.annotate("the quick brown fox jumped over the lazy dog")
  .then(result => console.log(JSON.stringify(result,null,2)));

```
ES5

```js
var StanfordCoreNLPClient = require('corenlp-client-multilang');

var client = new StanfordCoreNLPClient("http://localhost:9000", "tokenize,ssplit,pos,parse,sentiment","fr");

client.annotate("ce repo est vraiment cool!").then(function (result) {
  return console.log(JSON.stringify(result, null, 2));
});
```

## History
### 1.0.4

* Minor fix

### 1.0.3

* Minor fix
### 1.0.2

* Minor fix
### 1.0.1

* Added language support

### 1.0.0

* works
