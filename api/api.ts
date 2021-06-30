import { Base64 } from "js-base64";
import axios, { AxiosResponse } from "axios";
import {
  GetGroupDocumentListResponse,
  GetGroupFormListResponse,
  GetGroupFormResponse,
  GetGroupListResponse,
  GetGroupUserListResponse,
  GetSessionResponse,
  GetUserDocumentListResponse,
  GetUserGroupListResponse,
  PostGroupDocumentListRequest,
  PostGroupFormSubmitRequest,
  PostGroupUserListRequest,
  GetFormAssignResponse,
  PostFormAssignRequest
} from "./dataType";

axios.defaults.withCredentials = true;



const defaultHeaders = (sessionId): { [key: string]: unknown } => ({
  Session: sessionId,
});

export const URL = "https://dev-api.kokasai.com";

/**
 * ログイン認証されているか取得する。
 * [GET /auth](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-auth)
 */
export const getAuth = (sessionId: string): Promise<AxiosResponse<never>> =>
  axios.get(`${URL}/auth`, { headers: defaultHeaders(sessionId) });

/**
 * ログイン認証する。
 * [POST /auth](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-auth)
 * @param id 学籍番号
 * @param pass パスワード
 */
export const postAuth = (
  id?: string,
  pass?: string
): Promise<AxiosResponse> => {
  const headers: {
    [key: string]: string;
  } = {
    Authorization: `Basic ${Base64.encode(`${id}:${pass}`)}`,
  };
  return axios.post(`${URL}/auth`, null, { headers }).then();
};

/**
 * ログイン用のパスワードを発行する。
 * [POST /login](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-login)
 * @param id ログインする学籍番号
 */
export const postLogin = (id?: string): Promise<AxiosResponse<never>> =>{

   return axios.post(`${URL}/login`, { id });

}

/**
 * ログアウトする。
 * [POST /logout](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-logout)
 */
export const postLogout = (sessionId: string): Promise<AxiosResponse<never>> =>
  axios.post(`${URL}/logout`, undefined, { headers: defaultHeaders(sessionId) });

/**
 * ログアウトする。
 * [POST /logout/all](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-logoutall)
 */
export const postLogoutAll = (sessionId): Promise<AxiosResponse<never>> =>
  axios.post(`${URL}/logout/all`, undefined, { headers: defaultHeaders(sessionId) });

/**
 * セッション数を取得する。
 * [GET /session](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-session)
 */
export const getSession = (sessionId): Promise<AxiosResponse<GetSessionResponse>> =>
  axios.get(`${URL}/session`, { headers: defaultHeaders(sessionId) });

/**
 * ドキュメントファイルを取得する。
 * [GET /document](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-documentname)
 * @param documentName 取得するドキュメントの名前
 */
export const getDocument = (
  documentName: string,
  sessionId: string
): Promise<AxiosResponse<Blob>> =>
  axios.get(`${URL}/document/${documentName}`, {
    headers: defaultHeaders(sessionId),
    responseType: "blob",
  });

/**
 * ドキュメントファイルを変更する。
 * [POST /document](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-documentname)
 * @param documentName 変更するドキュメントの名前
 * @param document 変更するドキュメントの内容
 */
export const postDocument = (
  documentName: string,
  document: File,
  sessionId: string
): Promise<AxiosResponse<never>> => {
  const formData = new FormData();
  formData.append("file", document);
  const headers = defaultHeaders(sessionId);
  headers["content-type"] = "multipart/form-data";
  return axios.post(`${URL}/document/${documentName}`, formData, { headers });
};

/**
 * 全グループ一覧を取得する。
 * [GET /group/list](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-grouplist)
 */
export const getGroupList = (sessionId: string): Promise<AxiosResponse<GetGroupListResponse>> =>
  axios.get(`${URL}/group/list`, { headers: defaultHeaders(sessionId) });

/**
 * グループに紐づけられているドキュメントファイル一覧を取得する。
 * [GET /group/document/list](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-groupdocumentlistname)
 * @param groupName 取得するグループの名前
 */
export const getGroupDocumentList = (
  groupName: string,
  sessionId: string,
): Promise<AxiosResponse<GetGroupDocumentListResponse>> =>
  axios.get(`${URL}/group/document/list/${groupName}`, {
    headers: defaultHeaders(sessionId),
  });

/**
 * グループに紐づけられているドキュメントファイル一覧を変更する。
 * [POST /group/document/list](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-groupdocumentlistname)
 * @param groupName 変更するグループの名前
 * @param data 変更後の一覧
 */
