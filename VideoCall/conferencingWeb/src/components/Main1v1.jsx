import React from 'react'
import {useParams} from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

function Main1v1() {
    const roomID ="Suheb"
    const onevone = async(element)=>{
        const appID= 351204948;
        const serverSecret ="5d919ea0e54f73d7afd3589a6c967f8a";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,Date.now().toString() ,"Suheb" );
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks:[{
                name:'Copy Link',
                url:`http://localhost:5173/room/${roomID}`,
            }],
            scenario:{
                mode:ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton:true,
        })
    }

  return (
    <div>
        <div ref={onevone}/>
    </div>
  )
}

export default Main1v1