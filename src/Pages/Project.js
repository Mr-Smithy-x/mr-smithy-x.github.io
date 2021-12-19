import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import ProjectItem from "./Components/ProjectItem";

export class Project extends Component {


    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    "title": "λ30 Emulator",
                    "type": "A GBA Emulator",
                    "image": "img/projects/emulator.png",
                    "link": "https://github.com/Mr-Smithy-x/L30GameboyEmulator"
                },
                {
                    "id": 1,
                    "title": "WebAnd",
                    "type": "Android & PS3",
                    "css": "col-md-4 col-sm-6",
                    "filters": "app",
                    "description": "Allows you to modify and read memory from the PS3 including attached game processes. Able to launched games, upload &amp; download files via FTP.",
                    "image": "img/projects/webman.jpg",
                    "created_at": "2020-06-29T17:00:24.000000Z",
                    "updated_at": null,
                    "paragraph": "Allows you to modify and read memory from the PS3 including attached game processes. Able to launched games, upload &amp; download files via FTP.",
                    "link": "https://github.com/Mr-Smithy-x/WebAnd-WebManMod"
                },
                {
                    "id": 2,
                    "title": "JMAPI",
                    "type": "Android & PS3",
                    "css": "col-md-4 col-sm-6",
                    "filters": "library",
                    "description": "Allows you to modify and receive memory from the ps3 as-well as alter internal ps3 settings",
                    "image": "img/projects/jmapi-console.jpg",
                    "created_at": "2020-06-29T17:00:24.000000Z",
                    "updated_at": null,
                    "paragraph": "Allows you to modify and receive memory from the ps3 as-well as alter internal ps3 settings",
                    "link": "https://github.com/Mr-Smithy-x/Android-JMAPI"
                },
                {
                    "id": 3,
                    "title": "CCDroid",
                    "type": "Android & PS3",
                    "css": "col-md-4 col-sm-6",
                    "filters": "app",
                    "description": "<p>Android client that allows you to use ccapi protocols.</p>\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Rc2xACkjo08\"; frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
                    "image": "img/projects/ccdroid-app.jpg",
                    "created_at": "2021-05-05T17:01:14.000000Z",
                    "updated_at": null,
                    "paragraph": "Android client that allows you to use ccapi protocols.",
                    "link": "http://www.nextgenupdate.com/forums/ps3-cheats-customization/883341-ccdroid-beta-alternative-ccapi-manager-android.html"
                },
                {
                    "id": 4,
                    "title": "CCAndroid (GTA V RTM)",
                    "type": "Android, PS3, GTAV",
                    "css": "col-md-4 col-sm-6",
                    "filters": "app",
                    "description": "&lt;p&gt;A GTA V RTM Tool for ps3&lt;/p&gt;\n&lt;p&gt; First Version &lt;/p&gt;\n&lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/doTep2OlUP8\"; frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen&gt;&lt;/iframe&gt;\n&lt;p&gt; In depth Video (Sorry for the music, this wasnt me recording&lt;/p&gt;\n&lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/JFPDazP2rms\"; frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen&gt;&lt;/iframe&gt;\n&lt;p&gt;Improvements&lt;/p&gt;\n&lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/q1PgrMEo68k\"; frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen&gt;&lt;/iframe&gt;",
                    "image": "img/projects/ccandroid-app.jpg",
                    "created_at": "2021-05-05T17:01:15.000000Z",
                    "updated_at": null,
                    "paragraph": "A GTA V RTM Tool for ps3",
                    "link": "https://www.youtube.com/watch?v=JFPDazP2rms"
                },
                {
                    "id": 5,
                    "title": "SupremeOne (YoWorld Mod)",
                    "type": "PC, APP, SWF",
                    "css": "col-md-4 col-sm-6",
                    "filters": "app",
                    "description": "&lt;p&gt;A Swf Mod customized w/ ffdec. Includes an android app that can remotely control the game and its contents such as messaging, playing custom audio and joining lobby's and friends!\nOne of my best work involves multitude of systems. this project includes an Android App, Backend Laravel Framework, NodeJs Sockets for communications between SWF &lt;-&gt; SocketServer &lt;-&gt; Android App &amp; an admin panel to handle the data. It’s a private project of mine but it’s worth showing. This project was inspired off a facebook game yoworld which i had to reverse engineer and add components onto the game. It was pretty data intensive &amp; a fun project to get accustomed to different toolsets and to exercise my development skills as a full stack developer &amp; mobile app developer. Due to personal reasons i cannot share the swf.\n&lt;/p&gt;\n\n&lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/BP4OzZR--j8\"; frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen&gt;&lt;/iframe&gt;\n\n&lt;p&gt;Tools: &lt;/p&gt;\n&lt;p&gt;\nPostman - Postman is the only complete API development environment, for API developers. to keep track and test api’s ive built on android\n&lt;/p&gt;\n&lt;p&gt;\nFFDec - Opensource flash SWF decompiler and editor. Extract resources, convert SWF to FLA, edit ActionScript, replace images, sounds, texts or fonts. Various output formats available. Works with Java on Windows, Linux or MacOS. This tool was used to reverse engineer the swf game which had to be written in assembly (p-code) to add features.\n&lt;/p&gt;\n&lt;p&gt;\nWireShark - is a free and open-source packet analyzer. It is used for network troubleshooting, analysis, software and communications protocol development, and education. I use this as a network debugger to see what packets im sending to my nodejs server and to my android app and back.\n&lt;/p&gt;\n&lt;p&gt;\nCharles Web Debugger - an HTTP proxy / HTTP monitor / Reverse Proxy that enables a developer to view all of the HTTP and SSL / HTTPS traffic between their machine and the Internet. This includes requests, responses and the HTTP headers (which contain the cookies and caching information). Since i had to modify the swf game, i had to replace the swf file via charles to load the modifications\n&lt;/p&gt;\n&lt;p&gt;\n- IDE Used:\n&lt;/p&gt;\n&lt;p&gt;\nIntelliJ (JavaFx Admin Panel/Kotlin),\nPhpStorm (Laravel/PHP),\nDataGrip (MySQL DB),\nAndroid Studio (Android App/Kotlin),\nWebStorm (NodeJs Socket Server/JS)\n&lt;/p&gt;\n&lt;p&gt;\nAndroid App - Built in kotlin, Dagger, MVP, Retrofit, RxJava\n&lt;p/&gt;\n&lt;p&gt;\nAdmin Console - Built with JavaFx (Java/Kotlin)\n&lt;/p&gt;\n&lt;p&gt;\nWebsite - Built with MVC Framework Laravel (PHP), (Used mainly for the backend and API development)\n&lt;/p&gt;\n&lt;p&gt;\nServerSocket - Built in Node (JS)\n&lt;/p&gt;\n&lt;p&gt;\nCustom SWF - Decompiled and written in P-Code (assembly)\n&lt;/p&gt;\n&lt;p&gt;\nHosted on Digital Ocean - Ubuntu 16.04\n&lt;/p&gt;\n&lt;p&gt;\nCrutches - Due to the nature of actionscript 3 (not built upon adobe air) I could not used some http methods suchs as Delete, Patch or Put, so the api's have been written for POST and GET methods, while api's for the Android app used all http methods.\n&lt;/p&gt;",
                    "image": "img/projects/supreme-one-app.jpg",
                    "created_at": "2021-05-05T17:01:16.000000Z",
                    "updated_at": null,
                    "paragraph": "A Swf Mod customized w/ ffdec. Includes an android app that can remotely control the game and its contents such as messaging, playing custom audio and joining lobby's and friends!",
                    "link": "http://s1.supreme-one.net:2052/"
                },
                {
                    "id": 6,
                    "title": "Rentah",
                    "type": "Website & App",
                    "css": "col-md-4 col-sm-6",
                    "filters": "app",
                    "description": "&lt;p&gt;A Brooklyn-based tech startup that provides a peer-to-peer platform on where you can rent out your goods, services, or spaces.&lt;/p&gt;\n&lt;iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/xGLScHC0q1c\"; frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen&gt;&lt;/iframe&gt;",
                    "image": "img/projects/rentah-app.jpg",
                    "created_at": "2021-05-05T17:01:35.000000Z",
                    "updated_at": null,
                    "paragraph": "A Brooklyn-based tech startup that provides a peer-to-peer platform on where you can rent out your goods, services, or spaces.",
                    "link": "https://www.rentah.com/"
                },
                {
                    "id": 7,
                    "title": "WallStreetBets Radio",
                    "type": "Backend & App",
                    "css": "col-md-12 col-md-12",
                    "filters": "app",
                    "description": "&lt;div jsname=\"sngebd\"&gt;Wallstreetbets is a place where retail investors learn about the unauthentic way of trading proving major financial analyst wrong.&lt;br&gt;&lt;br&gt;Listen in on what is going on in WSB's DD's &amp;amp; WAYM. Gain insights of what the most talked about stock is&lt;br&gt;&lt;br&gt;Filter out all the mess you dont want and listen in like its a radio&lt;/div&gt;",
                    "image": "https://play-lh.googleusercontent.com/t3tg3kzr57VowNsfZsS5KpgKGYpfWCtvzjLzy3tS3KXnCIVs3oINTZZLGHFLo-Aj4g=w3110-h884",
                    "created_at": "2021-05-05T17:01:33.000000Z",
                    "updated_at": null,
                    "paragraph": "You will get the first hand experience of WallStreet Radio, it will be exciting. (Open Beta Testing)",
                    "link": "https://play.google.com/store/apps/details?id=nyc.vonley.wsb"
                }
            ]
        }
    }

    fetchProjects(resultCallback, errorCallback) {
        fetch("http://charltonsmith.nyc/api/projects")
            .then(res => res.json())
            .then(resultCallback, errorCallback)
    }

    componentDidMount() {
        this.fetchProjects((response) => {
            this.setState({projects: response})
        }, (error) => {
            console.log(error)
        })
    }

    render() {
        const {projects} = this.state

        return (
            <div className="App container-fluid">
                <div className="row">
                    {
                        projects.map((project, index) => (
                            <ProjectItem index={index} project={project}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Project;