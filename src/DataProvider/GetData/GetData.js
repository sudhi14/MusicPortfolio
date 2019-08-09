
const getYoutubeConfig = () => {
  const youTubeApiKey = ''; // youtube apikey
  const channelId = ''; // youtube channel id 
  
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
  //const data = '';
  //console.log("mydata", data);
  return data;
}

export default getApi;
