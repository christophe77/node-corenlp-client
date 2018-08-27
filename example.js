const StanfordCoreNLPClient=require('./');

const host='http://cbdev.fr:9000';

const client=new StanfordCoreNLPClient(host,"tokenize,ssplit,sentiment","fr");

client.annotate("ceci est une phrase")
  .then(result => console.log(JSON.stringify(result,null,2)));

