// use localStorage to store the settings
const API_URL = 'http://localhost:8011/';
const APP_NAME = 'test_web_admin';
const APP_KEY = 'TEST30383178435468066920';
const APP_SECRET = 'a2ec6728-9a05-11e8-8af7-e0d55e8d80e2';
const ACCESS_TOKEN = 'access_token';

const USER_NAME = 'user_name';
const USER_TOKEN = 'user_token';
const IS_AUTO_LOGIN = 'is_auto_login';
const LOGIN_TAB = 'login_tab';

export function getApiUrl() {
  return API_URL;
}

export function getAppName() {
  return APP_NAME;
}

export function getAppKey() {
  return APP_KEY;
}

export function getAppSecret() {
  return APP_SECRET;
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN);
}

export function setAccessToken(value) {
  setValue(ACCESS_TOKEN, value);
}

export function getUserName() {
  return localStorage.getItem(USER_NAME);
}

export function setUserName(value) {
  setValue(USER_NAME, value);
}

export function getUserToken() {
  return localStorage.getItem(USER_TOKEN);
}

export function setUserToken(value) {
  return setValue(USER_TOKEN, value);
}

export function getValue(key) {
  if (!key) {
    return null;
  }
  return localStorage.getItem(key);
}

export function setValue(key, value) {
  if (!key) {
    return;
  }
  if (!value) {
    return localStorage.removeItem(key);
  }
  return localStorage.setItem(key, value);
}

export function isAutoLogin() {
  return localStorage.getItem(IS_AUTO_LOGIN) === '1';
}

export function setAutoLogin(value) {
  return localStorage.setItem(IS_AUTO_LOGIN, value ? '1' : '0');
}

export function getLoginTab() {
  return localStorage.getItem(LOGIN_TAB);
}

export function setLoginTab(value) {
  return localStorage.setItem(LOGIN_TAB, value);
}
