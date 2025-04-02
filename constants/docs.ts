export const Docs: { [name: string]: DocCategory } = {
  "reference": {
    label: "레퍼런스",
    docs: [
      {
        label: "레거시 API",
        path: "/reference/legacy",
        children: [
          {
            label: "객체",
            children: [
              {
                label: "Api",
                path: "/reference/legacy/Object/Api",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "canReply()", path: "/reference/legacy/Object/Api/canReply"},
                      {label: "compile()", path: "/reference/legacy/Object/Api/compile"},
                      {label: "gc()", path: "/reference/legacy/Object/Api/gc"},
                      {label: "getActiveThreadsCount()", path: "/reference/legacy/Object/Api/getActiveThreadsCount"},
                      {label: "getContext()", path: "/reference/legacy/Object/Api/getContext"},
                      {label: "getLastImage()", path: "/reference/legacy/Object/Api/getLastImage"},
                      {label: "getLastImageBitmap()", path: "/reference/legacy/Object/Api/getLastImageBitmap"},
                      {label: "getRoomList()", path: "/reference/legacy/Object/Api/getRoomList"},
                      {label: "getScriptNames()", path: "/reference/legacy/Object/Api/getScriptNames"},
                      {label: "interruptThreads()", path: "/reference/legacy/Object/Api/interruptThreads"},
                      {label: "isCompiled()", path: "/reference/legacy/Object/Api/isCompiled"},
                      {label: "isCompiling()", path: "/reference/legacy/Object/Api/isCompiling"},
                      {label: "isOn()", path: "/reference/legacy/Object/Api/isOn"},
                      {label: "isTerminated()", path: "/reference/legacy/Object/Api/isTerminated"},
                      {label: "makeNoti()", path: "/reference/legacy/Object/Api/makeNoti"},
                      {label: "markAsRead()", path: "/reference/legacy/Object/Api/markAsRead"},
                      {
                        label: "markAsReadOnID(BigInt)",
                        path: "/reference/legacy/Object/Api/markAsReadOnID(BigInt)"
                      },
                      {
                        label: "markAsReadOnID(String)",
                        path: "/reference/legacy/Object/Api/markAsReadOnID(String)"
                      },
                      {label: "off()", path: "/reference/legacy/Object/Api/off"},
                      {label: "on()", path: "/reference/legacy/Object/Api/on"},
                      {label: "papagoTranslate()", path: "/reference/legacy/Object/Api/papagoTranslate"},
                      {label: "prepare()", path: "/reference/legacy/Object/Api/prepare"},
                      {label: "reload()", path: "/reference/legacy/Object/Api/reload"},
                      {label: "replyRoom()", path: "/reference/legacy/Object/Api/replyRoom"},
                      {
                        label: "replyToID(BigInt, String, Boolean?)",
                        path: "/reference/legacy/Object/Api/replyToID(BigInt,String,Boolean$)"
                      },
                      {
                        label: "replyToID(String, String, Boolean?)",
                        path: "/reference/legacy/Object/Api/replyToID(String,String,Boolean$)"
                      },
                      {label: "showToast()", path: "/reference/legacy/Object/Api/showToast"},
                      {label: "UIThread()", path: "/reference/legacy/Object/Api/UIThread"},
                      {label: "unload()", path: "/reference/legacy/Object/Api/unload"},
                    ]
                  }
                ]
              },
              {
                label: "AppData",
                path: "/reference/legacy/Object/AppData",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "clear()", path: "/reference/legacy/Object/AppData/clear"},
                      {label: "getBoolean()", path: "/reference/legacy/Object/AppData/getBoolean"},
                      {label: "getInt()", path: "/reference/legacy/Object/AppData/getInt"},
                      {label: "getString()", path: "/reference/legacy/Object/AppData/getString"},
                      {label: "putBoolean()", path: "/reference/legacy/Object/AppData/putBoolean"},
                      {label: "putInt()", path: "/reference/legacy/Object/AppData/putInt"},
                      {label: "putString()", path: "/reference/legacy/Object/AppData/putString"},
                      {label: "remove()", path: "/reference/legacy/Object/AppData/remove"},
                    ]
                  }
                ]
              },
              {
                label: "Bridge",
                path: "/reference/legacy/Object/Bridge",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "evaluateStringIn()", path: "/reference/legacy/Object/Bridge/evaluateStringIn"},
                      {label: "getGlobalVariable()", path: "/reference/legacy/Object/Bridge/getGlobalVariable"},
                      {label: "getScopeOf()", path: "/reference/legacy/Object/Bridge/getScopeOf"},
                      {label: "getVariable()", path: "/reference/legacy/Object/Bridge/getVariable"},
                      {label: "isAllowed()", path: "/reference/legacy/Object/Bridge/isAllowed"},
                      {label: "setGlobalVariable()", path: "/reference/legacy/Object/Bridge/setGlobalVariable"},
                      {label: "setVariable()", path: "/reference/legacy/Object/Bridge/setVariable"},
                    ]
                  }
                ]
              },
              {
                label: "console",
                path: "/reference/legacy/Object/console",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "debug()", path: "/reference/legacy/Object/console/debug"},
                      {label: "error()", path: "/reference/legacy/Object/console/error"},
                      {label: "info()", path: "/reference/legacy/Object/console/info"},
                      {label: "log()", path: "/reference/legacy/Object/console/log"},
                    ]
                  }
                ]
              },
              {
                label: "DataBase",
                path: "/reference/legacy/Object/DataBase",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "appendDataBase()", path: "/reference/legacy/Object/DataBase/appendDataBase"},
                      {label: "getDataBase()", path: "/reference/legacy/Object/DataBase/getDataBase"},
                      {label: "removeDataBase()", path: "/reference/legacy/Object/DataBase/removeDataBase"},
                      {label: "setDataBase()", path: "/reference/legacy/Object/DataBase/setDataBase"},
                    ]
                  }
                ]
              },
              {
                label: "Device",
                path: "/reference/legacy/Object/Device",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "acquireWakeLock()", path: "/reference/legacy/Object/Device/acquireWakeLock"},
                      {
                        label: "getAndroidVersionCode()",
                        path: "/reference/legacy/Object/Device/getAndroidVersionCode"
                      },
                      {
                        label: "getAndroidVersionName()",
                        path: "/reference/legacy/Object/Device/getAndroidVersionName"
                      },
                      {label: "getApiLevel()", path: "/reference/legacy/Object/Device/getApiLevel"},
                      {label: "getBatteryHealth()", path: "/reference/legacy/Object/Device/getBatteryHealth"},
                      {label: "getBatteryIntent()", path: "/reference/legacy/Object/Device/getBatteryIntent"},
                      {label: "getBatteryLevel()", path: "/reference/legacy/Object/Device/getBatteryLevel"},
                      {label: "getBatteryStatus()", path: "/reference/legacy/Object/Device/getBatteryStatus"},
                      {label: "getBatteryTemp()", path: "/reference/legacy/Object/Device/getBatteryTemp"},
                      {
                        label: "getBatteryTemperature()",
                        path: "/reference/legacy/Object/Device/getBatteryTemperature"
                      },
                      {label: "getBatteryVoltage()", path: "/reference/legacy/Object/Device/getBatteryVoltage"},
                      {label: "getBuild()", path: "/reference/legacy/Object/Device/getBuild"},
                      {
                        label: "getConnectedNetworkType()",
                        path: "/reference/legacy/Object/Device/getConnectedNetworkType"
                      },
                      {label: "getFreeMemory()", path: "/reference/legacy/Object/Device/getFreeMemory"},
                      {
                        label: "getFreeStorageSpace()",
                        path: "/reference/legacy/Object/Device/getFreeStorageSpace"
                      },
                      {label: "getMaxMemory()", path: "/reference/legacy/Object/Device/getMaxMemory"},
                      {label: "getModelName()", path: "/reference/legacy/Object/Device/getModelName"},
                      {label: "getPhoneBrand()", path: "/reference/legacy/Object/Device/getPhoneBrand"},
                      {label: "getPhoneModel()", path: "/reference/legacy/Object/Device/getPhoneModel"},
                      {label: "getPlugType()", path: "/reference/legacy/Object/Device/getPlugType"},
                      {label: "getTotalMemory()", path: "/reference/legacy/Object/Device/getTotalMemory"},
                      {
                        label: "getTotalStorageSpace()",
                        path: "/reference/legacy/Object/Device/getTotalStorageSpace"
                      },
                      {label: "getWifiName()", path: "/reference/legacy/Object/Device/getWifiName"},
                      {label: "isCharging()", path: "/reference/legacy/Object/Device/isCharging"},
                      {label: "isPowerSaveMode()", path: "/reference/legacy/Object/Device/isPowerSaveMode"},
                      {label: "isScreenOn()", path: "/reference/legacy/Object/Device/isScreenOn"},
                      {label: "releaseWakeLock()", path: "/reference/legacy/Object/Device/releaseWakeLock"},
                    ]
                  }
                ]
              },
              {
                label: "FileStream",
                path: "/reference/legacy/Object/FileStream",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "append()", path: "/reference/legacy/Object/FileStream/append"},
                      {label: "copyFile()", path: "/reference/legacy/Object/FileStream/copyFile"},
                      {label: "create()", path: "/reference/legacy/Object/FileStream/create"},
                      {label: "createDir()", path: "/reference/legacy/Object/FileStream/createDir"},
                      {label: "getSdcardPath()", path: "/reference/legacy/Object/FileStream/getSdcardPath"},
                      {label: "moveFile()", path: "/reference/legacy/Object/FileStream/moveFile"},
                      {label: "read()", path: "/reference/legacy/Object/FileStream/read"},
                      {label: "readJSON()", path: "/reference/legacy/Object/FileStream/readJSON"},
                      {label: "remove()", path: "/reference/legacy/Object/FileStream/remove"},
                      {label: "save()", path: "/reference/legacy/Object/FileStream/save"},
                      {label: "saveJSON()", path: "/reference/legacy/Object/FileStream/saveJSON"},
                      {label: "write()", path: "/reference/legacy/Object/FileStream/write"},
                      {label: "writeJSON()", path: "/reference/legacy/Object/FileStream/writeJSON"},
                    ]
                  }
                ]
              },
              {
                label: "Log",
                path: "/reference/legacy/Object/Log",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "clear()", path: "/reference/legacy/Object/Log/clear"},
                      {label: "d()", path: "/reference/legacy/Object/Log/d"},
                      {label: "debug()", path: "/reference/legacy/Object/Log/debug"},
                      {label: "e()", path: "/reference/legacy/Object/Log/e"},
                      {label: "error()", path: "/reference/legacy/Object/Log/error"},
                      {label: "i()", path: "/reference/legacy/Object/Log/i"},
                      {label: "info()", path: "/reference/legacy/Object/Log/info"},
                    ]
                  }
                ]
              },
              {
                label: "Utils",
                path: "/reference/legacy/Object/Utils",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "compress()", path: "/reference/legacy/Object/Utils/compress"},
                      {label: "copyToClipboard()", path: "/reference/legacy/Object/Utils/copyToClipboard"},
                      {label: "delay()", path: "/reference/legacy/Object/Utils/delay"},
                      {
                        label: "getAndroidVersionCode()",
                        path: "/reference/legacy/Object/Utils/getAndroidVersionCode"
                      },
                      {
                        label: "getAndroidVersionName()",
                        path: "/reference/legacy/Object/Utils/getAndroidVersionName"
                      },
                      {label: "getLw()", path: "/reference/legacy/Object/Utils/getLw"},
                      {label: "getLwLined()", path: "/reference/legacy/Object/Utils/getLwLined"},
                      {label: "getPhoneBrand()", path: "/reference/legacy/Object/Utils/getPhoneBrand"},
                      {label: "getPhoneModel()", path: "/reference/legacy/Object/Utils/getPhoneModel"},
                      {label: "getRandomUserAgent()", path: "/reference/legacy/Object/Utils/getRandomUserAgent"},
                      {label: "getWeatherJSON()", path: "/reference/legacy/Object/Utils/getWeatherJSON"},
                      {label: "getWebText()", path: "/reference/legacy/Object/Utils/getWebText"},
                      {label: "getWebText2()", path: "/reference/legacy/Object/Utils/getWebText2"},
                      {label: "getZoneIdByName()", path: "/reference/legacy/Object/Utils/getZoneIdByName"},
                      {label: "isUndefined()", path: "/reference/legacy/Object/Utils/isUndefined"},
                      {label: "measureNanoTime()", path: "/reference/legacy/Object/Utils/measureNanoTime"},
                      {label: "measureTimeMillis()", path: "/reference/legacy/Object/Utils/measureTimeMillis"},
                      {label: "parse()", path: "/reference/legacy/Object/Utils/parse"},
                      {label: "randomAlphanumeric()", path: "/reference/legacy/Object/Utils/randomAlphanumeric"},
                      {label: "removeRLO()", path: "/reference/legacy/Object/Utils/removeRLO"},
                      {label: "removeTags()", path: "/reference/legacy/Object/Utils/removeTags"},
                      {label: "sleep()", path: "/reference/legacy/Object/Utils/sleep"},
                      {label: "toast()", path: "/reference/legacy/Object/Utils/toast"},
                      {label: "vibrate()", path: "/reference/legacy/Object/Utils/vibrate"},
                      {label: "xmlToJson()", path: "/reference/legacy/Object/Utils/xmlToJson"},
                    ]
                  }
                ]
              },
            ]
          },
          {
            label: "이벤트 리스너",
            children: [
              {label: "onBackPressed", path: "/reference/legacy/EventListener/onBackPressed"},
              {label: "onCreate", path: "/reference/legacy/EventListener/onCreate"},
              {label: "onDestroy", path: "/reference/legacy/EventListener/onDestroy"},
              {label: "onLoaded", path: "/reference/legacy/EventListener/onLoaded"},
              {label: "onNotificationPosted", path: "/reference/legacy/EventListener/onNotificationPosted"},
              {label: "onNotificationRemoved", path: "/reference/legacy/EventListener/onNotificationRemoved"},
              {label: "onPause", path: "/reference/legacy/EventListener/onPause"},
              {label: "onRestart", path: "/reference/legacy/EventListener/onRestart"},
              {label: "onResume", path: "/reference/legacy/EventListener/onResume"},
              {label: "onStart", path: "/reference/legacy/EventListener/onStart"},
              {label: "onStartCompile", path: "/reference/legacy/EventListener/onStartCompile"},
              {label: "onStop", path: "/reference/legacy/EventListener/onStop"},
              {label: "response", path: "/reference/legacy/EventListener/response"},
              {label: "secondTick", path: "/reference/legacy/EventListener/secondTick"},
            ]
          },
          {
            label: "인자",
            children: [
              {
                label: "ImageDB",
                path: "/reference/legacy/Argument/ImageDB",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "getImage()", path: "/reference/legacy/Argument/ImageDB/getImage"},
                      {label: "getImageBase64()", path: "/reference/legacy/Argument/ImageDB/getImageBase64"},
                      {label: "getImageBitmap()", path: "/reference/legacy/Argument/ImageDB/getImageBitmap"},
                      {label: "getImageHash()", path: "/reference/legacy/Argument/ImageDB/getImageHash"},
                      {label: "getImageMD5()", path: "/reference/legacy/Argument/ImageDB/getImageMD5"},
                      {label: "getImageSHA()", path: "/reference/legacy/Argument/ImageDB/getImageSHA"},
                      {label: "getProfileBase64()", path: "/reference/legacy/Argument/ImageDB/getProfileBase64"},
                      {label: "getProfileBitmap()", path: "/reference/legacy/Argument/ImageDB/getProfileBitmap"},
                      {label: "getProfileHash()", path: "/reference/legacy/Argument/ImageDB/getProfileHash"},
                      {label: "getProfileImage()", path: "/reference/legacy/Argument/ImageDB/getProfileImage"},
                      {label: "getProfileMD5()", path: "/reference/legacy/Argument/ImageDB/getProfileMD5"},
                      {label: "getProfileSHA()", path: "/reference/legacy/Argument/ImageDB/getProfileSHA"},
                      {label: "getRoomBitmap()", path: "/reference/legacy/Argument/ImageDB/getRoomBitmap"},
                      {label: "getRoomImage()", path: "/reference/legacy/Argument/ImageDB/getRoomImage"},
                    ]
                  }
                ]
              },
              {
                label: "Replier",
                path: "/reference/legacy/Argument/Replier",
                children: [
                  {label: "markAsRead()", path: "/reference/legacy/Argument/Replier/markAsRead"},
                  {label: "reply(String)", path: "/reference/legacy/Argument/Replier/reply(String)"},
                  {
                    label: "reply(String, String, Boolean?)",
                    path: "/reference/legacy/Argument/Replier/reply(String,String,Boolean$)"
                  },
                  {
                    label: "replyDelayed(String, Number)",
                    path: "/reference/legacy/Argument/Replier/replyDelayed(String,Number)"
                  },
                  {
                    label: "replyDelayed(String, String, Number, Boolean?)",
                    path: "/reference/legacy/Argument/Replier/replyDelayed(String,String,Number,Boolean$)"
                  },
                ]
              },
              {
                label: "SessionManager",
                path: "/reference/legacy/Argument/SessionManager",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {
                        label: "bindSession(String, android.app.Notification.Action?)",
                        path: "/reference/legacy/Argument/SessionManager/bindSession(String,Action$)"
                      },
                      {
                        label: "bindSession(String, String, android.app.Notification.Action?)",
                        path: "/reference/legacy/Argument/SessionManager/bindSession(String,String,Action$)"
                      },
                    ]
                  }
                ]
              },
            ]
          }
        ]
      },
      {
        label: "API2",
        path: "/reference/api2",
        children: [
          {
            label: "객체",
            children: [
              {
                label: "App",
                path: "/reference/api2/Object/App",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "getContext()", path: "/reference/api2/Object/App/getContext"},
                      {label: "runOnUiThread()", path: "/reference/api2/Object/App/runOnUiThread"},
                    ]
                  }
                ]
              },
              {
                label: "AppData",
                path: "/reference/api2/Object/AppData",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "clear()", path: "/reference/api2/Object/AppData/clear"},
                      {label: "getBoolean()", path: "/reference/api2/Object/AppData/getBoolean"},
                      {label: "getInt()", path: "/reference/api2/Object/AppData/getInt"},
                      {label: "getString()", path: "/reference/api2/Object/AppData/getString"},
                      {label: "putBoolean()", path: "/reference/api2/Object/AppData/putBoolean"},
                      {label: "putInt()", path: "/reference/api2/Object/AppData/putInt"},
                      {label: "putString()", path: "/reference/api2/Object/AppData/putString"},
                      {label: "remove()", path: "/reference/api2/Object/AppData/remove"},
                    ]
                  }
                ]
              },
              {
                label: "Bot",
                path: "/reference/api2/Object/Bot",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "addListener()", path: "/reference/api2/Object/Bot/addListener"},
                      {label: "canReply()", path: "/reference/api2/Object/Bot/canReply"},
                      {label: "compile()", path: "/reference/api2/Object/Bot/compile"},
                      {label: "getName()", path: "/reference/api2/Object/Bot/getName"},
                      {label: "getPower()", path: "/reference/api2/Object/Bot/getPower"},
                      {label: "listeners()", path: "/reference/api2/Object/Bot/listeners"},
                      {label: "markAsRead()", path: "/reference/api2/Object/Bot/markAsRead"},
                      {label: "off()", path: "/reference/api2/Object/Bot/off"},
                      {label: "on()", path: "/reference/api2/Object/Bot/on"},
                      {label: "prependListener()", path: "/reference/api2/Object/Bot/prependListener"},
                      {label: "removeAllListeners()", path: "/reference/api2/Object/Bot/removeAllListeners"},
                      {label: "removeListener()", path: "/reference/api2/Object/Bot/removeListener"},
                      {label: "send()", path: "/reference/api2/Object/Bot/send"},
                      {label: "setCommandPrefix()", path: "/reference/api2/Object/Bot/setCommandPrefix"},
                      {label: "setPower()", path: "/reference/api2/Object/Bot/setPower"},
                      {label: "unload()", path: "/reference/api2/Object/Bot/unload"},
                    ]
                  }
                ]
              },
              {
                label: "BotManager",
                path: "/reference/api2/Object/BotManager",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "compile()", path: "/reference/api2/Object/BotManager/compile"},
                      {label: "compileAll()", path: "/reference/api2/Object/BotManager/compileAll"},
                      {label: "getBot()", path: "/reference/api2/Object/BotManager/getBot"},
                      {label: "getBotList()", path: "/reference/api2/Object/BotManager/getBotList"},
                      {label: "getCurrentBot()", path: "/reference/api2/Object/BotManager/getCurrentBot"},
                      {label: "getPower()", path: "/reference/api2/Object/BotManager/getPower"},
                      {label: "getRooms()", path: "/reference/api2/Object/BotManager/getRooms"},
                      {label: "isCompiled()", path: "/reference/api2/Object/BotManager/isCompiled"},
                      {label: "prepare(Boolean?)", path: "/reference/api2/Object/BotManager/prepare(Boolean$)"},
                      {
                        label: "prepare(String, Boolean?)",
                        path: "/reference/api2/Object/BotManager/prepare(String,Boolean$)"
                      },
                      {label: "setPower()", path: "/reference/api2/Object/BotManager/setPower"},
                      {label: "unload()", path: "/reference/api2/Object/BotManager/unload"},
                    ]
                  }
                ]
              },
              {
                label: "Broadcast",
                path: "/reference/api2/Object/Broadcast",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "register()", path: "/reference/api2/Object/Broadcast/register"},
                      {label: "send()", path: "/reference/api2/Object/Broadcast/send"},
                      {label: "unregister()", path: "/reference/api2/Object/Broadcast/unregister"},
                      {label: "unregisterAll()", path: "/reference/api2/Object/Broadcast/unregisterAll"},
                    ]
                  }
                ]
              },
              {
                label: "console",
                path: "/reference/api2/Object/console",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "debug()", path: "/reference/api2/Object/console/debug"},
                      {label: "error()", path: "/reference/api2/Object/console/error"},
                      {label: "info()", path: "/reference/api2/Object/console/info"},
                      {label: "log()", path: "/reference/api2/Object/console/log"},
                    ]
                  }
                ]
              },
              {
                label: "Database",
                path: "/reference/api2/Object/Database",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "exists()", path: "/reference/api2/Object/Database/exists"},
                      {label: "readObject()", path: "/reference/api2/Object/Database/readObject"},
                      {label: "readString()", path: "/reference/api2/Object/Database/readString"},
                      {label: "writeObject()", path: "/reference/api2/Object/Database/writeObject"},
                      {label: "writeString()", path: "/reference/api2/Object/Database/writeString"},
                    ]
                  }
                ]
              },
              {
                label: "Device",
                path: "/reference/api2/Object/Device",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "acquireWakeLock()", path: "/reference/api2/Object/Device/acquireWakeLock"},
                      {
                        label: "getAndroidVersionCode()",
                        path: "/reference/api2/Object/Device/getAndroidVersionCode"
                      },
                      {
                        label: "getAndroidVersionName()",
                        path: "/reference/api2/Object/Device/getAndroidVersionName"
                      },
                      {label: "getApiLevel()", path: "/reference/api2/Object/Device/getApiLevel"},
                      {label: "getBatteryHealth()", path: "/reference/api2/Object/Device/getBatteryHealth"},
                      {label: "getBatteryIntent()", path: "/reference/api2/Object/Device/getBatteryIntent"},
                      {label: "getBatteryLevel()", path: "/reference/api2/Object/Device/getBatteryLevel"},
                      {label: "getBatteryStatus()", path: "/reference/api2/Object/Device/getBatteryStatus"},
                      {label: "getBatteryTemp()", path: "/reference/api2/Object/Device/getBatteryTemp"},
                      {
                        label: "getBatteryTemperature()",
                        path: "/reference/api2/Object/Device/getBatteryTemperature"
                      },
                      {label: "getBatteryVoltage()", path: "/reference/api2/Object/Device/getBatteryVoltage"},
                      {label: "getBuild()", path: "/reference/api2/Object/Device/getBuild"},
                      {
                        label: "getConnectedNetworkType()",
                        path: "/reference/api2/Object/Device/getConnectedNetworkType"
                      },
                      {label: "getFreeMemory()", path: "/reference/api2/Object/Device/getFreeMemory"},
                      {label: "getFreeStorageSpace()", path: "/reference/api2/Object/Device/getFreeStorageSpace"},
                      {label: "getMaxMemory()", path: "/reference/api2/Object/Device/getMaxMemory"},
                      {label: "getModelName()", path: "/reference/api2/Object/Device/getModelName"},
                      {label: "getPhoneBrand()", path: "/reference/api2/Object/Device/getPhoneBrand"},
                      {label: "getPhoneModel()", path: "/reference/api2/Object/Device/getPhoneModel"},
                      {label: "getPlugType()", path: "/reference/api2/Object/Device/getPlugType"},
                      {label: "getTotalMemory()", path: "/reference/api2/Object/Device/getTotalMemory"},
                      {
                        label: "getTotalStorageSpace()",
                        path: "/reference/api2/Object/Device/getTotalStorageSpace"
                      },
                      {label: "getWifiName()", path: "/reference/api2/Object/Device/getWifiName"},
                      {label: "isCharging()", path: "/reference/api2/Object/Device/isCharging"},
                      {label: "isPowerSaveMode()", path: "/reference/api2/Object/Device/isPowerSaveMode"},
                      {label: "isScreenOn()", path: "/reference/api2/Object/Device/isScreenOn"},
                      {label: "releaseWakeLock()", path: "/reference/api2/Object/Device/releaseWakeLock"},
                    ]
                  }
                ]
              },
              {
                label: "Event",
                path: "/reference/api2/Object/Event",
                children: [
                  {
                    label: "상수",
                    children: [
                      {label: "Activity.BACK_PRESSED", path: "/reference/api2/Object/Event/Activity.BACK_PRESSED"},
                      {label: "Activity.CREATE", path: "/reference/api2/Object/Event/Activity.CREATE"},
                      {label: "Activity.DESTROY", path: "/reference/api2/Object/Event/Activity.DESTROY"},
                      {label: "Activity.PAUSE", path: "/reference/api2/Object/Event/Activity.PAUSE"},
                      {label: "Activity.RESTART", path: "/reference/api2/Object/Event/Activity.RESTART"},
                      {label: "Activity.RESUME", path: "/reference/api2/Object/Event/Activity.RESUME"},
                      {label: "Activity.START", path: "/reference/api2/Object/Event/Activity.START"},
                      {label: "Activity.STOP", path: "/reference/api2/Object/Event/Activity.STOP"},
                      {label: "BATTERY_LEVEL_CHANGED", path: "/reference/api2/Object/Event/BATTERY_LEVEL_CHANGED"},
                      {label: "COMMAND", path: "/reference/api2/Object/Event/COMMAND"},
                      {label: "MESSAGE", path: "/reference/api2/Object/Event/MESSAGE"},
                      {label: "NOTIFICATION_POSTED", path: "/reference/api2/Object/Event/NOTIFICATION_POSTED"},
                      {label: "NOTIFICATION_REMOVED", path: "/reference/api2/Object/Event/NOTIFICATION_REMOVED"},
                      {label: "START_COMPILE", path: "/reference/api2/Object/Event/START_COMPILE"},
                      {label: "TICK", path: "/reference/api2/Object/Event/TICK"},
                    ]
                  },
                ]
              },
              {
                label: "FileStream",
                path: "/reference/api2/Object/FileStream",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "append()", path: "/reference/api2/Object/FileStream/append"},
                      {label: "copyFile()", path: "/reference/api2/Object/FileStream/copyFile"},
                      {label: "create()", path: "/reference/api2/Object/FileStream/create"},
                      {label: "createDir()", path: "/reference/api2/Object/FileStream/createDir"},
                      {label: "getSdcardPath()", path: "/reference/api2/Object/FileStream/getSdcardPath"},
                      {label: "moveFile()", path: "/reference/api2/Object/FileStream/moveFile"},
                      {label: "read()", path: "/reference/api2/Object/FileStream/read"},
                      {label: "readJSON()", path: "/reference/api2/Object/FileStream/readJSON"},
                      {label: "remove()", path: "/reference/api2/Object/FileStream/remove"},
                      {label: "save()", path: "/reference/api2/Object/FileStream/save"},
                      {label: "saveJSON()", path: "/reference/api2/Object/FileStream/saveJSON"},
                      {label: "write()", path: "/reference/api2/Object/FileStream/write"},
                      {label: "writeJSON()", path: "/reference/api2/Object/FileStream/writeJSON"},
                    ]
                  }
                ]
              },
              {
                label: "GlobalLog",
                path: "/reference/api2/Object/GlobalLog",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "clear()", path: "/reference/api2/Object/GlobalLog/clear"},
                      {label: "d()", path: "/reference/api2/Object/GlobalLog/d"},
                      {label: "debug()", path: "/reference/api2/Object/GlobalLog/debug"},
                      {label: "e()", path: "/reference/api2/Object/GlobalLog/e"},
                      {label: "error()", path: "/reference/api2/Object/GlobalLog/error"},
                      {label: "i()", path: "/reference/api2/Object/GlobalLog/i"},
                      {label: "info()", path: "/reference/api2/Object/GlobalLog/info"},
                    ]
                  }
                ]
              },
              {
                label: "Http",
                path: "/reference/api2/Object/Http",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {
                        label: "request(Object, Function)",
                        path: "/reference/api2/Object/Http/request(Object,Function)"
                      },
                      {
                        label: "request(String, Function)",
                        path: "/reference/api2/Object/Http/request(String,Function)"
                      },
                      {label: "requestSync(Object)", path: "/reference/api2/Object/Http/requestSync(Object)"},
                      {label: "requestSync(String)", path: "/reference/api2/Object/Http/requestSync(String)"},
                    ]
                  }
                ]
              },
              {
                label: "Log",
                path: "/reference/api2/Object/Log",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "clear()", path: "/reference/api2/Object/Log/clear"},
                      {label: "d()", path: "/reference/api2/Object/Log/d"},
                      {label: "debug()", path: "/reference/api2/Object/Log/debug"},
                      {label: "e()", path: "/reference/api2/Object/Log/e"},
                      {label: "error()", path: "/reference/api2/Object/Log/error"},
                      {label: "i()", path: "/reference/api2/Object/Log/i"},
                      {label: "info()", path: "/reference/api2/Object/Log/info"},
                    ]
                  },
                ]
              },
              {
                label: "Security",
                path: "/reference/api2/Object/Security",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "aesDecode()", path: "/reference/api2/Object/Security/aesDecode"},
                      {label: "aesEncode()", path: "/reference/api2/Object/Security/aesEncode"},
                      {label: "ariaDecode()", path: "/reference/api2/Object/Security/ariaDecode"},
                      {label: "ariaDecodeRaw()", path: "/reference/api2/Object/Security/ariaDecodeRaw"},
                      {label: "ariaEncode()", path: "/reference/api2/Object/Security/ariaEncode"},
                      {label: "ariaEncodeRaw()", path: "/reference/api2/Object/Security/ariaEncodeRaw"},
                      {label: "base32Decode()", path: "/reference/api2/Object/Security/base32Decode"},
                      {label: "base32Encode()", path: "/reference/api2/Object/Security/base32Encode"},
                      {label: "base64Decode()", path: "/reference/api2/Object/Security/base64Decode"},
                      {label: "base64Encode()", path: "/reference/api2/Object/Security/base64Encode"},
                      {label: "des3Decode()", path: "/reference/api2/Object/Security/des3Decode"},
                      {label: "des3Encode()", path: "/reference/api2/Object/Security/des3Encode"},
                      {label: "desDecode()", path: "/reference/api2/Object/Security/desDecode"},
                      {label: "desEncode()", path: "/reference/api2/Object/Security/desEncode"},
                      {label: "desKey()", path: "/reference/api2/Object/Security/desKey"},
                      {label: "eccDecode()", path: "/reference/api2/Object/Security/eccDecode"},
                      {label: "eccEncode()", path: "/reference/api2/Object/Security/eccEncode"},
                      {label: "getDesKey()", path: "/reference/api2/Object/Security/getDesKey"},
                      {label: "hashCode()", path: "/reference/api2/Object/Security/hashCode"},
                      {label: "md2()", path: "/reference/api2/Object/Security/md2"},
                      {label: "md5()", path: "/reference/api2/Object/Security/md5"},
                      {label: "md55()", path: "/reference/api2/Object/Security/md55"},
                      {label: "rc4Decode()", path: "/reference/api2/Object/Security/rc4Decode"},
                      {label: "rc4Encode()", path: "/reference/api2/Object/Security/rc4Encode"},
                      {label: "seedDecode()", path: "/reference/api2/Object/Security/seedDecode"},
                      {label: "seedEncode()", path: "/reference/api2/Object/Security/seedEncode"},
                      {label: "sha()", path: "/reference/api2/Object/Security/sha"},
                      {label: "sha3_224()", path: "/reference/api2/Object/Security/sha3_224"},
                      {label: "sha3_256()", path: "/reference/api2/Object/Security/sha3_256"},
                      {label: "sha3_384()", path: "/reference/api2/Object/Security/sha3_384"},
                      {label: "sha3_512()", path: "/reference/api2/Object/Security/sha3_512"},
                      {label: "sha256()", path: "/reference/api2/Object/Security/sha256"},
                      {label: "sha384()", path: "/reference/api2/Object/Security/sha384"},
                      {label: "sha512()", path: "/reference/api2/Object/Security/sha512"},
                      {label: "ulid()", path: "/reference/api2/Object/Security/ulid"},
                      {label: "uuid()", path: "/reference/api2/Object/Security/uuid"},
                      {label: "uuidv7()", path: "/reference/api2/Object/Security/uuidv7"},
                    ]
                  }
                ]
              },
            ]
          },
          {
            label: "이벤트",
            children: [
              {label: "activityBackPressed", path: "/reference/api2/Event/activityBackPressed"},
              {label: "activityCreate", path: "/reference/api2/Event/activityCreate"},
              {label: "activityDestroy", path: "/reference/api2/Event/activityDestroy"},
              {label: "activityPause", path: "/reference/api2/Event/activityPause"},
              {label: "activityRestart", path: "/reference/api2/Event/activityRestart"},
              {label: "activityResume", path: "/reference/api2/Event/activityResume"},
              {label: "activityStart", path: "/reference/api2/Event/activityStart"},
              {label: "activityStop", path: "/reference/api2/Event/activityStop"},
              {label: "batteryLevelChanged", path: "/reference/api2/Event/batteryLevelChanged"},
              {label: "command", path: "/reference/api2/Event/command"},
              {label: "message", path: "/reference/api2/Event/message"},
              {label: "notificationPosted", path: "/reference/api2/Event/notificationPosted"},
              {label: "notificationRemoved", path: "/reference/api2/Event/notificationRemoved"},
              {label: "startCompile", path: "/reference/api2/Event/startCompile"},
              {label: "tick", path: "/reference/api2/Event/tick"}
            ]
          },
          {
            label: "인자",
            children: [
              {
                label: "Author",
                path: "/reference/api2/Argument/Author",
                children: [
                  {
                    label: "프로퍼티",
                    children: [
                      {label: "avatar", path: "/reference/api2/Argument/Author/avatar"},
                      {label: "hash", path: "/reference/api2/Argument/Author/hash"},
                      {label: "name", path: "/reference/api2/Argument/Author/name"},
                    ]
                  }
                ]
              },
              {
                label: "Command",
                path: "/reference/api2/Argument/Command",
                children: [
                  {
                    label: "프로퍼티",
                    children: [
                      {label: "args", path: "/reference/api2/Argument/Command/args"},
                      {label: "author", path: "/reference/api2/Argument/Command/author"},
                      {label: "channelId", path: "/reference/api2/Argument/Command/channelId"},
                      {label: "command", path: "/reference/api2/Argument/Command/command"},
                      {label: "content", path: "/reference/api2/Argument/Command/content"},
                      {label: "image", path: "/reference/api2/Argument/Command/image"},
                      {label: "isDebugRoom", path: "/reference/api2/Argument/Command/isDebugRoom"},
                      {label: "isGroupChat", path: "/reference/api2/Argument/Command/isGroupChat"},
                      {label: "isMention", path: "/reference/api2/Argument/Command/isMention"},
                      {label: "isMultiChat", path: "/reference/api2/Argument/Command/isMultiChat"},
                      {label: "logId", path: "/reference/api2/Argument/Command/logId"},
                      {label: "packageName", path: "/reference/api2/Argument/Command/packageName"},
                      {label: "room", path: "/reference/api2/Argument/Command/room"},
                    ]
                  },
                  {
                    label: "메소드",
                    children: [
                      {label: "markAsRead()", path: "/reference/api2/Argument/Command/markAsRead"},
                      {label: "reply()", path: "/reference/api2/Argument/Command/reply"},
                    ]
                  }
                ]
              },
              {
                label: "Image",
                path: "/reference/api2/Argument/Image",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "getBase64()", path: "/reference/api2/Argument/Image/getBase64"},
                      {label: "getBitmap()", path: "/reference/api2/Argument/Image/getBitmap"},
                    ]
                  }
                ]
              },
              {
                label: "Message",
                path: "/reference/api2/Argument/Message",
                children: [
                  {
                    label: "프로퍼티",
                    children: [
                      {label: "author", path: "/reference/api2/Argument/Message/author"},
                      {label: "channelId", path: "/reference/api2/Argument/Message/channelId"},
                      {label: "content", path: "/reference/api2/Argument/Message/content"},
                      {label: "image", path: "/reference/api2/Argument/Message/image"},
                      {label: "isDebugRoom", path: "/reference/api2/Argument/Message/isDebugRoom"},
                      {label: "isGroupChat", path: "/reference/api2/Argument/Message/isGroupChat"},
                      {label: "isMention", path: "/reference/api2/Argument/Message/isMention"},
                      {label: "isMultiChat", path: "/reference/api2/Argument/Message/isMultiChat"},
                      {label: "logId", path: "/reference/api2/Argument/Message/logId"},
                      {label: "packageName", path: "/reference/api2/Argument/Message/packageName"},
                      {label: "room", path: "/reference/api2/Argument/Message/room"},
                    ]
                  },
                  {
                    label: "메소드",
                    children: [
                      {label: "markAsRead()", path: "/reference/api2/Argument/Message/markAsRead"},
                      {label: "reply()", path: "/reference/api2/Argument/Message/reply"},
                    ]
                  }
                ]
              },
              {
                label: "SessionManager",
                path: "/reference/api2/Argument/SessionManager",
                children: [
                  {
                    label: "bindSession(String, android.app.Notification.Action?)",
                    path: "/reference/api2/Argument/SessionManager/bindSession(String,Action$)"
                  },
                  {
                    label: "bindSession(String, String, android.app.Notification.Action?)",
                    path: "/reference/api2/Argument/SessionManager/bindSession(String,String,Action$)"
                  },
                ]
              },
            ]
          }
        ]
      },
      {
        label: "StarLight",
        path: "/reference/starlight",
        children: [
          {
            label: "객체",
            children: [
              {
                label: "Env",
                path: "/reference/starlight/Object/Env",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "get()", path: "/reference/starlight/Object/Env/get"},
                      {label: "parseFile()", path: "/reference/starlight/Object/Env/parseFile"},
                      {label: "parseString()", path: "/reference/starlight/Object/Env/parseString"},
                    ]
                  }
                ]
              },
              {
                label: "Java",
                path: "/reference/starlight/Object/Java",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "type()", path: "/reference/starlight/Object/Java/type"},
                    ]
                  }
                ]
              },
              {
                label: "Language",
                path: "/reference/starlight/Object/Language",
                children: [
                  {
                    label: "프로퍼티",
                    children: [
                      {label: "fileExtension", path: "/reference/starlight/Object/Language/fileExtension"},
                      {label: "id", path: "/reference/starlight/Object/Language/id"},
                      {label: "name", path: "/reference/starlight/Object/Language/name"},
                      {label: "requireRelease", path: "/reference/starlight/Object/Language/requireRelease"},
                    ]
                  },
                  {
                    label: "메소드",
                    children: [
                      {label: "callFunction()", path: "/reference/starlight/Object/Language/callFunction"},
                      {label: "destroy()", path: "/reference/starlight/Object/Language/destroy"},
                      {label: "eval()", path: "/reference/starlight/Object/Language/eval"},
                      {label: "release()", path: "/reference/starlight/Object/Language/release"},
                    ]
                  }
                ]
              },
              {
                label: "Languages",
                path: "/reference/starlight/Object/Languages",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "getSelf()", path: "/reference/starlight/Object/Languages/getSelf"},
                      {label: "ofId()", path: "/reference/starlight/Object/Languages/ofId"},
                    ]
                  }
                ]
              },
              {
                label: "Notification",
                path: "/reference/starlight/Object/Notification",
                children: [
                  {
                    label: "상수",
                    children: [
                      {label: "STATE_CREATED", path: "/reference/starlight/Object/Notification/STATE_CREATED"},
                      {label: "STATE_DEFAULT", path: "/reference/starlight/Object/Notification/STATE_DEFAULT"},
                      {label: "STATE_DISMISSED", path: "/reference/starlight/Object/Notification/STATE_DISMISSED"},
                    ]
                  },
                  {
                    label: "프로퍼티",
                    children: [
                      {label: "state", path: "/reference/starlight/Object/Notification/state"},
                    ]
                  },
                  {
                    label: "메소드",
                    children: [
                      {label: "create()", path: "/reference/starlight/Object/Notification/create"},
                      {label: "delete()", path: "/reference/starlight/Object/Notification/delete"},
                      {label: "update()", path: "/reference/starlight/Object/Notification/update"},
                    ]
                  },
                ]
              },
              {
                label: "NotificationBuilder",
                path: "/reference/starlight/Object/NotificationBuilder",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "build()", path: "/reference/starlight/Object/NotificationBuilder/build"},
                      {label: "lights()", path: "/reference/starlight/Object/NotificationBuilder/lights"},
                      {label: "onClick()", path: "/reference/starlight/Object/NotificationBuilder/onClick"},
                      {label: "onDismiss()", path: "/reference/starlight/Object/NotificationBuilder/onDismiss"},
                      {label: "setText()", path: "/reference/starlight/Object/NotificationBuilder/setText"},
                      {label: "setTitle()", path: "/reference/starlight/Object/NotificationBuilder/setTitle"},
                    ]
                  }
                ]
              },
              {
                label: "Platform",
                path: "/reference/starlight/Object/Platform",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "getName()", path: "/reference/starlight/Object/Platform/getName"},
                      {label: "getUptime()", path: "/reference/starlight/Object/Platform/getUptime"},
                      {label: "getVersion()", path: "/reference/starlight/Object/Platform/getVersion"},
                    ]
                  }
                ]
              },
              {
                label: "Plugin",
                path: "/reference/starlight/Object/Plugin",
                children: [
                  {
                    label: "프로퍼티",
                    children: [
                      {label: "info", path: "/reference/starlight/Object/Plugin/info"},
                    ]
                  },
                  {
                    label: "메소드",
                    children: [
                      {label: "getAsset()", path: "/reference/starlight/Object/Plugin/getAsset"},
                      {
                        label: "getExternalDataDirectory()",
                        path: "/reference/starlight/Object/Plugin/getExternalDataDirectory"
                      },
                      {
                        label: "getInternalDataDirectory()",
                        path: "/reference/starlight/Object/Plugin/getInternalDataDirectory"
                      },
                      {label: "isEnabled()", path: "/reference/starlight/Object/Plugin/isEnabled"},
                    ]
                  }
                ]
              },
              {
                label: "Plugins",
                path: "/reference/starlight/Object/Plugins",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "getAll()", path: "/reference/starlight/Object/Plugins/getAll"},
                      {label: "ofId()", path: "/reference/starlight/Object/Plugins/ofId"},
                      {label: "ofName()", path: "/reference/starlight/Object/Plugins/ofName"}
                    ]
                  }
                ]
              },
              {
                label: "Project",
                path: "/reference/starlight/Object/Project",
                children: [
                  {
                    label: "프로퍼티",
                    children: [
                      {label: "config", path: "/reference/starlight/Object/Project/config"},
                      {label: "directory", path: "/reference/starlight/Object/Project/directory"},
                      {label: "info", path: "/reference/starlight/Object/Project/info"},
                      {label: "isCompiled", path: "/reference/starlight/Object/Project/isCompiled"},
                      {label: "logger", path: "/reference/starlight/Object/Project/logger"},
                    ]
                  },
                  {
                    label: "메소드",
                    children: [
                      {label: "activeJobs()", path: "/reference/starlight/Object/Project/activeJobs"},
                      {label: "callFunction()", path: "/reference/starlight/Object/Project/callFunction"},
                      {label: "compile()", path: "/reference/starlight/Object/Project/compile"},
                      {label: "destroy()", path: "/reference/starlight/Object/Project/destroy"},
                      {label: "getDataDirectory()", path: "/reference/starlight/Object/Project/getDataDirectory"},
                      {label: "getLanguage()", path: "/reference/starlight/Object/Project/getLanguage"},
                      {label: "getScope()", path: "/reference/starlight/Object/Project/getScope"},
                      {
                        label: "isEventCallAllowed()",
                        path: "/reference/starlight/Object/Project/isEventCallAllowed"
                      },
                      {label: "loadInfo()", path: "/reference/starlight/Object/Project/loadInfo"},
                      {label: "rename()", path: "/reference/starlight/Object/Project/rename"},
                      {label: "requestUpdate()", path: "/reference/starlight/Object/Project/requestUpdate"},
                      {label: "saveInfo()", path: "/reference/starlight/Object/Project/saveInfo"},
                      {label: "setEnabled()", path: "/reference/starlight/Object/Project/setEnabled"},
                      {label: "stopAllJobs()", path: "/reference/starlight/Object/Project/stopAllJobs"},
                    ]
                  }
                ]
              },
              {
                label: "Projects",
                path: "/reference/starlight/Object/Projects",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "getSelf()", path: "/reference/starlight/Object/Projects/getSelf"},
                      {label: "ofId()", path: "/reference/starlight/Object/Projects/ofId"},
                      {label: "ofName()", path: "/reference/starlight/Object/Projects/ofName"}
                    ]
                  }
                ]
              },
            ]
          },
          {
            label: "이벤트 리스너",
            children: [
              {label: "onMessage", path: "/reference/starlight/EventListener/onMessage"},
              {label: "onMessageDeleted", path: "/reference/starlight/EventListener/onMessageDeleted"},
              {label: "onNotificationPosted", path: "/reference/starlight/EventListener/onNotificationPosted"},
              {label: "onStartCompile", path: "/reference/starlight/EventListener/onStartCompile"},
            ]
          },
          {
            label: "인자",
            children: [
              {
                label: "ChatRoom",
                path: "/reference/starlight/Argument/ChatRoom",
                children: [
                  {
                    label: "프로퍼티",
                    children: [
                      {label: "id", path: "/reference/starlight/Argument/ChatRoom/id"},
                      {label: "isDebugRoom", path: "/reference/starlight/Argument/ChatRoom/isDebugRoom"},
                      {label: "isGroupChat", path: "/reference/starlight/Argument/ChatRoom/isGroupChat"},
                      {label: "name", path: "/reference/starlight/Argument/ChatRoom/name"},
                    ]
                  },
                  {
                    label: "메소드",
                    children: [
                      {label: "markAsRead()", path: "/reference/starlight/Argument/ChatRoom/markAsRead"},
                      {label: "send()", path: "/reference/starlight/Argument/ChatRoom/send"},
                    ]
                  }
                ]
              },
              {
                label: "ChatSender",
                path: "/reference/starlight/Argument/ChatSender",
                children: [
                  {
                    label: "프로퍼티",
                    children: [
                      {label: "id", path: "/reference/starlight/Argument/ChatSender/id"},
                      {label: "name", path: "/reference/starlight/Argument/ChatSender/name"},
                      {label: "profileBase64", path: "/reference/starlight/Argument/ChatSender/profileBase64"},
                      {label: "profileBitmap", path: "/reference/starlight/Argument/ChatSender/profileBitmap"},
                      {label: "profileHash", path: "/reference/starlight/Argument/ChatSender/profileHash"},
                    ]
                  }
                ]
              },
              {
                label: "Message",
                path: "/reference/starlight/Argument/Message",
                children: [
                  {
                    label: "프로퍼티",
                    children: [
                      {label: "chatLogId", path: "/reference/starlight/Argument/Message/chatLogId"},
                      {label: "hasMention", path: "/reference/starlight/Argument/Message/hasMention"},
                      {label: "image", path: "/reference/starlight/Argument/Message/image"},
                      {label: "message", path: "/reference/starlight/Argument/Message/message"},
                      {label: "packageName", path: "/reference/starlight/Argument/Message/packageName"},
                      {label: "room", path: "/reference/starlight/Argument/Message/room"},
                      {label: "sender", path: "/reference/starlight/Argument/Message/sender"},
                    ]
                  }
                ]
              },
              {
                label: "DeletedMessage",
                path: "/reference/starlight/Argument/DeletedMessage",
                children: [
                  {
                    label: "프로퍼티",
                    children: [
                      {label: "chatLogId", path: "/reference/starlight/Argument/DeletedMessage/chatLogId"},
                      {label: "message", path: "/reference/starlight/Argument/DeletedMessage/message"},
                      {label: "packageName", path: "/reference/starlight/Argument/DeletedMessage/packageName"},
                      {label: "room", path: "/reference/starlight/Argument/DeletedMessage/room"},
                      {label: "sender", path: "/reference/starlight/Argument/DeletedMessage/sender"},
                    ]
                  }
                ]
              },
            ]
          },
          {
            label: "플러그인",
            children: [
              {label: "Discord", path: "/reference/starlight/Plugin/Discord"},
              {label: "V8", path: "/reference/starlight/Plugin/V8"}
            ]
          }
        ]
      },
      {
        label: "Iris",
        path: "/reference/iris",
        children: [
          {label: "시작하기", path: "/reference/iris/get-started"},
          {
            label: "HTTP API 엔드포인트",
            children: [
              {label: "/decrypt", path: "/reference/iris/Endpoint/decrypt"},
              {label: "/query", path: "/reference/iris/Endpoint/query"},
              {label: "/reply", path: "/reference/iris/Endpoint/reply"},
            ]
          },
          {
            label: "구성 API 엔드포인트",
            children: [
              {label: "/config", path: "/reference/iris/Endpoint/config"},
              {label: "/config/botport", path: "/reference/iris/Endpoint/config/botport"},
              {label: "/config/dbrate", path: "/reference/iris/Endpoint/config/dbrate"},
              {label: "/config/endpoint", path: "/reference/iris/Endpoint/config/endpoint"},
              {label: "/config/sendrate", path: "/reference/iris/Endpoint/config/sendrate"},
            ]
          },
          {
            label: "WebSocket 엔드포인트",
            children: [
              {label: "/ws", path: "/reference/iris/Endpoint/ws"},
            ]
          }
        ]
      }
    ],
  },
  "learn": {
    label: "자습서",
    docs: [
      {
        label: "RhinoJS 기초",
        path: "/learn/rhino/basic",
        children: [
          {label: "JavaScript와 카카오톡봇", path: "/learn/rhino/basic/1-javascript-and-kakaotalkbot"},
          {label: "개발 준비", path: "/learn/rhino/basic/2-ready-for-dev"},
          {label: "스크립트 작성", path: "/learn/rhino/basic/3-write-script"},
          {label: "JavaScript의 기본 문법", path: "/learn/rhino/basic/4-basic-syntax-of-javascript"},
          {label: "변수와 자료형", path: "/learn/rhino/basic/5-variable-and-data-type"},
          {label: "연산자", path: "/learn/rhino/basic/6-operator"},
          {label: "문자열", path: "/learn/rhino/basic/7-string"},
          {label: "배열", path: "/learn/rhino/basic/8-array"},
          {label: "조건문", path: "/learn/rhino/basic/9-conditionals"},
          {label: "반복문", path: "/learn/rhino/basic/10-loops"},
          {label: "함수", path: "/learn/rhino/basic/11-function"},
          {label: "객체 기초", path: "/learn/rhino/basic/12-basic-object"},
          {label: "마치며", path: "/learn/rhino/basic/conclusion", hide: true},
        ]
      },
    ]
  }
} as const;