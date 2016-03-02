var mainData = {
    engines: [
        {
            code: "ENGINE-01", name: "V2500 - A1 ENGINE", picture: "http://www.pw.utc.com/Content/V2500_Engine/img/V2500engine.jpg",
            features: [{ name: "Engine Type: V2500-A1" }, { name: "Mtfg Date: 3/15" }, { name: "Update Kit Status: Kit currently installed" }, { name: "Aircraft Type: A320" }],
            OtherSpecifications: [{ name: "Fan tip diameter: 63.5 in Length" }, { name: "Flange to flange: 126 in " }, { name: "Takeoff thrust: 23,000–32,000 lb " }, { name: "Flat rated temperature: 86–131°F" }, { name: "Bypass ratio: 4.5–5.4" }, { name: "Overall pressure ratio: 26.9–33.4 " }],
            variables: [
                { name: "Cycles", target: 50, score:43, rating:35 },
                { name: "Flight Hours", target: 500, score: 485, rating: 75 },
                { name: "EGT Margin", target: 200, score: 200, rating: 58 },
                { name: "Vibration Sensor Data", target: 200, score: 200, rating: 85}
            ],
            parts: [
                { code: "PART-01", name: "Fan Blade", description: "Description", picture: "Content/Images/FanBlade.jpg", },
                { code: "PART-02", name: "Compresor Blade", description: "Description", picture: "Content/Images/blade.jpg" }
            ],
            history: [
                { code: "Detail-01", detail: "3/16: Engine Overhaul", picture: "http://www.pw.utc.com/Content/V2500_Engine/img/V2500engine.jpg", },
                { code: "Detail-02", detail: "6/14: Engine Cowl Repair (FOD)", picture: "http://www.pw.utc.com/Content/V2500_Engine/img/V2500engine.jpg" }
            ]
        },
        {
            code: "ENGINE-02", name: "PW4000 ENGINE", picture: "/Content/Images/PW400.jpg",
            features: [{ name: "Fan tip diameter: 78.5 in Length" }, { name: "Flange to flange: 141.4 in" }, { name: "Takeoff thrust: 37,250–43,000 lb" }, { name: "Flat rated temperature: 87°F" }, { name: "Bypass ratio: 6.0" }, { name: "Overall pressure ratio: 27.6–31.2" }, { name: "Fan pressure ratio: 1.74" }],
            variables: [
                { name: "Cycles", target: 50, score: 43, rating: 35 },
                { name: "Flight Hours", target: 500, score: 485, rating: 75 },
                { name: "EGT Margin", target: 200, score: 200, rating: 58 },
                { name: "Vibration Sensor Data", target: 200, score: 200, rating: 85 }
            ],
            parts: [
                { code: "PART-01", name: "Part Name", description: "part description", picture: "http://preview.turbosquid.com/Preview/2014/07/09__07_03_36/Part2226.jpgf5b4600e-6765-44ee-8324-886d34d5162fLarge.jpg" },
                { code: "PART-02", name: "Part Name", description: "part description", picture: "http://preview.turbosquid.com/Preview/2014/07/09__07_03_36/Part2226.jpgf5b4600e-6765-44ee-8324-886d34d5162fLarge.jpg" }
            ],
            history: [
                { code: "Detail-01", detail: "MY P&W ENGINE", picture: "http://preview.turbosquid.com/Preview/2014/07/09__07_03_36/Part2226.jpgf5b4600e-6765-44ee-8324-886d34d5162fLarge.jpg", },
                { code: "Detail-02", detail: "MY P&W ENGINE", picture: "http://preview.turbosquid.com/Preview/2014/07/09__07_03_36/Part2226.jpgf5b4600e-6765-44ee-8324-886d34d5162fLarge.jpg" }
            ]
        }
    ]
};

