"use client"

import { urlBase64ToUint8Array } from '@/lib'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { BiSolidBellOff, BiSolidBellRing } from 'react-icons/bi'

export default function Notification() {
  const [notificationPermission, setNotificationPermission] = useState<"granted" | "denied">("denied")
  const [user, setUser] = useState<{ notification: boolean, id: string }>()

  const showNotification = async () => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        setNotificationPermission(permission)
        if (permission === "granted") {
          subscribeUser()
        }
        else {
          toast.dismiss(`Please, go to the setting and enable notification`)
        }
      })
    }
    else {
      toast.error(`This device does not support notification`)
    }
  }

  const removeNotification = async () => {

  }

  const generateSubscribeEndPoint = async (newRegistration: ServiceWorkerRegistration) => {
    const applicationServerKey = urlBase64ToUint8Array(process.env.NEXT_VAPID_PUBLIC_KEY!)
    const options = {
      applicationServerKey, 
      userVisibleOnly: true // This ensures the delivery of notifications that are visible to the user, eliminating silent notifications. (Mandatory in Chrome and optional in Firefox)
    }
    const subscription = await newRegistration.pushManager.subscribe(options)
  }

  const subscribeUser = async () => {
    if ("serviceWorker" in navigator) {
      try {
        // check if the service worker is already registered
        const registration = await navigator.serviceWorker.getRegistration()
        if (registration) {
          generateSubscribeEndPoint(registration)
        }
        else {
          // Register the service worker
          const newRegistration = await navigator.serviceWorker.register("/sw.js")
          // Subscribe to push notifications
          generateSubscriberEndPoint(newRegistration)
        }
      } catch (error) {
        console.log('error', error)
        toast.error(`An error occured trying to process your subscription. Please, try again`)
      }
    }
  }

  return (
    <div className='hover:scale-110 cursor-pointer transition-all'>
      {(notificationPermission === "granted" && user?.notification) ?
        <BiSolidBellRing onClick={removeNotification} />
        :
        <BiSolidBellOff onClick={showNotification} />
      }
    </div>
  )
}