export const postGroupDocumentList = (
  groupName: string,
  data: PostGroupDocumentListRequest,
  sessionId: string
): Promise<AxiosResponse<never>> =>
  axios.post(`${URL}/group/document/list/${groupName}`, data, {
    headers: defaultHeaders(sessionId),
  });

/**
 * グループに属するユーザー一覧を取得する。
 * [GET /group/user/list](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-groupuserlistname)
 * @param groupName 取得するグループの名前
 */
export const getGroupUserList = (
  groupName: string,
  sessionId: string,
): Promise<AxiosResponse<GetGroupUserListResponse>> =>
  axios.get(`${URL}/group/user/list/${groupName}`, {
    headers: defaultHeaders(sessionId),
  });

/**
 * グループに属するユーザー一覧を変更する。
 * [POST /group/user/list](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-groupuserlistname)
 * @param groupName 変更するグループの名前
 * @param data 変更後の一覧
 */
export const postGroupUserList = (
  groupName: string,
  data: PostGroupUserListRequest,
  sessionId: string
): Promise<AxiosResponse<never>> =>
  axios.post(`${URL}/group/user/list/${groupName}`, data, {
    headers: defaultHeaders(sessionId),
  });

  /**
 * フォームが割り当てられたグループ一覧を取得する。
 * [GET /form/assign](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-formassignname)
 * @param formName フォーム名
 */
export const getFormAssign = (
  formName: string,
  sessionId: string
): Promise<AxiosResponse<GetFormAssignResponse>> =>
  axios.get(`${URL}/form/assign/${formName}`, { headers: defaultHeaders(sessionId) });

/**
 * フォームが割り当てられたグループ一覧を変更する。
 * [POST /form/assign](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-formassignname)
 * @param formName フォーム名
 * @param data 変更後の一覧
 */
export const postFormAssign = (
  formName: string,
  data: PostFormAssignRequest,
  sessionId: string
): Promise<AxiosResponse<never>> =>
  axios.post(`${URL}/form/assign/${formName}`, data, {
    headers: defaultHeaders(sessionId),
  });


/**
 * ユーザーがアクセスできるドキュメントファイルの一覧を取得する。
 * [GET /user/document/list](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-userdocumentlist)
 */
export const getUserDocumentList = (sessionId: string): Promise<
  AxiosResponse<GetUserDocumentListResponse>
> => axios.get(`${URL}/user/document/list`, { headers: defaultHeaders(sessionId) });

/**
 * ユーザーが属しているグループ一覧を取得する。
 * [GET /user/group/list](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-usergrouplist)
 */
export const getUserGroupList = (sessionId: string): Promise<
  AxiosResponse<GetUserGroupListResponse>
> => axios.get(`${URL}/user/group/list`, { headers: defaultHeaders(sessionId) });

/**
 * 指定グループのフォーム一覧を取得する
 * [GET /group/form/list/](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-groupformlistname)
 */
export const getGroupFormList = (
  groupName: string,
  sessionId: string
): Promise<AxiosResponse<GetGroupFormListResponse>> =>
  axios.get(`${URL}/group/form/list/${groupName}`, {
    headers: defaultHeaders(sessionId),
  });

/**
 * 指定グループのフォームの内容を取得する
 * [GET /group/form/get/](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#get-groupformgetgroupnameformname)
 * @param groupName 取得するグループの名前
 * @param formName 取得するフォームの名前
 */
export const getGroupForm = (
  groupName: string,
  formName: string,
  sessionId: string,
): Promise<AxiosResponse<GetGroupFormResponse>> =>
  axios.get(`${URL}/group/form/get/${groupName}/${formName}`, {
    headers: defaultHeaders(sessionId),
  });

/** 指定グループのフォーム送信を行う
 * [POST /group/form/submit/](https://github.com/gKokasai/api.kokasai.com/blob/master/DOCUMENT.md#post-groupformsubmitgroupnameformname)
 * @param groupName 送信するフォームのグループの名前
 * @param formName 送信するフォームの名前
 * @param data 送信するデータ
 */
export const postGroupFormSubmit = (
  groupName: string,
  formName: string,
  data: PostGroupFormSubmitRequest,
  sessionId: string,

): Promise<AxiosResponse<never>> =>
  axios.post(`${URL}/group/form/submit/${groupName}/${formName}`, data, {
    headers: defaultHeaders(sessionId),
  });
