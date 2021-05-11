function makeApiCall(type) {
  var params = {
    spreadsheetId: '1ngpxfkV-smNnxqmnvRi5H_c8vITyElZeUHy5TXMr8hg',  
    range: 'medium_data',  
  };

  var request = gapi.client.sheets.spreadsheets.values.get(params);
  request.then(function(response) {
    // TODO: Change code below to process the `response` object:
    console.log(response.result);
    if(type=='all'){
      display_all(response.result);
    }else if(type=='blog'){
      display(response.result);      
    }
  }, function(reason) {
    console.error('error: ' + reason.result.error.message);
  });
}


function initClient() {
  //var API_KEY = 'AIzaSyBWrcPpx3wUpeXkGFMgJq4cHmPJVycSh3I';  // TODO: Update placeholder with desired API key.
  var API_KEY = 'AIzaSyDMbdt7Uoul8ko96b5b2jPRdtMEB-J2mU8';
  //var CLIENT_ID = '201361528906-hallvpkqj9us2k62ran3togstgitvf0j.apps.googleusercontent.com';  // TODO: Update placeholder with desired client ID.
  var CLIENT_ID = '525451585501-7airvefnftfr59vm36ag28kdf02mtakm.apps.googleusercontent.com';
  // TODO: Authorize using one of the following scopes:
  //   'https://www.googleapis.com/auth/drive'
  //   'https://www.googleapis.com/auth/drive.file'
  //   'https://www.googleapis.com/auth/drive.readonly'
  //   'https://www.googleapis.com/auth/spreadsheets'
  //   'https://www.googleapis.com/auth/spreadsheets.readonly'
  var SCOPE = 'https://www.googleapis.com/auth/spreadsheets.readonly';

  gapi.client.init({
    'apiKey': API_KEY,
    'clientId': CLIENT_ID,
    'scope': SCOPE,
    'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
  }).then(function() {
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
    updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  });
}
function updateSignInStatus(isSignedIn) {
  //if (isSignedIn) {
  if(window.location.href.includes('blog-details')){
    makeApiCall('blog');
  }else if(window.location.href.includes('blog')){
    makeApiCall('all');
  }
  //if(window.location.href)
  //}
}

function handleSignInClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

function handleSignOutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}
function display(result){
	var len = result.values.length
    var data_col=2;
    var link_col=1;
    var current_url = window.location.href;
    var url = new URL(current_url);
	var blog_slug = url.searchParams.get("blog");
	var prefix = "https://medium.com/elucidationtoday/";
    console.log(blog_slug);
    for(var row=1;row<len;row++){
			if(prefix+blog_slug == result.values[row][link_col]){
				document.getElementById('blog-container').innerHTML = result.values[row][data_col];
          setTimeout(function(){
            $('div.ej.ek').children('div').children('div').children('div').css('display','none');
          },2000)
				break;
			}
    }    
}

function display_all(result){
  var len = result.values.length
  var data_col=2;
  var link_col=1;
  var html = '';
  var html_object = '';
  var blog_detail_prefix = '/blog-details?blog=';
    for(var row=1;row<len;row++){
      try{
      var blog_slug = result.values[row][link_col].split('/')[result.values[row][link_col].split('/').length-1];
      var blog_url = blog_detail_prefix + blog_slug;
      html_object = $(result.values[row][data_col])
      var title = html_object.find('h1').html()
      var main_picture = html_object.find('img')[1]
      main_picture.removeAttribute("width");
      main_picture.removeAttribute("height");
      main_picture = main_picture.outerHTML;
      var author = html_object.find('div.gb a')[1]
      author.href = '';
      author = author.outerHTML;
      var date = html_object.find('div.gb a')[2]
      date.href = '';
      date = date.outerHTML;
      var first_para = html_object.find('p')[0].outerHTML
      html = html +
      `<div class="blog-block column is-4">
        <a href="`+blog_url+`" target="_blank">
        <div class="blog-details-block">
          <div class="main-image">`+main_picture+`</div>
          <div class="blog-title">`+title+`</div>
          <div class="date">`+date+`</div>
          <div class="author">`+author+`</div>
          <div class="para">`+first_para+`</div>
        </div>
        </a>
      </div>`;
      }
      catch(err){console.log(err)}
    }
    document.getElementById('all-blogs-container').innerHTML = html;
}