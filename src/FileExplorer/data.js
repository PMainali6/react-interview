const explorer = {
    name: "root",
    isFolder: true,
    children: [
        {
            name: "public",
            isFolder: true,
            children: [
                {
                    name: "index.html",
                    isFolder: false,
                    children: []
                },
                {
                    name: "manifest.json",
                    isFolder: false,
                    children: []
                },
                {
                    name: "robots.txt",
                    isFolder: false,
                    children: []
                },
            ]
        },
        {
            name: "src",
            isFolder: true,
            children: [
                {
                    name: "components",
                    isFolder: true,
                    children: [
                        {
                            name: "Counter",
                            isFolder: true,
                            children: [
                                {
                                    name: "counter.jsx",
                                    isFolder: false,
                                    children: []
                                },
                            ]
                        },
                    ]
                },
                {
                    name: "page",
                    isFolder: true,
                    children: [
                        {
                            name: "home.jsx",
                            isFolder: false,
                            children: []
                        },
                    ]
                },
                {
                    name: "App.js",
                    isFolder: false,
                    children: []
                },
                {
                    name: "App.css",
                    isFolder: false,
                    children: []
                },
                {
                    name: "index.js",
                    isFolder: false,
                    children: []
                },
            ]
        },
        {
            name: "build",
            isFolder: true,
            children: [
                {
                    name: "static",
                    isFolder: true,
                    children: [
                        {
                            name: "css",
                            isFolder: true,
                            children: [
                                {
                                    name: "main.css",
                                    isFolder: false,
                                    children: []
                                },
                            ]
                        },
                        {
                            name: "js",
                            isFolder: true,
                            children: [
                                {
                                    name: "bundle.js",
                                    isFolder: false,
                                    children: []
                                },
                            ]
                        },
                    ]
                },
            ]
        },
        {
            name: "package.json",
            isFolder: false,
            children: []
        }
    ]

}

export { explorer };
