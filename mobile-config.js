App.info({
    name: 'Adstronomi',
    description: 'Advertisment watching app',
    author: 'Audegn Team',
    email: 'asad.iqbal@audegn.com',
    website: 'adstronomi.meteor.com',
    version: '0.0.1'
});

App.icons({
    'android_ldpi':'public/adslogo.png',
    'android_mdpi': 'public/adslogo.png',
    'android_hdpi': 'public/adslogo.png',
    'android_xhdpi': 'public/adslogo.png'
});

App.launchScreens({
    'android_ldpi_portrait': 'public/splash/splash-200x320.png',
    'android_ldpi_landscape': 'public/splash/splash-320x200.png',
    'android_mdpi_portrait': 'public/splash/splash-320x480.png',
    'android_mdpi_landscape': 'public/splash/splash-480x320.png',
    'android_hdpi_portrait': 'public/splash/splash-480x800.png',
    'android_hdpi_landscape': 'public/splash/splash-800x480.png',
    'android_xhdpi_portrait': 'public/splash/splash-720x1280.png',
    'android_xhdpi_landscape': 'public/splash/splash-1280x720.png'
});

//App.setPreference('BackgroundColor', '0xfff47b00');
//App.setPreference("SplashScreenDelay", 6000);
App.accessRule("*");

