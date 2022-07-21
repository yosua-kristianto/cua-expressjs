import fs from "fs";

export class Log {

 /**
  * getTimeStamp
  *  A function to get current timestamp, 
  *  and convert it into readable string.
  * 
  * @return string
  */
  static getTimeStamp = () => new Date().toISOString();

  static getDate() {
    const date = new Date();

    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  }

  /**
   * writeLog
   *  A function to write log message to file.
   *  
   * @param {string} str
   * @return {void}
   */
  static writeLog(str) {
    
    const currentFileName = `./logs/${Log.getDate()}.log`;
    const logFormat = `${str}\n`;

    fs.appendFile(currentFileName, logFormat, (appendError) => {
      if(appendError) {

        Log.e("LOG", "Something error when append", appendError);

        fs.writeFile(currentFileName, logFormat, (writeError) => {
          Log.e("LOG", "Something error when write", writeError);
        });
      }
    });


  }

  /**
   * i
   *   A function that print logs on the console as 
   *   an informative message.
   */
  static i(namespace, message, object) {
    let generatedLog = `[${Log.getTimeStamp()}] [INFO] [${namespace}] ${message}`;

    if(object) {
  
      console.log(generatedLog, object);
  
    }else{
      
      console.log(generatedLog);
  
    }

    Log.writeLog(generatedLog);
  }

  /**
   * d
   *   A function that print logs on the console as 
   *   an debug message.
   */
   static d(namespace, message, object) {
     let generatedLog = `[${Log.getTimeStamp()}] [DEBUG] [${namespace}] ${message}`;  

     if(object) {
   
       console.info(generatedLog, object);
   
     }else{
       
       console.info(generatedLog);
   
     }

     Log.writeLog(generatedLog);
   }

  /**
   * e
   *   A function that print logs on the console as 
   *   an error message.
   */
   static e(namespace, message, object) {
    let generatedLog = `[${Log.getTimeStamp()}] [ERROR] [${namespace}] ${message}`;  
    
    if(object) {
  
      console.error(generatedLog, object);
  
    }else{
      
      console.error(generatedLog);
  
    }

    Log.writeLog(generatedLog);
  }

  /**
   * w
   *   A function that print logs on the console as 
   *   an warning message.
   */
   static w(namespace, message, object) {
    let generatedLog = `[${Log.getTimeStamp()}] [WARNING] [${namespace}] ${message}`;  
    
    if(object) {
  
      console.warn(generatedLog, object);
  
    }else{
      
      console.warn(generatedLog);
  
    }

    Log.writeLog(generatedLog);
  }
}
