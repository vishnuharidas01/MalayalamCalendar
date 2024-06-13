import GetLocation, { Location } from 'react-native-get-location'
import React, { useState } from 'react'


   export const getCurrentLocation  = async ():  Promise<Location| undefined> => {
       
       try {
        let currentLocation =  await GetLocation.getCurrentPosition({
             enableHighAccuracy: true,
             timeout: 60000,
         })
         console.log(currentLocation);
         return currentLocation;
        } catch(error) {
             const code  = error;
             console.warn(code);
         }
        
     }
