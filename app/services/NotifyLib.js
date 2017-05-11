
const NOTIFICATION_DENIED = 'denied'
const NOTIFICATION_GRANTED = 'granted'


// Sends a notification to the browser, asks for the permissions if
// It's not allowed yet.
/**
 * @param {string} msg Message / Body of the notification.
 * @param {string} icon Icon to be shown.
 * @param {string} title Title of the notification.
 * @returns {Notification} The notification that was displayed.
 */
export default function pushNotification (msg, icon, title) {
  if (!('Notification' in window)) {
    console.error('your browser is a piece of shit :(')

    return false
  }

  let notification = null

  if (Notification.permission === NOTIFICATION_DENIED) {
    Notification.requestPermission().then((res) => {
      if (res === NOTIFICATION_GRANTED) {
        notification = _pushNotification(msg, icon, title)
      }
    })
  } else {
    console.log('pushing')
    notification = _pushNotification(msg, icon, title)
  }

  return notification
}

// Sends a push notification.
/**
 * @param {string} body Message / Body of the notification.
 * @param {string} icon Icon to be shown.
 * @param {string} title Title of the notification.
 * @returns {Notification} The notification that was displayed.
 */
const _pushNotification = (body, icon, title) => {
  const opts = {
    body,
    icon
  }

  const notification = new Notification(title, opts)

  console.log('notification', notification)

  return notification
}
