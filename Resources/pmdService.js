if(!Ti.App.Properties.hasProperty('notificationCount')) {
    Ti.App.Properties.setInt('notificationCount', 0);
} else {
    Ti.App.Properties.removeProperty('notificationCount');
 
    var activity = Ti.Android.currentActivity();
    var intent = Ti.Android.createIntent({
        action : Ti.Android.ACTION_MAIN,
        // you can use className or url to launch the app
        // className and packageName can be found by looking in the build folder
        // for example, mine looked like this
        // build/android/gen/com/appcelerator/test/Test7Activity.java
        // className : 'com.appcelerator.test.Test7Activity',
 
        // if you use url, you need to make some changes to your tiapp.xml
        url : 'app.js',
        flags : Ti.Android.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED | Ti.Android.FLAG_ACTIVITY_SINGLE_TOP
    });
    intent.addCategory(Titanium.Android.CATEGORY_LAUNCHER);
 
    var pending = Ti.Android.createPendingIntent({
        activity : activity,
        intent : intent,
        type : Ti.Android.PENDING_INTENT_FOR_ACTIVITY,
        flags : Ti.Android.FLAG_ACTIVITY_NO_HISTORY
    });
 

        var notificationPMD = Ti.Android.createNotification({
        contentIntent : pending,
        contentTitle : 'Afval buiten zetten',
        contentText : 'PMD',
        tickerText : 'Afval buiten zetten',
        when : new Date().getTime(),
        icon : Ti.App.Android.R.drawable.appicon,
        flags : Titanium.Android.ACTION_DEFAULT | Titanium.Android.FLAG_AUTO_CANCEL | Titanium.Android.FLAG_SHOW_LIGHTS
    });
    
 
 Ti.Android.NotificationManager.notify(1, notificationPMD);

    var service = Ti.Android.currentService;
    var serviceIntent = service.getIntent();
 
    // this will display that custom extra that we added when we created the intent
    // intent.putExtra('message' , 'This is that little extra');
    var teststring = serviceIntent.getStringExtra('message');
    Ti.API.info('Extra!: ' + teststring);
 
    Ti.Android.stopService(serviceIntent);
}