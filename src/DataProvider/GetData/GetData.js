// const gapi = window.gapi

// const getApi = () => {
//     function authenticate() {
//         return window.gapi.auth2.getAuthInstance()
//             .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
//             .then(function() { console.log("Sign-in successful"); },
//                 function(err) { console.error("Error signing in", err); });
//     }

//     function loadClient() {
//         gapi.client.setApiKey('AIzaSyDMSc-Xi3xn7BQaDBEmy2gDNH_9XEc2eDw');
//         return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//             .then(function() { console.log("GAPI client loaded for API"); execute(); },
//                 function(err) { console.error("Error loading GAPI client for API", err); });
//     }

//     // Make sure the client is loaded and sign-in is complete before calling this method.
//     function execute() {
//         console.log(window.gapi)
//         if(window.gapi) {
//             return window.gapi.client.youtube.playlists.list({
//                 "part": "snippet,contentDetails", //UCSDmYNQ_kSGMp6sGbdA-BjQ
//                 "id": "UC_x5XG1OV2P6uZZ5FSM9Ttw"
//                 })
//                     .then(function(response) {
//                             // Handle the results here (response.result has the parsed body).
//                             console.log("Response", response);
//                         },
//                         function(err) { console.error("Execute error", err); });
//         }
//     }
//     window.gapi.load("client:auth2", function() {
//         window.gapi.auth2.init({client_id: "395229971218-49prql2hko7vlfetkfcja0or5uns75fr.apps.googleusercontent.com"});
//         authenticate().then(loadClient)       
//     });

    
   
// }


// const getApi = () => {
//     // return fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDMSc-Xi3xn7BQaDBEmy2gDNH_9XEc2eDw&channelId=UCSDmYNQ_kSGMp6sGbdA-BjQ&part=snippet,id&order=date&maxResults=20') 
//     //     .then((response) => {
//     //         return response.json()
//     //     }).then((myjson) => {
//     //         return myjson.data
//     //     })
// }


const getYoutubeConfig = () => {
  const youTubeApiKey = 'AIzaSyDMSc-Xi3xn7BQaDBEmy2gDNH_9XEc2eDw';
  const channelId = 'UCSDmYNQ_kSGMp6sGbdA-BjQ';
  
  const getYoutubeApiKey = () => {
    return youTubeApiKey;
  }
  
  const getchannelId = () => {
    return channelId;
  }

  const getApiValues = {
    youtubeKey : getYoutubeApiKey,
    channelId : getchannelId   
  }

  return getApiValues;
}


//Get youtube contents for a channel
const getApi = async () => {
  
  const response =  await fetch(`https://www.googleapis.com/youtube/v3/search?key=${getYoutubeConfig().youtubeKey()}&channelId=${getYoutubeConfig().channelId()}&part=snippet,id&order=date&maxResults=20`);
  const data = await response.json();
  // const data = '';
  return data;
}

export default getApi;
