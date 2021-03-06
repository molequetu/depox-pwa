import { defineMessages } from 'react-intl'

const messages = defineMessages({
  app_name: 'Depo',
  sign_in: 'Sign in',
  sign_out: 'Sign out',
  sign_up: 'Sign up',
  email: 'Email',
  username: 'Username',
  password: 'Password',
  about: 'About',
  home: 'Home',
  page_not_found: 'Page not found',
  settings: 'Settings',
  theme: 'Theme',
  default: 'Default',
  red: 'Red',
  green: 'Green',
  language: 'Language',
  en: 'English',
  de: 'German',
  ru: 'Russian',
  menu: 'Menu',
  menu_mini_mode: 'Mini menu',
  offline: 'Offline',
  demos:'Demos',
  dialog_demo:'Demo dialog',
  dialog_title:'Dialog title',
  dialog_action:'YES, Delete',
  dialog_message:`Dialog message. You can put as much text as you want here. 
  Ask a question or show a warning befor deleting something. 
  You can also set the action text to somerhing like "YES, Delete" and run that action by passing a "handleAction" prop. 
  This receives a "handleClose" callback with wich you can close the dialog when your action is done.`,
  toast_demo:'Demo toast',
  filter_demo:'Demo filter',
  list_page_demo:'List Page demo with {count} rows',
  forgot_password:'Forgot password',
  password_reset:'Password reset',
  password_confirm:'Password confirm',
  registration:'Registration',
  product: "Item",
  bin: "Bin",
  import : "Import",
  import_products: "Import items",
  quantity: "Quantity",
  export: "Export",
  export_products: "Export items",
  dashboard: "Dashboard",
  request_queued_msg: `Your request has been queued and will be send when network is available again.
  You will me noticed if your request fails`
})

export default messages
