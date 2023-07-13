
class FormaSaveService {
  getCookie(cookieName)
  {
    const nameLenPlus = (cookieName.length + 1);
    return document.cookie
      .split(';')
      .map(c => c.trim())
      .filter(cookie => {
        return cookie.substring(0, nameLenPlus) === `${cookieName}=`;
      })
      .map(cookie => {
        return decodeURIComponent(cookie.substring(nameLenPlus));
      })[0] || null;
  }
  
  accessSpacemaker(fromWeb, region)
  {
    let loginDialog = null;
    let smRegionUrl = 'app.autodeskforma.eu';
    if(region === 'us')
    {
      smRegionUrl = 'app.autodeskforma.com';
    }
    if(fromWeb)
    {
      const baseUrl = `https://${smRegionUrl}/web-components/FormIt-Forma/index.html`;
      const returnUrl = `${baseUrl}?args=region%3B${region}%3BcallingUrl%3B${window.location}`;
      loginDialog = window.open(`https://${smRegionUrl}/auth/login?rd=${returnUrl}`, "_blank", "width= 500px, height=500px");
      let id = setInterval(() => {
        // try to retrieve cookie each 1s, and close popup in case of success
        let cookie = this.getCookie('ajs_user_id');
        if(cookie !== null)
        {
          clearInterval(id);
          if(loginDialog !== null)
          {
            loginDialog.close();
          } 
        }
      }, 1000);
    }
    else
    {
      //TODO for local debug, replace the first line with the following
      //const baseUrl = "https://local.spacemaker.ai:3001";
      const baseUrl = `https://${smRegionUrl}/web-components/FormIt-Forma/index.html`;
      // to allow user to get back to login, we have to pass the calling url as argument on top of the region one
      const returnUrl = `${baseUrl}?args=region%3B${region}%3BcallingUrl%3B${window.location}`;
      window.location.replace(`https://${smRegionUrl}/auth/login?rd=${returnUrl}`);
    }
  }
}

export default new FormaSaveService();