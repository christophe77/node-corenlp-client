const rq=require('request-promise');

class StanfordCoreNLPClient {
  constructor(host="http://localhost:9000",annotators="tokenize,ssplit,pos",nlpLang="en") {
    this.host=host;
    this.annotators=annotators;
	this.nlpLang=nlpLang;
  }

  annotate(text) {
    return rq({
      method:'POST',
      uri: this.host+'/?properties={"annotators": "'+this.annotators+'", "outputFormat": "json"}&pipelineLanguage=' + this.nlpLang,
      body:text
    })
      .then(data => JSON.parse(data));

  }
}

module.exports=StanfordCoreNLPClient;
