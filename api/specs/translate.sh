#!/bin/bash
# This shell script is copied from the API docs to translate the word `test` into Spanish (as French is not available in the list of transalations)
# It always returns a 403 even though the app_id, app_key and all request parameters are correct


curl -X GET --header 'Accept: text/plain' --header 'app_id: 2dcf674c' --header 'app_key: 6fd50bf6025b5517b74fe9f99ab3c864' 'https://od-api.oxforddictionaries.com/api/v2/translations/en/es/test?strictMatch=false'