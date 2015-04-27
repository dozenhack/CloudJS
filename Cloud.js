/*
 * This is a JavaScript Library Which works for Cloud File Sharing/Store.
 *
 * You can use this library in your any number of projects as well as domain whether it is commercial or non-commercial
 * You can put my name as a contributor if you wish. Reward Should be given, not for taken!!!,
 * Author: Farhadur Rahim,
 * Email:  webmechanicx@gmail.com
 ***************************************************************************************************************************/

var Cloud = {};
var SaveAs;
var placeholder; // Work as a DOM Selector;


var file_array = ['//example.com/path/myfile.pdf', 'my_example.pdf', 'My Blog Name'];

/*@Initiate CloudJS by Calling METHOD "SaveAS"
@ Cloud.SaveAS (element, provider = ["DropBox", "GoogleDrive", "OneDrive"], options = {})
@ providers is OPTIONAL, By Default it appends three available cloud providers  
*/

Cloud = {
  
  var ref;
  var options   = [];
  var providers = [];
  var config    = {
                  "DropBox"     : [ 'a1jy330vpyki64', "https://www.dropbox.com/static/api/2/dropins.js"], 
                  "GoogleDrive" : [ 'a1jy330vpyki64', "https://apis.google.com/js/platform.js"], 
                  "OneDrive"    : [ 'a1jy330vpyki64', "https://apis.google.com/js/platform.js"]
                  };
  
  SaveAS        : function (placeholder, providers, options ){
                  for( var i = 0; i<providers.length; i++ ){
                  }
  },
  setProvider   : function(provider, option){
                  var cfg = providers.length;
                  var ref;
    
                  switch (provider){
                     
                   case "DropBox" :
                     ref = document.createElement('script');
                     ref.setAttribute("type","text/javascript");
                     ref.setAttribute("src", option.path);
                   case "GoogleDrive" :
                     
                   }                
                if (typeof ref!="undefined")
                document.getElementsByTagName("head")[0].appendChild(ref);
  }
};
