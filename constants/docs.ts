export const Docs: { [name: string]: DocCategory } = {
  "reference": {
    label: "레퍼런스",
    docs: [
      {
        label: "레거시 API",
        path: "/legacy",
        children: [
          {
            label: "객체",
            children: [
              {
                label: "Api",
                path: "/legacy/Object/Api",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "canReply()", path: "/legacy/Object/Api/canReply"},
                      {label: "compile()", path: "/legacy/Object/Api/compile"},
                      {label: "gc()", path: "/legacy/Object/Api/gc"},
                      {label: "getActiveThreadsCount()", path: "/legacy/Object/Api/getActiveThreadsCount"},
                      {label: "getContext()", path: "/legacy/Object/Api/getContext"},
                      {label: "getLastImage()", path: "/legacy/Object/Api/getLastImage"},
                      {label: "getLastImageBitmap()", path: "/legacy/Object/Api/getLastImageBitmap"},
                      {label: "getRoomList()", path: "/legacy/Object/Api/getRoomList"},
                      {label: "getScriptNames()", path: "/legacy/Object/Api/getScriptNames"},
                      {label: "interruptThreads()", path: "/legacy/Object/Api/interruptThreads"},
                      {label: "isCompiled()", path: "/legacy/Object/Api/isCompiled"},
                      {label: "isCompiling()", path: "/legacy/Object/Api/isCompiling"},
                      {label: "isOn()", path: "/legacy/Object/Api/isOn"},
                      {label: "isTerminated()", path: "/legacy/Object/Api/isTerminated"},
                      {label: "makeNoti()", path: "/legacy/Object/Api/makeNoti"},
                      {label: "markAsRead()", path: "/legacy/Object/Api/markAsRead"},
                      {
                        label: "markAsReadOnID(BigInt)",
                        path: "/legacy/Object/Api/markAsReadOnID(BigInt)"
                      },
                      {
                        label: "markAsReadOnID(String)",
                        path: "/legacy/Object/Api/markAsReadOnID(String)"
                      },
                      {label: "off()", path: "/legacy/Object/Api/off"},
                      {label: "on()", path: "/legacy/Object/Api/on"},
                      {label: "papagoTranslate()", path: "/legacy/Object/Api/papagoTranslate"},
                      {label: "prepare()", path: "/legacy/Object/Api/prepare"},
                      {label: "reload()", path: "/legacy/Object/Api/reload"},
                      {label: "replyRoom()", path: "/legacy/Object/Api/replyRoom"},
                      {
                        label: "replyToID(BigInt, String, Boolean?)",
                        path: "/legacy/Object/Api/replyToID(BigInt,String,Boolean$)"
                      },
                      {
                        label: "replyToID(String, String, Boolean?)",
                        path: "/legacy/Object/Api/replyToID(String,String,Boolean$)"
                      },
                      {label: "showToast()", path: "/legacy/Object/Api/showToast"},
                      {label: "UIThread()", path: "/legacy/Object/Api/UIThread"},
                      {label: "unload()", path: "/legacy/Object/Api/unload"},
                    ]
                  }
                ]
              },
              {
                label: "AppData",
                path: "/legacy/Object/AppData",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "clear()", path: "/legacy/Object/AppData/clear"},
                      {label: "getBoolean()", path: "/legacy/Object/AppData/getBoolean"},
                      {label: "getInt()", path: "/legacy/Object/AppData/getInt"},
                      {label: "getString()", path: "/legacy/Object/AppData/getString"},
                      {label: "putBoolean()", path: "/legacy/Object/AppData/putBoolean"},
                      {label: "putInt()", path: "/legacy/Object/AppData/putInt"},
                      {label: "putString()", path: "/legacy/Object/AppData/putString"},
                      {label: "remove()", path: "/legacy/Object/AppData/remove"},
                    ]
                  }
                ]
              },
              {
                label: "Bridge",
                path: "/legacy/Object/Bridge",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "evaluateStringIn()", path: "/legacy/Object/Bridge/evaluateStringIn"},
                      {label: "getGlobalVariable()", path: "/legacy/Object/Bridge/getGlobalVariable"},
                      {label: "getScopeOf()", path: "/legacy/Object/Bridge/getScopeOf"},
                      {label: "getVariable()", path: "/legacy/Object/Bridge/getVariable"},
                      {label: "isAllowed()", path: "/legacy/Object/Bridge/isAllowed"},
                      {label: "setGlobalVariable()", path: "/legacy/Object/Bridge/setGlobalVariable"},
                      {label: "setVariable()", path: "/legacy/Object/Bridge/setVariable"},
                    ]
                  }
                ]
              },
              {
                label: "console",
                path: "/legacy/Object/console",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "debug()", path: "/legacy/Object/console/debug"},
                      {label: "error()", path: "/legacy/Object/console/error"},
                      {label: "info()", path: "/legacy/Object/console/info"},
                      {label: "log()", path: "/legacy/Object/console/log"},
                    ]
                  }
                ]
              },
              {
                label: "DataBase",
                path: "/legacy/Object/DataBase",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "appendDataBase()", path: "/legacy/Object/DataBase/appendDataBase"},
                      {label: "getDataBase()", path: "/legacy/Object/DataBase/getDataBase"},
                      {label: "removeDataBase()", path: "/legacy/Object/DataBase/removeDataBase"},
                      {label: "setDataBase()", path: "/legacy/Object/DataBase/setDataBase"},
                    ]
                  }
                ]
              },
              {
                label: "Device",
                path: "/legacy/Object/Device",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "acquireWakeLock()", path: "/legacy/Object/Device/acquireWakeLock"},
                      {
                        label: "getAndroidVersionCode()",
                        path: "/legacy/Object/Device/getAndroidVersionCode"
                      },
                      {
                        label: "getAndroidVersionName()",
                        path: "/legacy/Object/Device/getAndroidVersionName"
                      },
                      {label: "getApiLevel()", path: "/legacy/Object/Device/getApiLevel"},
                      {label: "getBatteryHealth()", path: "/legacy/Object/Device/getBatteryHealth"},
                      {label: "getBatteryIntent()", path: "/legacy/Object/Device/getBatteryIntent"},
                      {label: "getBatteryLevel()", path: "/legacy/Object/Device/getBatteryLevel"},
                      {label: "getBatteryStatus()", path: "/legacy/Object/Device/getBatteryStatus"},
                      {label: "getBatteryTemp()", path: "/legacy/Object/Device/getBatteryTemp"},
                      {
                        label: "getBatteryTemperature()",
                        path: "/legacy/Object/Device/getBatteryTemperature"
                      },
                      {label: "getBatteryVoltage()", path: "/legacy/Object/Device/getBatteryVoltage"},
                      {label: "getBuild()", path: "/legacy/Object/Device/getBuild"},
                      {
                        label: "getConnectedNetworkType()",
                        path: "/legacy/Object/Device/getConnectedNetworkType"
                      },
                      {label: "getFreeMemory()", path: "/legacy/Object/Device/getFreeMemory"},
                      {
                        label: "getFreeStorageSpace()",
                        path: "/legacy/Object/Device/getFreeStorageSpace"
                      },
                      {label: "getMaxMemory()", path: "/legacy/Object/Device/getMaxMemory"},
                      {label: "getModelName()", path: "/legacy/Object/Device/getModelName"},
                      {label: "getPhoneBrand()", path: "/legacy/Object/Device/getPhoneBrand"},
                      {label: "getPhoneModel()", path: "/legacy/Object/Device/getPhoneModel"},
                      {label: "getPlugType()", path: "/legacy/Object/Device/getPlugType"},
                      {label: "getTotalMemory()", path: "/legacy/Object/Device/getTotalMemory"},
                      {
                        label: "getTotalStorageSpace()",
                        path: "/legacy/Object/Device/getTotalStorageSpace"
                      },
                      {label: "getWifiName()", path: "/legacy/Object/Device/getWifiName"},
                      {label: "isCharging()", path: "/legacy/Object/Device/isCharging"},
                      {label: "isPowerSaveMode()", path: "/legacy/Object/Device/isPowerSaveMode"},
                      {label: "isScreenOn()", path: "/legacy/Object/Device/isScreenOn"},
                      {label: "releaseWakeLock()", path: "/legacy/Object/Device/releaseWakeLock"},
                    ]
                  }
                ]
              },
              {
                label: "FileStream",
                path: "/legacy/Object/FileStream",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "append()", path: "/legacy/Object/FileStream/append"},
                      {label: "copyFile()", path: "/legacy/Object/FileStream/copyFile"},
                      {label: "create()", path: "/legacy/Object/FileStream/create"},
                      {label: "createDir()", path: "/legacy/Object/FileStream/createDir"},
                      {label: "getSdcardPath()", path: "/legacy/Object/FileStream/getSdcardPath"},
                      {label: "moveFile()", path: "/legacy/Object/FileStream/moveFile"},
                      {label: "read()", path: "/legacy/Object/FileStream/read"},
                      {label: "readJSON()", path: "/legacy/Object/FileStream/readJSON"},
                      {label: "remove()", path: "/legacy/Object/FileStream/remove"},
                      {label: "save()", path: "/legacy/Object/FileStream/save"},
                      {label: "saveJSON()", path: "/legacy/Object/FileStream/saveJSON"},
                      {label: "write()", path: "/legacy/Object/FileStream/write"},
                      {label: "writeJSON()", path: "/legacy/Object/FileStream/writeJSON"},
                    ]
                  }
                ]
              },
              {
                label: "Log",
                path: "/legacy/Object/Log",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "clear()", path: "/legacy/Object/Log/clear"},
                      {label: "d()", path: "/legacy/Object/Log/d"},
                      {label: "debug()", path: "/legacy/Object/Log/debug"},
                      {label: "e()", path: "/legacy/Object/Log/e"},
                      {label: "error()", path: "/legacy/Object/Log/error"},
                      {label: "i()", path: "/legacy/Object/Log/i"},
                      {label: "info()", path: "/legacy/Object/Log/info"},
                    ]
                  }
                ]
              },
              {
                label: "Utils",
                path: "/legacy/Object/Utils",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "compress()", path: "/legacy/Object/Utils/compress"},
                      {label: "copyToClipboard()", path: "/legacy/Object/Utils/copyToClipboard"},
                      {label: "delay()", path: "/legacy/Object/Utils/delay"},
                      {
                        label: "getAndroidVersionCode()",
                        path: "/legacy/Object/Utils/getAndroidVersionCode"
                      },
                      {
                        label: "getAndroidVersionName()",
                        path: "/legacy/Object/Utils/getAndroidVersionName"
                      },
                      {label: "getLw()", path: "/legacy/Object/Utils/getLw"},
                      {label: "getLwLined()", path: "/legacy/Object/Utils/getLwLined"},
                      {label: "getPhoneBrand()", path: "/legacy/Object/Utils/getPhoneBrand"},
                      {label: "getPhoneModel()", path: "/legacy/Object/Utils/getPhoneModel"},
                      {label: "getRandomUserAgent()", path: "/legacy/Object/Utils/getRandomUserAgent"},
                      {label: "getWeatherJSON()", path: "/legacy/Object/Utils/getWeatherJSON"},
                      {label: "getWebText()", path: "/legacy/Object/Utils/getWebText"},
                      {label: "getWebText2()", path: "/legacy/Object/Utils/getWebText2"},
                      {label: "getZoneIdByName()", path: "/legacy/Object/Utils/getZoneIdByName"},
                      {label: "isUndefined()", path: "/legacy/Object/Utils/isUndefined"},
                      {label: "measureNanoTime()", path: "/legacy/Object/Utils/measureNanoTime"},
                      {label: "measureTimeMillis()", path: "/legacy/Object/Utils/measureTimeMillis"},
                      {label: "parse()", path: "/legacy/Object/Utils/parse"},
                      {label: "randomAlphanumeric()", path: "/legacy/Object/Utils/randomAlphanumeric"},
                      {label: "removeRLO()", path: "/legacy/Object/Utils/removeRLO"},
                      {label: "removeTags()", path: "/legacy/Object/Utils/removeTags"},
                      {label: "sleep()", path: "/legacy/Object/Utils/sleep"},
                      {label: "toast()", path: "/legacy/Object/Utils/toast"},
                      {label: "vibrate()", path: "/legacy/Object/Utils/vibrate"},
                      {label: "xmlToJson()", path: "/legacy/Object/Utils/xmlToJson"},
                    ]
                  }
                ]
              },
            ]
          },
          {
            label: "이벤트 리스너",
            children: [
              {label: "onBackPressed", path: "/legacy/EventListener/onBackPressed"},
              {label: "onCreate", path: "/legacy/EventListener/onCreate"},
              {label: "onDestroy", path: "/legacy/EventListener/onDestroy"},
              {label: "onLoaded", path: "/legacy/EventListener/onLoaded"},
              {label: "onNotificationPosted", path: "/legacy/EventListener/onNotificationPosted"},
              {label: "onNotificationRemoved", path: "/legacy/EventListener/onNotificationRemoved"},
              {label: "onPause", path: "/legacy/EventListener/onPause"},
              {label: "onRestart", path: "/legacy/EventListener/onRestart"},
              {label: "onResume", path: "/legacy/EventListener/onResume"},
              {label: "onStart", path: "/legacy/EventListener/onStart"},
              {label: "onStartCompile", path: "/legacy/EventListener/onStartCompile"},
              {label: "onStop", path: "/legacy/EventListener/onStop"},
              {label: "response", path: "/legacy/EventListener/response"},
              {label: "secondTick", path: "/legacy/EventListener/secondTick"},
            ]
          },
          {
            label: "인자",
            children: [
              {
                label: "ImageDB",
                path: "/legacy/Argument/ImageDB",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "getImage()", path: "/legacy/Argument/ImageDB/getImage"},
                      {label: "getImageBase64()", path: "/legacy/Argument/ImageDB/getImageBase64"},
                      {label: "getImageBitmap()", path: "/legacy/Argument/ImageDB/getImageBitmap"},
                      {label: "getImageHash()", path: "/legacy/Argument/ImageDB/getImageHash"},
                      {label: "getImageMD5()", path: "/legacy/Argument/ImageDB/getImageMD5"},
                      {label: "getImageSHA()", path: "/legacy/Argument/ImageDB/getImageSHA"},
                      {label: "getProfileBase64()", path: "/legacy/Argument/ImageDB/getProfileBase64"},
                      {label: "getProfileBitmap()", path: "/legacy/Argument/ImageDB/getProfileBitmap"},
                      {label: "getProfileHash()", path: "/legacy/Argument/ImageDB/getProfileHash"},
                      {label: "getProfileImage()", path: "/legacy/Argument/ImageDB/getProfileImage"},
                      {label: "getProfileMD5()", path: "/legacy/Argument/ImageDB/getProfileMD5"},
                      {label: "getProfileSHA()", path: "/legacy/Argument/ImageDB/getProfileSHA"},
                      {label: "getRoomBitmap()", path: "/legacy/Argument/ImageDB/getRoomBitmap"},
                      {label: "getRoomImage()", path: "/legacy/Argument/ImageDB/getRoomImage"},
                    ]
                  }
                ]
              },
              {
                label: "Replier",
                path: "/legacy/Argument/Replier",
                children: [
                  {label: "markAsRead()", path: "/legacy/Argument/Replier/markAsRead"},
                  {label: "reply(String)", path: "/legacy/Argument/Replier/reply(String)"},
                  {
                    label: "reply(String, String, Boolean?)",
                    path: "/legacy/Argument/Replier/reply(String,String,Boolean$)"
                  },
                  {
                    label: "replyDelayed(String, Number)",
                    path: "/legacy/Argument/Replier/replyDelayed(String,Number)"
                  },
                  {
                    label: "replyDelayed(String, String, Number, Boolean?)",
                    path: "/legacy/Argument/Replier/replyDelayed(String,String,Number,Boolean$)"
                  },
                ]
              },
              {
                label: "SessionManager",
                path: "/legacy/Argument/SessionManager",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {
                        label: "bindSession(String, android.app.Notification.Action?)",
                        path: "/legacy/Argument/SessionManager/bindSession(String,Action$)"
                      },
                      {
                        label: "bindSession(String, String, android.app.Notification.Action?)",
                        path: "/legacy/Argument/SessionManager/bindSession(String,String,Action$)"
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
        path: "/api2",
        children: [
          {
            label: "객체",
            children: [
              {
                label: "App",
                path: "/api2/Object/App",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "getContext()", path: "/api2/Object/App/getContext"},
                      {label: "runOnUiThread()", path: "/api2/Object/App/runOnUiThread"},
                    ]
                  }
                ]
              },
              {
                label: "AppData",
                path: "/api2/Object/AppData",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "clear()", path: "/api2/Object/AppData/clear"},
                      {label: "getBoolean()", path: "/api2/Object/AppData/getBoolean"},
                      {label: "getInt()", path: "/api2/Object/AppData/getInt"},
                      {label: "getString()", path: "/api2/Object/AppData/getString"},
                      {label: "putBoolean()", path: "/api2/Object/AppData/putBoolean"},
                      {label: "putInt()", path: "/api2/Object/AppData/putInt"},
                      {label: "putString()", path: "/api2/Object/AppData/putString"},
                      {label: "remove()", path: "/api2/Object/AppData/remove"},
                    ]
                  }
                ]
              },
              {
                label: "Bot",
                path: "/api2/Object/Bot",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "addListener()", path: "/api2/Object/Bot/addListener"},
                      {label: "canReply()", path: "/api2/Object/Bot/canReply"},
                      {label: "compile()", path: "/api2/Object/Bot/compile"},
                      {label: "getName()", path: "/api2/Object/Bot/getName"},
                      {label: "getPower()", path: "/api2/Object/Bot/getPower"},
                      {label: "listeners()", path: "/api2/Object/Bot/listeners"},
                      {label: "markAsRead()", path: "/api2/Object/Bot/markAsRead"},
                      {label: "off()", path: "/api2/Object/Bot/off"},
                      {label: "on()", path: "/api2/Object/Bot/on"},
                      {label: "prependListener()", path: "/api2/Object/Bot/prependListener"},
                      {label: "removeAllListeners()", path: "/api2/Object/Bot/removeAllListeners"},
                      {label: "removeListener()", path: "/api2/Object/Bot/removeListener"},
                      {label: "send()", path: "/api2/Object/Bot/send"},
                      {label: "setCommandPrefix()", path: "/api2/Object/Bot/setCommandPrefix"},
                      {label: "setPower()", path: "/api2/Object/Bot/setPower"},
                      {label: "unload()", path: "/api2/Object/Bot/unload"},
                    ]
                  }
                ]
              },
              {
                label: "BotManager",
                path: "/api2/Object/BotManager",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "compile()", path: "/api2/Object/BotManager/compile"},
                      {label: "compileAll()", path: "/api2/Object/BotManager/compileAll"},
                      {label: "getBot()", path: "/api2/Object/BotManager/getBot"},
                      {label: "getBotList()", path: "/api2/Object/BotManager/getBotList"},
                      {label: "getCurrentBot()", path: "/api2/Object/BotManager/getCurrentBot"},
                      {label: "getPower()", path: "/api2/Object/BotManager/getPower"},
                      {label: "getRooms()", path: "/api2/Object/BotManager/getRooms"},
                      {label: "isCompiled()", path: "/api2/Object/BotManager/isCompiled"},
                      {label: "prepare(Boolean?)", path: "/api2/Object/BotManager/prepare(Boolean$)"},
                      {
                        label: "prepare(String, Boolean?)",
                        path: "/api2/Object/BotManager/prepare(String,Boolean$)"
                      },
                      {label: "setPower()", path: "/api2/Object/BotManager/setPower"},
                      {label: "unload()", path: "/api2/Object/BotManager/unload"},
                    ]
                  }
                ]
              },
              {
                label: "Broadcast",
                path: "/api2/Object/Broadcast",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "register()", path: "/api2/Object/Broadcast/register"},
                      {label: "send()", path: "/api2/Object/Broadcast/send"},
                      {label: "unregister()", path: "/api2/Object/Broadcast/unregister"},
                      {label: "unregisterAll()", path: "/api2/Object/Broadcast/unregisterAll"},
                    ]
                  }
                ]
              },
              {
                label: "console",
                path: "/api2/Object/console",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "debug()", path: "/api2/Object/console/debug"},
                      {label: "error()", path: "/api2/Object/console/error"},
                      {label: "info()", path: "/api2/Object/console/info"},
                      {label: "log()", path: "/api2/Object/console/log"},
                    ]
                  }
                ]
              },
              {
                label: "Database",
                path: "/api2/Object/Database",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "exists()", path: "/api2/Object/Database/exists"},
                      {label: "readObject()", path: "/api2/Object/Database/readObject"},
                      {label: "readString()", path: "/api2/Object/Database/readString"},
                      {label: "writeObject()", path: "/api2/Object/Database/writeObject"},
                      {label: "writeString()", path: "/api2/Object/Database/writeString"},
                    ]
                  }
                ]
              },
              {
                label: "Device",
                path: "/api2/Object/Device",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "acquireWakeLock()", path: "/api2/Object/Device/acquireWakeLock"},
                      {
                        label: "getAndroidVersionCode()",
                        path: "/api2/Object/Device/getAndroidVersionCode"
                      },
                      {
                        label: "getAndroidVersionName()",
                        path: "/api2/Object/Device/getAndroidVersionName"
                      },
                      {label: "getApiLevel()", path: "/api2/Object/Device/getApiLevel"},
                      {label: "getBatteryHealth()", path: "/api2/Object/Device/getBatteryHealth"},
                      {label: "getBatteryIntent()", path: "/api2/Object/Device/getBatteryIntent"},
                      {label: "getBatteryLevel()", path: "/api2/Object/Device/getBatteryLevel"},
                      {label: "getBatteryStatus()", path: "/api2/Object/Device/getBatteryStatus"},
                      {label: "getBatteryTemp()", path: "/api2/Object/Device/getBatteryTemp"},
                      {
                        label: "getBatteryTemperature()",
                        path: "/api2/Object/Device/getBatteryTemperature"
                      },
                      {label: "getBatteryVoltage()", path: "/api2/Object/Device/getBatteryVoltage"},
                      {label: "getBuild()", path: "/api2/Object/Device/getBuild"},
                      {
                        label: "getConnectedNetworkType()",
                        path: "/api2/Object/Device/getConnectedNetworkType"
                      },
                      {label: "getFreeMemory()", path: "/api2/Object/Device/getFreeMemory"},
                      {label: "getFreeStorageSpace()", path: "/api2/Object/Device/getFreeStorageSpace"},
                      {label: "getMaxMemory()", path: "/api2/Object/Device/getMaxMemory"},
                      {label: "getModelName()", path: "/api2/Object/Device/getModelName"},
                      {label: "getPhoneBrand()", path: "/api2/Object/Device/getPhoneBrand"},
                      {label: "getPhoneModel()", path: "/api2/Object/Device/getPhoneModel"},
                      {label: "getPlugType()", path: "/api2/Object/Device/getPlugType"},
                      {label: "getTotalMemory()", path: "/api2/Object/Device/getTotalMemory"},
                      {
                        label: "getTotalStorageSpace()",
                        path: "/api2/Object/Device/getTotalStorageSpace"
                      },
                      {label: "getWifiName()", path: "/api2/Object/Device/getWifiName"},
                      {label: "isCharging()", path: "/api2/Object/Device/isCharging"},
                      {label: "isPowerSaveMode()", path: "/api2/Object/Device/isPowerSaveMode"},
                      {label: "isScreenOn()", path: "/api2/Object/Device/isScreenOn"},
                      {label: "releaseWakeLock()", path: "/api2/Object/Device/releaseWakeLock"},
                    ]
                  }
                ]
              },
              {
                label: "Event",
                path: "/api2/Object/Event",
                children: [
                  {
                    label: "상수",
                    children: [
                      {label: "Activity.BACK_PRESSED", path: "/api2/Object/Event/Activity.BACK_PRESSED"},
                      {label: "Activity.CREATE", path: "/api2/Object/Event/Activity.CREATE"},
                      {label: "Activity.DESTROY", path: "/api2/Object/Event/Activity.DESTROY"},
                      {label: "Activity.PAUSE", path: "/api2/Object/Event/Activity.PAUSE"},
                      {label: "Activity.RESTART", path: "/api2/Object/Event/Activity.RESTART"},
                      {label: "Activity.RESUME", path: "/api2/Object/Event/Activity.RESUME"},
                      {label: "Activity.START", path: "/api2/Object/Event/Activity.START"},
                      {label: "Activity.STOP", path: "/api2/Object/Event/Activity.STOP"},
                      {label: "BATTERY_LEVEL_CHANGED", path: "/api2/Object/Event/BATTERY_LEVEL_CHANGED"},
                      {label: "COMMAND", path: "/api2/Object/Event/COMMAND"},
                      {label: "MESSAGE", path: "/api2/Object/Event/MESSAGE"},
                      {label: "NOTIFICATION_POSTED", path: "/api2/Object/Event/NOTIFICATION_POSTED"},
                      {label: "NOTIFICATION_REMOVED", path: "/api2/Object/Event/NOTIFICATION_REMOVED"},
                      {label: "START_COMPILE", path: "/api2/Object/Event/START_COMPILE"},
                      {label: "TICK", path: "/api2/Object/Event/TICK"},
                    ]
                  },
                ]
              },
              {
                label: "FileStream",
                path: "/api2/Object/FileStream",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "append()", path: "/api2/Object/FileStream/append"},
                      {label: "copyFile()", path: "/api2/Object/FileStream/copyFile"},
                      {label: "create()", path: "/api2/Object/FileStream/create"},
                      {label: "createDir()", path: "/api2/Object/FileStream/createDir"},
                      {label: "getSdcardPath()", path: "/api2/Object/FileStream/getSdcardPath"},
                      {label: "moveFile()", path: "/api2/Object/FileStream/moveFile"},
                      {label: "read()", path: "/api2/Object/FileStream/read"},
                      {label: "readJSON()", path: "/api2/Object/FileStream/readJSON"},
                      {label: "remove()", path: "/api2/Object/FileStream/remove"},
                      {label: "save()", path: "/api2/Object/FileStream/save"},
                      {label: "saveJSON()", path: "/api2/Object/FileStream/saveJSON"},
                      {label: "write()", path: "/api2/Object/FileStream/write"},
                      {label: "writeJSON()", path: "/api2/Object/FileStream/writeJSON"},
                    ]
                  }
                ]
              },
              {
                label: "GlobalLog",
                path: "/api2/Object/GlobalLog",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "clear()", path: "/api2/Object/GlobalLog/clear"},
                      {label: "d()", path: "/api2/Object/GlobalLog/d"},
                      {label: "debug()", path: "/api2/Object/GlobalLog/debug"},
                      {label: "e()", path: "/api2/Object/GlobalLog/e"},
                      {label: "error()", path: "/api2/Object/GlobalLog/error"},
                      {label: "i()", path: "/api2/Object/GlobalLog/i"},
                      {label: "info()", path: "/api2/Object/GlobalLog/info"},
                    ]
                  }
                ]
              },
              {
                label: "Http",
                path: "/api2/Object/Http",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {
                        label: "request(Object, Function)",
                        path: "/api2/Object/Http/request(Object,Function)"
                      },
                      {
                        label: "request(String, Function)",
                        path: "/api2/Object/Http/request(String,Function)"
                      },
                      {label: "requestSync(Object)", path: "/api2/Object/Http/requestSync(Object)"},
                      {label: "requestSync(String)", path: "/api2/Object/Http/requestSync(String)"},
                    ]
                  }
                ]
              },
              {
                label: "Log",
                path: "/api2/Object/Log",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "clear()", path: "/api2/Object/Log/clear"},
                      {label: "d()", path: "/api2/Object/Log/d"},
                      {label: "debug()", path: "/api2/Object/Log/debug"},
                      {label: "e()", path: "/api2/Object/Log/e"},
                      {label: "error()", path: "/api2/Object/Log/error"},
                      {label: "i()", path: "/api2/Object/Log/i"},
                      {label: "info()", path: "/api2/Object/Log/info"},
                    ]
                  },
                ]
              },
              {
                label: "Security",
                path: "/api2/Object/Security",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "aesDecode()", path: "/api2/Object/Security/aesDecode"},
                      {label: "aesEncode()", path: "/api2/Object/Security/aesEncode"},
                      {label: "ariaDecode()", path: "/api2/Object/Security/ariaDecode"},
                      {label: "ariaDecodeRaw()", path: "/api2/Object/Security/ariaDecodeRaw"},
                      {label: "ariaEncode()", path: "/api2/Object/Security/ariaEncode"},
                      {label: "ariaEncodeRaw()", path: "/api2/Object/Security/ariaEncodeRaw"},
                      {label: "base32Decode()", path: "/api2/Object/Security/base32Decode"},
                      {label: "base32Encode()", path: "/api2/Object/Security/base32Encode"},
                      {label: "base64Decode()", path: "/api2/Object/Security/base64Decode"},
                      {label: "base64Encode()", path: "/api2/Object/Security/base64Encode"},
                      {label: "des3Decode()", path: "/api2/Object/Security/des3Decode"},
                      {label: "des3Encode()", path: "/api2/Object/Security/des3Encode"},
                      {label: "desDecode()", path: "/api2/Object/Security/desDecode"},
                      {label: "desEncode()", path: "/api2/Object/Security/desEncode"},
                      {label: "desKey()", path: "/api2/Object/Security/desKey"},
                      {label: "eccDecode()", path: "/api2/Object/Security/eccDecode"},
                      {label: "eccEncode()", path: "/api2/Object/Security/eccEncode"},
                      {label: "getDesKey()", path: "/api2/Object/Security/getDesKey"},
                      {label: "hashCode()", path: "/api2/Object/Security/hashCode"},
                      {label: "md2()", path: "/api2/Object/Security/md2"},
                      {label: "md5()", path: "/api2/Object/Security/md5"},
                      {label: "md55()", path: "/api2/Object/Security/md55"},
                      {label: "rc4Decode()", path: "/api2/Object/Security/rc4Decode"},
                      {label: "rc4Encode()", path: "/api2/Object/Security/rc4Encode"},
                      {label: "seedDecode()", path: "/api2/Object/Security/seedDecode"},
                      {label: "seedEncode()", path: "/api2/Object/Security/seedEncode"},
                      {label: "sha()", path: "/api2/Object/Security/sha"},
                      {label: "sha3_224()", path: "/api2/Object/Security/sha3_224"},
                      {label: "sha3_256()", path: "/api2/Object/Security/sha3_256"},
                      {label: "sha3_384()", path: "/api2/Object/Security/sha3_384"},
                      {label: "sha3_512()", path: "/api2/Object/Security/sha3_512"},
                      {label: "sha256()", path: "/api2/Object/Security/sha256"},
                      {label: "sha384()", path: "/api2/Object/Security/sha384"},
                      {label: "sha512()", path: "/api2/Object/Security/sha512"},
                      {label: "ulid()", path: "/api2/Object/Security/ulid"},
                      {label: "uuid()", path: "/api2/Object/Security/uuid"},
                      {label: "uuidv7()", path: "/api2/Object/Security/uuidv7"},
                    ]
                  }
                ]
              },
            ]
          },
          {
            label: "이벤트",
            children: [
              {label: "activityBackPressed", path: "/api2/Event/activityBackPressed"},
              {label: "activityCreate", path: "/api2/Event/activityCreate"},
              {label: "activityDestroy", path: "/api2/Event/activityDestroy"},
              {label: "activityPause", path: "/api2/Event/activityPause"},
              {label: "activityRestart", path: "/api2/Event/activityRestart"},
              {label: "activityResume", path: "/api2/Event/activityResume"},
              {label: "activityStart", path: "/api2/Event/activityStart"},
              {label: "activityStop", path: "/api2/Event/activityStop"},
              {label: "batteryLevelChanged", path: "/api2/Event/batteryLevelChanged"},
              {label: "command", path: "/api2/Event/command"},
              {label: "message", path: "/api2/Event/message"},
              {label: "notificationPosted", path: "/api2/Event/notificationPosted"},
              {label: "notificationRemoved", path: "/api2/Event/notificationRemoved"},
              {label: "startCompile", path: "/api2/Event/startCompile"},
              {label: "tick", path: "/api2/Event/tick"}
            ]
          },
          {
            label: "인자",
            children: [
              {
                label: "Author",
                path: "/api2/Argument/Author",
                children: [
                  {
                    label: "프로퍼티",
                    children: [
                      {label: "avatar", path: "/api2/Argument/Author/avatar"},
                      {label: "hash", path: "/api2/Argument/Author/hash"},
                      {label: "name", path: "/api2/Argument/Author/name"},
                    ]
                  }
                ]
              },
              {
                label: "Command",
                path: "/api2/Argument/Command",
                children: [
                  {
                    label: "프로퍼티",
                    children: [
                      {label: "args", path: "/api2/Argument/Command/args"},
                      {label: "author", path: "/api2/Argument/Command/author"},
                      {label: "channelId", path: "/api2/Argument/Command/channelId"},
                      {label: "command", path: "/api2/Argument/Command/command"},
                      {label: "content", path: "/api2/Argument/Command/content"},
                      {label: "image", path: "/api2/Argument/Command/image"},
                      {label: "isDebugRoom", path: "/api2/Argument/Command/isDebugRoom"},
                      {label: "isGroupChat", path: "/api2/Argument/Command/isGroupChat"},
                      {label: "isMention", path: "/api2/Argument/Command/isMention"},
                      {label: "isMultiChat", path: "/api2/Argument/Command/isMultiChat"},
                      {label: "logId", path: "/api2/Argument/Command/logId"},
                      {label: "packageName", path: "/api2/Argument/Command/packageName"},
                      {label: "room", path: "/api2/Argument/Command/room"},
                    ]
                  },
                  {
                    label: "메소드",
                    children: [
                      {label: "markAsRead()", path: "/api2/Argument/Command/markAsRead"},
                      {label: "reply()", path: "/api2/Argument/Command/reply"},
                    ]
                  }
                ]
              },
              {
                label: "Image",
                path: "/api2/Argument/Image",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "getBase64()", path: "/api2/Argument/Image/getBase64"},
                      {label: "getBitmap()", path: "/api2/Argument/Image/getBitmap"},
                    ]
                  }
                ]
              },
              {
                label: "Message",
                path: "/api2/Argument/Message",
                children: [
                  {
                    label: "프로퍼티",
                    children: [
                      {label: "author", path: "/api2/Argument/Message/author"},
                      {label: "channelId", path: "/api2/Argument/Message/channelId"},
                      {label: "content", path: "/api2/Argument/Message/content"},
                      {label: "image", path: "/api2/Argument/Message/image"},
                      {label: "isDebugRoom", path: "/api2/Argument/Message/isDebugRoom"},
                      {label: "isGroupChat", path: "/api2/Argument/Message/isGroupChat"},
                      {label: "isMention", path: "/api2/Argument/Message/isMention"},
                      {label: "isMultiChat", path: "/api2/Argument/Message/isMultiChat"},
                      {label: "logId", path: "/api2/Argument/Message/logId"},
                      {label: "packageName", path: "/api2/Argument/Message/packageName"},
                      {label: "room", path: "/api2/Argument/Message/room"},
                    ]
                  },
                  {
                    label: "메소드",
                    children: [
                      {label: "markAsRead()", path: "/api2/Argument/Message/markAsRead"},
                      {label: "reply()", path: "/api2/Argument/Message/reply"},
                    ]
                  }
                ]
              },
              {
                label: "SessionManager",
                path: "/api2/Argument/SessionManager",
                children: [
                  {
                    label: "bindSession(String, android.app.Notification.Action?)",
                    path: "/api2/Argument/SessionManager/bindSession(String,Action$)"
                  },
                  {
                    label: "bindSession(String, String, android.app.Notification.Action?)",
                    path: "/api2/Argument/SessionManager/bindSession(String,String,Action$)"
                  },
                ]
              },
            ]
          }
        ]
      },
      {
        label: "StarLight",
        path: "/starlight",
        children: [
          {
            label: "객체",
            children: [
              {
                label: "Env",
                path: "/starlight/Object/Env",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "get()", path: "/starlight/Object/Env/get"},
                      {label: "parseFile()", path: "/starlight/Object/Env/parseFile"},
                      {label: "parseString()", path: "/starlight/Object/Env/parseString"},
                    ]
                  }
                ]
              },
              {
                label: "Java",
                path: "/starlight/Object/Java",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "type()", path: "/starlight/Object/Java/type"},
                    ]
                  }
                ]
              },
              {
                label: "Language",
                path: "/starlight/Object/Language",
                children: [
                  {
                    label: "프로퍼티",
                    children: [
                      {label: "fileExtension", path: "/starlight/Object/Language/fileExtension"},
                      {label: "id", path: "/starlight/Object/Language/id"},
                      {label: "name", path: "/starlight/Object/Language/name"},
                      {label: "requireRelease", path: "/starlight/Object/Language/requireRelease"},
                    ]
                  },
                  {
                    label: "메소드",
                    children: [
                      {label: "callFunction()", path: "/starlight/Object/Language/callFunction"},
                      {label: "destroy()", path: "/starlight/Object/Language/destroy"},
                      {label: "eval()", path: "/starlight/Object/Language/eval"},
                      {label: "release()", path: "/starlight/Object/Language/release"},
                    ]
                  }
                ]
              },
              {
                label: "Languages",
                path: "/starlight/Object/Languages",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "getSelf()", path: "/starlight/Object/Languages/getSelf"},
                      {label: "ofId()", path: "/starlight/Object/Languages/ofId"},
                    ]
                  }
                ]
              },
              {
                label: "Notification",
                path: "/starlight/Object/Notification",
                children: [
                  {
                    label: "상수",
                    children: [
                      {label: "STATE_CREATED", path: "/starlight/Object/Notification/STATE_CREATED"},
                      {label: "STATE_DEFAULT", path: "/starlight/Object/Notification/STATE_DEFAULT"},
                      {label: "STATE_DISMISSED", path: "/starlight/Object/Notification/STATE_DISMISSED"},
                    ]
                  },
                  {
                    label: "프로퍼티",
                    children: [
                      {label: "state", path: "/starlight/Object/Notification/state"},
                    ]
                  },
                  {
                    label: "메소드",
                    children: [
                      {label: "create()", path: "/starlight/Object/Notification/create"},
                      {label: "delete()", path: "/starlight/Object/Notification/delete"},
                      {label: "update()", path: "/starlight/Object/Notification/update"},
                    ]
                  },
                ]
              },
              {
                label: "NotificationBuilder",
                path: "/starlight/Object/NotificationBuilder",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "build()", path: "/starlight/Object/NotificationBuilder/build"},
                      {label: "lights()", path: "/starlight/Object/NotificationBuilder/lights"},
                      {label: "onClick()", path: "/starlight/Object/NotificationBuilder/onClick"},
                      {label: "onDismiss()", path: "/starlight/Object/NotificationBuilder/onDismiss"},
                      {label: "setText()", path: "/starlight/Object/NotificationBuilder/setText"},
                      {label: "setTitle()", path: "/starlight/Object/NotificationBuilder/setTitle"},
                    ]
                  }
                ]
              },
              {
                label: "Platform",
                path: "/starlight/Object/Platform",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "getName()", path: "/starlight/Object/Platform/getName"},
                      {label: "getUptime()", path: "/starlight/Object/Platform/getUptime"},
                      {label: "getVersion()", path: "/starlight/Object/Platform/getVersion"},
                    ]
                  }
                ]
              },
              {
                label: "Plugin",
                path: "/starlight/Object/Plugin",
                children: [
                  {
                    label: "프로퍼티",
                    children: [
                      {label: "info", path: "/starlight/Object/Plugin/info"},
                    ]
                  },
                  {
                    label: "메소드",
                    children: [
                      {label: "getAsset()", path: "/starlight/Object/Plugin/getAsset"},
                      {
                        label: "getExternalDataDirectory()",
                        path: "/starlight/Object/Plugin/getExternalDataDirectory"
                      },
                      {
                        label: "getInternalDataDirectory()",
                        path: "/starlight/Object/Plugin/getInternalDataDirectory"
                      },
                      {label: "isEnabled()", path: "/starlight/Object/Plugin/isEnabled"},
                    ]
                  }
                ]
              },
              {
                label: "Plugins",
                path: "/starlight/Object/Plugins",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "getAll()", path: "/starlight/Object/Plugins/getAll"},
                      {label: "ofId()", path: "/starlight/Object/Plugins/ofId"},
                      {label: "ofName()", path: "/starlight/Object/Plugins/ofName"}
                    ]
                  }
                ]
              },
              {
                label: "Project",
                path: "/starlight/Object/Project",
                children: [
                  {
                    label: "프로퍼티",
                    children: [
                      {label: "config", path: "/starlight/Object/Project/config"},
                      {label: "directory", path: "/starlight/Object/Project/directory"},
                      {label: "info", path: "/starlight/Object/Project/info"},
                      {label: "isCompiled", path: "/starlight/Object/Project/isCompiled"},
                      {label: "logger", path: "/starlight/Object/Project/logger"},
                    ]
                  },
                  {
                    label: "메소드",
                    children: [
                      {label: "activeJobs()", path: "/starlight/Object/Project/activeJobs"},
                      {label: "callFunction()", path: "/starlight/Object/Project/callFunction"},
                      {label: "compile()", path: "/starlight/Object/Project/compile"},
                      {label: "destroy()", path: "/starlight/Object/Project/destroy"},
                      {label: "getDataDirectory()", path: "/starlight/Object/Project/getDataDirectory"},
                      {label: "getLanguage()", path: "/starlight/Object/Project/getLanguage"},
                      {label: "getScope()", path: "/starlight/Object/Project/getScope"},
                      {
                        label: "isEventCallAllowed()",
                        path: "/starlight/Object/Project/isEventCallAllowed"
                      },
                      {label: "loadInfo()", path: "/starlight/Object/Project/loadInfo"},
                      {label: "rename()", path: "/starlight/Object/Project/rename"},
                      {label: "requestUpdate()", path: "/starlight/Object/Project/requestUpdate"},
                      {label: "saveInfo()", path: "/starlight/Object/Project/saveInfo"},
                      {label: "setEnabled()", path: "/starlight/Object/Project/setEnabled"},
                      {label: "stopAllJobs()", path: "/starlight/Object/Project/stopAllJobs"},
                    ]
                  }
                ]
              },
              {
                label: "Projects",
                path: "/starlight/Object/Projects",
                children: [
                  {
                    label: "메소드",
                    children: [
                      {label: "getSelf()", path: "/starlight/Object/Projects/getSelf"},
                      {label: "ofId()", path: "/starlight/Object/Projects/ofId"},
                      {label: "ofName()", path: "/starlight/Object/Projects/ofName"}
                    ]
                  }
                ]
              },
            ]
          },
          {
            label: "이벤트 리스너",
            children: [
              {label: "onMessage", path: "/starlight/EventListener/onMessage"},
              {label: "onMessageDeleted", path: "/starlight/EventListener/onMessageDeleted"},
              {label: "onNotificationPosted", path: "/starlight/EventListener/onNotificationPosted"},
              {label: "onStartCompile", path: "/starlight/EventListener/onStartCompile"},
            ]
          },
          {
            label: "인자",
            children: [
              {
                label: "ChatRoom",
                path: "/starlight/Argument/ChatRoom",
                children: [
                  {
                    label: "프로퍼티",
                    children: [
                      {label: "id", path: "/starlight/Argument/ChatRoom/id"},
                      {label: "isDebugRoom", path: "/starlight/Argument/ChatRoom/isDebugRoom"},
                      {label: "isGroupChat", path: "/starlight/Argument/ChatRoom/isGroupChat"},
                      {label: "name", path: "/starlight/Argument/ChatRoom/name"},
                    ]
                  },
                  {
                    label: "메소드",
                    children: [
                      {label: "markAsRead()", path: "/starlight/Argument/ChatRoom/markAsRead"},
                      {label: "send()", path: "/starlight/Argument/ChatRoom/send"},
                    ]
                  }
                ]
              },
              {
                label: "ChatSender",
                path: "/starlight/Argument/ChatSender",
                children: [
                  {
                    label: "프로퍼티",
                    children: [
                      {label: "id", path: "/starlight/Argument/ChatSender/id"},
                      {label: "name", path: "/starlight/Argument/ChatSender/name"},
                      {label: "profileBase64", path: "/starlight/Argument/ChatSender/profileBase64"},
                      {label: "profileBitmap", path: "/starlight/Argument/ChatSender/profileBitmap"},
                      {label: "profileHash", path: "/starlight/Argument/ChatSender/profileHash"},
                    ]
                  }
                ]
              },
              {
                label: "Message",
                path: "/starlight/Argument/Message",
                children: [
                  {
                    label: "프로퍼티",
                    children: [
                      {label: "chatLogId", path: "/starlight/Argument/Message/chatLogId"},
                      {label: "hasMention", path: "/starlight/Argument/Message/hasMention"},
                      {label: "image", path: "/starlight/Argument/Message/image"},
                      {label: "message", path: "/starlight/Argument/Message/message"},
                      {label: "packageName", path: "/starlight/Argument/Message/packageName"},
                      {label: "room", path: "/starlight/Argument/Message/room"},
                      {label: "sender", path: "/starlight/Argument/Message/sender"},
                    ]
                  }
                ]
              },
              {
                label: "DeletedMessage",
                path: "/starlight/Argument/DeletedMessage",
                children: [
                  {
                    label: "프로퍼티",
                    children: [
                      {label: "chatLogId", path: "/starlight/Argument/DeletedMessage/chatLogId"},
                      {label: "message", path: "/starlight/Argument/DeletedMessage/message"},
                      {label: "packageName", path: "/starlight/Argument/DeletedMessage/packageName"},
                      {label: "room", path: "/starlight/Argument/DeletedMessage/room"},
                      {label: "sender", path: "/starlight/Argument/DeletedMessage/sender"},
                    ]
                  }
                ]
              },
            ]
          },
          {
            label: "플러그인",
            children: [
              {label: "Discord", path: "/starlight/Plugin/Discord"},
              {label: "V8", path: "/starlight/Plugin/V8"}
            ]
          }
        ]
      },
      {
        label: "Iris",
        path: "/iris",
        children: [
          {label: "시작하기", path: "/iris/get-started"},
          {
            label: "HTTP API 엔드포인트",
            children: [
              {label: "/decrypt", path: "/iris/Endpoint/decrypt"},
              {label: "/query", path: "/iris/Endpoint/query"},
              {label: "/reply", path: "/iris/Endpoint/reply"},
            ]
          },
          {
            label: "구성 API 엔드포인트",
            children: [
              {label: "/config", path: "/iris/Endpoint/config"},
              {label: "/config/botport", path: "/iris/Endpoint/config/botport"},
              {label: "/config/dbrate", path: "/iris/Endpoint/config/dbrate"},
              {label: "/config/endpoint", path: "/iris/Endpoint/config/endpoint"},
              {label: "/config/sendrate", path: "/iris/Endpoint/config/sendrate"},
            ]
          },
          {
            label: "WebSocket 엔드포인트",
            children: [
              {label: "/ws", path: "/iris/Endpoint/ws"},
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
        label: "기초 자습서",
        path: "/basic",
        children: [
          {label: "JavaScript와 카카오톡봇", path: "/basic/1-javascript-and-kakaotalkbot"},
          {label: "개발 준비", path: "/basic/2-ready-for-dev"},
          {label: "스크립트 작성", path: "/basic/3-write-script"},
          {label: "JavaScript의 기본 문법", path: "/basic/4-basic-syntax-of-javascript"},
          {label: "변수와 자료형", path: "/basic/5-variable-and-data-type"},
          {label: "연산자", path: "/basic/6-operator"},
          {label: "문자열", path: "/basic/7-string"},
          {label: "배열", path: "/basic/8-array"},
          {label: "조건문", path: "/basic/9-conditionals"},
          {label: "반복문", path: "/basic/10-loops"},
          {label: "함수", path: "/basic/11-function"},
          {label: "객체 기초", path: "/basic/12-basic-object"},
        ]
      },
    ]
  }
} as const;