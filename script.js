function Apple(weight){
    this.weight=weight;
    this.getWeight=function(){
      return this.weight
    }
    this.setWeight=function(weight){
         this.weight=weight;
    }
    this.reduceWeightApple = function(){
        if(this.weight>0){
            this.weight--
            console.log("Apple is remaing "+this.weight)
        }
        if(this.weight<=0){
            console.log(" Apple is empty ")
        }
    }

}
function Human(name,gender=true,weight,say,listen){
      this.name=name;
      this.gender=gender;
      this.weight=weight;
      this.say=say;
      this.listen=listen;
      this.getName = function(){
            return this.name
      }
      this.getGender = function(){
          return this.gender
      }
      this.getWeight = function(){
          return this.weight
      }
      this.getSay = function(){
          return this.say
      }
      this.getListen = function(){
          return this.listen
      }
      this.setName = function(value){
              this.name =value;
      }
      this.setWeight = function(value){
          this.weight = value;
      }
      this.setSay = function(value){
          this.say=value;
      }
      this.setListen = function(value){
          this.listen=value;
      }
        this.checkGender = function(){
         if(this.gender == true){
              console.log(this.name+" is Adam")
         }else{
             console.log(this.name+" is Eva")
         }
      }
      this.checkApple = function(value){
              console.log(value.getWeight())
      }
      this.eatApple = function(value){
          if(value.getWeight()>0){
              value.reduceWeightApple()
              console.log(this.name+" imcrease weight "+ ++this.weight)
          }
      }
      
      this.thinkSentence = function(sentence){
           this.say=sentence;
      }
      this.saySomeThink = function(people){
          people.listen.push(this.say);
          console.log(people.getListen());
      }
}
var apple = new Apple(10)
var s1 = new Human("trang",true,40,[],[])
var s2 = new Human("tien",false,40,[],[])  
