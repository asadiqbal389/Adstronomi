

ServiceConfiguration.configurations.upsert(
  { service: "google" },
  {
    $set: {
      clientId: "438258057648-urceh6jfa1rabob49b5ok6s5qu70gnu7.apps.googleusercontent.com",
      loginStyle: "popup",
      secret: "bkuiGsdGH98MVRK4qSg2G635"
    }
  }
);
var createServiceConfiguration = function(service, clientId, secret) {
  ServiceConfiguration.configurations.remove({
    service: service
  });
  var config = {
    generic: {
      service: service,
      clientId: clientId,
      secret: secret
    },
    facebook: {
      service: service,
      appId: clientId,
      secret: secret
     }
  };
  switch (service) {
    case 'facebook':
      return ServiceConfiguration.configurations.insert(config.facebook);
    default:
      return ServiceConfiguration.configurations.insert(config.generic);
  }
};


createServiceConfiguration('facebook', '1622121594713692', 'e504dad20a51f9a75d55d8fce4918d31');

//createServiceConfiguration('github', '705b2dcbc55abdb46f21', 'd3219bc69a991f3f7bd50023990fee9e97d45fba');



//createServiceConfiguration('google', '438258057648-urceh6jfa1rabob49b5ok6s5qu70gnu7.apps.googleusercontent.com', 'bkuiGsdGH98MVRK4qSg2G635');

//createServiceConfiguration('twitter', 'aayYJU3jD6A6qEQJkeZdHlKcS', 'bZbT0Vi9tXaStkrvmKRGUaW24LPiMZMRV4bTQmt78ANlK41lHF');


Accounts.onCreateUser(function(options, user) {
    user.liksvdo = [];
    return user;
});