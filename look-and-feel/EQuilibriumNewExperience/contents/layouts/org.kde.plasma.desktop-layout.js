var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {

            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "606",
                    "DialogWidth": "720"
                },
                "/General": {
                    "ToolBoxButtonState": "top",
                    "ToolBoxButtonX": "1234"
                },
                "/Wallpaper/General": {
                    "Color": "0,0,0",
                    "FillMode": "2",
                    "SlideInterval": "1",
                    "SlidePaths": "0"
                },
                "/Wallpaper/org.kde.color/General": {
                    "Color": "0,0,0"
                },
                "/Wallpaper/org.kde.image/General": {
                    "FillMode": "2",
                    "Image": "file:///usr/share/plasma/look-and-feel/EQuilibriumNewExperience/contents/bg/EQS4.png",
                    "SlideInterval": "1"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "1",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "14"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "14"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Appearance": {
                            "boldFontWeight": "true",
                            "horizontalScreenWidthPercent": "0.196",
                            "showControlButtons": "false"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/Appearance": {
                            "boldFontWeight": "true",
                            "horizontalScreenWidthPercent": "0.196",
                            "showControlButtons": "false",
                            "showWindowIcon": "true"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.activeWindowControl"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "maxStripes": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.minimizeall"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Appearance": {
                            "boldText": "true",
                            "showDate": "true",
                            "showSeconds": "true"
                        },
                        "/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Appearance": {
                            "boldText": "true",
                            "showDate": "true",
                            "showSeconds": "true"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Appearance": {
                            "boldText": "true",
                            "showDate": "true",
                            "showSeconds": "true"
                        },
                        "/Configuration/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration/Appearance": {
                            "boldText": "true",
                            "showDate": "true",
                            "showSeconds": "true"
                        },
                        "/Configuration/Configuration/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration/Configuration/Appearance": {
                            "boldText": "true",
                            "showDate": "true",
                            "showSeconds": "true"
                        },
                        "/Configuration/Configuration/Configuration/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/Configuration/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration/Configuration/Configuration/Appearance": {
                            "showDate": "true",
                            "showSeconds": "true"
                        },
                        "/Configuration/Configuration/Configuration/Configuration/Configuration/Configuration/Configuration/Appearance": {
                            "showDate": "true",
                            "showSeconds": "true"
                        },
                        "/Configuration/Configuration/Configuration/Configuration/Configuration/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "84",
                    "DialogWidth": ""
                }
            },
            "height": 2.3333333333333335,
            "hiding": "windowscover",
            "location": "bottom",
            "maximumLength": 0.5555555555555556,
            "minimumLength": 77.66666666666667,
            "offset": 2.3333333333333335
        },
        {
            "alignment": "right",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Appearance": {
                            "compactView": "true"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Appearance": {
                            "compactView": "true"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "icon": "/usr/share/plasma/look-and-feel/EQuilibriumNewExperience/contents/ic/application-menu.svg"
                        }
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false"
                        },
                        "/Configuration/General": {
                            "expanding": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "length": "204"
                        },
                        "/Configuration/Configuration/General": {
                            "length": "204"
                        },
                        "/Configuration/General": {
                            "length": "204"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/General": {
                            "launcherUrls": "file:///usr/share/applications/chrome-okkolgldfknecfjnhhglfopimelbaceh-Default.desktop"
                        },
                        "/Configuration/General": {
                            "launcherUrls": "file:///usr/share/applications/chrome-okkolgldfknecfjnhhglfopimelbaceh-Default.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.quicklaunch"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "customButtonImage": "applications-internet",
                            "favoritesPortedToKAstats": "true",
                            "gridSize": "0",
                            "useCustomButtonImage": "true"
                        }
                    },
                    "plugin": "eqmenu"
                },
                {
                    "config": {
                        "/": {
                            "formfactor": "0",
                            "immutability": "1",
                            "lastScreen": "-1",
                            "wallpaperplugin": ""
                        },
                        "/Configuration": {
                            "formfactor": "0",
                            "immutability": "1",
                            "lastScreen": "-1",
                            "wallpaperplugin": ""
                        },
                        "/Configuration/Configuration": {
                            "formfactor": "0",
                            "immutability": "1",
                            "lastScreen": "-1",
                            "wallpaperplugin": ""
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "formfactor": "0",
                            "immutability": "1",
                            "lastScreen": "-1",
                            "wallpaperplugin": ""
                        },
                        "/Configuration/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "viewMode": "3"
                        },
                        "/Configuration/Configuration/General": {
                            "viewMode": "3"
                        },
                        "/Configuration/General": {
                            "viewMode": "3"
                        }
                    },
                    "plugin": "org.kde.plasma.folder"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "40"
                        },
                        "/Configuration/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "40"
                        },
                        "/Configuration/Configuration/General": {
                            "expanding": "false",
                            "length": "40"
                        },
                        "/Configuration/General": {
                            "expanding": "false",
                            "length": "40"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "favorites": "preferred://browser,systemsettings.desktop,org.kde.dolphin.desktop,org.kde.kate.desktop,org.kde.discover.desktop",
                            "icon": "/usr/share/plasma/look-and-feel/EQuilibriumNewExperience/contents/ic/EQ48b.png"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "3",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "",
                    "DialogWidth": "170"
                }
            },
            "height": 2.3,
            "hiding": "normal",
            "location": "left",
            "maximumLength": 0.5555555555555556,
            "minimumLength": 50,
            "offset": 0
        },
        {
            "alignment": "right",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Appearance": {
                            "autoFillWidth": "true",
                            "buttonSize": "1",
                            "buttonsPosition": "1",
                            "controlButtonsSpacing": "0",
                            "showButtonOnlyWhenMaximized": "true",
                            "showMaximize": "true",
                            "showMinimize": "true",
                            "showWindowIcon": "false",
                            "showWindowTitle": "false"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/Appearance": {
                            "autoFillWidth": "true",
                            "buttonSize": "1",
                            "buttonsPosition": "1",
                            "controlButtonsSpacing": "0",
                            "doNotHideControlButtons": "false",
                            "showMaximize": "true",
                            "showMinimize": "true",
                            "showWindowIcon": "false",
                            "showWindowTitle": "false"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.activeWindowControl"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "84",
                    "DialogWidth": ""
                }
            },
            "height": 1.7777777777777777,
            "hiding": "windowscover",
            "location": "top",
            "maximumLength": 5.388888888888889,
            "minimumLength": 5.333333333333333,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);