var ordersData = {
    orders: [
        {
            number: "001", engineCode: "ENGINE-01", engineName: "V2500 ENGINE",
            parts: [
                { code: "PART-01", name: "Fan Blade", status: "SHIPPED", deliveryDate: '03/15/2016', location: "DALLAS, TX" },
                { code: "PART-02", name: "Compressor Blade", status: "ON BACKORDER", deliveryDate: 'TBD', location: "AUTIN, TX" }
            ]
        },
        {
            number: "003", engineCode: "ENGINE-03", engineName: "PW4000-94 ENGINE",
            parts: [
                { code: "PART-01", name: "Part Name", status: "SHIPPED", deliveryDate: 'xx-xx-xx' },
                { code: "PART-02", name: "Part Name", status: "ON BACKORDER", deliveryDate: 'xx-xx-xx' }
            ]
        },
    ]
};

var repairsData = {
    repairs: [
        {
            engineCode: "ENGINE-01", stage: "003",
            features: [
                { name: "Total block hours" },
                { name: "Total flight hours" },
                { name: "Last overhaul date" },
                { name: "Modification status" }
            ],
            summary: [
                {
                    picture: "http://www.pw.utc.com/Content/V2500_Engine/img/V2500engine.jpg",
                    details: [{ detail: "Engineering complete" }, { detail: "Subcontractor delays" }]
                }],
            updates: [
                    { date: "01/12/16", update: "Tear down complete", picture: "http://www.pw.utc.com/Content/V2500_Engine/img/V2500engine.jpg" },
                    { date: "01/15/16", update: "final work scope confirmed", picture: "http://www.pw.utc.com/Content/V2500_Engine/img/V2500engine.jpg" },
                    { date: "01/20/16", update: "Subcontractor delay", picture: "http://www.pw.utc.com/Content/V2500_Engine/img/V2500engine.jpg" }
                ]
        },
        {
            engineCode: "ENGINE-02", stage: "Inspection",
            features: [
                { name: "Total block hours" },
                { name: "Total flight hours" },
                { name: "Last overhaul date" },
                { name: "Modification status" }
            ],
            summary: [
                {
                    picture: "http://www.pw.utc.com/Content/GP7200_Engine/img/_GP7200engine.jpg",
                    details: [{ detail: "Engineering complete" }, { detail: "Subcontractor delays" }]
                }],
            updates: [
                   { date: "01/12/16", update: "Tear down complete", picture: "http://www.pw.utc.com/Content/GP7200_Engine/img/_GP7200engine.jpg" },
                   { date: "01/15/16", update: "final work scope confirmed", picture: "http://www.pw.utc.com/Content/GP7200_Engine/img/_GP7200engine.jpg" },
                   { date: "01/20/16", update: "Subcontractor delay", picture: "http://www.pw.utc.com/Content/GP7200_Engine/img/_GP7200engine.jpg" }
            ]
        },
        {
            engineCode: "ENGINE-03", stage: "Assembly",
            features: [
                { name: "Total block hours" },
                { name: "Total flight hours" },
                { name: "Last overhaul date" },
                { name: "Modification status" }
            ],
            summary: [
                {
                    picture: "http://www.pw.utc.com/Content/PW400094_Engine/img/PW4000-94engine.jpg",
                    details: [{ detail: "Engineering complete" }, { detail: "Subcontractor delays" }]
                }],
            updates: [
                   { date: "01/12/16", update: "Tear down complete", picture: "http://www.pw.utc.com/Content/PW400094_Engine/img/PW4000-94engine.jpg" },
                   { date: "01/15/16", update: "final work scope confirmed", picture: "http://www.pw.utc.com/Content/PW400094_Engine/img/PW4000-94engine.jpg" },
                   { date: "01/20/16", update: "Subcontractor delay", picture: "http://www.pw.utc.com/Content/PW400094_Engine/img/PW4000-94engine.jpg" }
            ]
        }
        
    ]
};

var repairStagesData = {
    stages: [
        {
            code: "001", name: "1. Disassembly"            
        },
        {
            code: "002", name: "2. Cleaning"
        },
        {
            code: "003", name: "3. Material Testing"
        },
        {
            code: "004", name: "4. Inspection"
        },
        {
            code: "005", name: "5. Repair"
        },
        {
            code: "006", name: "6. Assembly"
        },
        {
            code: "007", name: "7. Engine Test"
        }

    ]
};
