var mainData = {
    engines: [
        {
            code: "ENGINE-01", name: "V2500 ENGINE", picture: "http://www.pw.utc.com/Content/V2500_Engine/img/V2500engine.jpg",
            features: [{ name: "feature 1" }, { name: "feature 2" }, { name: "feature 3" }],
            variables: [
                { name: "vibration", target: 50, score:43, rating:35 },
                { name: "flight hours", target: 500, score: 485, rating: 75 },
                { name: "EGTM", target: 200, score: 200, rating: 58 },
            ],
            parts: [
                { code: "PART-01", name: "Part Name", description: "part description", picture: "http://preview.turbosquid.com/Preview/2014/07/09__07_03_36/Part2226.jpgf5b4600e-6765-44ee-8324-886d34d5162fLarge.jpg",  },
                { code: "PART-02", name: "Part Name", description: "part description", picture: "http://preview.turbosquid.com/Preview/2014/07/09__07_03_36/Part2226.jpgf5b4600e-6765-44ee-8324-886d34d5162fLarge.jpg" },
                { code: "PART-03", name: "Part Name", description: "part description", picture: "http://preview.turbosquid.com/Preview/2014/07/09__07_03_36/Part2226.jpgf5b4600e-6765-44ee-8324-886d34d5162fLarge.jpg" }
            ],
            history: [
                { code: "Detail-01", detail: "MY P&W ENGINE", picture: "http://preview.turbosquid.com/Preview/2014/07/09__07_03_36/Part2226.jpgf5b4600e-6765-44ee-8324-886d34d5162fLarge.jpg", },
                { code: "Detail-02", detail: "MY P&W ENGINE", picture: "http://preview.turbosquid.com/Preview/2014/07/09__07_03_36/Part2226.jpgf5b4600e-6765-44ee-8324-886d34d5162fLarge.jpg" },                
            ]
        },
        {
            code: "ENGINE-02", name: "GP7200 ENGINE", picture: "http://www.pw.utc.com/Content/GP7200_Engine/img/_GP7200engine.jpg",
            features: [{ name: "feature 1" }, { name: "feature 2" }, { name: "feature 3" }],
            variables: [
                { name: "vibration", target: 50 },
                { name: "flight hours", target: 500 },
                { name: "EGTM", target: 200 },
            ],
            parts: [
                { code: "PART-01", name: "Part Name", description: "part description", picture: "http://preview.turbosquid.com/Preview/2014/07/09__07_03_36/Part2226.jpgf5b4600e-6765-44ee-8324-886d34d5162fLarge.jpg" },
                { code: "PART-02", name: "Part Name", description: "part description", picture: "http://preview.turbosquid.com/Preview/2014/07/09__07_03_36/Part2226.jpgf5b4600e-6765-44ee-8324-886d34d5162fLarge.jpg" },
                { code: "PART-03", name: "Part Name", description: "part description", picture: "http://preview.turbosquid.com/Preview/2014/07/09__07_03_36/Part2226.jpgf5b4600e-6765-44ee-8324-886d34d5162fLarge.jpg" }
            ],
            history: [
                { code: "Detail-01", detail: "MY P&W ENGINE", picture: "http://preview.turbosquid.com/Preview/2014/07/09__07_03_36/Part2226.jpgf5b4600e-6765-44ee-8324-886d34d5162fLarge.jpg", },
                { code: "Detail-02", detail: "MY P&W ENGINE", picture: "http://preview.turbosquid.com/Preview/2014/07/09__07_03_36/Part2226.jpgf5b4600e-6765-44ee-8324-886d34d5162fLarge.jpg" },
            ]
        },
        {
            code: "ENGINE-03", name: "PW4000-94 ENGINE", picture: "http://www.pw.utc.com/Content/PW400094_Engine/img/PW4000-94engine.jpg",
            features: [{ name: "feature 1" }, { name: "feature 2" }, { name: "feature 3" }],
            variables: [
                { name: "vibration", target: 50 },
                { name: "flight hours", target: 500 },
                { name: "EGTM", target: 200 },
            ],
            parts: [
                { code: "PART-01", name: "Part Name", description: "part description", picture: "http://preview.turbosquid.com/Preview/2014/07/09__07_03_36/Part2226.jpgf5b4600e-6765-44ee-8324-886d34d5162fLarge.jpg" },
                { code: "PART-02", name: "Part Name", description: "part description", picture: "http://preview.turbosquid.com/Preview/2014/07/09__07_03_36/Part2226.jpgf5b4600e-6765-44ee-8324-886d34d5162fLarge.jpg" },
                { code: "PART-03", name: "Part Name", description: "part description", picture: "http://preview.turbosquid.com/Preview/2014/07/09__07_03_36/Part2226.jpgf5b4600e-6765-44ee-8324-886d34d5162fLarge.jpg" }
            ],
            history: [
                { code: "Detail-01", detail: "MY P&W ENGINE", picture: "http://preview.turbosquid.com/Preview/2014/07/09__07_03_36/Part2226.jpgf5b4600e-6765-44ee-8324-886d34d5162fLarge.jpg", },
                { code: "Detail-02", detail: "MY P&W ENGINE", picture: "http://preview.turbosquid.com/Preview/2014/07/09__07_03_36/Part2226.jpgf5b4600e-6765-44ee-8324-886d34d5162fLarge.jpg" },
            ]
        }
    ]
};

var ordersData = {
    orders: [
        {
            number: "001", engineCode: "ENGINE-01", engineName: "V2500 ENGINE",
            parts: [
                { code: "PART-01",name: "Part Name", status: "SHIPPED", deliveryDate: 'XX-XX-XX' },
                { code: "PART-02", name: "Part Name", status: "ON BACKORDER", deliveryDate: 'XX-XX-XX' },
                { code: "PART-03", name: "Part Name", status: "IN PROGRESS", deliveryDate: 'XX-XX-XX' },
            ]
        },
        {
            number: "002", engineCode: "ENGINE-02", engineName: "GP7200 ENGINE",
            parts: [
                { code: "PART-01", name: "Part Name", status: "SHIPPED", deliveryDate: 'XX-XX-XX' },
                { code: "PART-02", name: "Part Name", status: "ON BACKORDER", deliveryDate: 'XX-XX-XX' },
                { code: "PART-03", name: "Part Name", status: "IN PROGRESS", deliveryDate: 'XX-XX-XX' },
            ]
        },
        {
            number: "003", engineCode: "ENGINE-03", engineName: "PW4000-94 ENGINE",
            parts: [
                { code: "PART-01", name: "Part Name", status: "SHIPPED", deliveryDate: 'xx-xx-xx' },
                { code: "PART-02", name: "Part Name", status: "ON BACKORDER", deliveryDate: 'xx-xx-xx' },
                { code: "PART-03", name: "Part Name", status: "IN PROGRESS", deliveryDate: 'xx-xx-xx' },
            ]
        },
    ]
};
