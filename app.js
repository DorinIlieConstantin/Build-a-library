class media{
    constructor(title){
  this._title=title;
  this._isChechedOut=false;
  this._ratings=[];
    }
    get title(){
      return this._title;
    }
    get isCheckedOut(){
   return this._isCheckedOut;
    }
    get ratings(){
  return this._ratings;
    }
    set isCheckedOut(value){
   this._isCheckedOut=value;
    }
    toggleCheckOutStatus(){
      this._isCheckedOut=!this._isCheckedOut;
    }
   AverageRating(){
      let ratingsSum = this.ratings.reduce((acumulator, rating) => acumulator + rating);
     return ratingsSum / this.ratings.length;
    }
  addRating(value){
    this.ratings.push(value);
  }
  }
  class book extends media{
    constructor(author,title,pages){
       super(title);
      this._author=author;
     
      this._pages=pages;
      
     
    }
    get author(){
      return this._author;
    }
    get pages(){
      return this._pages;
    }
  }
  class movie extends media{
    constructor(director,title,runTime ){
      
      super(title);
      this._director=director;
   
      this._runTime=runTime;
      
    }
    get director(){
      return this._director=director;
    }
    get runTime(){
      return this._runTime=runTime;
    }
  }
  const historyOfEverything= new book('Bill Bryson','A Short History of Nearly Everything',544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.AverageRating);
  const speed= new movie('Jan de Bont','Speed',116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.AverageRating());