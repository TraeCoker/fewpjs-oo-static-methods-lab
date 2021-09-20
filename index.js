class Formatter {
  static capitalize(string){
    return  string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^" "A-Za-z0-9-']+/g, '');
  }

  static titleize(string){
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    const splitString = string.split(' ');
    splitString[0] = this.capitalize(splitString[0]);

    return   splitString.map(function(w){
             if (exceptions.find(word => word === w)) {
               return w;
             } else {
               return  w.charAt(0).toUpperCase() + w.slice(1);
             }
           })
           .join(' ');
  }
}