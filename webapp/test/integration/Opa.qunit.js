sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ztravelrapdv4/test/integration/pages/MainListReport' ,
        'ztravelrapdv4/test/integration/pages/MainObjectPage',
        'ztravelrapdv4/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ztravelrapdv4') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);